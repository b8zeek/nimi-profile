import ReactDOMServer from 'react-dom/server'

import { NIMI_BLOCKCHAIN_DETAILS } from '../constants'
import { Nimi, NimiBlockchain } from '../types'
/**
 * Returns true if value is proper url
 * @param urlString
 */
export function isValidUrl(urlString: string): boolean {
  let url: URL

  try {
    url = new URL(urlString)
  } catch (_) {
    return false
  }

  return url.protocol === 'http:' || url.protocol === 'https:'
}

/**
 * Given a blockchain and address, return the explorer url
 * @param blockchain - blockchain to get the explorer url for
 * @param address - address to get the explorer url for
 * @returns the explorer url
 */
export function getExplorerAddressLink(blockchain: NimiBlockchain, address: string): string {
  return NIMI_BLOCKCHAIN_DETAILS[blockchain].explorerAddressUrl[0] + address
}

/**
 * Shorten the checksummed version of the input address to have 0x + 4 characters at start and end
 * @param address The input address
 * @param charsBefore The number of characters to show before the trimmed part
 * @param charsAfter The number of characters to show after the trimmed part
 * @returns The shortened address
 * @throws If the address is not checksummed
 */
export function shortenAddress(address?: string, charsBefore = 4, charsAfter = 4): string {
  if (!address) return ''
  return `${address.substring(0, charsBefore + 2)}...${address.substring(42 - charsAfter)}`
}

/**
 * Filters empty links
 * @param nimi - Nimi object
 * @returns Filtered nimi object
 */
export function filterEmptyFields(nimi: Nimi): Nimi {
  if (nimi.links) nimi.links = nimi.links.filter(({ content }) => content !== '')
  if (nimi.addresses) nimi.addresses = nimi.addresses.filter(({ address }) => address !== '')
  return nimi
}

// I think we don't need this.
/**
 * Encodes a SVG component to base64
 * @param reactElement - react element
 * @returns react element's innerHTML
 */
// export function encodeSVGToDataURI(reactElement) {
//   return 'data:image/svg+xml,' + escape(ReactDOMServer.renderToStaticMarkup(reactElement))
// }
