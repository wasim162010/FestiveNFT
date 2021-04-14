// migrations/2_deploy_box.js
const festiveNFT = artifacts.require('FestiveNFT');
 
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (deployer) {
  await deployProxy(festiveNFT, { deployer, initializer: 'initializer' });
};