export enum NimiImageType {
  URL = 'URL',
  ERC721 = 'ERC721',
}

export interface NimiImageCommon {
  url: string;
}

export interface NimiImageERC721 extends NimiImageCommon {
  type: NimiImageType.ERC721;
  /**
   * The NFT contract address
   */
  contract: string;
  /**
   * The NFT token id
   */
  tokenId: number;
  /**
   * The NFT token URI
   */
  tokenUri: string;
}

export interface NimiImageUrl extends NimiImageCommon {
  type: NimiImageType.URL;
  url: string;
}

/**
 * Nimi Image
 */
export type NimiImage = NimiImageERC721 | NimiImageUrl;
