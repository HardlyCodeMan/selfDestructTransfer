const selfDestructTransfer = artifacts.require("selfDestructTransfer");

module.exports = function (deployer) {
  deployer.deploy(selfDestructTransfer);
};
