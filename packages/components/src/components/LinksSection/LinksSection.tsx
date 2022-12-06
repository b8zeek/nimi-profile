import styled from 'styled-components'

import { nimiLinkDetailsExtended } from '../../constants'
import { useLink } from '../../services'
import { useToast } from '../../toast'
import { NimiLinkBaseDetails, NimiLinkType, NimiThemeType } from '@nimi/types'
import { renderSVG } from '../NimiComponent/NimiComponent.renders'
import { NimiLink } from '../NimiLink'

type LinksSectionProps = {
  links: NimiLinkBaseDetails[]
  themeType: NimiThemeType
}

export function LinksSection({ links, themeType }: LinksSectionProps) {
  const { getNimiLinkLabel, generateLink } = useLink()
  const { open } = useToast()

  const handleLinkClick = (link: NimiLinkBaseDetails) => {
    if (link.type === NimiLinkType.DISCORD || link.type === NimiLinkType.EMAIL) {
      navigator.clipboard.writeText(generateLink(link))
      open(`${link.type.charAt(0).toUpperCase() + link.type.slice(1).toLowerCase()} copied to the clipboard!`)
    } else {
      window.open(generateLink(link), '_blank')
    }
  }

  return (
    <Container>
      {links.map(link => (
        <NimiLink key={`${link.type}`} onClick={() => handleLinkClick(link)} themeType={themeType}>
          {renderSVG(nimiLinkDetailsExtended[link.type].logo)}
          {getNimiLinkLabel(link)}
        </NimiLink>
      ))}
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 31px;
`
