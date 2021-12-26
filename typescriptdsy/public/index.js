"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
    static calculateBlockHash(index, previousHash, timestamp, data) {
        return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
    }
    static validateStructure(aBlock) {
        return (typeof aBlock.index === "number" &&
            typeof aBlock.hash === "string" &&
            typeof aBlock.previousHash === "string" &&
            typeof aBlock.data === "string" &&
            typeof aBlock.timestamp === "number");
    }
}
const genesisBlock = new Block(0, "hash", "previousHash", "data", 20211226);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTitmeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTitmeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    addBlock(newBlock);
    return newBlock;
};
const getHashforblock = (aBlock) => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);
const isBlockValid = (candidateBlock, previousBlock) => {
    if (Block.validateStructure(candidateBlock)) {
        return true;
    }
    else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    }
    else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    }
    else if (getHashforblock(candidateBlock) !== candidateBlock.hash) {
        return false;
    }
    else {
        return true;
    }
};
const addBlock = (candidateBlock) => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
};
console.log("2=============================================================================");
createNewBlock("second-block");
createNewBlock("third-block");
console.log(blockchain);
//# sourceMappingURL=index.js.map