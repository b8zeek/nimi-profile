import { Nimi, NimiBlockchain, NimiImageType, NimiLinkType, NimiThemeType } from '../types'
import { nimiValidator, validateNimi } from './validators'

describe('Nimi Validators', () => {
  describe('Nimi', () => {
    test('resolves optional Nimi fields', () => {
      const nimiPayload: Nimi = {
        description: '',
        displayName: 'test.eth',
        ensName: 'test.eth',
        ensAddress: '0x26358E62C2eDEd350e311bfde51588b8383A9315',
        addresses: [],
        links: [],
        widgets: [],
        theme: { type: NimiThemeType.NIMI }
      }
      expect(nimiValidator.validate(nimiPayload)).resolves
    })

    test('resolves optional Nimi fields when defined', () => {
      const nimiPayload: Nimi = {
        description: '',
        displayName: 'test.eth',
        ensName: 'test.eth',
        ensAddress: '0x26358E62C2eDEd350e311bfde51588b8383A9315',
        addresses: [],
        links: [],
        widgets: [],
        image: {
          type: 'URL' as NimiImageType.URL,
          url: 'https://example.com/image.png'
        },
        theme: { type: NimiThemeType.NIMI }
      }
      expect(nimiValidator.validate(nimiPayload)).resolves
    })
  })

  describe('validateNimi', () => {
    const nimi: Nimi = {
      displayName: 'Nimi',
      image: {
        // eslint-disable-next-line
        type: 'URL' as any,
        url: 'https://pbs.twimg.com/profile_images/1558878390953951234/PKsdQEJL_400x400.jpg'
      },
      addresses: [
        {
          address: '0x4e675ceB415fC41700fb821fF3B43cE5C8B9a83B',
          blockchain: NimiBlockchain.ETHEREUM
        }
      ],
      description:
        'Host your personal page on your ENS domain! Nimi 0.1.alpha live on Ethereum Mainnet :) #devconnect #ETHAmsterdam',
      ensAddress: '0x4e675ceB415fC41700fb821fF3B43cE5C8B9a83B',
      ensName: 'nimi.eth',
      links: [
        {
          type: 'TWITTER' as NimiLinkType,
          content: '0xNimi'
        },
        {
          type: 'GITHUB' as NimiLinkType,
          content: 'nimi-app'
        },
        {
          type: 'TELEGRAM' as NimiLinkType,
          content: '0xNimi'
        },
        {
          type: 'URL' as NimiLinkType,
          content: 'https://nimi.eth.limo'
        }
      ],
      widgets: [],
      theme: { type: NimiThemeType.NIMI }
    }

    test('resolves optional Nimi fields', async () => {
      const validatedNimi = await validateNimi(nimi)
      expect(validatedNimi).toEqual(nimi)
    })

    test('removes unknown keys and return validated Nimi', async () => {
      const validatedNimi = await validateNimi({
        ...nimi,
        unknownKeyA: 'unknownValueA',
        unknownKeyB: 'unknownValueB'
      } as any)
      expect(validatedNimi).toEqual(nimi)
    })
  })
})
