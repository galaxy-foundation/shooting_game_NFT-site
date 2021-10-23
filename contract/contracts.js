const petSwapRouterContract = {
    kovan : "0x8D5065Aea4a653e8235f1F24B31Fc6a7D8E3B31d",
    abi : [
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_factory",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "_WETH",
					"type": "address"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [],
			"name": "WETH",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "tokenA",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "tokenB",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amountADesired",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountBDesired",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountAMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountBMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_vResearve0",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_vResearve1",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				}
			],
			"name": "addLiquidity",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountA",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountB",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "token",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amountTokenDesired",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountTokenMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountETHMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_vResearve0",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_vResearve1",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "addLiquidityETH",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountToken",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountETH",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				}
			],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "factory",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveOut",
					"type": "uint256"
				}
			],
			"name": "getAmountIn",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				}
			],
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveOut",
					"type": "uint256"
				}
			],
			"name": "getAmountOut",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				}
			],
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				}
			],
			"name": "getAmountsIn",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				}
			],
			"name": "getAmountsOut",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountA",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveA",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveB",
					"type": "uint256"
				}
			],
			"name": "quote",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountB",
					"type": "uint256"
				}
			],
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "tokenA",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "tokenB",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountAMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountBMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "removeLiquidity",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountA",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountB",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "token",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountTokenMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountETHMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "removeLiquidityETH",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountToken",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountETH",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapETHForExactTokens",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOutMin",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapExactETHForTokens",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountOutMin",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapExactTokensForETH",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountOutMin",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapExactTokensForTokens",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountInMax",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapTokensForExactETH",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountInMax",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapTokensForExactTokens",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"stateMutability": "payable",
			"type": "receive"
		}
	]
}

const petSwapFactoryContract = {
    kovan : "0x71593798594cCa4D272316d8C97687D0A99A2B2d",
    abi : [
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_feeToSetter",
					"type": "address"
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
					"name": "token0",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "token1",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "pair",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "PairCreated",
			"type": "event"
		},
		{
			"constant": true,
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "allPairs",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "allPairsLength",
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
					"name": "tokenA",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "tokenB",
					"type": "address"
				}
			],
			"name": "createPair",
			"outputs": [
				{
					"internalType": "address",
					"name": "pair",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "feeTo",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "feeToSetter",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
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
			"name": "getPair",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
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
					"name": "_feeTo",
					"type": "address"
				}
			],
			"name": "setFeeTo",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "_feeToSetter",
					"type": "address"
				}
			],
			"name": "setFeeToSetter",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
}

const ERC20 = {
    kovan : "",
    abi : [
		{
			"inputs": [],
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
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
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
					"name": "previousOwner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "OwnershipTransferred",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
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
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "spender",
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
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
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
					"name": "account",
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
			"name": "decimals",
			"outputs": [
				{
					"internalType": "uint8",
					"name": "",
					"type": "uint8"
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
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "subtractedValue",
					"type": "uint256"
				}
			],
			"name": "decreaseAllowance",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getOwner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
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
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "addedValue",
					"type": "uint256"
				}
			],
			"name": "increaseAllowance",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
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
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "mint",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
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
			"name": "owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
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
					"name": "recipient",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "transfer",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
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
					"name": "sender",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "recipient",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
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
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
}

const petWorldCoin = {
    kovan : "0xabF1925ADAD62D46766B584Fa5705259Fa242E85",
	local:"0x5FbDB2315678afecb367f032d93F642f64180aa3",
    abi : [
		{
			"inputs": [],
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
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
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
					"name": "previousOwner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "OwnershipTransferred",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
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
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "spender",
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
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
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
					"name": "account",
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
			"name": "decimals",
			"outputs": [
				{
					"internalType": "uint8",
					"name": "",
					"type": "uint8"
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
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "subtractedValue",
					"type": "uint256"
				}
			],
			"name": "decreaseAllowance",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getOwner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
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
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "addedValue",
					"type": "uint256"
				}
			],
			"name": "increaseAllowance",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
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
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "mint",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
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
			"name": "owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
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
					"name": "recipient",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "transfer",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
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
					"name": "sender",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "recipient",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
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
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
}

const petSwapPair = {
	kovan : "0xB36645b7c19c54e495C2fd9291BEEcA7d7cA9832",
	abi : [
		{
			"inputs": [],
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
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
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
					"name": "sender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount0",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount1",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				}
			],
			"name": "Burn",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount0",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount1",
					"type": "uint256"
				}
			],
			"name": "Mint",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount0In",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount1In",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount0Out",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount1Out",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				}
			],
			"name": "Swap",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint112",
					"name": "reserve0",
					"type": "uint112"
				},
				{
					"indexed": false,
					"internalType": "uint112",
					"name": "reserve1",
					"type": "uint112"
				}
			],
			"name": "Sync",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "DOMAIN_SEPARATOR",
			"outputs": [
				{
					"internalType": "bytes32",
					"name": "",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "MINIMUM_LIQUIDITY",
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
			"name": "PERMIT_TYPEHASH",
			"outputs": [
				{
					"internalType": "bytes32",
					"name": "",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
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
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
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
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				}
			],
			"name": "burn",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amount0",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amount1",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "decimals",
			"outputs": [
				{
					"internalType": "uint8",
					"name": "",
					"type": "uint8"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "factory",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getReserves",
			"outputs": [
				{
					"internalType": "uint112",
					"name": "_reserve0",
					"type": "uint112"
				},
				{
					"internalType": "uint112",
					"name": "_reserve1",
					"type": "uint112"
				},
				{
					"internalType": "uint32",
					"name": "_blockTimestampLast",
					"type": "uint32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getVReserves",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "_vReserve0",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_vReserve1",
					"type": "uint256"
				},
				{
					"internalType": "uint32",
					"name": "_blockTimestampLast",
					"type": "uint32"
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
					"name": "_token0",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "_token1",
					"type": "address"
				}
			],
			"name": "initialize",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "kLast",
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
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_vReserve0",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_vReserve1",
					"type": "uint256"
				}
			],
			"name": "mint",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
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
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "nonces",
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
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				},
				{
					"internalType": "uint8",
					"name": "v",
					"type": "uint8"
				},
				{
					"internalType": "bytes32",
					"name": "r",
					"type": "bytes32"
				},
				{
					"internalType": "bytes32",
					"name": "s",
					"type": "bytes32"
				}
			],
			"name": "permit",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "price0CumulativeLast",
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
			"name": "price1CumulativeLast",
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
					"name": "to",
					"type": "address"
				}
			],
			"name": "skim",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amount0Out",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amount1Out",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "bytes",
					"name": "data",
					"type": "bytes"
				}
			],
			"name": "swap",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
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
			"constant": false,
			"inputs": [],
			"name": "sync",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "token0",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "token1",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
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
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "transfer",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
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
					"name": "from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
}

const pancakeSwapRouterContract = {
	kovan : "0x8D5065Aea4a653e8235f1F24B31Fc6a7D8E3B31d",
    abi : [
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_factory",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "_WETH",
					"type": "address"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [],
			"name": "WETH",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "tokenA",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "tokenB",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amountADesired",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountBDesired",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountAMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountBMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_vResearve0",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_vResearve1",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				}
			],
			"name": "addLiquidity",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountA",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountB",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "token",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amountTokenDesired",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountTokenMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountETHMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_vResearve0",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_vResearve1",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "addLiquidityETH",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountToken",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountETH",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				}
			],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "factory",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveOut",
					"type": "uint256"
				}
			],
			"name": "getAmountIn",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				}
			],
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveOut",
					"type": "uint256"
				}
			],
			"name": "getAmountOut",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				}
			],
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				}
			],
			"name": "getAmountsIn",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				}
			],
			"name": "getAmountsOut",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountA",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveA",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveB",
					"type": "uint256"
				}
			],
			"name": "quote",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountB",
					"type": "uint256"
				}
			],
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "tokenA",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "tokenB",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountAMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountBMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "removeLiquidity",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountA",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountB",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "token",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountTokenMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountETHMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "removeLiquidityETH",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountToken",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountETH",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapETHForExactTokens",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOutMin",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapExactETHForTokens",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountOutMin",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapExactTokensForETH",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountOutMin",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapExactTokensForTokens",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountInMax",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapTokensForExactETH",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountInMax",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapTokensForExactTokens",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"stateMutability": "payable",
			"type": "receive"
		}
	]
}

const pancakeSwapPair = {
	kovan : "0xB36645b7c19c54e495C2fd9291BEEcA7d7cA9832",
	abi : [
		{
			"inputs": [],
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
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
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
					"name": "sender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount0",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount1",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				}
			],
			"name": "Burn",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount0",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount1",
					"type": "uint256"
				}
			],
			"name": "Mint",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount0In",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount1In",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount0Out",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount1Out",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				}
			],
			"name": "Swap",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint112",
					"name": "reserve0",
					"type": "uint112"
				},
				{
					"indexed": false,
					"internalType": "uint112",
					"name": "reserve1",
					"type": "uint112"
				}
			],
			"name": "Sync",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "DOMAIN_SEPARATOR",
			"outputs": [
				{
					"internalType": "bytes32",
					"name": "",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "MINIMUM_LIQUIDITY",
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
			"name": "PERMIT_TYPEHASH",
			"outputs": [
				{
					"internalType": "bytes32",
					"name": "",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
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
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
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
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				}
			],
			"name": "burn",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amount0",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amount1",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "decimals",
			"outputs": [
				{
					"internalType": "uint8",
					"name": "",
					"type": "uint8"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "factory",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getReserves",
			"outputs": [
				{
					"internalType": "uint112",
					"name": "_reserve0",
					"type": "uint112"
				},
				{
					"internalType": "uint112",
					"name": "_reserve1",
					"type": "uint112"
				},
				{
					"internalType": "uint32",
					"name": "_blockTimestampLast",
					"type": "uint32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getVReserves",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "_vReserve0",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_vReserve1",
					"type": "uint256"
				},
				{
					"internalType": "uint32",
					"name": "_blockTimestampLast",
					"type": "uint32"
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
					"name": "_token0",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "_token1",
					"type": "address"
				}
			],
			"name": "initialize",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "kLast",
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
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_vReserve0",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_vReserve1",
					"type": "uint256"
				}
			],
			"name": "mint",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
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
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "nonces",
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
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				},
				{
					"internalType": "uint8",
					"name": "v",
					"type": "uint8"
				},
				{
					"internalType": "bytes32",
					"name": "r",
					"type": "bytes32"
				},
				{
					"internalType": "bytes32",
					"name": "s",
					"type": "bytes32"
				}
			],
			"name": "permit",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "price0CumulativeLast",
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
			"name": "price1CumulativeLast",
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
					"name": "to",
					"type": "address"
				}
			],
			"name": "skim",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amount0Out",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amount1Out",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "bytes",
					"name": "data",
					"type": "bytes"
				}
			],
			"name": "swap",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
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
			"constant": false,
			"inputs": [],
			"name": "sync",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "token0",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "token1",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
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
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "transfer",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
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
					"name": "from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
}

export {petSwapRouterContract, petSwapFactoryContract, ERC20, petWorldCoin, petSwapPair, pancakeSwapRouterContract, pancakeSwapPair};