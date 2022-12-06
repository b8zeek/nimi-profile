export enum NimiLinkType {
  URL = 'URL',
  EMAIL = 'EMAIL',
  TWITTER = 'TWITTER',
  INSTAGRAM = 'INSTAGRAM',
  LINKEDIN = 'LINKEDIN',
  YOUTUBE_CHANNEL = 'YOUTUBE_CHANNEL',
  TWITCH = 'TWITCH',
  GITHUB = 'GITHUB',
  MEDIUM = 'MEDIUM',
  LENSTER = 'LENSTER',
  TELEGRAM = 'TELEGRAM',
  REDDIT = 'REDDIT',
  DISCORD = 'DISCORD',
  WHATSAPP = 'WHATSAPP',
  MESSENGER = 'MESSENGER',
  WECHAT = 'WECHAT',
  KEYBASE = 'KEYBASE',
  SNAPCHAT = 'SNAPCHAT',
  FACEBOOK = 'FACEBOOK',
  DRIBBBLE = 'DRIBBBLE',
  FIGMA = 'FIGMA'
}

export interface NimiLinkBaseDetails {
  id?: string
  type: NimiLinkType
  title?: string
  content: string
}
