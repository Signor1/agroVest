//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// import "../contracts/VotingToken.sol";
// import "./DeployHelpers.s.sol";

// contract DeployVoteToken is ScaffoldETHDeploy {
//     error InvalidPrivateKey(string);

//     function run() external {
//         uint256 deployerPrivateKey = setupLocalhostEnv();
//         if (deployerPrivateKey == 0) {
//             revert InvalidPrivateKey(
//                 "You don't have a deployer account. Make sure you have set DEPLOYER_PRIVATE_KEY in .env or use `yarn generate` to generate a new random account"
//             );
//         }
//         vm.startBroadcast(deployerPrivateKey);

//         VotingToken token = new VotingToken("VoteToken", "VTT", 100000000e18);
//         console.logString(
//             string.concat(
//                 "VoteToken deployed at: ",
//                 vm.toString(address(token))
//             )
//         );

//         vm.stopBroadcast();

//         /**
//          * This function generates the file containing the contracts Abi definitions.
//          * These definitions are used to derive the types needed in the custom scaffold-eth hooks, for example.
//          * This function should be called last.
//          */
//         exportDeployments();
//     }

//     function test() public {}
// }
