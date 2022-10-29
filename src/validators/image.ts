import * as Yup from 'yup';

import { NimiImageType } from '../types';

/**
 * The image schema definition and validator
 */
export const nimiImageValidator = Yup.object({
  type: Yup.string().oneOf([NimiImageType.ERC721, NimiImageType.URL]).required(),
  url: Yup.string().url().required(),
  /**
   * ERC721-specific fields for the image
   */
  tokenId: Yup.number().optional().when('type', {
    is: NimiImageType.ERC721,
    then: Yup.number().required(),
  }),
  /**
   * ERC721-specific fields for the image
   */
  contract: Yup.string().optional().when('type', {
    is: NimiImageType.ERC721,
    then: Yup.string().required(),
  }),
});
