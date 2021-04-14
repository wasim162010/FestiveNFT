
const currencyToken = artifacts.require('CurrencyToken');
const currencyTokenV2 = artifacts.require('CurrencyTokenV2');

const { prepareUpgrade } = require('@openzeppelin/truffle-upgrades');
 
 
module.exports = async function (deployer) {
  const inst = await currencyToken.deployed();
  await prepareUpgrade(inst.address, currencyTokenV2, { deployer });
};

