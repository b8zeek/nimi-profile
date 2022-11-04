import { RWebShare } from 'react-web-share'
import styled, { css } from 'styled-components'

import { ReactComponent as QRSVG } from '../../assets/svg/qr.svg'
import { ReactComponent as ShareSVG } from '../../assets/svg/share-new.svg'
import { NimiThemeType } from '../../types/NimiTheme'
import { shortenAddress } from '../../utils'

type UserInfoProps = {
  displayName: string
  description?: string
  ensAddress: string
  ensName: string
  setProfilePhotoRotated: () => void
  themeType: NimiThemeType
}

export function UserInfo({ displayName, description, ensAddress, ensName, setProfilePhotoRotated, themeType }: UserInfoProps) {
  const openENSAddressEtherscan = () => window.open(`https://etherscan.io/address/${ensAddress}`, '_blank')

  return (
    <Container>
      <DisplayName>{displayName}</DisplayName>
      {description && <Description>{description}</Description>}
      <ENSDataContainer>
        <ENSAddressAndName themeType={themeType}>
          <span onClick={openENSAddressEtherscan}>{shortenAddress(ensAddress, 2, 4)}</span> - {ensName}
        </ENSAddressAndName>
        <RWebShare
          data={{
            text: 'Check out my Nimi page:',
            url: `https://${ensName}.limo`,
            title: 'Share Nimi'
          }}
        >
          <ENSActionsButton themeType={themeType}>
            <ShareSVG />
          </ENSActionsButton>
        </RWebShare>
        <ENSActionsButton themeType={themeType} onClick={setProfilePhotoRotated}>
          <QRSVG />
        </ENSActionsButton>
      </ENSDataContainer>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 32px;
`

const DisplayName = styled.h1`
  line-height: 32px;
  font-size: 32px;
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
`

const Description = styled.p`
  width: 80%;
  line-height: 1.65;
  font-size: 14px;
  font-family: 'Archivo', sans-serif;
  font-weight: 400;
  text-align: center;
  margin: 0 auto 16px;
`

const ENSDataContainer = styled.div`
  width: 100%;
  text-align: center;
`

const ENSAddressAndName = styled.p<{ themeType: NimiThemeType }>`
  display: inline-block;
  line-height: 24px;
  font-size: 14px;
  font-family: 'Archivo', sans-serif;
  font-weight: 500;
  border-radius: 100px;
  ${({ themeType }) => getElementColors(themeType)}
  padding: 0 10px;
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: 0px 3px 10px rgba(33, 33, 35, 0.06);
  margin: 0;
`

const ENSActionsButton = styled.button<{ themeType: NimiThemeType }>`
  height: 24px;
  width: 24px;
  display: inline-flex;
  vertical-align: top;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 100px;
  ${({ themeType }) => getElementColors(themeType)}
  box-shadow: 0px 3px 10px rgba(33, 33, 35, 0.06);
  cursor: pointer;
  margin-left: 6px;

  & .svg-path-fill {
    fill: ${({ themeType }) => getFillColor(themeType)};
  }

  & .svg-path-stroke {
    stroke: ${({ themeType }) => getFillColor(themeType)};
  }
`

function getElementColors(themeType: string) {
  switch (themeType) {
    case NimiThemeType.NIMI:
      return css`
        border: 1px solid white;
        color: rgba(33, 33, 35, 0.65);
        background-color: #fff;
      `
    case NimiThemeType.DEVCON:
      return css`
        border: 1px solid white;
        color: rgba(33, 33, 35, 0.65);
        background-color: #fff;
      `
    case NimiThemeType.RAAVE:
      return css`
        border: 1px solid #bed784;
        color: #bed784;
        background-color: #000;
      `
    case NimiThemeType.INFINITE:
      return css`
        border: 1px solid #ffffff80;
        color: #fff;
        background-color: #000;
      `
    case NimiThemeType.DAIVINITY:
      return css`
        border: 1px solid #f4b5d4;
        color: #bb6bd9;
        background-color: #fff;
      `
    default:
      return null
  }
}

function getFillColor(themeType: string) {
  switch (themeType) {
    case NimiThemeType.NIMI:
      return '#343EDF'
    case NimiThemeType.DEVCON:
      return '#343EDF'
    case NimiThemeType.RAAVE:
      return '#BED784'
    case NimiThemeType.INFINITE:
      return '#fff'
    case NimiThemeType.DAIVINITY:
      return '#BB6BD9'
    default:
      return null
  }
}

