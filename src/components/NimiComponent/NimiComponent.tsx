import { useState } from 'react'
import styled from 'styled-components'

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
import { Nimi } from '../../types'
import { nimiValidator } from '../../validators'

type NimiComponentProps = {
  nimi: Nimi
}

export function NimiComponent({ nimi }: NimiComponentProps) {
  const [profilePhotoRotated, setProfilePhotoRotated] = useState(false)

  const validatedNimi = nimiValidator.validateSync(nimi) as unknown as Nimi
  const { ensAddress, displayName, image, addresses, description, ensName, links, widgets, theme } = validatedNimi

  return (
    <NimiContainer>
      <Header themeType={theme.type} />
      <Content>
        <NimiLogo theme={theme} />
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
        {links?.length !== 0 && <LinksSection links={links} />}
        {widgets?.length !== 0 && (
          <WidgetsSection ensAddress={ensAddress} ensName={ensName} widgets={widgets} themeType={theme.type} />
        )}
        {addresses?.length !== 0 && <BlockchainAddressesSection addresses={addresses} themeType={theme.type} />}
      </Content>
      <Footer themeType={theme.type} />
    </NimiContainer>
  )
}

const NimiContainer = styled.div`
  max-width: ${NIMI_CARDS_WIDTH}px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
