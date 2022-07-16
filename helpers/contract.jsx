import { Contract } from "@ethersproject/contracts";
import { abi } from './abi';

console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!", process.env.NEXT_PUBLIC_BURAK);

export const contractAddress = process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_ADDRESS;

export const getContract = (library, account) => {
    const signer = library.getSigner(account).connectUnchecked();
    var contract = new Contract(contractAddress, abi.abi, signer);
    return contract;
};
