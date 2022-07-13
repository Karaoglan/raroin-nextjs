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
    "bytecode": "0x60806040526658d15e176280006009553480156200001c57600080fd5b506040518060400160405280601081526020017f4d657461766572736520546f6b656e73000000000000000000000000000000008152506040518060400160405280600481526020017f4d455454000000000000000000000000000000000000000000000000000000008152508160009080519060200190620000a192919062000104565b508060019080519060200190620000ba92919062000104565b50505033600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000219565b8280546200011290620001e3565b90600052602060002090601f01602090048101928262000136576000855562000182565b82601f106200015157805160ff191683800117855562000182565b8280016001018555821562000182579182015b828111156200018157825182559160200191906001019062000164565b5b50905062000191919062000195565b5090565b5b80821115620001b057600081600090555060010162000196565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001fc57607f821691505b60208210811415620002135762000212620001b4565b5b50919050565b613f9080620002296000396000f3fe60806040526004361061012a5760003560e01c80636352211e116100ab578063ae677aa31161006f578063ae677aa3146103f9578063b88d4fde14610415578063be9af5361461043e578063c87b56dd1461045a578063e219fc7514610497578063e985e9c5146104b35761012a565b80636352211e146102fb57806370a082311461033857806372b3b6201461037557806395d89b41146103a5578063a22cb465146103d05761012a565b806312e85585116100f257806312e8558514610228578063202e37401461025357806323b872dd1461027e57806342842e0e146102a757806345f8fa80146102d05761012a565b806301ffc9a71461012f57806306fdde031461016c578063081812fc14610197578063095ea7b3146101d45780630f08efe0146101fd575b600080fd5b34801561013b57600080fd5b5061015660048036038101906101519190612a43565b6104f0565b6040516101639190612a8b565b60405180910390f35b34801561017857600080fd5b506101816105d2565b60405161018e9190612b3f565b60405180910390f35b3480156101a357600080fd5b506101be60048036038101906101b99190612b97565b610664565b6040516101cb9190612c05565b60405180910390f35b3480156101e057600080fd5b506101fb60048036038101906101f69190612c4c565b6106aa565b005b34801561020957600080fd5b506102126107c2565b60405161021f9190612de2565b60405180910390f35b34801561023457600080fd5b5061023d610a2b565b60405161024a9190612e13565b60405180910390f35b34801561025f57600080fd5b50610268610a35565b6040516102759190612de2565b60405180910390f35b34801561028a57600080fd5b506102a560048036038101906102a09190612e2e565b610d23565b005b3480156102b357600080fd5b506102ce60048036038101906102c99190612e2e565b610d83565b005b3480156102dc57600080fd5b506102e5610da3565b6040516102f29190612de2565b60405180910390f35b34801561030757600080fd5b50610322600480360381019061031d9190612b97565b611091565b60405161032f9190612c05565b60405180910390f35b34801561034457600080fd5b5061035f600480360381019061035a9190612e81565b611143565b60405161036c9190612e13565b60405180910390f35b61038f600480360381019061038a9190612fe3565b6111fb565b60405161039c9190612e13565b60405180910390f35b3480156103b157600080fd5b506103ba61123d565b6040516103c79190612b3f565b60405180910390f35b3480156103dc57600080fd5b506103f760048036038101906103f2919061306b565b6112cf565b005b610413600480360381019061040e9190612b97565b6112e5565b005b34801561042157600080fd5b5061043c6004803603810190610437919061314c565b61137f565b005b61045860048036038101906104539190612b97565b6113e1565b005b34801561046657600080fd5b50610481600480360381019061047c9190612b97565b61161f565b60405161048e9190612b3f565b60405180910390f35b6104b160048036038101906104ac91906131cf565b611732565b005b3480156104bf57600080fd5b506104da60048036038101906104d5919061320f565b611927565b6040516104e79190612a8b565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105bb57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806105cb57506105ca826119bb565b5b9050919050565b6060600080546105e19061327e565b80601f016020809104026020016040519081016040528092919081815260200182805461060d9061327e565b801561065a5780601f1061062f5761010080835404028352916020019161065a565b820191906000526020600020905b81548152906001019060200180831161063d57829003601f168201915b5050505050905090565b600061066f82611a25565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006106b582611091565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610726576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071d90613322565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610745611a70565b73ffffffffffffffffffffffffffffffffffffffff16148061077457506107738161076e611a70565b611927565b5b6107b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107aa906133b4565b60405180910390fd5b6107bd8383611a78565b505050565b606060006107d06007611b31565b905060006107de6008611b31565b6107e86007611b31565b6107f29190613403565b90506000808267ffffffffffffffff81111561081157610810612eb8565b5b60405190808252806020026020018201604052801561084a57816020015b6108376128d7565b81526020019060019003908161082f5790505b50905060005b84811015610a20573073ffffffffffffffffffffffffffffffffffffffff16600b60006001846108809190613437565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610a0d5760006001826108dd9190613437565b90506000600b60008381526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff1615151515815250508486815181106109f0576109ef61348d565b5b6020026020010181905250600185610a089190613437565b945050505b8080610a18906134bc565b915050610850565b508094505050505090565b6000600954905090565b60606000610a436007611b31565b905060008060005b83811015610aec573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610a7b9190613437565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610ad957600183610ad69190613437565b92505b8080610ae4906134bc565b915050610a4b565b5060008267ffffffffffffffff811115610b0957610b08612eb8565b5b604051908082528060200260200182016040528015610b4257816020015b610b2f6128d7565b815260200190600190039081610b275790505b50905060005b84811015610d18573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610b789190613437565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610d05576000600182610bd59190613437565b90506000600b60008381526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff161515151581525050848681518110610ce857610ce761348d565b5b6020026020010181905250600185610d009190613437565b945050505b8080610d10906134bc565b915050610b48565b508094505050505090565b610d34610d2e611a70565b82611b3f565b610d73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6a90613577565b60405180910390fd5b610d7e838383611bd4565b505050565b610d9e8383836040518060200160405280600081525061137f565b505050565b60606000610db16007611b31565b905060008060005b83811015610e5a573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610de99190613437565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610e4757600183610e449190613437565b92505b8080610e52906134bc565b915050610db9565b5060008267ffffffffffffffff811115610e7757610e76612eb8565b5b604051908082528060200260200182016040528015610eb057816020015b610e9d6128d7565b815260200190600190039081610e955790505b50905060005b84811015611086573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610ee69190613437565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611073576000600182610f439190613437565b90506000600b60008381526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff1615151515815250508486815181106110565761105561348d565b5b602002602001018190525060018561106e9190613437565b945050505b808061107e906134bc565b915050610eb6565b508094505050505090565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561113a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611131906135e3565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156111b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ab90613675565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006112076007611e3b565b60006112136007611b31565b905061121f3382611e51565b611229818561202b565b611233818461209f565b8091505092915050565b60606001805461124c9061327e565b80601f01602080910402602001604051908101604052809291908181526020018280546112789061327e565b80156112c55780601f1061129a576101008083540402835291602001916112c5565b820191906000526020600020905b8154815290600101906020018083116112a857829003601f168201915b5050505050905090565b6112e16112da611a70565b83836122a2565b5050565b3373ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611375576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136c90613707565b60405180910390fd5b8060098190555050565b61139061138a611a70565b83611b3f565b6113cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c690613577565b60405180910390fd5b6113db8484848461240f565b50505050565b6000600b60008381526020019081526020016000206003015490506000600b600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050813414611479576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161147090613799565b60405180910390fd5b33600b600085815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600b600085815260200190815260200160002060040160006101000a81548160ff0219169083151502179055506000600b600085815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061155d6008611e3b565b611568303385611bd4565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6009549081150290604051600060405180830381858888f193505050501580156115d2573d6000803e3d6000fd5b508073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015611619573d6000803e3d6000fd5b50505050565b606061162a82611a25565b600060066000848152602001908152602001600020805461164a9061327e565b80601f01602080910402602001604051908101604052809291908181526020018280546116769061327e565b80156116c35780601f10611698576101008083540402835291602001916116c3565b820191906000526020600020905b8154815290600101906020018083116116a657829003601f168201915b5050505050905060006116d461246b565b90506000815114156116ea57819250505061172d565b60008251111561171f5780826040516020016117079291906137f5565b6040516020818303038152906040529250505061172d565b61172884612482565b925050505b919050565b3373ffffffffffffffffffffffffffffffffffffffff16600b600084815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146117d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117cd9061388b565b60405180910390fd5b600954341461181a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118119061391d565b60405180910390fd5b6000600b600084815260200190815260200160002060040160006101000a81548160ff02191690831515021790555080600b60008481526020019081526020016000206003018190555033600b600084815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555030600b600084815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061191860086124ea565b611923333084611bd4565b5050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611a2e81612546565b611a6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a64906135e3565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611aeb83611091565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081600001549050919050565b600080611b4b83611091565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611b8d5750611b8c8185611927565b5b80611bcb57508373ffffffffffffffffffffffffffffffffffffffff16611bb384610664565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611bf482611091565b73ffffffffffffffffffffffffffffffffffffffff1614611c4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c41906139af565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611cba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cb190613a41565b60405180910390fd5b611cc58383836125b2565b611cd0600082611a78565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611d209190613403565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611d779190613437565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611e368383836125b7565b505050565b6001816000016000828254019250508190555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611ec1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611eb890613aad565b60405180910390fd5b611eca81612546565b15611f0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f0190613b19565b60405180910390fd5b611f16600083836125b2565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611f669190613437565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612027600083836125b7565b5050565b61203482612546565b612073576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161206a90613bab565b60405180910390fd5b8060066000848152602001908152602001600020908051906020019061209a929190612934565b505050565b600081116120e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120d990613c17565b60405180910390fd5b6009543414612126576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161211d9061391d565b60405180910390fd5b6040518060a001604052808381526020013373ffffffffffffffffffffffffffffffffffffffff1681526020013073ffffffffffffffffffffffffffffffffffffffff16815260200182815260200160001515815250600b60008481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555090505061225f333084611bd4565b817fb640004f1d14576d0c209e240cad0410e0d8c0c33a09375861fbadae2588a98d33308460006040516122969493929190613c37565b60405180910390a25050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612311576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161230890613cc8565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516124029190612a8b565b60405180910390a3505050565b61241a848484611bd4565b612426848484846125bc565b612465576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161245c90613d5a565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061248d82611a25565b600061249761246b565b905060008151116124b757604051806020016040528060008152506124e2565b806124c184612753565b6040516020016124d29291906137f5565b6040516020818303038152906040525b915050919050565b60008160000154905060008111612536576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161252d90613dc6565b60405180910390fd5b6001810382600001819055505050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006125dd8473ffffffffffffffffffffffffffffffffffffffff166128b4565b15612746578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02612606611a70565b8786866040518563ffffffff1660e01b81526004016126289493929190613e3b565b602060405180830381600087803b15801561264257600080fd5b505af192505050801561267357506040513d601f19601f820116820180604052508101906126709190613e9c565b60015b6126f6573d80600081146126a3576040519150601f19603f3d011682016040523d82523d6000602084013e6126a8565b606091505b506000815114156126ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126e590613d5a565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061274b565b600190505b949350505050565b6060600082141561279b576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506128af565b600082905060005b600082146127cd5780806127b6906134bc565b915050600a826127c69190613ef8565b91506127a3565b60008167ffffffffffffffff8111156127e9576127e8612eb8565b5b6040519080825280601f01601f19166020018201604052801561281b5781602001600182028036833780820191505090505b5090505b600085146128a8576001826128349190613403565b9150600a856128439190613f29565b603061284f9190613437565b60f81b8183815181106128655761286461348d565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856128a19190613ef8565b945061281f565b8093505050505b919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6040518060a0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000151581525090565b8280546129409061327e565b90600052602060002090601f01602090048101928261296257600085556129a9565b82601f1061297b57805160ff19168380011785556129a9565b828001600101855582156129a9579182015b828111156129a857825182559160200191906001019061298d565b5b5090506129b691906129ba565b5090565b5b808211156129d35760008160009055506001016129bb565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612a20816129eb565b8114612a2b57600080fd5b50565b600081359050612a3d81612a17565b92915050565b600060208284031215612a5957612a586129e1565b5b6000612a6784828501612a2e565b91505092915050565b60008115159050919050565b612a8581612a70565b82525050565b6000602082019050612aa06000830184612a7c565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612ae0578082015181840152602081019050612ac5565b83811115612aef576000848401525b50505050565b6000601f19601f8301169050919050565b6000612b1182612aa6565b612b1b8185612ab1565b9350612b2b818560208601612ac2565b612b3481612af5565b840191505092915050565b60006020820190508181036000830152612b598184612b06565b905092915050565b6000819050919050565b612b7481612b61565b8114612b7f57600080fd5b50565b600081359050612b9181612b6b565b92915050565b600060208284031215612bad57612bac6129e1565b5b6000612bbb84828501612b82565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612bef82612bc4565b9050919050565b612bff81612be4565b82525050565b6000602082019050612c1a6000830184612bf6565b92915050565b612c2981612be4565b8114612c3457600080fd5b50565b600081359050612c4681612c20565b92915050565b60008060408385031215612c6357612c626129e1565b5b6000612c7185828601612c37565b9250506020612c8285828601612b82565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612cc181612b61565b82525050565b6000612cd282612bc4565b9050919050565b612ce281612cc7565b82525050565b612cf181612a70565b82525050565b60a082016000820151612d0d6000850182612cb8565b506020820151612d206020850182612cd9565b506040820151612d336040850182612cd9565b506060820151612d466060850182612cb8565b506080820151612d596080850182612ce8565b50505050565b6000612d6b8383612cf7565b60a08301905092915050565b6000602082019050919050565b6000612d8f82612c8c565b612d998185612c97565b9350612da483612ca8565b8060005b83811015612dd5578151612dbc8882612d5f565b9750612dc783612d77565b925050600181019050612da8565b5085935050505092915050565b60006020820190508181036000830152612dfc8184612d84565b905092915050565b612e0d81612b61565b82525050565b6000602082019050612e286000830184612e04565b92915050565b600080600060608486031215612e4757612e466129e1565b5b6000612e5586828701612c37565b9350506020612e6686828701612c37565b9250506040612e7786828701612b82565b9150509250925092565b600060208284031215612e9757612e966129e1565b5b6000612ea584828501612c37565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612ef082612af5565b810181811067ffffffffffffffff82111715612f0f57612f0e612eb8565b5b80604052505050565b6000612f226129d7565b9050612f2e8282612ee7565b919050565b600067ffffffffffffffff821115612f4e57612f4d612eb8565b5b612f5782612af5565b9050602081019050919050565b82818337600083830152505050565b6000612f86612f8184612f33565b612f18565b905082815260208101848484011115612fa257612fa1612eb3565b5b612fad848285612f64565b509392505050565b600082601f830112612fca57612fc9612eae565b5b8135612fda848260208601612f73565b91505092915050565b60008060408385031215612ffa57612ff96129e1565b5b600083013567ffffffffffffffff811115613018576130176129e6565b5b61302485828601612fb5565b925050602061303585828601612b82565b9150509250929050565b61304881612a70565b811461305357600080fd5b50565b6000813590506130658161303f565b92915050565b60008060408385031215613082576130816129e1565b5b600061309085828601612c37565b92505060206130a185828601613056565b9150509250929050565b600067ffffffffffffffff8211156130c6576130c5612eb8565b5b6130cf82612af5565b9050602081019050919050565b60006130ef6130ea846130ab565b612f18565b90508281526020810184848401111561310b5761310a612eb3565b5b613116848285612f64565b509392505050565b600082601f83011261313357613132612eae565b5b81356131438482602086016130dc565b91505092915050565b60008060008060808587031215613166576131656129e1565b5b600061317487828801612c37565b945050602061318587828801612c37565b935050604061319687828801612b82565b925050606085013567ffffffffffffffff8111156131b7576131b66129e6565b5b6131c38782880161311e565b91505092959194509250565b600080604083850312156131e6576131e56129e1565b5b60006131f485828601612b82565b925050602061320585828601612b82565b9150509250929050565b60008060408385031215613226576132256129e1565b5b600061323485828601612c37565b925050602061324585828601612c37565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061329657607f821691505b602082108114156132aa576132a961324f565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061330c602183612ab1565b9150613317826132b0565b604082019050919050565b6000602082019050818103600083015261333b816132ff565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b600061339e603e83612ab1565b91506133a982613342565b604082019050919050565b600060208201905081810360008301526133cd81613391565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061340e82612b61565b915061341983612b61565b92508282101561342c5761342b6133d4565b5b828203905092915050565b600061344282612b61565b915061344d83612b61565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115613482576134816133d4565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006134c782612b61565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156134fa576134f96133d4565b5b600182019050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000613561602e83612ab1565b915061356c82613505565b604082019050919050565b6000602082019050818103600083015261359081613554565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006135cd601883612ab1565b91506135d882613597565b602082019050919050565b600060208201905081810360008301526135fc816135c0565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b600061365f602983612ab1565b915061366a82613603565b604082019050919050565b6000602082019050818103600083015261368e81613652565b9050919050565b7f4f6e6c79206d61726b6574706c616365206f776e65722063616e20757064617460008201527f65206c697374696e672070726963652e00000000000000000000000000000000602082015250565b60006136f1603083612ab1565b91506136fc82613695565b604082019050919050565b60006020820190508181036000830152613720816136e4565b9050919050565b7f506c65617365207375626d6974207468652061736b696e67207072696365206960008201527f6e206f7264657220746f20636f6d706c65746520746865207075726368617365602082015250565b6000613783604083612ab1565b915061378e82613727565b604082019050919050565b600060208201905081810360008301526137b281613776565b9050919050565b600081905092915050565b60006137cf82612aa6565b6137d981856137b9565b93506137e9818560208601612ac2565b80840191505092915050565b600061380182856137c4565b915061380d82846137c4565b91508190509392505050565b7f4f6e6c79206974656d206f776e65722063616e20706572666f726d207468697360008201527f206f7065726174696f6e00000000000000000000000000000000000000000000602082015250565b6000613875602a83612ab1565b915061388082613819565b604082019050919050565b600060208201905081810360008301526138a481613868565b9050919050565b7f5072696365206d75737420626520657175616c20746f206c697374696e67207060008201527f7269636500000000000000000000000000000000000000000000000000000000602082015250565b6000613907602483612ab1565b9150613912826138ab565b604082019050919050565b60006020820190508181036000830152613936816138fa565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000613999602583612ab1565b91506139a48261393d565b604082019050919050565b600060208201905081810360008301526139c88161398c565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000613a2b602483612ab1565b9150613a36826139cf565b604082019050919050565b60006020820190508181036000830152613a5a81613a1e565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000613a97602083612ab1565b9150613aa282613a61565b602082019050919050565b60006020820190508181036000830152613ac681613a8a565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000613b03601c83612ab1565b9150613b0e82613acd565b602082019050919050565b60006020820190508181036000830152613b3281613af6565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000613b95602e83612ab1565b9150613ba082613b39565b604082019050919050565b60006020820190508181036000830152613bc481613b88565b9050919050565b7f5072696365206d757374206265206174206c6561737420312077656900000000600082015250565b6000613c01601c83612ab1565b9150613c0c82613bcb565b602082019050919050565b60006020820190508181036000830152613c3081613bf4565b9050919050565b6000608082019050613c4c6000830187612bf6565b613c596020830186612bf6565b613c666040830185612e04565b613c736060830184612a7c565b95945050505050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000613cb2601983612ab1565b9150613cbd82613c7c565b602082019050919050565b60006020820190508181036000830152613ce181613ca5565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000613d44603283612ab1565b9150613d4f82613ce8565b604082019050919050565b60006020820190508181036000830152613d7381613d37565b9050919050565b7f436f756e7465723a2064656372656d656e74206f766572666c6f770000000000600082015250565b6000613db0601b83612ab1565b9150613dbb82613d7a565b602082019050919050565b60006020820190508181036000830152613ddf81613da3565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000613e0d82613de6565b613e178185613df1565b9350613e27818560208601612ac2565b613e3081612af5565b840191505092915050565b6000608082019050613e506000830187612bf6565b613e5d6020830186612bf6565b613e6a6040830185612e04565b8181036060830152613e7c8184613e02565b905095945050505050565b600081519050613e9681612a17565b92915050565b600060208284031215613eb257613eb16129e1565b5b6000613ec084828501613e87565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000613f0382612b61565b9150613f0e83612b61565b925082613f1e57613f1d613ec9565b5b828204905092915050565b6000613f3482612b61565b9150613f3f83612b61565b925082613f4f57613f4e613ec9565b5b82820690509291505056fea26469706673582212208af8d24eb371a4a53c43a9c3625fcc3ffcde4c6124962c2e552990cd704d817664736f6c63430008090033",
    "deployedBytecode": "0x60806040526004361061012a5760003560e01c80636352211e116100ab578063ae677aa31161006f578063ae677aa3146103f9578063b88d4fde14610415578063be9af5361461043e578063c87b56dd1461045a578063e219fc7514610497578063e985e9c5146104b35761012a565b80636352211e146102fb57806370a082311461033857806372b3b6201461037557806395d89b41146103a5578063a22cb465146103d05761012a565b806312e85585116100f257806312e8558514610228578063202e37401461025357806323b872dd1461027e57806342842e0e146102a757806345f8fa80146102d05761012a565b806301ffc9a71461012f57806306fdde031461016c578063081812fc14610197578063095ea7b3146101d45780630f08efe0146101fd575b600080fd5b34801561013b57600080fd5b5061015660048036038101906101519190612a43565b6104f0565b6040516101639190612a8b565b60405180910390f35b34801561017857600080fd5b506101816105d2565b60405161018e9190612b3f565b60405180910390f35b3480156101a357600080fd5b506101be60048036038101906101b99190612b97565b610664565b6040516101cb9190612c05565b60405180910390f35b3480156101e057600080fd5b506101fb60048036038101906101f69190612c4c565b6106aa565b005b34801561020957600080fd5b506102126107c2565b60405161021f9190612de2565b60405180910390f35b34801561023457600080fd5b5061023d610a2b565b60405161024a9190612e13565b60405180910390f35b34801561025f57600080fd5b50610268610a35565b6040516102759190612de2565b60405180910390f35b34801561028a57600080fd5b506102a560048036038101906102a09190612e2e565b610d23565b005b3480156102b357600080fd5b506102ce60048036038101906102c99190612e2e565b610d83565b005b3480156102dc57600080fd5b506102e5610da3565b6040516102f29190612de2565b60405180910390f35b34801561030757600080fd5b50610322600480360381019061031d9190612b97565b611091565b60405161032f9190612c05565b60405180910390f35b34801561034457600080fd5b5061035f600480360381019061035a9190612e81565b611143565b60405161036c9190612e13565b60405180910390f35b61038f600480360381019061038a9190612fe3565b6111fb565b60405161039c9190612e13565b60405180910390f35b3480156103b157600080fd5b506103ba61123d565b6040516103c79190612b3f565b60405180910390f35b3480156103dc57600080fd5b506103f760048036038101906103f2919061306b565b6112cf565b005b610413600480360381019061040e9190612b97565b6112e5565b005b34801561042157600080fd5b5061043c6004803603810190610437919061314c565b61137f565b005b61045860048036038101906104539190612b97565b6113e1565b005b34801561046657600080fd5b50610481600480360381019061047c9190612b97565b61161f565b60405161048e9190612b3f565b60405180910390f35b6104b160048036038101906104ac91906131cf565b611732565b005b3480156104bf57600080fd5b506104da60048036038101906104d5919061320f565b611927565b6040516104e79190612a8b565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105bb57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806105cb57506105ca826119bb565b5b9050919050565b6060600080546105e19061327e565b80601f016020809104026020016040519081016040528092919081815260200182805461060d9061327e565b801561065a5780601f1061062f5761010080835404028352916020019161065a565b820191906000526020600020905b81548152906001019060200180831161063d57829003601f168201915b5050505050905090565b600061066f82611a25565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006106b582611091565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610726576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071d90613322565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610745611a70565b73ffffffffffffffffffffffffffffffffffffffff16148061077457506107738161076e611a70565b611927565b5b6107b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107aa906133b4565b60405180910390fd5b6107bd8383611a78565b505050565b606060006107d06007611b31565b905060006107de6008611b31565b6107e86007611b31565b6107f29190613403565b90506000808267ffffffffffffffff81111561081157610810612eb8565b5b60405190808252806020026020018201604052801561084a57816020015b6108376128d7565b81526020019060019003908161082f5790505b50905060005b84811015610a20573073ffffffffffffffffffffffffffffffffffffffff16600b60006001846108809190613437565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610a0d5760006001826108dd9190613437565b90506000600b60008381526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff1615151515815250508486815181106109f0576109ef61348d565b5b6020026020010181905250600185610a089190613437565b945050505b8080610a18906134bc565b915050610850565b508094505050505090565b6000600954905090565b60606000610a436007611b31565b905060008060005b83811015610aec573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610a7b9190613437565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610ad957600183610ad69190613437565b92505b8080610ae4906134bc565b915050610a4b565b5060008267ffffffffffffffff811115610b0957610b08612eb8565b5b604051908082528060200260200182016040528015610b4257816020015b610b2f6128d7565b815260200190600190039081610b275790505b50905060005b84811015610d18573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610b789190613437565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610d05576000600182610bd59190613437565b90506000600b60008381526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff161515151581525050848681518110610ce857610ce761348d565b5b6020026020010181905250600185610d009190613437565b945050505b8080610d10906134bc565b915050610b48565b508094505050505090565b610d34610d2e611a70565b82611b3f565b610d73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6a90613577565b60405180910390fd5b610d7e838383611bd4565b505050565b610d9e8383836040518060200160405280600081525061137f565b505050565b60606000610db16007611b31565b905060008060005b83811015610e5a573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610de99190613437565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610e4757600183610e449190613437565b92505b8080610e52906134bc565b915050610db9565b5060008267ffffffffffffffff811115610e7757610e76612eb8565b5b604051908082528060200260200182016040528015610eb057816020015b610e9d6128d7565b815260200190600190039081610e955790505b50905060005b84811015611086573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610ee69190613437565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611073576000600182610f439190613437565b90506000600b60008381526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff1615151515815250508486815181106110565761105561348d565b5b602002602001018190525060018561106e9190613437565b945050505b808061107e906134bc565b915050610eb6565b508094505050505090565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561113a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611131906135e3565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156111b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ab90613675565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006112076007611e3b565b60006112136007611b31565b905061121f3382611e51565b611229818561202b565b611233818461209f565b8091505092915050565b60606001805461124c9061327e565b80601f01602080910402602001604051908101604052809291908181526020018280546112789061327e565b80156112c55780601f1061129a576101008083540402835291602001916112c5565b820191906000526020600020905b8154815290600101906020018083116112a857829003601f168201915b5050505050905090565b6112e16112da611a70565b83836122a2565b5050565b3373ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611375576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136c90613707565b60405180910390fd5b8060098190555050565b61139061138a611a70565b83611b3f565b6113cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c690613577565b60405180910390fd5b6113db8484848461240f565b50505050565b6000600b60008381526020019081526020016000206003015490506000600b600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050813414611479576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161147090613799565b60405180910390fd5b33600b600085815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600b600085815260200190815260200160002060040160006101000a81548160ff0219169083151502179055506000600b600085815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061155d6008611e3b565b611568303385611bd4565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6009549081150290604051600060405180830381858888f193505050501580156115d2573d6000803e3d6000fd5b508073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015611619573d6000803e3d6000fd5b50505050565b606061162a82611a25565b600060066000848152602001908152602001600020805461164a9061327e565b80601f01602080910402602001604051908101604052809291908181526020018280546116769061327e565b80156116c35780601f10611698576101008083540402835291602001916116c3565b820191906000526020600020905b8154815290600101906020018083116116a657829003601f168201915b5050505050905060006116d461246b565b90506000815114156116ea57819250505061172d565b60008251111561171f5780826040516020016117079291906137f5565b6040516020818303038152906040529250505061172d565b61172884612482565b925050505b919050565b3373ffffffffffffffffffffffffffffffffffffffff16600b600084815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146117d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117cd9061388b565b60405180910390fd5b600954341461181a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118119061391d565b60405180910390fd5b6000600b600084815260200190815260200160002060040160006101000a81548160ff02191690831515021790555080600b60008481526020019081526020016000206003018190555033600b600084815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555030600b600084815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061191860086124ea565b611923333084611bd4565b5050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611a2e81612546565b611a6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a64906135e3565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611aeb83611091565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081600001549050919050565b600080611b4b83611091565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611b8d5750611b8c8185611927565b5b80611bcb57508373ffffffffffffffffffffffffffffffffffffffff16611bb384610664565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611bf482611091565b73ffffffffffffffffffffffffffffffffffffffff1614611c4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c41906139af565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611cba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cb190613a41565b60405180910390fd5b611cc58383836125b2565b611cd0600082611a78565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611d209190613403565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611d779190613437565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611e368383836125b7565b505050565b6001816000016000828254019250508190555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611ec1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611eb890613aad565b60405180910390fd5b611eca81612546565b15611f0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f0190613b19565b60405180910390fd5b611f16600083836125b2565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611f669190613437565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612027600083836125b7565b5050565b61203482612546565b612073576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161206a90613bab565b60405180910390fd5b8060066000848152602001908152602001600020908051906020019061209a929190612934565b505050565b600081116120e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120d990613c17565b60405180910390fd5b6009543414612126576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161211d9061391d565b60405180910390fd5b6040518060a001604052808381526020013373ffffffffffffffffffffffffffffffffffffffff1681526020013073ffffffffffffffffffffffffffffffffffffffff16815260200182815260200160001515815250600b60008481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555090505061225f333084611bd4565b817fb640004f1d14576d0c209e240cad0410e0d8c0c33a09375861fbadae2588a98d33308460006040516122969493929190613c37565b60405180910390a25050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612311576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161230890613cc8565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516124029190612a8b565b60405180910390a3505050565b61241a848484611bd4565b612426848484846125bc565b612465576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161245c90613d5a565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061248d82611a25565b600061249761246b565b905060008151116124b757604051806020016040528060008152506124e2565b806124c184612753565b6040516020016124d29291906137f5565b6040516020818303038152906040525b915050919050565b60008160000154905060008111612536576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161252d90613dc6565b60405180910390fd5b6001810382600001819055505050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006125dd8473ffffffffffffffffffffffffffffffffffffffff166128b4565b15612746578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02612606611a70565b8786866040518563ffffffff1660e01b81526004016126289493929190613e3b565b602060405180830381600087803b15801561264257600080fd5b505af192505050801561267357506040513d601f19601f820116820180604052508101906126709190613e9c565b60015b6126f6573d80600081146126a3576040519150601f19603f3d011682016040523d82523d6000602084013e6126a8565b606091505b506000815114156126ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126e590613d5a565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061274b565b600190505b949350505050565b6060600082141561279b576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506128af565b600082905060005b600082146127cd5780806127b6906134bc565b915050600a826127c69190613ef8565b91506127a3565b60008167ffffffffffffffff8111156127e9576127e8612eb8565b5b6040519080825280601f01601f19166020018201604052801561281b5781602001600182028036833780820191505090505b5090505b600085146128a8576001826128349190613403565b9150600a856128439190613f29565b603061284f9190613437565b60f81b8183815181106128655761286461348d565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856128a19190613ef8565b945061281f565b8093505050505b919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6040518060a0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000151581525090565b8280546129409061327e565b90600052602060002090601f01602090048101928261296257600085556129a9565b82601f1061297b57805160ff19168380011785556129a9565b828001600101855582156129a9579182015b828111156129a857825182559160200191906001019061298d565b5b5090506129b691906129ba565b5090565b5b808211156129d35760008160009055506001016129bb565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612a20816129eb565b8114612a2b57600080fd5b50565b600081359050612a3d81612a17565b92915050565b600060208284031215612a5957612a586129e1565b5b6000612a6784828501612a2e565b91505092915050565b60008115159050919050565b612a8581612a70565b82525050565b6000602082019050612aa06000830184612a7c565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612ae0578082015181840152602081019050612ac5565b83811115612aef576000848401525b50505050565b6000601f19601f8301169050919050565b6000612b1182612aa6565b612b1b8185612ab1565b9350612b2b818560208601612ac2565b612b3481612af5565b840191505092915050565b60006020820190508181036000830152612b598184612b06565b905092915050565b6000819050919050565b612b7481612b61565b8114612b7f57600080fd5b50565b600081359050612b9181612b6b565b92915050565b600060208284031215612bad57612bac6129e1565b5b6000612bbb84828501612b82565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612bef82612bc4565b9050919050565b612bff81612be4565b82525050565b6000602082019050612c1a6000830184612bf6565b92915050565b612c2981612be4565b8114612c3457600080fd5b50565b600081359050612c4681612c20565b92915050565b60008060408385031215612c6357612c626129e1565b5b6000612c7185828601612c37565b9250506020612c8285828601612b82565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612cc181612b61565b82525050565b6000612cd282612bc4565b9050919050565b612ce281612cc7565b82525050565b612cf181612a70565b82525050565b60a082016000820151612d0d6000850182612cb8565b506020820151612d206020850182612cd9565b506040820151612d336040850182612cd9565b506060820151612d466060850182612cb8565b506080820151612d596080850182612ce8565b50505050565b6000612d6b8383612cf7565b60a08301905092915050565b6000602082019050919050565b6000612d8f82612c8c565b612d998185612c97565b9350612da483612ca8565b8060005b83811015612dd5578151612dbc8882612d5f565b9750612dc783612d77565b925050600181019050612da8565b5085935050505092915050565b60006020820190508181036000830152612dfc8184612d84565b905092915050565b612e0d81612b61565b82525050565b6000602082019050612e286000830184612e04565b92915050565b600080600060608486031215612e4757612e466129e1565b5b6000612e5586828701612c37565b9350506020612e6686828701612c37565b9250506040612e7786828701612b82565b9150509250925092565b600060208284031215612e9757612e966129e1565b5b6000612ea584828501612c37565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612ef082612af5565b810181811067ffffffffffffffff82111715612f0f57612f0e612eb8565b5b80604052505050565b6000612f226129d7565b9050612f2e8282612ee7565b919050565b600067ffffffffffffffff821115612f4e57612f4d612eb8565b5b612f5782612af5565b9050602081019050919050565b82818337600083830152505050565b6000612f86612f8184612f33565b612f18565b905082815260208101848484011115612fa257612fa1612eb3565b5b612fad848285612f64565b509392505050565b600082601f830112612fca57612fc9612eae565b5b8135612fda848260208601612f73565b91505092915050565b60008060408385031215612ffa57612ff96129e1565b5b600083013567ffffffffffffffff811115613018576130176129e6565b5b61302485828601612fb5565b925050602061303585828601612b82565b9150509250929050565b61304881612a70565b811461305357600080fd5b50565b6000813590506130658161303f565b92915050565b60008060408385031215613082576130816129e1565b5b600061309085828601612c37565b92505060206130a185828601613056565b9150509250929050565b600067ffffffffffffffff8211156130c6576130c5612eb8565b5b6130cf82612af5565b9050602081019050919050565b60006130ef6130ea846130ab565b612f18565b90508281526020810184848401111561310b5761310a612eb3565b5b613116848285612f64565b509392505050565b600082601f83011261313357613132612eae565b5b81356131438482602086016130dc565b91505092915050565b60008060008060808587031215613166576131656129e1565b5b600061317487828801612c37565b945050602061318587828801612c37565b935050604061319687828801612b82565b925050606085013567ffffffffffffffff8111156131b7576131b66129e6565b5b6131c38782880161311e565b91505092959194509250565b600080604083850312156131e6576131e56129e1565b5b60006131f485828601612b82565b925050602061320585828601612b82565b9150509250929050565b60008060408385031215613226576132256129e1565b5b600061323485828601612c37565b925050602061324585828601612c37565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061329657607f821691505b602082108114156132aa576132a961324f565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061330c602183612ab1565b9150613317826132b0565b604082019050919050565b6000602082019050818103600083015261333b816132ff565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b600061339e603e83612ab1565b91506133a982613342565b604082019050919050565b600060208201905081810360008301526133cd81613391565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061340e82612b61565b915061341983612b61565b92508282101561342c5761342b6133d4565b5b828203905092915050565b600061344282612b61565b915061344d83612b61565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115613482576134816133d4565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006134c782612b61565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156134fa576134f96133d4565b5b600182019050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000613561602e83612ab1565b915061356c82613505565b604082019050919050565b6000602082019050818103600083015261359081613554565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006135cd601883612ab1565b91506135d882613597565b602082019050919050565b600060208201905081810360008301526135fc816135c0565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b600061365f602983612ab1565b915061366a82613603565b604082019050919050565b6000602082019050818103600083015261368e81613652565b9050919050565b7f4f6e6c79206d61726b6574706c616365206f776e65722063616e20757064617460008201527f65206c697374696e672070726963652e00000000000000000000000000000000602082015250565b60006136f1603083612ab1565b91506136fc82613695565b604082019050919050565b60006020820190508181036000830152613720816136e4565b9050919050565b7f506c65617365207375626d6974207468652061736b696e67207072696365206960008201527f6e206f7264657220746f20636f6d706c65746520746865207075726368617365602082015250565b6000613783604083612ab1565b915061378e82613727565b604082019050919050565b600060208201905081810360008301526137b281613776565b9050919050565b600081905092915050565b60006137cf82612aa6565b6137d981856137b9565b93506137e9818560208601612ac2565b80840191505092915050565b600061380182856137c4565b915061380d82846137c4565b91508190509392505050565b7f4f6e6c79206974656d206f776e65722063616e20706572666f726d207468697360008201527f206f7065726174696f6e00000000000000000000000000000000000000000000602082015250565b6000613875602a83612ab1565b915061388082613819565b604082019050919050565b600060208201905081810360008301526138a481613868565b9050919050565b7f5072696365206d75737420626520657175616c20746f206c697374696e67207060008201527f7269636500000000000000000000000000000000000000000000000000000000602082015250565b6000613907602483612ab1565b9150613912826138ab565b604082019050919050565b60006020820190508181036000830152613936816138fa565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000613999602583612ab1565b91506139a48261393d565b604082019050919050565b600060208201905081810360008301526139c88161398c565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000613a2b602483612ab1565b9150613a36826139cf565b604082019050919050565b60006020820190508181036000830152613a5a81613a1e565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000613a97602083612ab1565b9150613aa282613a61565b602082019050919050565b60006020820190508181036000830152613ac681613a8a565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000613b03601c83612ab1565b9150613b0e82613acd565b602082019050919050565b60006020820190508181036000830152613b3281613af6565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000613b95602e83612ab1565b9150613ba082613b39565b604082019050919050565b60006020820190508181036000830152613bc481613b88565b9050919050565b7f5072696365206d757374206265206174206c6561737420312077656900000000600082015250565b6000613c01601c83612ab1565b9150613c0c82613bcb565b602082019050919050565b60006020820190508181036000830152613c3081613bf4565b9050919050565b6000608082019050613c4c6000830187612bf6565b613c596020830186612bf6565b613c666040830185612e04565b613c736060830184612a7c565b95945050505050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000613cb2601983612ab1565b9150613cbd82613c7c565b602082019050919050565b60006020820190508181036000830152613ce181613ca5565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000613d44603283612ab1565b9150613d4f82613ce8565b604082019050919050565b60006020820190508181036000830152613d7381613d37565b9050919050565b7f436f756e7465723a2064656372656d656e74206f766572666c6f770000000000600082015250565b6000613db0601b83612ab1565b9150613dbb82613d7a565b602082019050919050565b60006020820190508181036000830152613ddf81613da3565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000613e0d82613de6565b613e178185613df1565b9350613e27818560208601612ac2565b613e3081612af5565b840191505092915050565b6000608082019050613e506000830187612bf6565b613e5d6020830186612bf6565b613e6a6040830185612e04565b8181036060830152613e7c8184613e02565b905095945050505050565b600081519050613e9681612a17565b92915050565b600060208284031215613eb257613eb16129e1565b5b6000613ec084828501613e87565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000613f0382612b61565b9150613f0e83612b61565b925082613f1e57613f1d613ec9565b5b828204905092915050565b6000613f3482612b61565b9150613f3f83612b61565b925082613f4f57613f4e613ec9565b5b82820690509291505056fea26469706673582212208af8d24eb371a4a53c43a9c3625fcc3ffcde4c6124962c2e552990cd704d817664736f6c63430008090033",
    "linkReferences": {},
    "deployedLinkReferences": {}
};