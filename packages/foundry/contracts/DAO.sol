// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

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
    }
}
