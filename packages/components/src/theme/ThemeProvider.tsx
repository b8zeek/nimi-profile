import { ReactNode } from 'react'
import styled, { createGlobalStyle, css, keyframes, ThemeProvider as StyledTheme } from 'styled-components'

import daivinityBackground from 'assets/svg/daivinity-bg.png'
import { NIMI_CARDS_WIDTH } from '../constants'
import { NimiTheme, NimiThemeType } from '@nimi/types'

const GlobalStyles = createGlobalStyle<{ theme: NimiTheme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    min-height: 100vh;
    position: relative;
    ${({ theme }) => getPageBackground(theme.type)}
  }

  button { user-select: none; }

  a { text-decoration: none; }
`

const GradientAnimation = keyframes`
  0% {
    background-position: 0;
  }
  100% {
    background-position: 100%;
  }
`

type ThemeProviderProps = {
  theme: NimiTheme
  children: ReactNode
}

export function ThemeProvider({ theme = { type: NimiThemeType.DEVCON }, children }: ThemeProviderProps) {
  return (
    <StyledTheme theme={theme}>
      {children}
      <GlobalStyles />
      {getBackgroundImage(theme.type)}
    </StyledTheme>
  )
}

function getPageBackground(themeType: string) {
  switch (themeType) {
    case NimiThemeType.NIMI:
      return 'background: #fff'
    case NimiThemeType.DEVCON:
      return css`
        background: linear-gradient(180deg, #c5d4eb 6.55%, #f9fcff 84.14%);
        background-size: 450% 450%;
        animation: ${GradientAnimation} 10s alternate-reverse infinite;
      `
    case NimiThemeType.RAAVE:
      return 'background: #000;'
    case NimiThemeType.INFINITE:
      return 'background: #000;'
    case NimiThemeType.DAIVINITY:
      return 'background: linear-gradient(180deg, #4FC1B3 6.55%, #E6FCFF 84.14%);'
    default:
      return null
  }
}

const getBackgroundImage = (themeType: string) => {
  switch (themeType) {
    case NimiThemeType.NIMI:
      return (
        <BackgroundContainer>
          <BackgroundImage src='https://bafybeif5c6xz6ryiyrtm4r6amwiftwrw2kf3llipy6dco27hp3ilftthtm.ipfs.dweb.link/nimi-header-background.d73a42cfaca4acf944f4.png' />
        </BackgroundContainer>
      )
    case NimiThemeType.DEVCON:
      return (
        <BackgroundContainer>
          <BackgroundImage
            shouldSpin
            src='https://ipfs.io/ipfs/QmVa4QEciC16UpTcALJGk1U5Tn3qNZLNt872gZsnXByTVE?filename=rays.svg'
          />
        </BackgroundContainer>
      )
    case NimiThemeType.INFINITE:
      return null
    case NimiThemeType.DAIVINITY:
      return (
        <BackgroundContainer>
          <BackgroundImage src={daivinityBackground} />
        </BackgroundContainer>
      )
    default:
      return null
  }
}

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
`

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
`

const BackgroundImage = styled.img<{ shouldSpin?: boolean }>`
  width: 100%;
  height: auto;
  position: relative;
  z-index: -1;
  ${({ shouldSpin = false }) =>
    shouldSpin &&
    css`
      animation: ${Spin} 240s linear infinite;
    `}

  ${({ theme }) =>
    theme.type === NimiThemeType.DAIVINITY &&
    css`
      width: unset;
      height: 40vh;

      @media (max-width: ${NIMI_CARDS_WIDTH}px) {
        height: 60vh;
      }
    `}
`
