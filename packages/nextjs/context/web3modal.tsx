'use client'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = `${process.env.NEXT_PUBLIC_PROJECT_ID}`;

// 2. Set chains
const mainnet = {
    chainId: 11155420,
    name: 'OP Sepolia Testnet',
    currency: 'ETH',
    explorerUrl: 'https://optimism-sepolia.blockscout.com',
    rpcUrl: 'https://opt-sepolia.g.alchemy.com/v2/n9pGHJIpvtoUJcxsn8ltz1oqF7T3z1lC'
}

// 3. Create a metadata object
const metadata = {
    name: 'AgroVest',
    description: 'My Website description',
    url: 'https://mywebsite.com', // origin must match your domain & subdomain
    icons: ['https://avatars.mywebsite.com/']
}
// 4. Create Ethers config
const ethersConfig = defaultConfig({
    /*Required*/
    metadata,

    /*Optional*/
    enableEIP6963: true, // true by default
    enableInjected: true, // true by default
    enableCoinbase: true, // true by default
    rpcUrl: '...', // used for the Coinbase SDK
    defaultChainId: 1 // used for the Coinbase SDK
})

// 5. Create a AppKit instance
createWeb3Modal({
    ethersConfig,
    chains: [mainnet],
    projectId,
    enableAnalytics: true,// Optional - defaults to your Cloud configuration
    themeVariables: {
        "--w3m-accent": "#D2FE75",
        "--w3m-border-radius-master": "",
        "--w3m-font-size-master": "18",
      },
})

export function AppKit({ children }: { children: React.ReactNode }) {
    return children
}