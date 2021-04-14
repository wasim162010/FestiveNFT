// migrations/2_deploy_box.js
const currencyToken = artifacts.require('CurrencyToken');
 
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (deployer) {
  await deployProxy(currencyToken, { deployer, initializer: 'initializer' });
};