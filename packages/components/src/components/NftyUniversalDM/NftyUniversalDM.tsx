import { useEffect } from 'react'
import styled from 'styled-components'

import { loadNfySDK } from './nft-sdk'

export interface NftyUniversalDMProps {
  ensAddress: string
  ensName: string
}

export function NftyUniversalDM({ ensAddress, ensName }: NftyUniversalDMProps) {
  useEffect(() => {
    loadNfySDK()
  }, [])

  // Adam, do we need div over div? I don't know how this component looks like.
  return (
    <StyledNftyUniversalDMWrapper>
      <div id='nfty_universal_dm' data-address={ensAddress} data-display_name={ensName} />
    </StyledNftyUniversalDMWrapper>
  )
}

export const StyledNftyUniversalDMWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`
