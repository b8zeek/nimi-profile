import { nimiImageValidator } from './image';

describe('Validators', () => {
  describe('Image', () => {
    test('resolves a valid ImageURL type', () => {
      const imagePayload = {
        type: 'URL',
        url: 'https://example.com/image.png',
      };
      expect(nimiImageValidator.validate(imagePayload)).resolves;
    });
    test('Resolves valid ImageERC72 type', async () => {
      const imagePayload = {
        type: 'ERC721',
        url: 'https://example.com/image.png',
        contract: '0x123',
        tokenId: '1',
        tokenURI: 'https://example.com/image.png',
      };

      const validatedImage = nimiImageValidator.validate(imagePayload, {
        stripUnknown: true,
      });

      expect(validatedImage).resolves.toEqual({
        url: 'https://example.com/image.png',
        contract: '0x123',
        type: 'ERC721',
        tokenId: 1,
      });
    });
  });
});
