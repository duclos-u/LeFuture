require("@nomiclabs/hardhat-waffle");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const wallet_private_key = "dabecf4f1b83070ff5994d9db6ccd400f0b6437a2a2235716c576af305204a17";

module.exports = {
  solidity: "0.8.0",
  networks: {
    avalancheTest: {
      url: `https://api.avax-test.network/ext/bc/C/rpc`,
      accounts: [`${wallet_private_key}`]
    }
  }
};
