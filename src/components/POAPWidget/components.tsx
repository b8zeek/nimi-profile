import styled from 'styled-components'

import { ReactComponent as ExternalLinkSvg } from '../../assets/svg/common/external-link.svg'
import { NimiLink } from '../../components/NimiLink'
import { NimiThemeType } from '../../types'

export const Container = styled.div`
  margin-bottom: 25px;
`

type POAPHeadingProps = {
  showFullCollection: () => void
  themeType: NimiThemeType
}

export function POAPHeading({ showFullCollection, themeType }: POAPHeadingProps) {
  return (
    <POAPHeadingContainer>
      <Title themeType={themeType}>POAPs</Title>
      <NimiLink lightButton onClick={showFullCollection} themeType={themeType}>
        Full Collection <ExternalLinkSvg />
      </NimiLink>
    </POAPHeadingContainer>
  )
}

const POAPHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Title = styled.h2<{ themeType: NimiThemeType }>`
  line-height: 26px;
  font-size: 26px;
  font-family: 'Archivo', sans-serif;
  font-weight: 700;
  ${({ themeType }) => getTextColor(themeType)}
`

export const POAPList = styled.div`
  width: 100%;
`

export const POAPItem = styled.img`
  width: 20%;
  height: auto;
  vertical-align: top;
  border-radius: 50%;
  margin-right: -4%;
`

function getTextColor(themeType: NimiThemeType) {
  switch (themeType) {
    case NimiThemeType.NIMI:
      return 'color: rgba(33, 33, 35, 0.65);'
    case NimiThemeType.DEVCON:
      return 'color: rgba(33, 33, 35, 0.65);'
    case NimiThemeType.RAAVE:
      return 'color: rgba(190, 215, 132, 1);'
    case NimiThemeType.INFINITE:
      return 'color: #fff;'
    case NimiThemeType.DAIVINITY:
      return 'color: #212123;'
    default:
      return null
  }
}
