require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    nibiru: {
      url: "https://evm-rpc.devnet-3.nibiru.fi", // Replace with the actual RPC URL of Nibiru
      accounts: {
        mnemonic:"guard cream sadness conduct invite crumble clock pudding hole grit liar hotel maid produce squeeze return argue turtle know drive eight casino maze host" , // Use mnemonic from .env file
      },
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};