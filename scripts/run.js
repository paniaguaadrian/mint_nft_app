/*
To run a contract we need to:
    - Compile it.
    - Deploy it to our local blockchain.
    - Once it's there, that console.log will run.

This script will do this 3 things for us
*/

// * VSCode autoimport ethers, we don't need to do this

const { hexZeroPad } = require('@ethersproject/bytes')

// * First main function
// const main = async () => {
//     // This will actually compile our contract and generate the necessary files we need to work with our contract under the artifacts directory.
//     const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT')

//     // What's happening here is Hardhat will create a local Ethereum network for us, but just for this contract. Then, after the script completes it'll destroy that local network. So, every time you run the contract, it'll be a fresh blockchain. Whats the point? It's kinda like refreshing your local server every time so you always start from a clean slate which makes it easy to debug errors.
//     const nftContract = await nftContractFactory.deploy()

//     // We'll wait until our contract is officially mined and deployed to our local blockchain! That's right, hardhat actually creates faker "miners" on your machine to try its best to imitate the actual blockchain.
//     //Our constructor runs when we actually are fully deployed!
//     await nftContract.deployed()

//     // Finally, once it's deployed nftContract.address will basically give us the address of the deployed contract.
//     console.log('Contract deployed to: ', nftContract.address) // result of address => 0x5FbDB2315678afecb367f032d93F642f64180aa3
// }

const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT')
    const nftContract = await nftContractFactory.deploy()
    await nftContract.deployed()
    console.log('Contract deployed to: ', nftContract.address)

    // Call the function on our smart contract
    let txn = await nftContract.makeAnEpicNFT()
    // Wate for it to be minted
    await txn.wait()

    // Mint another NFT for fun
    txn = await nftContract.makeAnEpicNFT()
    await txn.wait()
}

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

runMain()
