export enum NimiImageType {
  URL = 'URL',
  ERC721 = 'ERC721'
}

export interface NimiImageCommon {
  url: string
}

export interface NimiImageERC721 extends NimiImageCommon {
  type: NimiImageType.ERC721
  contract: string
  tokenId: number
  tokenUri: string
}

export interface NimiImageUrl extends NimiImageCommon {
  type: NimiImageType.URL
  url: string
}

export type NimiImage = NimiImageERC721 | NimiImageUrl
