import { InjectedConnector } from "@web3-react/injected-connector";

//metamask
export const injected = new InjectedConnector({
    /**
     * 1. eth mainnet
     * 3. ropsten
     * 4. rinkeby
     * 5. goerli
     * 42. kovan
     * 1337. localhost
     */
    supportedChainIds: [1, 3, 4, 5, 42, 31337],
});
