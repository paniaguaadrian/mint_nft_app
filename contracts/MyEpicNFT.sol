// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

/*
    Thanks to that inherit contract from ERC721URIStorage,
    We can call other contracts from ours. It's almost like importing functions for us to use.
*/
contract MyEpicNFT is ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

/*
    The NFT standard is known as ERC721 which you can read a bit about here => https://eips.ethereum.org/EIPS/eip-721
    OpenZeppelin essentially implements the NFT standard for us and then lets us write our own logic on top of it to customize it.
    That means we don't need to write boiler plate code.
*/
    constructor() ERC721 ("SquareNFT", "SQUARE"){
        console.log("This is my first NFT contract. Woha!");
    }

    function makeAnEpicNFT() public {
        // Using the _tokenIds to keep track of the NFTs unique identifier.
        uint256 newItemId = _tokenIds.current();

        /*
            When we do _safeMint(msg.sender, newItemId) it's pretty much saying: "mint the NFT with id newItemId to the user with address msg.sender".
            Here, msg.sender is a variable Solidity itself provides that easily gives us access to the public address of the person calling the contract.
        */
        _safeMint(msg.sender, newItemId);

        // Adding the unique identifier and the data associated to the NFT.
        _setTokenURI(newItemId, "https://jsonkeeper.com/b/D9OP");
        console.log("An NFT w/ ID %s has been minted to %s", newItemId, msg.sender);

        _tokenIds.increment();
    }
}
