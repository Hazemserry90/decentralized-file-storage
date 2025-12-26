const HDWalletProvider = require('@truffle/hdwallet-provider');

// Your 12-word Mnemonic
const mnemonic = "put your secret words here";

module.exports = {
  networks: {
    // 1. Standard Connection (Core Project)
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" 
    },
    
    // 2. Bonus Connection (HD Wallet)
    bonus_network: {
      provider: () => new HDWalletProvider(mnemonic, `http://127.0.0.1:7545`),
      network_id: "*",       
    },
  },

  compilers: {
    solc: {
      version: "0.8.19",      
    }
  }
};