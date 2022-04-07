const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

router.get("/:id", async (req, res) => {
  const options = {
    headers: {
      Authorization: process.env.AUTHORIZATION,
      "x-chain-id": "1001",
    },
  };
  let id = parseInt(req.params.id);
  let hexId = id.toString(16);
  try {
    const inf = await axios.get(
      `https://node-api.klaytnapi.com/v1/metadata/nft/0xB9578004E0626dbbB51517A1B4FBc750ca66c0f2/0x${hexId}`,
      options
    );
    res.send(inf.data);
  } catch (e) {
    res.send({ message: "fail" });
  }
});

module.exports = router;
