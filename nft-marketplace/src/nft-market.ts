import {
  MarketItemCreated
} from "../generated/NFTMarket/NFTMarket";

import { NFT } from '../generated/schema';

export function handleMarketItemCreated(event: MarketItemCreated): void {

  const nft = new NFT(event.params.tokenId.toString());
  nft.seller = event.params.seller;
  nft.owner = event.params.owner;
  nft.price = event.params.price;
  nft.sold = event.params.sold;
  nft.tokenURI = event.params.tokenURI;
  nft.save();
  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.balanceOf(...)
  // - contract.fetchItemsListed(...)
  // - contract.fetchMarketItems(...)
  // - contract.fetchMyNFTs(...)
  // - contract.getApproved(...)
  // - contract.getListingPrice(...)
  // - contract.isApprovedForAll(...)
  // - contract.name(...)
  // - contract.ownerOf(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenURI(...)
}
