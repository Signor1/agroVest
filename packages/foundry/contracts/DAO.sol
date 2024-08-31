// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

main
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VotingToken is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
    }

    mapping(address => uint256) lockedTokenBalance;

    event TokenLocked(uint256 _amount, address owner);
    event TokenUnlocked(uint256 _amount, address owner);

    function lockTokens(uint256 _amount) external {
        require(_amount >= balanceOf(msg.sender));
        require(_amount <= 2, "Amount must be less than 2 tokens");
        transferFrom(msg.sender, address(this), _amount);
        lockedTokenBalance[msg.sender] = _amount;

        emit TokenLocked(_amount, msg.sender);
    }

    function unlockTokens(uint256 _amount) external {
        require(lockedTokenBalance[msg.sender] >= _amount);
        delete lockedTokenBalance[msg.sender];
        transfer(msg.sender, _amount);

        emit TokenUnlocked(_amount, msg.sender);
    }

    function getTokenBalance() external view returns (uint256) {
        return lockedTokenBalance[msg.sender];
import "../Interfaces/IVotingToken.sol";
import "../Interfaces/IInvestment.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DAO is Ownable {
    IVotingToken public votingTokenCA;

    constructor(address _votingToken) Ownable(msg.sender) {
        votingTokenCA = IVotingToken(_votingToken);
    }

    uint256 proposalCounter;
    uint256 public disputeCounter;
    uint256 public challengeCounter;

    struct ProposalData {
        uint256 proposalId;
        string title;
        string description;
        uint256 createdAt;
        uint256 executionTime;
        address proposer;
        bool executed;
    }

    struct ChallengeData {
        uint256 proposalId;
        string description;
        bool resolved;
        address challenger;
    }

    struct Vote {
        address voter;
        uint256[] rankings;
    }

    struct DisputeData {
        uint256 challengeId;
        address arbitrator;
        bool resolved;
        bool ruling; // true if challenge is upheld, false otherwise
    }

    event DisputeInitiated(
        uint256 indexed disputeInitiatedId,
        uint256 challengeId,
        address indexed arbitrator
    );
    event DisputeResolved(uint256 indexed disputeResolvedId, bool ruling);

    ProposalData[] public proposals;

    // Mapping of Proposal ID to Proposal Data.
    mapping(uint256 => ProposalData) IdToProposal;

    mapping(uint256 => mapping(address => uint256)) public votes; // proposalId => (voter => votingPower)
    mapping(uint256 => uint256) public totalVotes; // proposalId => total votes

    mapping(uint256 => bool) public proposalTallyComplete; // proposalId => tally status

    mapping(address => address) public delegates;

    mapping(uint256 => DisputeData) public disputes;
    mapping(uint256 => ChallengeData) public challenges;

    // Mapping of investment ID to address
    mapping(uint256 => address) public investments;

    event NewProposal(uint256 userId, string Title, address Proposer);

    event ProposalTimeUpdated(uint256 ProposalId, uint256 NewTime);

    event ProposalExecuted(
        uint256 ProposalId,
        uint256 FarmId,
        address Proposer
    );

    event Voted(
        address indexed voter,
        uint256 indexed proposalId,
        uint256 votingPower
    );

    event VotesTallied(
        uint256 indexed proposalIdTallyVote,
        uint256 totalVotingPower
    );

    event Delegated(
        address indexed delegatorAddress,
        address indexed delegatee
    );
    event Undelegated(address indexed unDelegator);
    event ChallengeResolved(uint256 indexed challengeIdResolved, bool valid);

    event ChallengeCreated(
        uint256 indexed challengeIdCreated,
        uint256 proposalId,
        address indexed challenger
    );

    event NewInvestmentAddedToList(uint256 NewIdAdded, address Address);

    // Proposal and Voting Section

    function proposal(
        string memory _title,
        string memory _description,
        uint256 _executionTime
    ) external {
        proposals.push(
            ProposalData({
                proposalId: proposalCounter,
                title: _title,
                description: _description,
                createdAt: block.timestamp,
                executionTime: _executionTime,
                proposer: msg.sender,
                executed: false
            })
        );

        IdToProposal[proposalCounter] = ProposalData({
            proposalId: proposalCounter,
            title: _title,
            description: _description,
            createdAt: block.timestamp,
            executionTime: _executionTime,
            proposer: msg.sender,
            executed: false
        });

        proposalCounter++;

        emit NewProposal(proposalCounter, _title, msg.sender);
    }

    function addInvestment(
        uint256 _investmentId,
        address _investmentAddress
    ) external {
        investments[_investmentId] = _investmentAddress;

        emit NewInvestmentAddedToList(_investmentId, _investmentAddress);
    }

    function updateProposalExecutionTime(uint256 _id, uint256 _delay) internal {
        IdToProposal[_id].executionTime += _delay;
        proposals[_id].executionTime += _delay;

        emit ProposalTimeUpdated(_id, _delay);
    }

    function getSingleProposal(
        uint256 _id
    ) public view returns (ProposalData memory) {
        return IdToProposal[_id];
    }

    function getAllProposals() external view returns (ProposalData[] memory) {
        return proposals;
    }

    function getIndexedArrayProposal(
        uint256 _index
    ) external view returns (ProposalData memory) {
        return proposals[_index];
    }

    function calculateVotingPower() internal view returns (uint256) {
        uint256 lockedTokens = votingTokenCA.getTokenBalance();
        require(lockedTokens > 0);

        uint256 z = (lockedTokens + 1) / 2;
        uint256 y = lockedTokens;

        while (z < y) {
            y = z;
            z = (lockedTokens / z + z) / 2;
        }

        return y;
    }

    function voteWithQuadraticPower(uint256 proposalId) external {
        uint256 lockedTokens = votingTokenCA.getTokenBalance();
        require(lockedTokens > 0, "No tokens locked");

        uint256 votingPower = calculateVotingPower();
        votes[proposalId][msg.sender] += votingPower;
        totalVotes[proposalId] += votingPower;

        // Emit an event for the vote
        emit Voted(msg.sender, proposalId, votingPower);
    }

    function tallyVotes(uint256 proposalId) internal {
        require(!proposalTallyComplete[proposalId], "Votes already tallied");

        uint256 totalVotingPower = totalVotes[proposalId];

        proposalTallyComplete[proposalId] = true;

        emit VotesTallied(proposalId, totalVotingPower);
    }

    function increaseTimelock(uint256 _proposalId, uint256 _delay) external {
        updateProposalExecutionTime(_proposalId, _delay);
    }

    function executeProposal(
        uint256 _proposalId,
        uint256 _farmId,
        string memory _name,
        string memory _about,
        uint256 _minAmount,
        uint256 _endDate
    ) external {
        uint256 lockTime = getSingleProposal(_proposalId).executionTime;

        require(
            proposalTallyComplete[_proposalId] == true,
            "Votes not tallied yet"
        );

        require(block.timestamp >= lockTime);

        address newInvestment = investments[_proposalId];
        IInvestment(newInvestment).createInvestment(
            _farmId,
            _name,
            _about,
            _minAmount,
            _endDate
        );

        emit ProposalExecuted(_proposalId, _farmId, msg.sender);
    }

    // Delegate Section

    function delegate(address delegatee) external {
        require(delegatee != msg.sender, "Cannot delegate to self");
        require(delegates[msg.sender] == address(0), "Already delegated");

        delegates[msg.sender] = delegatee;
        emit Delegated(msg.sender, delegatee);
    }

    function undelegate() external {
        require(delegates[msg.sender] != address(0), "No delegation found");

        delete delegates[msg.sender];
        emit Undelegated(msg.sender);
    }

    function getDelegate(address delegator) external view returns (address) {
        return delegates[delegator];
    }

    // Challange Section

    function createChallenge(
        uint256 proposalId,
        string memory description
    ) external {
        require(bytes(description).length > 0, "Description cannot be empty");

        challenges[challengeCounter] = ChallengeData({
            proposalId: proposalId,
            description: description,
            resolved: false,
            challenger: msg.sender
        });

        emit ChallengeCreated(challengeCounter, proposalId, msg.sender);

        challengeCounter++;
    }

    function resolveChallenge(uint256 challengeId, bool valid) external {
        require(
            !challenges[challengeId].resolved,
            "Challenge already resolved"
        );

        challenges[challengeId].resolved = true;

        // Implement logic to invalidate the proposal if the challenge is valid

        emit ChallengeResolved(challengeId, valid);
    }

    function getChallenge(
        uint256 challengeId
    ) external view returns (ChallengeData memory) {
        return challenges[challengeId];
    }

    // Dispute Section

    function initiateDispute(uint256 challengeId, address arbitrator) external {
        require(arbitrator != address(0), "Invalid arbitrator address");

        disputes[disputeCounter] = DisputeData({
            challengeId: challengeId,
            arbitrator: arbitrator,
            resolved: false,
            ruling: false
        });

        emit DisputeInitiated(disputeCounter, challengeId, arbitrator);

        disputeCounter++;
    }

    function resolveDispute(uint256 disputeId, bool ruling) external {
        DisputeData storage dispute = disputes[disputeId];
        require(
            msg.sender == dispute.arbitrator,
            "Only the arbitrator can resolve the dispute"
        );
        require(!dispute.resolved, "Dispute already resolved");

        dispute.resolved = true;
        dispute.ruling = ruling;

        // Implement logic to apply the ruling to the associated challenge

        emit DisputeResolved(disputeId, ruling);
    }

    function getDispute(
        uint256 disputeId
    ) external view returns (DisputeData memory) {
        return disputes[disputeId];
 development
    }
}
