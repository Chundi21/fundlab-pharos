
export const defaultChainId = 656476

type ChainInfo = {
  explorer: string
  label: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: 18
  }
  rpcUrl: string
}

export const CHAIN_INFO: { [key: number]: ChainInfo } = {
  656476: {
    explorer: "https://edu-chain-testnet.blockscout.com",
    label: "EDU Chain",
    nativeCurrency: { name: "EDU", symbol: "EDU", decimals: 18 },
    rpcUrl: "https://rpc.open-campus-codex.gelato.digital",
  },
}

// URLs
export const METAMASK_URL = 'https://metamask.io/download/'