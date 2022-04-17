const hre = require("hardhat");

async function main() {

  const RoboPunksNFT = await hre.ethers.getContractFactory("RoboPunksNFT");
  const roboPunksNFT = await RoboPunksNFT.deploy();

  await roboPunksNFT.deployed();

  console.log('RobotPunksNFT deployed to:', roboPunksNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    
    process.exit(1);
  });
