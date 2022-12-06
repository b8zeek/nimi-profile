export enum NimiBlockchain {
  ETHEREUM = 'ETHEREUM',
  BITCOIN = 'BITCOIN',
  LITECOIN = 'LITECOIN',
  POLYGON = 'POLYGON',
  DOGECOIN = 'DOGECOIN',
  SOLANA = 'SOLANA'
}

export interface NimiBlockchainAddress {
  address: string
  blockchain: NimiBlockchain
}

export interface NimiBlockchainDetails {
  name: string
  explorerAddressUrl: string[]
}
