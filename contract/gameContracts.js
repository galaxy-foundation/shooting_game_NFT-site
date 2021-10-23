const artContract = {
    kovan : "0x842D6147a22B025066Dc4F741E24f14759FBe05B",
	local : "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
    abi :  [
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_symbol",
					"type": "string"
				}
			],
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
					"name": "approved",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
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
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "bool",
					"name": "approved",
					"type": "bool"
				}
			],
			"name": "ApprovalForAll",
			"type": "event"
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
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "ItemCreated",
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
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
		},
		{
			"inputs": [],
			"name": "_INTERFACE_ID_ERC721_VERIFY_FINGERPRINT",
			"outputs": [
				{
					"internalType": "bytes4",
					"name": "",
					"type": "bytes4"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
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
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_metaDataURI",
					"type": "string"
				}
			],
			"name": "create",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_metaDataURI",
					"type": "string"
				},
				{
					"internalType": "address",
					"name": "_marketplace",
					"type": "address"
				}
			],
			"name": "createPub",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "createrOf",
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
					"name": "",
					"type": "uint256"
				}
			],
			"name": "creaters",
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
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "getApproved",
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
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				}
			],
			"name": "isApprovedForAll",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "name",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "owner",
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
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "ownerOf",
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
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
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
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "safeTransferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
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
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"internalType": "bytes",
					"name": "_data",
					"type": "bytes"
				}
			],
			"name": "safeTransferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"internalType": "bool",
					"name": "approved",
					"type": "bool"
				}
			],
			"name": "setApprovalForAll",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "bytes4",
					"name": "interfaceId",
					"type": "bytes4"
				}
			],
			"name": "supportsInterface",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "symbol",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "tokenURI",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "totalSupply",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
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
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
}

const eggContract = {
    kovan : "0x5a39AA6A3256C64CCd97239B3ab7476b269A5EFF",
	local : "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
    abi : [
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_symbol",
					"type": "string"
				}
			],
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
					"name": "approved",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
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
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "bool",
					"name": "approved",
					"type": "bool"
				}
			],
			"name": "ApprovalForAll",
			"type": "event"
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
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "Born",
			"type": "event"
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
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "ItemCreated",
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
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
		},
		{
			"inputs": [],
			"name": "_INTERFACE_ID_ERC721_VERIFY_FINGERPRINT",
			"outputs": [
				{
					"internalType": "bytes4",
					"name": "",
					"type": "bytes4"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
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
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				}
			],
			"name": "born",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"components": [
						{
							"internalType": "uint8[80]",
							"name": "mGenome",
							"type": "uint8[80]"
						},
						{
							"internalType": "uint8[80]",
							"name": "fGenome",
							"type": "uint8[80]"
						},
						{
							"internalType": "uint8",
							"name": "gene",
							"type": "uint8"
						},
						{
							"internalType": "uint256",
							"name": "mID",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "fID",
							"type": "uint256"
						}
					],
					"internalType": "struct PetStructs.EggInfo",
					"name": "_eggInfo",
					"type": "tuple"
				}
			],
			"name": "bread",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint8",
					"name": "_eggType",
					"type": "uint8"
				}
			],
			"name": "create",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
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
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "createrOf",
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
					"name": "",
					"type": "uint256"
				}
			],
			"name": "creaters",
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
					"name": "",
					"type": "uint256"
				}
			],
			"name": "eggInfos",
			"outputs": [
				{
					"internalType": "uint8",
					"name": "gene",
					"type": "uint8"
				},
				{
					"internalType": "uint256",
					"name": "mID",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "fID",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "eggTypes",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "getApproved",
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
					"name": "id",
					"type": "uint256"
				}
			],
			"name": "getEggInfo",
			"outputs": [
				{
					"internalType": "uint8[80]",
					"name": "_mGenome",
					"type": "uint8[80]"
				},
				{
					"internalType": "uint8[80]",
					"name": "_fGenome",
					"type": "uint8[80]"
				},
				{
					"internalType": "uint8",
					"name": "_gene",
					"type": "uint8"
				},
				{
					"internalType": "uint256",
					"name": "_mID",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_fID",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				}
			],
			"name": "getEggType",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "_eggType",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				}
			],
			"name": "getGenome",
			"outputs": [
				{
					"internalType": "string",
					"name": "genome",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				}
			],
			"name": "isApprovedForAll",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "name",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "owner",
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
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "ownerOf",
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
			"inputs": [],
			"name": "petCoin",
			"outputs": [
				{
					"internalType": "contract IERC20",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "petContract",
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
					"name": "",
					"type": "uint256"
				}
			],
			"name": "prices",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
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
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "safeTransferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
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
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"internalType": "bytes",
					"name": "_data",
					"type": "bytes"
				}
			],
			"name": "safeTransferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_petCoinAddress",
					"type": "address"
				}
			],
			"name": "setAcceptedToken",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"internalType": "bool",
					"name": "approved",
					"type": "bool"
				}
			],
			"name": "setApprovalForAll",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_petContract",
					"type": "address"
				}
			],
			"name": "setPetContract",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256[3]",
					"name": "_prices",
					"type": "uint256[3]"
				}
			],
			"name": "setPrices",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "bytes4",
					"name": "interfaceId",
					"type": "bytes4"
				}
			],
			"name": "supportsInterface",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "symbol",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "tokenURI",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "totalSupply",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
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
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
} 

const petContract = {
    kovan : "0x3e231d2aAD0EbA640a946a68b99E80214C69cBcc",
	local : "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
    abi : [
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "_name",
			  "type": "string"
			},
			{
			  "internalType": "string",
			  "name": "_symbol",
			  "type": "string"
			}
		  ],
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
			  "name": "approved",
			  "type": "address"
			},
			{
			  "indexed": true,
			  "internalType": "uint256",
			  "name": "tokenId",
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
			  "name": "owner",
			  "type": "address"
			},
			{
			  "indexed": true,
			  "internalType": "address",
			  "name": "operator",
			  "type": "address"
			},
			{
			  "indexed": false,
			  "internalType": "bool",
			  "name": "approved",
			  "type": "bool"
			}
		  ],
		  "name": "ApprovalForAll",
		  "type": "event"
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
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "Born",
		  "type": "event"
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
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "ItemCreated",
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
			  "indexed": true,
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "Transfer",
		  "type": "event"
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
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			},
			{
			  "indexed": true,
			  "internalType": "uint256",
			  "name": "level",
			  "type": "uint256"
			}
		  ],
		  "name": "Upgraded",
		  "type": "event"
		},
		{
		  "inputs": [],
		  "name": "_INTERFACE_ID_ERC721_VERIFY_FINGERPRINT",
		  "outputs": [
			{
			  "internalType": "bytes4",
			  "name": "",
			  "type": "bytes4"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "to",
			  "type": "address"
			},
			{
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "approve",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "owner",
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
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "owner",
			  "type": "address"
			},
			{
			  "components": [
				{
				  "internalType": "uint8[80]",
				  "name": "mGenome",
				  "type": "uint8[80]"
				},
				{
				  "internalType": "uint8[80]",
				  "name": "fGenome",
				  "type": "uint8[80]"
				},
				{
				  "internalType": "uint8",
				  "name": "gene",
				  "type": "uint8"
				},
				{
				  "internalType": "uint256",
				  "name": "mID",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "fID",
				  "type": "uint256"
				}
			  ],
			  "internalType": "struct PetStructs.EggInfo",
			  "name": "_eggInfo",
			  "type": "tuple"
			}
		  ],
		  "name": "born",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "tokenId",
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
			  "name": "mID",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "fID",
			  "type": "uint256"
			}
		  ],
		  "name": "bread",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "createrOf",
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
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "creaters",
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
		  "inputs": [],
		  "name": "eggContract",
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
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "getApproved",
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
			  "name": "id",
			  "type": "uint256"
			}
		  ],
		  "name": "getGenome",
		  "outputs": [
			{
			  "internalType": "string",
			  "name": "genome",
			  "type": "string"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "id",
			  "type": "uint256"
			}
		  ],
		  "name": "getPetInfo",
		  "outputs": [
			{
			  "internalType": "uint8[80]",
			  "name": "_mGenome",
			  "type": "uint8[80]"
			},
			{
			  "internalType": "uint8[80]",
			  "name": "_fGenome",
			  "type": "uint8[80]"
			},
			{
			  "internalType": "uint8",
			  "name": "_gene",
			  "type": "uint8"
			},
			{
			  "internalType": "uint256",
			  "name": "_mID",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "_fID",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "owner",
			  "type": "address"
			},
			{
			  "internalType": "address",
			  "name": "operator",
			  "type": "address"
			}
		  ],
		  "name": "isApprovedForAll",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "latestBreedLevel",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "latestUpgradeTime",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "levelInfos",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "name",
		  "outputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "owner",
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
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "ownerOf",
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
		  "inputs": [],
		  "name": "petCoin",
		  "outputs": [
			{
			  "internalType": "contract IERC20",
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
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "petInfos",
		  "outputs": [
			{
			  "internalType": "uint8",
			  "name": "gene",
			  "type": "uint8"
			},
			{
			  "internalType": "uint256",
			  "name": "mID",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "fID",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "price",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "renounceOwnership",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
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
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "safeTransferFrom",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
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
			  "name": "tokenId",
			  "type": "uint256"
			},
			{
			  "internalType": "bytes",
			  "name": "_data",
			  "type": "bytes"
			}
		  ],
		  "name": "safeTransferFrom",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "_petCoinAddress",
			  "type": "address"
			}
		  ],
		  "name": "setAcceptedToken",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "operator",
			  "type": "address"
			},
			{
			  "internalType": "bool",
			  "name": "approved",
			  "type": "bool"
			}
		  ],
		  "name": "setApprovalForAll",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "_eggContract",
			  "type": "address"
			}
		  ],
		  "name": "setEggContract",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_price",
			  "type": "uint256"
			}
		  ],
		  "name": "setPrices",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_upgradeTime",
			  "type": "uint256"
			}
		  ],
		  "name": "setUpgradeTime",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "bytes4",
			  "name": "interfaceId",
			  "type": "bytes4"
			}
		  ],
		  "name": "supportsInterface",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "symbol",
		  "outputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "tokenURI",
		  "outputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "totalSupply",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
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
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "transferFrom",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "newOwner",
			  "type": "address"
			}
		  ],
		  "name": "transferOwnership",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "id",
			  "type": "uint256"
			}
		  ],
		  "name": "upgrade",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "level",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "upgradeTime",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		}
	  ]
} 

const multiContract = {
    kovan : "0x360625151829c8B02BA7A1A049993BB21C660fDC",
	local : "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
    abi : [
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
			"inputs": [],
			"name": "artNFTAddress",
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
			"inputs": [],
			"name": "eggNFTAddress",
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
					"internalType": "uint256[]",
					"name": "tokenIds",
					"type": "uint256[]"
				}
			],
			"name": "getArtInfos",
			"outputs": [
				{
					"internalType": "address[]",
					"name": "owners",
					"type": "address[]"
				},
				{
					"internalType": "address[]",
					"name": "creators",
					"type": "address[]"
				},
				{
					"internalType": "string[]",
					"name": "URIs",
					"type": "string[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256[]",
					"name": "tokenIds",
					"type": "uint256[]"
				}
			],
			"name": "getEggInfos",
			"outputs": [
				{
					"internalType": "address[]",
					"name": "owners",
					"type": "address[]"
				},
				{
					"internalType": "address[]",
					"name": "creators",
					"type": "address[]"
				},
				{
					"internalType": "uint8[][]",
					"name": "_mGenome",
					"type": "uint8[][]"
				},
				{
					"internalType": "uint8[][]",
					"name": "_fGenome",
					"type": "uint8[][]"
				},
				{
					"internalType": "uint8[]",
					"name": "_gene",
					"type": "uint8[]"
				},
				{
					"internalType": "uint256[]",
					"name": "_mID",
					"type": "uint256[]"
				},
				{
					"internalType": "uint256[]",
					"name": "_fID",
					"type": "uint256[]"
				},
				{
					"internalType": "uint256[]",
					"name": "_eggTypes",
					"type": "uint256[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256[]",
					"name": "tokenIds",
					"type": "uint256[]"
				}
			],
			"name": "getPetInfos",
			"outputs": [
				{
					"internalType": "address[]",
					"name": "owners",
					"type": "address[]"
				},
				{
					"internalType": "address[]",
					"name": "creators",
					"type": "address[]"
				},
				{
					"internalType": "uint8[][]",
					"name": "_mGenome",
					"type": "uint8[][]"
				},
				{
					"internalType": "uint8[][]",
					"name": "_fGenome",
					"type": "uint8[][]"
				},
				{
					"internalType": "uint8[]",
					"name": "_gene",
					"type": "uint8[]"
				},
				{
					"internalType": "uint256[]",
					"name": "_mID",
					"type": "uint256[]"
				},
				{
					"internalType": "uint256[]",
					"name": "_fID",
					"type": "uint256[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "owner",
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
			"inputs": [],
			"name": "petNFTAddress",
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
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_artNFTAddress",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "_eggNFTAddress",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "_petNFTAddress",
					"type": "address"
				}
			],
			"name": "setAddresses",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
}

const marketPlaceContract = {
	kovan : "0xE6d39EEB1D58d880DC9423CC017a9EAE02c72862",
	local : "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
	abi : [
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_acceptedToken",
					"type": "address"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "bytes32",
					"name": "id",
					"type": "bytes32"
				}
			],
			"name": "BidAccepted",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "bytes32",
					"name": "id",
					"type": "bytes32"
				}
			],
			"name": "BidCancelled",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "bytes32",
					"name": "id",
					"type": "bytes32"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "nftAddress",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "assetId",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "bidder",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "priceInWei",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "expiresAt",
					"type": "uint256"
				}
			],
			"name": "BidCreated",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "nftAddress",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "assetId",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "bidder",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "seller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "priceInWei",
					"type": "uint256"
				}
			],
			"name": "Buycreate",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "cutPerMillion",
					"type": "uint256"
				}
			],
			"name": "ChangedFeePerMillion",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "bytes32",
					"name": "id",
					"type": "bytes32"
				}
			],
			"name": "OrderCancelled",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "bytes32",
					"name": "id",
					"type": "bytes32"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "seller",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "nftAddress",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "assetId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "priceInWei",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "expiresAt",
					"type": "uint256"
				}
			],
			"name": "OrderCreated",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "bytes32",
					"name": "id",
					"type": "bytes32"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "buyer",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "priceInWei",
					"type": "uint256"
				}
			],
			"name": "OrderSuccessful",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "bytes32",
					"name": "id",
					"type": "bytes32"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "priceInWei",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "expiresAt",
					"type": "uint256"
				}
			],
			"name": "OrderUpdated",
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
					"indexed": false,
					"internalType": "address",
					"name": "account",
					"type": "address"
				}
			],
			"name": "Paused",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "account",
					"type": "address"
				}
			],
			"name": "Unpaused",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_nftAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_assetId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_priceInWei",
					"type": "uint256"
				}
			],
			"name": "Buy",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_nftAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_assetId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_priceInWei",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_expiresAt",
					"type": "uint256"
				}
			],
			"name": "PlaceBid",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "_INTERFACE_ID_ERC721",
			"outputs": [
				{
					"internalType": "bytes4",
					"name": "",
					"type": "bytes4"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_nftAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_assetId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_priceInWei",
					"type": "uint256"
				}
			],
			"name": "acceptBid",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "acceptedToken",
			"outputs": [
				{
					"internalType": "contract IERC20",
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
					"name": "",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "bidByOrderId",
			"outputs": [
				{
					"internalType": "bytes32",
					"name": "id",
					"type": "bytes32"
				},
				{
					"internalType": "address",
					"name": "bidder",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "expiresAt",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_nftAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_assetId",
					"type": "uint256"
				}
			],
			"name": "cancelBid",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_nftAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_assetId",
					"type": "uint256"
				}
			],
			"name": "cancelOrder",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_nftAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_assetId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_priceInWei",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_expiresAt",
					"type": "uint256"
				}
			],
			"name": "createOrder",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "cutPerMillion",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "maxCutPerMillion",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "orderByAssetId",
			"outputs": [
				{
					"internalType": "bytes32",
					"name": "id",
					"type": "bytes32"
				},
				{
					"internalType": "address",
					"name": "seller",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "nftAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "expiresAt",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "owner",
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
			"inputs": [],
			"name": "paused",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "royaltyPerMillion",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_nftAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_assetId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_priceInWei",
					"type": "uint256"
				},
				{
					"internalType": "bytes32",
					"name": "_fingerprint",
					"type": "bytes32"
				}
			],
			"name": "safeExecuteOrder",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_cutPerMillion",
					"type": "uint256"
				}
			],
			"name": "setOwnerCutPerMillion",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "bool",
					"name": "_setPaused",
					"type": "bool"
				}
			],
			"name": "setPaused",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_nftAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_assetId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_priceInWei",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_expiresAt",
					"type": "uint256"
				}
			],
			"name": "updateOrder",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
}
export {artContract,eggContract,petContract,multiContract,marketPlaceContract}