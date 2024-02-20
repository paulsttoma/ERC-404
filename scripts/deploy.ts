import { ethers } from "hardhat";

async function main() {
  const StorageFactory = await ethers.getContractFactory("ERC404Example");
  const Storage = await StorageFactory.deploy(
    "P and P",
    "PAP",
    50,
    500,
    "0xb2ecCc3472D9E11592Aa61457cD7eFBf695a793E",
    "0xb2ecCc3472D9E11592Aa61457cD7eFBf695a793E"
  );

  // Wait for the contract deployment to be mined

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
