import { NimiLinkBaseDetails, NimiLinkType } from '../types';
import { nimiLinkValidator } from './link';

describe('Validators', () => {
  describe('Link', () => {
    test('throws an error when email invalid', () => {
      const linkPayload: NimiLinkBaseDetails = {
        type: 'EMAIL' as NimiLinkType,
        label: '',
        content: '',
        title: '',
      };
      expect(nimiLinkValidator.validate(linkPayload)).rejects.toThrow();
    });

    test('throws an error when URL is invalid', () => {
      const linkPayload: NimiLinkBaseDetails = {
        type: 'URL' as NimiLinkType,
        label: '',
        content: 'aaaaaa',
        title: '',
      };
      expect(nimiLinkValidator.validate(linkPayload)).rejects.toThrow();
    });

    test('returns the validated payload when URL is valid', () => {
      const linkPayload: NimiLinkBaseDetails = {
        type: 'URL' as NimiLinkType,
        label: '',
        content: 'https://example.com',
        title: '',
      };
      expect(nimiLinkValidator.validate(linkPayload)).resolves.toEqual({
        type: NimiLinkType.URL,
        label: '',
        content: 'https://example.com',
        title: '',
      });
    });

    test('returns the validated payload when URL is valid', () => {
      const linkPayload: NimiLinkBaseDetails = {
        type: 'DISCORD' as NimiLinkType,
        label: '',
        content: 'adam',
        title: '',
      };
      expect(nimiLinkValidator.validate(linkPayload)).rejects.toThrow();
    });

    test('throws when Discord name is invalid', () => {
      const linkPayload: NimiLinkBaseDetails = {
        type: 'DISCORD' as NimiLinkType,
        label: '',
        content: 'adam#14',
        title: '',
      };
      expect(nimiLinkValidator.validate(linkPayload)).rejects.toThrow();
    });

    test('returns the validated payload when Discord name is valid', () => {
      const linkPayload: NimiLinkBaseDetails = {
        type: 'DISCORD' as NimiLinkType,
        label: '',
        content: 'adam#1234',
        title: '',
      };
      expect(nimiLinkValidator.validate(linkPayload)).resolves.toEqual({
        type: 'DISCORD' as NimiLinkType,
        label: '',
        content: 'adam#1234',
        title: '',
      });
    });

    test('throws when Discord username is a URL', () => {
      const linkPayload: NimiLinkBaseDetails = {
        type: 'DISCORD' as NimiLinkType,
        label: '',
        content: 'https://discord.com/users/Violet#6640',
        title: '',
      };
      expect(nimiLinkValidator.validate(linkPayload)).rejects.toThrow();
    });

    test('throws when the link type is not registered ', () => {
      const linkPayload: NimiLinkBaseDetails = {
        type: 'NOT_REGISTERED' as any,
        label: '',
        content: 'adam#1234',
        title: '',
      };
      expect(nimiLinkValidator.validate(linkPayload)).rejects.toThrow();
    });

    test(`returns the validated payload when Twitter username`, () => {
      const linkPayload: NimiLinkBaseDetails = {
        type: 'TWITTER' as NimiLinkType,
        label: '',
        content: 'test',
        title: '',
      };
      expect(nimiLinkValidator.validate(linkPayload)).resolves.toEqual({
        type: 'TWITTER' as NimiLinkType,
        label: '',
        content: 'test',
        title: '',
      });
    });
  });
});
