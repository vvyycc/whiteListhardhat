import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "solidity-coverage";

require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });
const INFURA_API_KEY_URL = process.env.INFURA_API_KEY_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: INFURA_API_KEY_URL,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
    },
  },
};

export default config;
