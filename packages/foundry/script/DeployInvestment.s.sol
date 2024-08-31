//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../contracts/Invevstment.sol";
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

        Investment invest = new Investment(
            0xc6034ef41b3D5Dca9483F5A1EA29EA4c18C542dB,
            0x3784FCd74C49Ed086Bafd1c77dd9347edc719d7b
        );
        console.logString(
            string.concat(
                "DAO Contract deployed at: ",
                vm.toString(address(invest))
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
