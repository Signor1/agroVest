// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

// import "forge-std/Test.sol";
// import "../contracts/Farmer.sol";
// import "../contracts/VotingToken.sol";

// contract FarmTest is Test {
//     Farm farmer;
//     VotingToken token;
//     address buyer_add = 0xfd182E53C17BD167ABa87592C5ef6414D25bb9B4;
//     address farm_owner = 0xA771E1625DD4FAa2Ff0a41FA119Eb9644c9A46C8;

//     function setUp() public {
//         token = new VotingToken("TestToken", "TTT", 1000000000);
//         farmer = new Farm(address(token), address(token));

//         token.transfer(address(buyer_add), 1000);

//         vm.startPrank(address(buyer_add));
//         token.approve(address(farmer), 100);
//         vm.stopPrank();
//     }

//     function testRegisterFarm() public {
//         vm.startPrank(address(farm_owner));
//         farmer.registerFarms(
//             "Jibola farms",
//             "test.png",
//             "ikorodu",
//             108343424343,
//             address(farm_owner),
//             "test@gmail.com"
//         );
//         vm.stopPrank();
//     }

//     function testUpdateDetails() public {
//         testRegisterFarm();
//         vm.startPrank(address(farm_owner));
//         farmer.updateDetails(
//             0,
//             "Jibola and sons",
//             "test.png",
//             "ikorodu",
//             108343424343,
//             "test@gmail.com"
//         );
//         vm.stopPrank();
//     }

//     function testAddFarmProducts() public {
//         testRegisterFarm();
//         vm.startPrank(address(farm_owner));
//         farmer.addFarmProduct("Jibola and sons", "test.png", "Lettuce", 10);
//         vm.stopPrank();
//     }

//     function testaddProductToCart() public {
//         testAddFarmProducts();
//         vm.startPrank(address(buyer_add));
//         farmer.addProductToCart(1);
//         vm.stopPrank();
//     }

//     function testViewCart() public {
//         testaddProductToCart();
//         vm.startPrank(address(buyer_add));
//         farmer.getCartProducts(buyer_add);
//         vm.stopPrank();
//     }

//     function testRemoveProductFromCart() public {
//         testaddProductToCart();
//         vm.startPrank(address(buyer_add));
//         farmer.removeProductFromCart(1);
//         vm.stopPrank();
//     }

//     function testUpdateFarmProducts() public {
//         testAddFarmProducts();
//         vm.startPrank(address(farm_owner));
//         farmer.updateFarmProduct(
//             0,
//             "Jibola and sons",
//             "test.png",
//             "Lettuce",
//             10
//         );
//         vm.stopPrank();
//     }

//     function testViewFarmProducts() public {
//         testAddFarmProducts();
//         vm.startPrank(address(buyer_add));
//         farmer.getFarmProducts();
//         vm.stopPrank();
//     }

//     function testGetAllFarmProducts() public {
//         testAddFarmProducts();
//         vm.startPrank(address(buyer_add));
//         farmer.getAllFarmProducts();
//         vm.stopPrank();
//     }

//     function testGetName() public {
//         testRegisterFarm();
//         farmer.getName(address(farm_owner));
//     }

//     function testGetAddress() public {
//         testRegisterFarm();
//         farmer.getAddress("Jibola and sons");
//     }

//     function testPurchaseProduct() public {
//         testaddProductToCart();
//         vm.startPrank(buyer_add);
//         farmer.purchaseProduct(1);
//         vm.stopPrank();
//     }

//     function testFailPurchaseNonExistentProduct() public {
//         testaddProductToCart();
//         vm.startPrank(buyer_add);
//         vm.expectRevert("ProductDoesNotExist");
//         farmer.purchaseProduct(999);
//         vm.stopPrank();
//     }

//     function testFailInsufficientAllowance() public {
//         testaddProductToCart();
//         vm.startPrank(buyer_add);
//         token.approve(address(farmer), 1);
//         vm.expectRevert("InsufficientAllowance");
//         farmer.purchaseProduct(1);
//         vm.stopPrank();
//     }
// }
