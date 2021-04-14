var express = require('express');
var app = express();
var path = require('path');
const Web3 = require('web3')
const fs = require('fs')

app.listen(8081);
console.log("server is up");


//web3.js code
// ganache url
const web3 = new Web3("http://127.0.0.1:7545")
//**NOTE** 'address' value should be changed to the address of the account which sends the transaction */
const address = '0x181f92EeEabB05Dc04F0C2cbD70753f9ddCa576A' 
const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "incrEvent",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "fetchCurrentValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "fetchCurrentValue2121",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "fetchCurrentValue212sd1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "increment",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "reset",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const curContABI= [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_initialSupply",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "standard",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_wholePart",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_decimalPart",
				"type": "uint256"
			}
		],
		"name": "updateCurrency",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
//**NOTE** 'contAddr' value should be changed to the address of the contract */
const erc721ContAddr = '0xc717092d19E7B4D7035809216f57837bb7ED38b3' 
const curContAddr = '0xd9145CCE52D386f254917e481eB44e9943F39138' 
const contract = new web3.eth.Contract(abi, erc721ContAddr)
const curContract = new web3.eth.Contract(curContABI, curContAddr)

async function balanceOf(_owner) {
		var val=0;
		await contract.methods.balanceOf(_owner).call(  
				(err, result) => {
				val = result;
				}
			)
		return val;
} 

async function transferTo(_to,tokenId) {
	var resetVal = await contract.methods.transferTo(_to,tokenId).send({from:address});
} 

async function transferTo(_to,tokenId) {
	var resetVal = await contract.methods.transferTo(_to,tokenId).send({from:address});
} 

async function approve(_spender,_value) {
	var resetVal = await contract.methods.approve(_spender,_value).send({from:address});
} 

async function transferFrom(_from,_to,tokenId) {
	var resetVal = await contract.methods.transferFrom(_from,_to,tokenId).send({from:address});
} 

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/balanceOf', function(req, res){
	var addr = req.query.addr
	var _val = balanceOf(addr);
	_val.then(counterVal => {
		console.log(counterVal); 
		res.end(counterVal)
	  });
    
 });

 app.get('/transferTo', function(req, res){
	try{
			var toAddr = req.query.to 
			var id= req.query.id
			transferTo(addr,id);
			res.end("transfer done successfully.");
	} catch(err) {
		res.end(err);
	}
    
 });

 app.get('/approve', function(req, res){
	try{
			var _spender = req.query.addr;
			var _value = req.query.val;
			approve(addr);
			res.end("Approved successfully.");
	} catch(err) {
		res.end(err);
	}
 });

 app.get('/transferFrom', function(req, res){
	try{
			var _from = req.query.from;
			var _to = req.query.to;
			var tokenId = req.query.id;

			transferFrom(_from,_to,tokenId);
			res.end("Approved successfully.");
	} catch(err) {
		res.end(err);
	}
 });

 app.get('/updateUSDValue', function(req, res){
	try{
			var usdValue = req.query.usd;
			var usdValueSplit = usdValue.toString().split(".");
			var resetVal = await curContract.methods.updateCurrency(usdValueSplit[0],usdValueSplit[1]).send({from:address});
			res.end("Dollat value updated successfully successfully.");
	} catch(err) {
		res.end(err);
	}
 });