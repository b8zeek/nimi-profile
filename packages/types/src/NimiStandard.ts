import { NimiBlockchainAddress } from './NimiBlockchain'
import { NimiImage } from './NimiImage'
import { NimiLinkBaseDetails } from './NimiLink'
import { NimiWidget } from './NimiWidget'

export interface Nimi {
  displayName: string
  image?: NimiImage
  description?: string
  ensName: string
  ensAddress: string
  links: NimiLinkBaseDetails[]
  addresses: NimiBlockchainAddress[]
  widgets: NimiWidget[]
  theme?: any
}
