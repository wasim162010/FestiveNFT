This project contains a smart contracts 'CurrencyToken.sol'  and 'FestiveNFT.sol' which contains methods :

1) CurrencyToken.sol :is a simple ERC20 smart contract to create a token 'CT'.
2) FestiveNFT.sol : is a simple ERC721 smart contract , created by using the OpenZeppelin ERC721, to create a NFT token 'SMF'.


The poroject uses OpenZeppelin Truffle Upgrades to upgrade the contract.

Please view '4_upgrade_contract.js' about to upgrade the contract.

To deploy contract :
npx truffle migrate

To deploy contract post upgrade : 
Suppose your upgraded contract is 'CurrecyTokenV2'and you want to upgrade from CurrecyToken,createa a .js file under 'migrations' folder[See '4_upgrade_contract.js' under 'migrations' folder for the reference] , and then execute  'npx truffle migrate'.

To create API, express js has been used.

APIs:
/transferTo : To transfer token to other.
/approve :  To call fetchCurrentValue() of smart contract using web3.
/transferFrom: To call reset() of smart contract using web3.
/updateUSDValue : to update the current USD value.
/balanceOf : to fetch the current balance.
/ : to display the current home page 

Web3.js library:
It is used to call the smart contract function.

Tools/framework/libraries used to develop DApp :
Truffle framework
ganache
web3.js
express.js
OpenZeppelin Truffle Upgrades [npm i --save-dev @openzeppelin/truffle-upgrades]


How the environment was setup while initiating the development:
under the project's root folder
npm init -y
npm i --save-dev truffle
npx truffle init
npm i --save-dev @openzeppelin/truffle-upgrades
npm install --save express
npm install --save web3
