import { Contract } from "@ethersproject/contracts";
import { abi } from './abi';

export const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

export const getContract = (library, account) => {
    const signer = library.getSigner(account).connectUnchecked();
    var contract = new Contract(contractAddress, abi.abi, signer);
    return contract;
};
