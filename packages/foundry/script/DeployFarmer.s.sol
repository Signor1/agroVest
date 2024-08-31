//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../contracts/Farmer.sol";
import "./DeployHelpers.s.sol";

contract DeployScript is ScaffoldETHDeploy {
    error InvalidPrivateKey(string);

    function run() external {
        uint256 deployerPrivateKey = setupLocalhostEnv();
        if (deployerPrivateKey == 0) {
            revert InvalidPrivateKey(
                "You don't have a deployer account. Make sure you have set DEPLOYER_PRIVATE_KEY in .env or use `yarn generate` to generate a new random account"
            );
        }
        vm.startBroadcast(deployerPrivateKey);

        Farm farm = new Farm(
            0x3784FCd74C49Ed086Bafd1c77dd9347edc719d7b,
            0x4E00f80587C04B079A6a2146eCaf37CdD67197C0
        );
        console.logString(
            string.concat("Farm deployed at: ", vm.toString(address(farm)))
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
