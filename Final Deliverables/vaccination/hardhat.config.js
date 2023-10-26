require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      chainId: 5777,
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        `0x87663902f4c3803fadf0d64f15c92b648ee228ff36964d5f0d8be9e68dd55bfa`,
      ],
    }

  },
  paths: {
    artifacts: "./src/artifacts",
  }
};