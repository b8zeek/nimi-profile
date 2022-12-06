import styled, { css } from 'styled-components'

import NimiLogoDaivinitySVG from '../../assets/svg/nimi-logo-daivinity.svg'
import NimiLogoDefaultSVG from '../../assets/svg/nimi-logo-default.svg'
import NimiLogoDevconSVG from '../../assets/svg/nimi-logo-devcon.svg'
import NimiLogoInfiniteSVG from '../../assets/svg/nimi-logo-infinite.svg'
import NimiLogoRaaveSVG from '../../assets/svg/nimi-logo-raave.svg'
import { NIMI_CARDS_WIDTH } from '../../constants'
import { NimiThemeType } from '@nimi/types'

type NimiLogoProps = {
  themeType: NimiThemeType
}

export function NimiLogo({ themeType }: NimiLogoProps) {
  return <NimiLogoImage src={getLogo(themeType)} themeType={themeType} />
}

const NimiLogoImage = styled.img<{ themeType: NimiThemeType }>`
  display: block;
  position: relative;
  z-index: 1;
  cursor: pointer;
  margin: 0 auto;

  ${({ themeType }) => getSpecificLogoStyles(themeType)}
`

function getLogo(themeType: NimiThemeType) {
  switch (themeType) {
    case NimiThemeType.NIMI:
      return NimiLogoDefaultSVG
    case NimiThemeType.DEVCON:
      return NimiLogoDevconSVG
    case NimiThemeType.RAAVE:
      return NimiLogoRaaveSVG
    case NimiThemeType.INFINITE:
      return NimiLogoInfiniteSVG
    case NimiThemeType.DAIVINITY:
      return NimiLogoDaivinitySVG
  }
}

function getSpecificLogoStyles(themeType: NimiThemeType) {
  switch (themeType) {
    case NimiThemeType.NIMI:
      return css`
        width: 94px;
        margin: 25px auto;

        @media (max-width: ${NIMI_CARDS_WIDTH}px) {
          width: 88px;
        }
      `
    case NimiThemeType.DEVCON:
      return css`
        margin: 32px auto 18px;

        @media (max-width: ${NIMI_CARDS_WIDTH}px) {
          width: 260px;
          margin: 25px auto 10px;
        }
      `
    case NimiThemeType.RAAVE:
      return css`
        width: 300px;
        margin: 32px auto;

        @media (max-width: ${NIMI_CARDS_WIDTH}px) {
          width: 100%;
          margin: 16px auto 20px;
        }
      `
    case NimiThemeType.INFINITE:
      return css`
        width: 300px;
        margin: 32px auto;

        @media (max-width: ${NIMI_CARDS_WIDTH}px) {
          width: 95%;
          margin: 32px auto 20px;
        }
      `
    case NimiThemeType.DAIVINITY:
      return css`
        width: 300px;
        margin: 32px auto;

        @media (max-width: ${NIMI_CARDS_WIDTH}px) {
          width: 80%;
          margin: 32px auto 20px;
        }
      `
    default:
      return null
  }
}
