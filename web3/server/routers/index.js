const express = require("express");
const router = express.Router();
const tokenRouter = require("./token");
const contractRotuer = require("./contract");

router.use("/token", tokenRouter);
router.use("/contract", contractRotuer);

module.exports = router;
