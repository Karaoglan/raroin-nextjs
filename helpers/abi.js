module.exports.abi = {
    "_format": "hh-sol-artifact-1",
    "contractName": "NFTMarketplace",
    "sourceName": "contracts/NFTMarketplace.sol",
    "abi": [
        {
            "inputs": [],
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
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "seller",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "sold",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "tokenURI",
                    "type": "string"
                }
            ],
            "name": "MarketItemCreated",
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
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "createMarketSale",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "tokenURI",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                }
            ],
            "name": "createToken",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "fetchItemsListed",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address payable",
                            "name": "seller",
                            "type": "address"
                        },
                        {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "price",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "sold",
                            "type": "bool"
                        },
                        {
                            "internalType": "string",
                            "name": "tokenURI",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct NFTMarketplace.MarketItem[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "fetchMarketItems",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address payable",
                            "name": "seller",
                            "type": "address"
                        },
                        {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "price",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "sold",
                            "type": "bool"
                        },
                        {
                            "internalType": "string",
                            "name": "tokenURI",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct NFTMarketplace.MarketItem[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "fetchMyNFTs",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address payable",
                            "name": "seller",
                            "type": "address"
                        },
                        {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "price",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "sold",
                            "type": "bool"
                        },
                        {
                            "internalType": "string",
                            "name": "tokenURI",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct NFTMarketplace.MarketItem[]",
                    "name": "",
                    "type": "tuple[]"
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
            "inputs": [],
            "name": "getListingPrice",
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
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                }
            ],
            "name": "resellToken",
            "outputs": [],
            "stateMutability": "payable",
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
                    "name": "data",
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
                    "internalType": "uint256",
                    "name": "_listingPrice",
                    "type": "uint256"
                }
            ],
            "name": "updateListingPrice",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        }
    ],
    "bytecode": "0x60806040526658d15e176280006009553480156200001c57600080fd5b506040518060400160405280601081526020017f4d657461766572736520546f6b656e73000000000000000000000000000000008152506040518060400160405280600481526020017f4d455454000000000000000000000000000000000000000000000000000000008152508160009080519060200190620000a192919062000104565b508060019080519060200190620000ba92919062000104565b50505033600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000219565b8280546200011290620001e3565b90600052602060002090601f01602090048101928262000136576000855562000182565b82601f106200015157805160ff191683800117855562000182565b8280016001018555821562000182579182015b828111156200018157825182559160200191906001019062000164565b5b50905062000191919062000195565b5090565b5b80821115620001b057600081600090555060010162000196565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001fc57607f821691505b60208210811415620002135762000212620001b4565b5b50919050565b61420780620002296000396000f3fe60806040526004361061012a5760003560e01c80636352211e116100ab578063ae677aa31161006f578063ae677aa3146103f9578063b88d4fde14610415578063be9af5361461043e578063c87b56dd1461045a578063e219fc7514610497578063e985e9c5146104b35761012a565b80636352211e146102fb57806370a082311461033857806372b3b6201461037557806395d89b41146103a5578063a22cb465146103d05761012a565b806312e85585116100f257806312e8558514610228578063202e37401461025357806323b872dd1461027e57806342842e0e146102a757806345f8fa80146102d05761012a565b806301ffc9a71461012f57806306fdde031461016c578063081812fc14610197578063095ea7b3146101d45780630f08efe0146101fd575b600080fd5b34801561013b57600080fd5b5061015660048036038101906101519190612c27565b6104f0565b6040516101639190612c6f565b60405180910390f35b34801561017857600080fd5b506101816105d2565b60405161018e9190612d23565b60405180910390f35b3480156101a357600080fd5b506101be60048036038101906101b99190612d7b565b610664565b6040516101cb9190612de9565b60405180910390f35b3480156101e057600080fd5b506101fb60048036038101906101f69190612e30565b6106aa565b005b34801561020957600080fd5b506102126107c2565b60405161021f9190613044565b60405180910390f35b34801561023457600080fd5b5061023d610abd565b60405161024a9190613075565b60405180910390f35b34801561025f57600080fd5b50610268610ac7565b6040516102759190613044565b60405180910390f35b34801561028a57600080fd5b506102a560048036038101906102a09190613090565b610e47565b005b3480156102b357600080fd5b506102ce60048036038101906102c99190613090565b610ea7565b005b3480156102dc57600080fd5b506102e5610ec7565b6040516102f29190613044565b60405180910390f35b34801561030757600080fd5b50610322600480360381019061031d9190612d7b565b611247565b60405161032f9190612de9565b60405180910390f35b34801561034457600080fd5b5061035f600480360381019061035a91906130e3565b6112f9565b60405161036c9190613075565b60405180910390f35b61038f600480360381019061038a9190613245565b6113b1565b60405161039c9190613075565b60405180910390f35b3480156103b157600080fd5b506103ba6113f4565b6040516103c79190612d23565b60405180910390f35b3480156103dc57600080fd5b506103f760048036038101906103f291906132cd565b611486565b005b610413600480360381019061040e9190612d7b565b61149c565b005b34801561042157600080fd5b5061043c600480360381019061043791906133ae565b611536565b005b61045860048036038101906104539190612d7b565b611598565b005b34801561046657600080fd5b50610481600480360381019061047c9190612d7b565b6117d6565b60405161048e9190612d23565b60405180910390f35b6104b160048036038101906104ac9190613431565b6118e9565b005b3480156104bf57600080fd5b506104da60048036038101906104d59190613471565b611ade565b6040516104e79190612c6f565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105bb57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806105cb57506105ca82611b72565b5b9050919050565b6060600080546105e1906134e0565b80601f016020809104026020016040519081016040528092919081815260200182805461060d906134e0565b801561065a5780601f1061062f5761010080835404028352916020019161065a565b820191906000526020600020905b81548152906001019060200180831161063d57829003601f168201915b5050505050905090565b600061066f82611bdc565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006106b582611247565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610726576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071d90613584565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610745611c27565b73ffffffffffffffffffffffffffffffffffffffff16148061077457506107738161076e611c27565b611ade565b5b6107b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107aa90613616565b60405180910390fd5b6107bd8383611c2f565b505050565b606060006107d06007611ce8565b905060006107de6008611ce8565b6107e86007611ce8565b6107f29190613665565b90506000808267ffffffffffffffff8111156108115761081061311a565b5b60405190808252806020026020018201604052801561084a57816020015b610837612ab4565b81526020019060019003908161082f5790505b50905060005b84811015610ab2573073ffffffffffffffffffffffffffffffffffffffff16600b60006001846108809190613699565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610a9f5760006001826108dd9190613699565b90506000600b60008381526020019081526020016000209050806040518060c0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff161515151581526020016005820180546109ed906134e0565b80601f0160208091040260200160405190810160405280929190818152602001828054610a19906134e0565b8015610a665780601f10610a3b57610100808354040283529160200191610a66565b820191906000526020600020905b815481529060010190602001808311610a4957829003601f168201915b505050505081525050848681518110610a8257610a816136ef565b5b6020026020010181905250600185610a9a9190613699565b945050505b8080610aaa9061371e565b915050610850565b508094505050505090565b6000600954905090565b60606000610ad56007611ce8565b905060008060005b83811015610b7e573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610b0d9190613699565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610b6b57600183610b689190613699565b92505b8080610b769061371e565b915050610add565b5060008267ffffffffffffffff811115610b9b57610b9a61311a565b5b604051908082528060200260200182016040528015610bd457816020015b610bc1612ab4565b815260200190600190039081610bb95790505b50905060005b84811015610e3c573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610c0a9190613699565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610e29576000600182610c679190613699565b90506000600b60008381526020019081526020016000209050806040518060c0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff16151515158152602001600582018054610d77906134e0565b80601f0160208091040260200160405190810160405280929190818152602001828054610da3906134e0565b8015610df05780601f10610dc557610100808354040283529160200191610df0565b820191906000526020600020905b815481529060010190602001808311610dd357829003601f168201915b505050505081525050848681518110610e0c57610e0b6136ef565b5b6020026020010181905250600185610e249190613699565b945050505b8080610e349061371e565b915050610bda565b508094505050505090565b610e58610e52611c27565b82611cf6565b610e97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8e906137d9565b60405180910390fd5b610ea2838383611d8b565b505050565b610ec283838360405180602001604052806000815250611536565b505050565b60606000610ed56007611ce8565b905060008060005b83811015610f7e573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610f0d9190613699565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610f6b57600183610f689190613699565b92505b8080610f769061371e565b915050610edd565b5060008267ffffffffffffffff811115610f9b57610f9a61311a565b5b604051908082528060200260200182016040528015610fd457816020015b610fc1612ab4565b815260200190600190039081610fb95790505b50905060005b8481101561123c573373ffffffffffffffffffffffffffffffffffffffff16600b600060018461100a9190613699565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156112295760006001826110679190613699565b90506000600b60008381526020019081526020016000209050806040518060c0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff16151515158152602001600582018054611177906134e0565b80601f01602080910402602001604051908101604052809291908181526020018280546111a3906134e0565b80156111f05780601f106111c5576101008083540402835291602001916111f0565b820191906000526020600020905b8154815290600101906020018083116111d357829003601f168201915b50505050508152505084868151811061120c5761120b6136ef565b5b60200260200101819052506001856112249190613699565b945050505b80806112349061371e565b915050610fda565b508094505050505090565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156112f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e790613845565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561136a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611361906138d7565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006113bd6007611ff2565b60006113c96007611ce8565b90506113d53382612008565b6113df81856121e2565b6113ea818486612256565b8091505092915050565b606060018054611403906134e0565b80601f016020809104026020016040519081016040528092919081815260200182805461142f906134e0565b801561147c5780601f106114515761010080835404028352916020019161147c565b820191906000526020600020905b81548152906001019060200180831161145f57829003601f168201915b5050505050905090565b611498611491611c27565b838361247f565b5050565b3373ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461152c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161152390613969565b60405180910390fd5b8060098190555050565b611547611541611c27565b83611cf6565b611586576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157d906137d9565b60405180910390fd5b611592848484846125ec565b50505050565b6000600b60008381526020019081526020016000206003015490506000600b600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050813414611630576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611627906139fb565b60405180910390fd5b33600b600085815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600b600085815260200190815260200160002060040160006101000a81548160ff0219169083151502179055506000600b600085815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506117146008611ff2565b61171f303385611d8b565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6009549081150290604051600060405180830381858888f19350505050158015611789573d6000803e3d6000fd5b508073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156117d0573d6000803e3d6000fd5b50505050565b60606117e182611bdc565b6000600660008481526020019081526020016000208054611801906134e0565b80601f016020809104026020016040519081016040528092919081815260200182805461182d906134e0565b801561187a5780601f1061184f5761010080835404028352916020019161187a565b820191906000526020600020905b81548152906001019060200180831161185d57829003601f168201915b50505050509050600061188b612648565b90506000815114156118a15781925050506118e4565b6000825111156118d65780826040516020016118be929190613a57565b604051602081830303815290604052925050506118e4565b6118df8461265f565b925050505b919050565b3373ffffffffffffffffffffffffffffffffffffffff16600b600084815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461198d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198490613aed565b60405180910390fd5b60095434146119d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119c890613b7f565b60405180910390fd5b6000600b600084815260200190815260200160002060040160006101000a81548160ff02191690831515021790555080600b60008481526020019081526020016000206003018190555033600b600084815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555030600b600084815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611acf60086126c7565b611ada333084611d8b565b5050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611be581612723565b611c24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c1b90613845565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611ca283611247565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081600001549050919050565b600080611d0283611247565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611d445750611d438185611ade565b5b80611d8257508373ffffffffffffffffffffffffffffffffffffffff16611d6a84610664565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611dab82611247565b73ffffffffffffffffffffffffffffffffffffffff1614611e01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611df890613c11565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611e71576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e6890613ca3565b60405180910390fd5b611e7c83838361278f565b611e87600082611c2f565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611ed79190613665565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611f2e9190613699565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611fed838383612794565b505050565b6001816000016000828254019250508190555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612078576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161206f90613d0f565b60405180910390fd5b61208181612723565b156120c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120b890613d7b565b60405180910390fd5b6120cd6000838361278f565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461211d9190613699565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46121de60008383612794565b5050565b6121eb82612723565b61222a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161222190613e0d565b60405180910390fd5b80600660008481526020019081526020016000209080519060200190612251929190612b18565b505050565b60008211612299576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161229090613e79565b60405180910390fd5b60095434146122dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122d490613b7f565b60405180910390fd5b6040518060c001604052808481526020013373ffffffffffffffffffffffffffffffffffffffff1681526020013073ffffffffffffffffffffffffffffffffffffffff16815260200183815260200160001515815260200182815250600b60008581526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555060a082015181600501908051906020019061242a929190612b18565b50905050612439333085611d8b565b827fddaeb01fb1ddce9789e64660541353c5a90fdd3e87ad074757173128396df021333085600086604051612472959493929190613e99565b60405180910390a2505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156124ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124e590613f3f565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516125df9190612c6f565b60405180910390a3505050565b6125f7848484611d8b565b61260384848484612799565b612642576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161263990613fd1565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061266a82611bdc565b6000612674612648565b9050600081511161269457604051806020016040528060008152506126bf565b8061269e84612930565b6040516020016126af929190613a57565b6040516020818303038152906040525b915050919050565b60008160000154905060008111612713576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161270a9061403d565b60405180910390fd5b6001810382600001819055505050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006127ba8473ffffffffffffffffffffffffffffffffffffffff16612a91565b15612923578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026127e3611c27565b8786866040518563ffffffff1660e01b815260040161280594939291906140b2565b602060405180830381600087803b15801561281f57600080fd5b505af192505050801561285057506040513d601f19601f8201168201806040525081019061284d9190614113565b60015b6128d3573d8060008114612880576040519150601f19603f3d011682016040523d82523d6000602084013e612885565b606091505b506000815114156128cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128c290613fd1565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050612928565b600190505b949350505050565b60606000821415612978576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050612a8c565b600082905060005b600082146129aa5780806129939061371e565b915050600a826129a3919061416f565b9150612980565b60008167ffffffffffffffff8111156129c6576129c561311a565b5b6040519080825280601f01601f1916602001820160405280156129f85781602001600182028036833780820191505090505b5090505b60008514612a8557600182612a119190613665565b9150600a85612a2091906141a0565b6030612a2c9190613699565b60f81b818381518110612a4257612a416136ef565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85612a7e919061416f565b94506129fc565b8093505050505b919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6040518060c0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600015158152602001606081525090565b828054612b24906134e0565b90600052602060002090601f016020900481019282612b465760008555612b8d565b82601f10612b5f57805160ff1916838001178555612b8d565b82800160010185558215612b8d579182015b82811115612b8c578251825591602001919060010190612b71565b5b509050612b9a9190612b9e565b5090565b5b80821115612bb7576000816000905550600101612b9f565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612c0481612bcf565b8114612c0f57600080fd5b50565b600081359050612c2181612bfb565b92915050565b600060208284031215612c3d57612c3c612bc5565b5b6000612c4b84828501612c12565b91505092915050565b60008115159050919050565b612c6981612c54565b82525050565b6000602082019050612c846000830184612c60565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612cc4578082015181840152602081019050612ca9565b83811115612cd3576000848401525b50505050565b6000601f19601f8301169050919050565b6000612cf582612c8a565b612cff8185612c95565b9350612d0f818560208601612ca6565b612d1881612cd9565b840191505092915050565b60006020820190508181036000830152612d3d8184612cea565b905092915050565b6000819050919050565b612d5881612d45565b8114612d6357600080fd5b50565b600081359050612d7581612d4f565b92915050565b600060208284031215612d9157612d90612bc5565b5b6000612d9f84828501612d66565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612dd382612da8565b9050919050565b612de381612dc8565b82525050565b6000602082019050612dfe6000830184612dda565b92915050565b612e0d81612dc8565b8114612e1857600080fd5b50565b600081359050612e2a81612e04565b92915050565b60008060408385031215612e4757612e46612bc5565b5b6000612e5585828601612e1b565b9250506020612e6685828601612d66565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612ea581612d45565b82525050565b6000612eb682612da8565b9050919050565b612ec681612eab565b82525050565b612ed581612c54565b82525050565b600082825260208201905092915050565b6000612ef782612c8a565b612f018185612edb565b9350612f11818560208601612ca6565b612f1a81612cd9565b840191505092915050565b600060c083016000830151612f3d6000860182612e9c565b506020830151612f506020860182612ebd565b506040830151612f636040860182612ebd565b506060830151612f766060860182612e9c565b506080830151612f896080860182612ecc565b5060a083015184820360a0860152612fa18282612eec565b9150508091505092915050565b6000612fba8383612f25565b905092915050565b6000602082019050919050565b6000612fda82612e70565b612fe48185612e7b565b935083602082028501612ff685612e8c565b8060005b8581101561303257848403895281516130138582612fae565b945061301e83612fc2565b925060208a01995050600181019050612ffa565b50829750879550505050505092915050565b6000602082019050818103600083015261305e8184612fcf565b905092915050565b61306f81612d45565b82525050565b600060208201905061308a6000830184613066565b92915050565b6000806000606084860312156130a9576130a8612bc5565b5b60006130b786828701612e1b565b93505060206130c886828701612e1b565b92505060406130d986828701612d66565b9150509250925092565b6000602082840312156130f9576130f8612bc5565b5b600061310784828501612e1b565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61315282612cd9565b810181811067ffffffffffffffff821117156131715761317061311a565b5b80604052505050565b6000613184612bbb565b90506131908282613149565b919050565b600067ffffffffffffffff8211156131b0576131af61311a565b5b6131b982612cd9565b9050602081019050919050565b82818337600083830152505050565b60006131e86131e384613195565b61317a565b90508281526020810184848401111561320457613203613115565b5b61320f8482856131c6565b509392505050565b600082601f83011261322c5761322b613110565b5b813561323c8482602086016131d5565b91505092915050565b6000806040838503121561325c5761325b612bc5565b5b600083013567ffffffffffffffff81111561327a57613279612bca565b5b61328685828601613217565b925050602061329785828601612d66565b9150509250929050565b6132aa81612c54565b81146132b557600080fd5b50565b6000813590506132c7816132a1565b92915050565b600080604083850312156132e4576132e3612bc5565b5b60006132f285828601612e1b565b9250506020613303858286016132b8565b9150509250929050565b600067ffffffffffffffff8211156133285761332761311a565b5b61333182612cd9565b9050602081019050919050565b600061335161334c8461330d565b61317a565b90508281526020810184848401111561336d5761336c613115565b5b6133788482856131c6565b509392505050565b600082601f83011261339557613394613110565b5b81356133a584826020860161333e565b91505092915050565b600080600080608085870312156133c8576133c7612bc5565b5b60006133d687828801612e1b565b94505060206133e787828801612e1b565b93505060406133f887828801612d66565b925050606085013567ffffffffffffffff81111561341957613418612bca565b5b61342587828801613380565b91505092959194509250565b6000806040838503121561344857613447612bc5565b5b600061345685828601612d66565b925050602061346785828601612d66565b9150509250929050565b6000806040838503121561348857613487612bc5565b5b600061349685828601612e1b565b92505060206134a785828601612e1b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806134f857607f821691505b6020821081141561350c5761350b6134b1565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061356e602183612c95565b915061357982613512565b604082019050919050565b6000602082019050818103600083015261359d81613561565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000613600603e83612c95565b915061360b826135a4565b604082019050919050565b6000602082019050818103600083015261362f816135f3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061367082612d45565b915061367b83612d45565b92508282101561368e5761368d613636565b5b828203905092915050565b60006136a482612d45565b91506136af83612d45565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156136e4576136e3613636565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061372982612d45565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561375c5761375b613636565b5b600182019050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b60006137c3602e83612c95565b91506137ce82613767565b604082019050919050565b600060208201905081810360008301526137f2816137b6565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b600061382f601883612c95565b915061383a826137f9565b602082019050919050565b6000602082019050818103600083015261385e81613822565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006138c1602983612c95565b91506138cc82613865565b604082019050919050565b600060208201905081810360008301526138f0816138b4565b9050919050565b7f4f6e6c79206d61726b6574706c616365206f776e65722063616e20757064617460008201527f65206c697374696e672070726963652e00000000000000000000000000000000602082015250565b6000613953603083612c95565b915061395e826138f7565b604082019050919050565b6000602082019050818103600083015261398281613946565b9050919050565b7f506c65617365207375626d6974207468652061736b696e67207072696365206960008201527f6e206f7264657220746f20636f6d706c65746520746865207075726368617365602082015250565b60006139e5604083612c95565b91506139f082613989565b604082019050919050565b60006020820190508181036000830152613a14816139d8565b9050919050565b600081905092915050565b6000613a3182612c8a565b613a3b8185613a1b565b9350613a4b818560208601612ca6565b80840191505092915050565b6000613a638285613a26565b9150613a6f8284613a26565b91508190509392505050565b7f4f6e6c79206974656d206f776e65722063616e20706572666f726d207468697360008201527f206f7065726174696f6e00000000000000000000000000000000000000000000602082015250565b6000613ad7602a83612c95565b9150613ae282613a7b565b604082019050919050565b60006020820190508181036000830152613b0681613aca565b9050919050565b7f5072696365206d75737420626520657175616c20746f206c697374696e67207060008201527f7269636500000000000000000000000000000000000000000000000000000000602082015250565b6000613b69602483612c95565b9150613b7482613b0d565b604082019050919050565b60006020820190508181036000830152613b9881613b5c565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000613bfb602583612c95565b9150613c0682613b9f565b604082019050919050565b60006020820190508181036000830152613c2a81613bee565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000613c8d602483612c95565b9150613c9882613c31565b604082019050919050565b60006020820190508181036000830152613cbc81613c80565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000613cf9602083612c95565b9150613d0482613cc3565b602082019050919050565b60006020820190508181036000830152613d2881613cec565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000613d65601c83612c95565b9150613d7082613d2f565b602082019050919050565b60006020820190508181036000830152613d9481613d58565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000613df7602e83612c95565b9150613e0282613d9b565b604082019050919050565b60006020820190508181036000830152613e2681613dea565b9050919050565b7f5072696365206d757374206265206174206c6561737420312077656900000000600082015250565b6000613e63601c83612c95565b9150613e6e82613e2d565b602082019050919050565b60006020820190508181036000830152613e9281613e56565b9050919050565b600060a082019050613eae6000830188612dda565b613ebb6020830187612dda565b613ec86040830186613066565b613ed56060830185612c60565b8181036080830152613ee78184612cea565b90509695505050505050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000613f29601983612c95565b9150613f3482613ef3565b602082019050919050565b60006020820190508181036000830152613f5881613f1c565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000613fbb603283612c95565b9150613fc682613f5f565b604082019050919050565b60006020820190508181036000830152613fea81613fae565b9050919050565b7f436f756e7465723a2064656372656d656e74206f766572666c6f770000000000600082015250565b6000614027601b83612c95565b915061403282613ff1565b602082019050919050565b600060208201905081810360008301526140568161401a565b9050919050565b600081519050919050565b600082825260208201905092915050565b60006140848261405d565b61408e8185614068565b935061409e818560208601612ca6565b6140a781612cd9565b840191505092915050565b60006080820190506140c76000830187612dda565b6140d46020830186612dda565b6140e16040830185613066565b81810360608301526140f38184614079565b905095945050505050565b60008151905061410d81612bfb565b92915050565b60006020828403121561412957614128612bc5565b5b6000614137848285016140fe565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061417a82612d45565b915061418583612d45565b92508261419557614194614140565b5b828204905092915050565b60006141ab82612d45565b91506141b683612d45565b9250826141c6576141c5614140565b5b82820690509291505056fea264697066735822122045f871e06962561d397ef8d765ace8f1dcbb185dc50d809be49e4c8f8fec6a3e64736f6c63430008090033",
    "deployedBytecode": "0x60806040526004361061012a5760003560e01c80636352211e116100ab578063ae677aa31161006f578063ae677aa3146103f9578063b88d4fde14610415578063be9af5361461043e578063c87b56dd1461045a578063e219fc7514610497578063e985e9c5146104b35761012a565b80636352211e146102fb57806370a082311461033857806372b3b6201461037557806395d89b41146103a5578063a22cb465146103d05761012a565b806312e85585116100f257806312e8558514610228578063202e37401461025357806323b872dd1461027e57806342842e0e146102a757806345f8fa80146102d05761012a565b806301ffc9a71461012f57806306fdde031461016c578063081812fc14610197578063095ea7b3146101d45780630f08efe0146101fd575b600080fd5b34801561013b57600080fd5b5061015660048036038101906101519190612c27565b6104f0565b6040516101639190612c6f565b60405180910390f35b34801561017857600080fd5b506101816105d2565b60405161018e9190612d23565b60405180910390f35b3480156101a357600080fd5b506101be60048036038101906101b99190612d7b565b610664565b6040516101cb9190612de9565b60405180910390f35b3480156101e057600080fd5b506101fb60048036038101906101f69190612e30565b6106aa565b005b34801561020957600080fd5b506102126107c2565b60405161021f9190613044565b60405180910390f35b34801561023457600080fd5b5061023d610abd565b60405161024a9190613075565b60405180910390f35b34801561025f57600080fd5b50610268610ac7565b6040516102759190613044565b60405180910390f35b34801561028a57600080fd5b506102a560048036038101906102a09190613090565b610e47565b005b3480156102b357600080fd5b506102ce60048036038101906102c99190613090565b610ea7565b005b3480156102dc57600080fd5b506102e5610ec7565b6040516102f29190613044565b60405180910390f35b34801561030757600080fd5b50610322600480360381019061031d9190612d7b565b611247565b60405161032f9190612de9565b60405180910390f35b34801561034457600080fd5b5061035f600480360381019061035a91906130e3565b6112f9565b60405161036c9190613075565b60405180910390f35b61038f600480360381019061038a9190613245565b6113b1565b60405161039c9190613075565b60405180910390f35b3480156103b157600080fd5b506103ba6113f4565b6040516103c79190612d23565b60405180910390f35b3480156103dc57600080fd5b506103f760048036038101906103f291906132cd565b611486565b005b610413600480360381019061040e9190612d7b565b61149c565b005b34801561042157600080fd5b5061043c600480360381019061043791906133ae565b611536565b005b61045860048036038101906104539190612d7b565b611598565b005b34801561046657600080fd5b50610481600480360381019061047c9190612d7b565b6117d6565b60405161048e9190612d23565b60405180910390f35b6104b160048036038101906104ac9190613431565b6118e9565b005b3480156104bf57600080fd5b506104da60048036038101906104d59190613471565b611ade565b6040516104e79190612c6f565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105bb57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806105cb57506105ca82611b72565b5b9050919050565b6060600080546105e1906134e0565b80601f016020809104026020016040519081016040528092919081815260200182805461060d906134e0565b801561065a5780601f1061062f5761010080835404028352916020019161065a565b820191906000526020600020905b81548152906001019060200180831161063d57829003601f168201915b5050505050905090565b600061066f82611bdc565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006106b582611247565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610726576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071d90613584565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610745611c27565b73ffffffffffffffffffffffffffffffffffffffff16148061077457506107738161076e611c27565b611ade565b5b6107b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107aa90613616565b60405180910390fd5b6107bd8383611c2f565b505050565b606060006107d06007611ce8565b905060006107de6008611ce8565b6107e86007611ce8565b6107f29190613665565b90506000808267ffffffffffffffff8111156108115761081061311a565b5b60405190808252806020026020018201604052801561084a57816020015b610837612ab4565b81526020019060019003908161082f5790505b50905060005b84811015610ab2573073ffffffffffffffffffffffffffffffffffffffff16600b60006001846108809190613699565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610a9f5760006001826108dd9190613699565b90506000600b60008381526020019081526020016000209050806040518060c0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff161515151581526020016005820180546109ed906134e0565b80601f0160208091040260200160405190810160405280929190818152602001828054610a19906134e0565b8015610a665780601f10610a3b57610100808354040283529160200191610a66565b820191906000526020600020905b815481529060010190602001808311610a4957829003601f168201915b505050505081525050848681518110610a8257610a816136ef565b5b6020026020010181905250600185610a9a9190613699565b945050505b8080610aaa9061371e565b915050610850565b508094505050505090565b6000600954905090565b60606000610ad56007611ce8565b905060008060005b83811015610b7e573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610b0d9190613699565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610b6b57600183610b689190613699565b92505b8080610b769061371e565b915050610add565b5060008267ffffffffffffffff811115610b9b57610b9a61311a565b5b604051908082528060200260200182016040528015610bd457816020015b610bc1612ab4565b815260200190600190039081610bb95790505b50905060005b84811015610e3c573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610c0a9190613699565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610e29576000600182610c679190613699565b90506000600b60008381526020019081526020016000209050806040518060c0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff16151515158152602001600582018054610d77906134e0565b80601f0160208091040260200160405190810160405280929190818152602001828054610da3906134e0565b8015610df05780601f10610dc557610100808354040283529160200191610df0565b820191906000526020600020905b815481529060010190602001808311610dd357829003601f168201915b505050505081525050848681518110610e0c57610e0b6136ef565b5b6020026020010181905250600185610e249190613699565b945050505b8080610e349061371e565b915050610bda565b508094505050505090565b610e58610e52611c27565b82611cf6565b610e97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8e906137d9565b60405180910390fd5b610ea2838383611d8b565b505050565b610ec283838360405180602001604052806000815250611536565b505050565b60606000610ed56007611ce8565b905060008060005b83811015610f7e573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610f0d9190613699565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610f6b57600183610f689190613699565b92505b8080610f769061371e565b915050610edd565b5060008267ffffffffffffffff811115610f9b57610f9a61311a565b5b604051908082528060200260200182016040528015610fd457816020015b610fc1612ab4565b815260200190600190039081610fb95790505b50905060005b8481101561123c573373ffffffffffffffffffffffffffffffffffffffff16600b600060018461100a9190613699565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156112295760006001826110679190613699565b90506000600b60008381526020019081526020016000209050806040518060c0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff16151515158152602001600582018054611177906134e0565b80601f01602080910402602001604051908101604052809291908181526020018280546111a3906134e0565b80156111f05780601f106111c5576101008083540402835291602001916111f0565b820191906000526020600020905b8154815290600101906020018083116111d357829003601f168201915b50505050508152505084868151811061120c5761120b6136ef565b5b60200260200101819052506001856112249190613699565b945050505b80806112349061371e565b915050610fda565b508094505050505090565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156112f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e790613845565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561136a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611361906138d7565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006113bd6007611ff2565b60006113c96007611ce8565b90506113d53382612008565b6113df81856121e2565b6113ea818486612256565b8091505092915050565b606060018054611403906134e0565b80601f016020809104026020016040519081016040528092919081815260200182805461142f906134e0565b801561147c5780601f106114515761010080835404028352916020019161147c565b820191906000526020600020905b81548152906001019060200180831161145f57829003601f168201915b5050505050905090565b611498611491611c27565b838361247f565b5050565b3373ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461152c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161152390613969565b60405180910390fd5b8060098190555050565b611547611541611c27565b83611cf6565b611586576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157d906137d9565b60405180910390fd5b611592848484846125ec565b50505050565b6000600b60008381526020019081526020016000206003015490506000600b600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050813414611630576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611627906139fb565b60405180910390fd5b33600b600085815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600b600085815260200190815260200160002060040160006101000a81548160ff0219169083151502179055506000600b600085815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506117146008611ff2565b61171f303385611d8b565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6009549081150290604051600060405180830381858888f19350505050158015611789573d6000803e3d6000fd5b508073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156117d0573d6000803e3d6000fd5b50505050565b60606117e182611bdc565b6000600660008481526020019081526020016000208054611801906134e0565b80601f016020809104026020016040519081016040528092919081815260200182805461182d906134e0565b801561187a5780601f1061184f5761010080835404028352916020019161187a565b820191906000526020600020905b81548152906001019060200180831161185d57829003601f168201915b50505050509050600061188b612648565b90506000815114156118a15781925050506118e4565b6000825111156118d65780826040516020016118be929190613a57565b604051602081830303815290604052925050506118e4565b6118df8461265f565b925050505b919050565b3373ffffffffffffffffffffffffffffffffffffffff16600b600084815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461198d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198490613aed565b60405180910390fd5b60095434146119d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119c890613b7f565b60405180910390fd5b6000600b600084815260200190815260200160002060040160006101000a81548160ff02191690831515021790555080600b60008481526020019081526020016000206003018190555033600b600084815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555030600b600084815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611acf60086126c7565b611ada333084611d8b565b5050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611be581612723565b611c24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c1b90613845565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611ca283611247565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081600001549050919050565b600080611d0283611247565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611d445750611d438185611ade565b5b80611d8257508373ffffffffffffffffffffffffffffffffffffffff16611d6a84610664565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611dab82611247565b73ffffffffffffffffffffffffffffffffffffffff1614611e01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611df890613c11565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611e71576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e6890613ca3565b60405180910390fd5b611e7c83838361278f565b611e87600082611c2f565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611ed79190613665565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611f2e9190613699565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611fed838383612794565b505050565b6001816000016000828254019250508190555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612078576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161206f90613d0f565b60405180910390fd5b61208181612723565b156120c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120b890613d7b565b60405180910390fd5b6120cd6000838361278f565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461211d9190613699565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46121de60008383612794565b5050565b6121eb82612723565b61222a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161222190613e0d565b60405180910390fd5b80600660008481526020019081526020016000209080519060200190612251929190612b18565b505050565b60008211612299576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161229090613e79565b60405180910390fd5b60095434146122dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122d490613b7f565b60405180910390fd5b6040518060c001604052808481526020013373ffffffffffffffffffffffffffffffffffffffff1681526020013073ffffffffffffffffffffffffffffffffffffffff16815260200183815260200160001515815260200182815250600b60008581526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555060a082015181600501908051906020019061242a929190612b18565b50905050612439333085611d8b565b827fddaeb01fb1ddce9789e64660541353c5a90fdd3e87ad074757173128396df021333085600086604051612472959493929190613e99565b60405180910390a2505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156124ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124e590613f3f565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516125df9190612c6f565b60405180910390a3505050565b6125f7848484611d8b565b61260384848484612799565b612642576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161263990613fd1565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061266a82611bdc565b6000612674612648565b9050600081511161269457604051806020016040528060008152506126bf565b8061269e84612930565b6040516020016126af929190613a57565b6040516020818303038152906040525b915050919050565b60008160000154905060008111612713576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161270a9061403d565b60405180910390fd5b6001810382600001819055505050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006127ba8473ffffffffffffffffffffffffffffffffffffffff16612a91565b15612923578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026127e3611c27565b8786866040518563ffffffff1660e01b815260040161280594939291906140b2565b602060405180830381600087803b15801561281f57600080fd5b505af192505050801561285057506040513d601f19601f8201168201806040525081019061284d9190614113565b60015b6128d3573d8060008114612880576040519150601f19603f3d011682016040523d82523d6000602084013e612885565b606091505b506000815114156128cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128c290613fd1565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050612928565b600190505b949350505050565b60606000821415612978576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050612a8c565b600082905060005b600082146129aa5780806129939061371e565b915050600a826129a3919061416f565b9150612980565b60008167ffffffffffffffff8111156129c6576129c561311a565b5b6040519080825280601f01601f1916602001820160405280156129f85781602001600182028036833780820191505090505b5090505b60008514612a8557600182612a119190613665565b9150600a85612a2091906141a0565b6030612a2c9190613699565b60f81b818381518110612a4257612a416136ef565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85612a7e919061416f565b94506129fc565b8093505050505b919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6040518060c0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600015158152602001606081525090565b828054612b24906134e0565b90600052602060002090601f016020900481019282612b465760008555612b8d565b82601f10612b5f57805160ff1916838001178555612b8d565b82800160010185558215612b8d579182015b82811115612b8c578251825591602001919060010190612b71565b5b509050612b9a9190612b9e565b5090565b5b80821115612bb7576000816000905550600101612b9f565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612c0481612bcf565b8114612c0f57600080fd5b50565b600081359050612c2181612bfb565b92915050565b600060208284031215612c3d57612c3c612bc5565b5b6000612c4b84828501612c12565b91505092915050565b60008115159050919050565b612c6981612c54565b82525050565b6000602082019050612c846000830184612c60565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612cc4578082015181840152602081019050612ca9565b83811115612cd3576000848401525b50505050565b6000601f19601f8301169050919050565b6000612cf582612c8a565b612cff8185612c95565b9350612d0f818560208601612ca6565b612d1881612cd9565b840191505092915050565b60006020820190508181036000830152612d3d8184612cea565b905092915050565b6000819050919050565b612d5881612d45565b8114612d6357600080fd5b50565b600081359050612d7581612d4f565b92915050565b600060208284031215612d9157612d90612bc5565b5b6000612d9f84828501612d66565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612dd382612da8565b9050919050565b612de381612dc8565b82525050565b6000602082019050612dfe6000830184612dda565b92915050565b612e0d81612dc8565b8114612e1857600080fd5b50565b600081359050612e2a81612e04565b92915050565b60008060408385031215612e4757612e46612bc5565b5b6000612e5585828601612e1b565b9250506020612e6685828601612d66565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612ea581612d45565b82525050565b6000612eb682612da8565b9050919050565b612ec681612eab565b82525050565b612ed581612c54565b82525050565b600082825260208201905092915050565b6000612ef782612c8a565b612f018185612edb565b9350612f11818560208601612ca6565b612f1a81612cd9565b840191505092915050565b600060c083016000830151612f3d6000860182612e9c565b506020830151612f506020860182612ebd565b506040830151612f636040860182612ebd565b506060830151612f766060860182612e9c565b506080830151612f896080860182612ecc565b5060a083015184820360a0860152612fa18282612eec565b9150508091505092915050565b6000612fba8383612f25565b905092915050565b6000602082019050919050565b6000612fda82612e70565b612fe48185612e7b565b935083602082028501612ff685612e8c565b8060005b8581101561303257848403895281516130138582612fae565b945061301e83612fc2565b925060208a01995050600181019050612ffa565b50829750879550505050505092915050565b6000602082019050818103600083015261305e8184612fcf565b905092915050565b61306f81612d45565b82525050565b600060208201905061308a6000830184613066565b92915050565b6000806000606084860312156130a9576130a8612bc5565b5b60006130b786828701612e1b565b93505060206130c886828701612e1b565b92505060406130d986828701612d66565b9150509250925092565b6000602082840312156130f9576130f8612bc5565b5b600061310784828501612e1b565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61315282612cd9565b810181811067ffffffffffffffff821117156131715761317061311a565b5b80604052505050565b6000613184612bbb565b90506131908282613149565b919050565b600067ffffffffffffffff8211156131b0576131af61311a565b5b6131b982612cd9565b9050602081019050919050565b82818337600083830152505050565b60006131e86131e384613195565b61317a565b90508281526020810184848401111561320457613203613115565b5b61320f8482856131c6565b509392505050565b600082601f83011261322c5761322b613110565b5b813561323c8482602086016131d5565b91505092915050565b6000806040838503121561325c5761325b612bc5565b5b600083013567ffffffffffffffff81111561327a57613279612bca565b5b61328685828601613217565b925050602061329785828601612d66565b9150509250929050565b6132aa81612c54565b81146132b557600080fd5b50565b6000813590506132c7816132a1565b92915050565b600080604083850312156132e4576132e3612bc5565b5b60006132f285828601612e1b565b9250506020613303858286016132b8565b9150509250929050565b600067ffffffffffffffff8211156133285761332761311a565b5b61333182612cd9565b9050602081019050919050565b600061335161334c8461330d565b61317a565b90508281526020810184848401111561336d5761336c613115565b5b6133788482856131c6565b509392505050565b600082601f83011261339557613394613110565b5b81356133a584826020860161333e565b91505092915050565b600080600080608085870312156133c8576133c7612bc5565b5b60006133d687828801612e1b565b94505060206133e787828801612e1b565b93505060406133f887828801612d66565b925050606085013567ffffffffffffffff81111561341957613418612bca565b5b61342587828801613380565b91505092959194509250565b6000806040838503121561344857613447612bc5565b5b600061345685828601612d66565b925050602061346785828601612d66565b9150509250929050565b6000806040838503121561348857613487612bc5565b5b600061349685828601612e1b565b92505060206134a785828601612e1b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806134f857607f821691505b6020821081141561350c5761350b6134b1565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061356e602183612c95565b915061357982613512565b604082019050919050565b6000602082019050818103600083015261359d81613561565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000613600603e83612c95565b915061360b826135a4565b604082019050919050565b6000602082019050818103600083015261362f816135f3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061367082612d45565b915061367b83612d45565b92508282101561368e5761368d613636565b5b828203905092915050565b60006136a482612d45565b91506136af83612d45565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156136e4576136e3613636565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061372982612d45565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561375c5761375b613636565b5b600182019050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b60006137c3602e83612c95565b91506137ce82613767565b604082019050919050565b600060208201905081810360008301526137f2816137b6565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b600061382f601883612c95565b915061383a826137f9565b602082019050919050565b6000602082019050818103600083015261385e81613822565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006138c1602983612c95565b91506138cc82613865565b604082019050919050565b600060208201905081810360008301526138f0816138b4565b9050919050565b7f4f6e6c79206d61726b6574706c616365206f776e65722063616e20757064617460008201527f65206c697374696e672070726963652e00000000000000000000000000000000602082015250565b6000613953603083612c95565b915061395e826138f7565b604082019050919050565b6000602082019050818103600083015261398281613946565b9050919050565b7f506c65617365207375626d6974207468652061736b696e67207072696365206960008201527f6e206f7264657220746f20636f6d706c65746520746865207075726368617365602082015250565b60006139e5604083612c95565b91506139f082613989565b604082019050919050565b60006020820190508181036000830152613a14816139d8565b9050919050565b600081905092915050565b6000613a3182612c8a565b613a3b8185613a1b565b9350613a4b818560208601612ca6565b80840191505092915050565b6000613a638285613a26565b9150613a6f8284613a26565b91508190509392505050565b7f4f6e6c79206974656d206f776e65722063616e20706572666f726d207468697360008201527f206f7065726174696f6e00000000000000000000000000000000000000000000602082015250565b6000613ad7602a83612c95565b9150613ae282613a7b565b604082019050919050565b60006020820190508181036000830152613b0681613aca565b9050919050565b7f5072696365206d75737420626520657175616c20746f206c697374696e67207060008201527f7269636500000000000000000000000000000000000000000000000000000000602082015250565b6000613b69602483612c95565b9150613b7482613b0d565b604082019050919050565b60006020820190508181036000830152613b9881613b5c565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000613bfb602583612c95565b9150613c0682613b9f565b604082019050919050565b60006020820190508181036000830152613c2a81613bee565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000613c8d602483612c95565b9150613c9882613c31565b604082019050919050565b60006020820190508181036000830152613cbc81613c80565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000613cf9602083612c95565b9150613d0482613cc3565b602082019050919050565b60006020820190508181036000830152613d2881613cec565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000613d65601c83612c95565b9150613d7082613d2f565b602082019050919050565b60006020820190508181036000830152613d9481613d58565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000613df7602e83612c95565b9150613e0282613d9b565b604082019050919050565b60006020820190508181036000830152613e2681613dea565b9050919050565b7f5072696365206d757374206265206174206c6561737420312077656900000000600082015250565b6000613e63601c83612c95565b9150613e6e82613e2d565b602082019050919050565b60006020820190508181036000830152613e9281613e56565b9050919050565b600060a082019050613eae6000830188612dda565b613ebb6020830187612dda565b613ec86040830186613066565b613ed56060830185612c60565b8181036080830152613ee78184612cea565b90509695505050505050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000613f29601983612c95565b9150613f3482613ef3565b602082019050919050565b60006020820190508181036000830152613f5881613f1c565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000613fbb603283612c95565b9150613fc682613f5f565b604082019050919050565b60006020820190508181036000830152613fea81613fae565b9050919050565b7f436f756e7465723a2064656372656d656e74206f766572666c6f770000000000600082015250565b6000614027601b83612c95565b915061403282613ff1565b602082019050919050565b600060208201905081810360008301526140568161401a565b9050919050565b600081519050919050565b600082825260208201905092915050565b60006140848261405d565b61408e8185614068565b935061409e818560208601612ca6565b6140a781612cd9565b840191505092915050565b60006080820190506140c76000830187612dda565b6140d46020830186612dda565b6140e16040830185613066565b81810360608301526140f38184614079565b905095945050505050565b60008151905061410d81612bfb565b92915050565b60006020828403121561412957614128612bc5565b5b6000614137848285016140fe565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061417a82612d45565b915061418583612d45565b92508261419557614194614140565b5b828204905092915050565b60006141ab82612d45565b91506141b683612d45565b9250826141c6576141c5614140565b5b82820690509291505056fea264697066735822122045f871e06962561d397ef8d765ace8f1dcbb185dc50d809be49e4c8f8fec6a3e64736f6c63430008090033",
    "linkReferences": {},
    "deployedLinkReferences": {}
};  