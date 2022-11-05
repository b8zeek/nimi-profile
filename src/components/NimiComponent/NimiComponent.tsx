import { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

import {
  BlockchainAddressesSection,
  Footer,
  Header,
  LinksSection,
  NimiLogo,
  ProfilePhoto,
  UserInfo,
  WidgetsSection
} from '../../components'
import { NIMI_CARDS_WIDTH } from '../../constants'
import { Nimi, NimiThemeType } from '../../types'
import { nimiValidator } from '../../validators'

type NimiComponentProps = {
  nimi: Nimi
}

export function NimiComponent({ nimi }: NimiComponentProps) {
  const [profilePhotoRotated, setProfilePhotoRotated] = useState(false)

  const validatedNimi = nimiValidator.validateSync(nimi) as unknown as Nimi
  const { ensAddress, displayName, image, addresses, description, ensName, links, widgets, theme } = validatedNimi

  return (
    <Container themeType={theme.type}>
      <NimiContent>
        <Header themeType={theme.type} />
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
