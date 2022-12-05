import { FC, SVGProps } from 'react'

import { ReactComponent as BitcoinLogoUrl } from '../assets/svg/blockchain/bitcoin.svg'
import { ReactComponent as DogecoinLogoUrl } from '../assets/svg/blockchain/dogecoin.svg'
import { ReactComponent as EtherLogoUrl } from '../assets/svg/blockchain/ether.svg'
import { ReactComponent as LitecoinLogoUrl } from '../assets/svg/blockchain/litecoin.svg'
import { ReactComponent as PolygonLogoUrl } from '../assets/svg/blockchain/polygon.svg'
import { ReactComponent as SolanaLogoUrl } from '../assets/svg/blockchain/solana.svg'
import { ReactComponent as DiscordLogo } from '../assets/svg/links/discord.svg'
import { ReactComponent as DribbbleLogo } from '../assets/svg/links/dribbble.svg'
import { ReactComponent as FacebookLogo } from '../assets/svg/links/facebook.svg'
import { ReactComponent as FigmaLogo } from '../assets/svg/links/figma.svg'
import { ReactComponent as GitHubMarkLogo } from '../assets/svg/links/github.svg'
import { ReactComponent as InstagramLogo } from '../assets/svg/links/instagram.svg'
import { ReactComponent as KeybaseLogo } from '../assets/svg/links/keybase.svg'
import { ReactComponent as LensterLogo } from '../assets/svg/links/lenster.svg'
import { ReactComponent as LinkedInLogo } from '../assets/svg/links/linkedIn.svg'
import { ReactComponent as EmailLogo } from '../assets/svg/links/mail.svg'
import { ReactComponent as MediumLogo } from '../assets/svg/links/medium.svg'
import { ReactComponent as MessengerLogo } from '../assets/svg/links/messenger.svg'
import { ReactComponent as RedditLogo } from '../assets/svg/links/reddit.svg'
import { ReactComponent as SnapchatLogo } from '../assets/svg/links/snapchat.svg'
import { ReactComponent as TelegramLogo } from '../assets/svg/links/telegram.svg'
import { ReactComponent as TwitchLogo } from '../assets/svg/links/twitch.svg'
import { ReactComponent as TwitterLogo } from '../assets/svg/links/twitter.svg'
import { ReactComponent as WebsiteLogo } from '../assets/svg/links/website.svg'
import { ReactComponent as WechatLogo } from '../assets/svg/links/wechat.svg'
import { ReactComponent as WhatsappLogo } from '../assets/svg/links/whatsapp.svg'
import { ReactComponent as YoutubeLogo } from '../assets/svg/links/youtube.svg'
import { NimiBlockchain, NimiBlockchainDetails, NimiLinkType } from '../types'

export const nimiLinkDetailsExtended: Record<
  NimiLinkType,
  {
    logo?: FC<SVGProps<SVGSVGElement>>
    prepend: string
  }
> = {
  [NimiLinkType.TWITTER]: {
    logo: TwitterLogo,
    prepend: 'https://twitter.com/'
  },
  [NimiLinkType.LENSTER]: {
    logo: LensterLogo,
    prepend: 'https://lenster.xyz/u/'
  },
  [NimiLinkType.EMAIL]: {
    logo: EmailLogo,
    prepend: ''
  },
  [NimiLinkType.INSTAGRAM]: {
    logo: InstagramLogo,
    prepend: 'https://instagram.com/'
  },
  [NimiLinkType.LINKEDIN]: {
    logo: LinkedInLogo,
    prepend: 'https://linkedin.com/in/'
  },
  [NimiLinkType.URL]: {
    logo: WebsiteLogo,
    prepend: ''
  },
  [NimiLinkType.TELEGRAM]: {
    logo: TelegramLogo,
    prepend: 'https://t.me/'
  },
  [NimiLinkType.GITHUB]: {
    logo: GitHubMarkLogo,
    prepend: 'https://github.com/'
  },
  [NimiLinkType.MEDIUM]: {
    logo: MediumLogo,
    prepend: 'https://medium.com/@'
  },
  [NimiLinkType.REDDIT]: {
    logo: RedditLogo,
    prepend: 'https://reddit.com/user/'
  },
  [NimiLinkType.YOUTUBE_CHANNEL]: {
    logo: YoutubeLogo,
    prepend: 'https://youtube.com/'
  },
  [NimiLinkType.DISCORD]: {
    logo: DiscordLogo,
    prepend: ''
  },
  [NimiLinkType.TWITCH]: {
    logo: TwitchLogo,
    prepend: 'https://twitch.tv/'
  },
  [NimiLinkType.WHATSAPP]: {
    logo: WhatsappLogo,
    prepend: ''
  },
  [NimiLinkType.MESSENGER]: {
    logo: MessengerLogo,
    prepend: 'http://m.me/'
  },
  [NimiLinkType.WECHAT]: {
    logo: WechatLogo,
    prepend: 'weixin://dl/chat?'
  },
  [NimiLinkType.KEYBASE]: {
    logo: KeybaseLogo,
    prepend: 'https://keybase.io/'
  },
  [NimiLinkType.SNAPCHAT]: {
    logo: SnapchatLogo,
    prepend: 'https://www.snapchat.com/add/'
  },
  [NimiLinkType.FACEBOOK]: {
    logo: FacebookLogo,
    prepend: 'https://www.facebook.com/'
  },
  [NimiLinkType.DRIBBBLE]: {
    logo: DribbbleLogo,
    prepend: 'https://dribbble.com/'
  },
  [NimiLinkType.FIGMA]: {
    logo: FigmaLogo,
    prepend: 'https://www.figma.com/'
  }
}

export const NIMI_CARDS_WIDTH = 570

/**
 * Blockchain logo mapping
 */
export const NIMI_BLOCKCHAIN_LOGO_URL: Record<NimiBlockchain, FC<SVGProps<SVGSVGElement>>> = {
  [NimiBlockchain.ETHEREUM]: EtherLogoUrl,
  [NimiBlockchain.BITCOIN]: BitcoinLogoUrl,
  [NimiBlockchain.LITECOIN]: LitecoinLogoUrl,
  [NimiBlockchain.DOGECOIN]: DogecoinLogoUrl,
  [NimiBlockchain.POLYGON]: PolygonLogoUrl,
  [NimiBlockchain.SOLANA]: SolanaLogoUrl
}

/**
 * Additional information about the Nimi blockchains
 */
export const NIMI_BLOCKCHAIN_DETAILS: Record<NimiBlockchain, NimiBlockchainDetails> = {
  [NimiBlockchain.ETHEREUM]: {
    name: 'Ethereum',
    explorerAddressUrl: ['https://etherscan.io/address/']
  },
  [NimiBlockchain.BITCOIN]: {
    name: 'Bitcoin',
    explorerAddressUrl: ['https://blockstream.info/address/']
  },
  [NimiBlockchain.LITECOIN]: {
    name: 'Litecoin',
    explorerAddressUrl: ['https://blockchair.com/litecoin/address/']
  },
  [NimiBlockchain.POLYGON]: {
    name: 'Polygon',
    explorerAddressUrl: ['https://polygonscan.com/address/']
  },
  [NimiBlockchain.DOGECOIN]: {
    name: 'Dogecoin',
    explorerAddressUrl: ['https://dogechain.info/address/']
  },
  [NimiBlockchain.SOLANA]: {
    name: 'Solana',
    explorerAddressUrl: ['https://solscan.io/account/']
  }
}
