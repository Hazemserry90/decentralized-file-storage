// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FileStorage {
    // A string variable to hold the IPFS CID (the file address)
    string public ipfsHash;

    // A function to save a new hash
    function setHash(string memory _hash) public {
        ipfsHash = _hash;
    }

    // A function to read the hash
    function getHash() public view returns (string memory) {
        return ipfsHash;
    }
}