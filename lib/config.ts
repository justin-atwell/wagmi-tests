import { cookieStorage, createStorage, http } from "wagmi";
import {mainnet, sepolia} from 'wagmi/chains';
import { defaultWagmiConfig } from "@web3modal/wagmi";

export const projectId = process.env.NEXT_PROJECT_ID || 'empty';

const metadata = {
    name: "wagmi examples",
    url: "https://yahoo.com",
    description: "an example of wagmi tools in next",
    icons: []
}

export const wagmiConfig = defaultWagmiConfig({
    chains: [sepolia, mainnet],
    projectId,
    metadata,
    ssr: true,
    transports: {
        [sepolia.id]: http("https://sepolia.gateway.tenderly.co"),
        [mainnet.id]: http(),
    },
    storage: createStorage({
        storage: cookieStorage,
    }),
    enableWalletConnect: false,
    enableInjected: true,
    enableEIP6963: true,
    enableCoinbase: false
})

