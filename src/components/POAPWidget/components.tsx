import styled from 'styled-components'

import { ReactComponent as ExternalLinkSvg } from '../../assets/svg/common/external-link.svg'
import { NimiLink } from '../../components/NimiLink'

export const Section = styled.section<{ padding?: string }>`
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => (padding ? padding : '38px 36px')};
  background: #ffffff;
  box-shadow: 0px 8px 35px #e9e0ff;
  border-radius: 25px;
  width: 100%;
  margin-bottom: 40px;
`

export const Container = styled.div`
  margin-bottom: 25px;
`

export function POAPHeading({ showFullCollection }: { showFullCollection: () => void }) {
  return (
    <POAPHeadingContainer>
      <Title>POAPs</Title>
      <NimiLink lightButton onClick={showFullCollection}>
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

export const Title = styled.h2`
  line-height: 26px;
  font-size: 26px;
  font-weight: 700;
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
