
export const defaultChainId = 50002

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
  50002: {
    explorer: "https://pharosscan.xyz/",
    label: "Pharos Devnet",
    nativeCurrency: { name: "Pharos Devnet", symbol: "PTT", decimals: 18 },
    rpcUrl: "https://devnet.dplabs-internal.com/",
  },
}

// URLs
export const METAMASK_URL = 'https://metamask.io/download/'