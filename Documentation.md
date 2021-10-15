## Set up development tooling

-   npm init -y
-   npm install --save-dev hardhat
-   execute npx hardhat and create a basic sample project
    npx hardhat creates a contracts, scrips and test folders. And a hardhat-config.js file.
    packages that must be installed: npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
-   npm install @openzeppelin/contracts
    OpenZeppelin is another library that's used a lot to develop secure smart contracts.

## Deploy and run a contract locally

-   npx hardhat run scripts/run.js (or the file that we want to run)

## Deploy and run a contract on the rinkeby test net and show the NFT on the Open Sea test net

-   npx hardhat run scripts/deploy.js --network rinkeby
-   contract address => 0xE8Df8d7B684eA40eaf75B3971538E18742c79c3A
-   Transactiont track => https://rinkeby.etherscan.io/address/0xE8Df8d7B684eA40eaf75B3971538E18742c79c3A
-   Open Sea test net NFT's => https://testnets.opensea.io/collection/squarenft-hjkggkovxl
