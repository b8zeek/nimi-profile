import { nimiLinkDetailsExtended } from '../constants'
import { NimiLinkBaseDetails, NimiLinkType } from '../types'
import { isValidUrl } from '../utils'

export function useLink() {
  function getNimiLinkLabel(link: NimiLinkBaseDetails): string {
    const { type, title, content } = link

    if (title) return title

    if (type === NimiLinkType.URL && isValidUrl(content)) {
      const { hostname } = new URL(content)
      return hostname
    }

    if (isValidUrl(content)) {
      const url = new URL(content)
      return url.pathname.replace(new RegExp('/', 'g'), '')
    }

    return content
  }

  function generateLink(link: NimiLinkBaseDetails): string {
    const { type, content } = link

    if (isValidUrl(content)) {
      return content
    }
    return nimiLinkDetailsExtended[type].prepend + content
  }

  return {
    getNimiLinkLabel,
    generateLink
  }
}
