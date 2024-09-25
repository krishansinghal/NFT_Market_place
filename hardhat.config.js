require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "ganache",
  networks: {
    hardhat: {},
    ganache: {
      url: 'http://127.0.0.1:7545',
      chainId: 1337,
      from: `0xA51F81701Cf0fb6a0F237a628AE3C0B690cF5b7a`,
      gas: 3000000
    },

    //POLYGON_AMOY_RPC_URL=https://rpc-amoy.polygon.technology/
    // amoy: {
    //   url: `${process.env.POLYGON_AMOY_RPC_URL}`,
    //   accounts: ['YOUR-PRIVATE-KEY']
    // },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};