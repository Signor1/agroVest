//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// import "../contracts/Farmer.sol";
// import "./DeployHelpers.s.sol";

// contract DeployFarmer is Script {
//     error InvalidPrivateKey(string);

//     function run() external {
//         uint256 deployerPrivateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");

//         vm.startBroadcast(deployerPrivateKey);

//         Farm farm = new Farm(address(token));
//         console.logString(
//             string.concat(
//                 "YourContract deployed at: ",
//                 vm.toString(address(farm))
//             )
//         );

//         vm.stopBroadcast();

//         writeAddressesToFile(address(farm), "farm contract Address");
//     }

//     // function test() public {}

//     function writeAddressesToFile(address addr, string memory text) public {
//         string memory filename = "./deployed_contracts.txt";

//         vm.writeLine(
//             filename,
//             "-------------------------------------------------"
//         );
//         vm.writeLine(filename, text);
//         vm.writeLine(filename, vm.toString(addr));
//         vm.writeLine(
//             filename,
//             "-------------------------------------------------"
//         );
//     }
// }

import "../contracts/Farmer.sol";
import "./DeployHelpers.s.sol";

contract DeployFarmer is ScaffoldETHDeploy {
    error InvalidPrivateKey(string);

    function run() external {
        uint256 deployerPrivateKey = setupLocalhostEnv();
        if (deployerPrivateKey == 0) {
            revert InvalidPrivateKey(
                "You don't have a deployer account. Make sure you have set DEPLOYER_PRIVATE_KEY in .env or use `yarn generate` to generate a new random account"
            );
        }
        vm.startBroadcast(deployerPrivateKey);

        Farm farm = new Farm(0xfd182E53C17BD167ABa87592C5ef6414D25bb9B4);
        console.logString(
            string.concat(
                "Farm Contract deployed at: ",
                vm.toString(address(farm))
            )
        );

        vm.stopBroadcast();

        /**
         * This function generates the file containing the contracts Abi definitions.
         * These definitions are used to derive the types needed in the custom scaffold-eth hooks, for example.
         * This function should be called last.
         */
        exportDeployments();
    }

    function test() public {}
}
