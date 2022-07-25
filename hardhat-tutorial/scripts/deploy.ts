import { ethers } from "hardhat";

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = ethers.utils.parseEther("1");

  // const Lock = await ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // await lock.deployed();

  // console.log("Lock with 1 ETH deployed to:", lock.address);

   /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so whitelistContract here is a factory for instances of our Whitelist contract.
    */
    const whitelistContract = await ethers.getContractFactory("Whitelist");

    // here we deploy the contract
    const deployedWhitelistContract = await whitelistContract.deploy(10);
    // 10 is the Maximum number of whitelisted addresses allowed

    // Wait for it to finish deploying
    await deployedWhitelistContract.deployed();

    // print the address of the deployed contract
    console.log(
      "Whitelist Contract Address:",
      deployedWhitelistContract.address
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
