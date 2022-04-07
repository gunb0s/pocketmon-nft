const router = require("express").Router();
const axios = require("axios");
const caver = require("../Config");
const jsonInterface = require("../PFT.json");
require("dotenv").config();

router.get("/", async (req, res) => {
  const options = {
    headers: {
      Authorization: process.env.AUTHORIZATION,
      "x-chain-id": "1001",
    },
  };
  const inf = await axios.get(
    "https://node-api.klaytnapi.com/v1/metadata/nft/0xB9578004E0626dbbB51517A1B4FBc750ca66c0f2",
    options
  );
  res.send(inf.data);
});

module.exports = router;
