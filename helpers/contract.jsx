import { Contract } from "@ethersproject/contracts";
import { abi } from './abi';

export const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

export const getContract = (library, account) => {
    const signer = library.getSigner(account).connectUnchecked();
    debugger;
    var contract = new Contract(contractAddress, abi.abi, signer);
    return contract;
};
