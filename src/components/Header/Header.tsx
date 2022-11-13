import styled, { css } from 'styled-components'

import { NIMI_CARDS_WIDTH } from '../../constants'
import { NimiThemeType } from 'types'

type HeaderProps = {
  themeType: NimiThemeType
}

export function Header({ themeType }: HeaderProps) {
  return <Container themeType={themeType}>{themeType === NimiThemeType.NIMI && <NimiCircle />}</Container>
}

const Container = styled.header<{ themeType: NimiThemeType }>`
  width: 100%;
  min-height: 350px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  overflow: hidden;

  ${({ themeType }) => getHeaderBackground(themeType)}
`

const NimiCircle = styled.div`
  width: calc(100vw * 1.3);
  height: calc(100vw * 1.3);
  position: absolute;
  top: calc(-100vw * 1.3 + 185px);
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(111.35deg, #4368ea -25.85%, #c490dd 73.38%);
  border-radius: 0 0 50% 50%;

  @media (max-width: ${NIMI_CARDS_WIDTH}px) {
    width: 100vw;
    height: 100vw;
    top: calc(-100vw + 185px);
  }
`

function getHeaderBackground(themeType: NimiThemeType) {
  switch (themeType) {
    case NimiThemeType.DEVCON:
      return css`
        background: url(https://cdn.discordapp.com/attachments/1018317760968806411/1026246674793910372/clouds_1.png);
        background-repeat: repeat-x;
      `
    default:
      return ''
  }
}
