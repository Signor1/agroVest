// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "forge-std/Test.sol";
import "../contracts/FarmEscrow.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Mock is ERC20 {
    constructor() ERC20("MockToken", "MTK") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}

contract FarmEscrowTest is Test {
    FarmEscrow public escrowContract;
    ERC20Mock public token;
    address public owner;
    address public buyer;
    address public farmer;
    uint256 public orderId = 1;
    uint256 public escrowAmount = 100 * 10 ** 18;

    function setUp() public {
        token = new ERC20Mock();
        owner = address(this);
        buyer = address(0xBEEF);
        farmer = address(0x44444);

        escrowContract = new FarmEscrow(address(token));

        // Give buyer some tokens and approve escrow contract
        token.mint(buyer, escrowAmount);
        vm.prank(buyer);
        token.approve(address(escrowContract), escrowAmount);
    }

    function testCreateEscrow() public {
        vm.prank(buyer);
        escrowContract.createEscrow(farmer, orderId, escrowAmount);

        // (
        //     address escrowBuyer,
        //     address escrowFarmer,
        //     uint256 amount,
        //     FarmEscrow.EscrowStatus status,
        //     uint256 storedOrderId
        // ) = escrowContract.getEscrowDetails(0);

        // assertEq(escrowBuyer, buyer);
        // assertEq(escrowFarmer, farmer);
        // assertEq(amount, escrowAmount);
        // assertEq(uint(status), uint(FarmEscrow.EscrowStatus.AWAITING_DELIVERY));
        // assertEq(storedOrderId, orderId);
    }

    // function testApproveDelivery() public {
    //     // Create Escrow first
    //     vm.prank(buyer);
    //     escrowContract.createEscrow(farmer, orderId, escrowAmount);

    //     // Approve delivery by the buyer
    //     vm.prank(buyer);
    //     escrowContract.approveDelivery(0);

    //     (, , , FarmEscrow.EscrowStatus status, ) = escrowContract
    //         .getEscrowDetails(0);
    //     assertEq(uint(status), uint(FarmEscrow.EscrowStatus.COMPLETE));

    //     assertEq(token.balanceOf(farmer), escrowAmount);
    // }

    // function testRaiseDispute() public {
    //     // Create Escrow first
    //     vm.prank(buyer);
    //     escrowContract.createEscrow(farmer, orderId, escrowAmount);

    //     // Raise dispute by the buyer
    //     vm.prank(buyer);
    //     escrowContract.raiseDispute(0);

    //     (, , , FarmEscrow.EscrowStatus status, ) = escrowContract
    //         .getEscrowDetails(0);
    //     assertEq(uint(status), uint(FarmEscrow.EscrowStatus.DISPUTE));
    // }

    // function testResolveDisputeBuyerWins() public {
    //     // Create Escrow first
    //     vm.prank(buyer);
    //     escrowContract.createEscrow(farmer, orderId, escrowAmount);

    //     // Raise dispute by the buyer
    //     vm.prank(buyer);
    //     escrowContract.raiseDispute(0);

    //     // Resolve dispute in favor of the buyer
    //     escrowContract.resolveDispute(0, buyer);

    //     (, , , FarmEscrow.EscrowStatus status, ) = escrowContract
    //         .getEscrowDetails(0);
    //     assertEq(uint(status), uint(FarmEscrow.EscrowStatus.COMPLETE));

    //     assertEq(token.balanceOf(buyer), escrowAmount);
    // }

    // function testResolveDisputeFarmerWins() public {
    //     // Create Escrow first
    //     vm.prank(buyer);
    //     escrowContract.createEscrow(farmer, orderId, escrowAmount);

    //     // Raise dispute by the buyer
    //     vm.prank(buyer);
    //     escrowContract.raiseDispute(0);

    //     // Resolve dispute in favor of the farmer
    //     escrowContract.resolveDispute(0, farmer);

    //     (, , , FarmEscrow.EscrowStatus status, ) = escrowContract
    //         .getEscrowDetails(0);
    //     assertEq(uint(status), uint(FarmEscrow.EscrowStatus.COMPLETE));

    //     assertEq(token.balanceOf(farmer), escrowAmount);
    // }
}
