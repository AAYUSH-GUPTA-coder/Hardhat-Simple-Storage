const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
    // Anonymous function
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current Block number: ${blockNumber}`)
    }
)
