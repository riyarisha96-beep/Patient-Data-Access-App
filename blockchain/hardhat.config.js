require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const networks = {
  hardhat: {},
  localhost: { url: "http://127.0.0.1:8545" },
};

if (process.env.SEPOLIA_RPC && process.env.DEPLOYER_PRIVATE_KEY) {
  networks.sepolia = {
    url: process.env.SEPOLIA_RPC,
    accounts: [process.env.DEPLOYER_PRIVATE_KEY],
  };
}

module.exports = { solidity: "0.8.24", networks };
