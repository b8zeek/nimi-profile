import { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

import { Header } from '../Header'
import { NimiLogo } from '../NimiLogo'
import { ProfilePhoto } from '../ProfilePhoto'
import { UserInfo } from '../UserInfo'
import { LinksSection } from '../LinksSection'
import { BlockchainAddressesSection } from '../BlockchainAddressesSection'
import { WidgetsSection } from '../WidgetsSection'
import { Footer } from '../Footer'

import { NIMI_CARDS_WIDTH } from '../../constants'
import { Nimi, NimiThemeType } from '../../types'
import { nimiValidator } from '../../validators'

import daivinityBackground from '../../assets/svg/daivinity-bg.png'

type NimiComponentProps = {
  nimi: Nimi
}

export function NimiComponent({ nimi }: NimiComponentProps) {
  const [profilePhotoRotated, setProfilePhotoRotated] = useState(false)

  const validatedNimi = nimiValidator.validateSync(nimi) as unknown as Nimi
  const { ensAddress, displayName, image, addresses, description, ensName, links, widgets, theme } = validatedNimi

  return (
    <Container themeType={theme.type}>
      <Header themeType={theme.type} />
      <NimiContent>
        <Content>
          <NimiLogo themeType={theme.type} />
          <ProfilePhoto
            ensName={ensName}
            image={image}
            profilePhotoRotated={profilePhotoRotated}
            setProfilePhotoRotated={() => setProfilePhotoRotated(value => !value)}
            themeType={theme.type}
          />
          <UserInfo
            displayName={displayName}
            description={description}
            ensAddress={ensAddress}
            ensName={ensName}
            setProfilePhotoRotated={() => setProfilePhotoRotated(value => !value)}
            themeType={theme.type}
          />
          {links?.length !== 0 && <LinksSection links={links} themeType={theme.type} />}
          {widgets?.length !== 0 && (
            <WidgetsSection ensAddress={ensAddress} ensName={ensName} widgets={widgets} themeType={theme.type} />
          )}
          {addresses?.length !== 0 && <BlockchainAddressesSection addresses={addresses} themeType={theme.type} />}
        </Content>
        <Footer themeType={theme.type} />
      </NimiContent>
      {getBackgroundImage(theme.type)}
    </Container>
  )
}

const Container = styled.div<{ themeType: NimiThemeType }>`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  ${({ themeType }) => getPageBackground(themeType)}
`

const NimiContent = styled.div`
  max-width: ${NIMI_CARDS_WIDTH}px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 3;
  margin: 0 auto;

  @media (max-width: ${NIMI_CARDS_WIDTH}px) {
    overflow: hidden;
  }
`

// TODO: MIRKO FIX SPACING BETWEEN THE ELEMENTS!
const Content = styled.div`
  padding: 0 0 100px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${NIMI_CARDS_WIDTH}px) {
    max-width: 100vw;
    padding: 0 20px 50px;
  }
`

const GradientAnimation = keyframes`
  0% {
    background-position: 0;
  }
  100% {
    background-position: 100%;
  }
`

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
  z-index: 1;
  overflow: hidden;
`

const BackgroundImage = styled.img<{ shouldSpin?: boolean }>`
  width: 100%;
  height: auto;
  position: relative;
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

function getPageBackground(themeType: NimiThemeType) {
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
    case NimiThemeType.RAAVE:
      return null
    case NimiThemeType.DAIVINITY:
      return (
        <BackgroundContainer>
          <BackgroundImage src={daivinityBackground} />
        </BackgroundContainer>
      )
    case NimiThemeType.INFINITE:
      return null
    default:
      return null
  }
}
