const Migrations = artifacts.require("Migrations");
const PFT = artifacts.require("PFT.sol");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(PFT);
};
