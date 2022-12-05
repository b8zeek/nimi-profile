import { Fragment } from 'react'
import styled from 'styled-components'

import { NimiComponent } from 'components'
import { ThemeProvider } from 'theme'
import { Nimi } from 'types'
import { filterEmptyFields } from 'utils'

type NimiCardProps = {
  nimi: Nimi
  isApp?: boolean
}

export function NimiCard({ nimi, isApp = false }: NimiCardProps) {
  const filteredNimi = filterEmptyFields(nimi)

  const NimiWrapper = isApp ? Container : Fragment

  return (
    <ThemeProvider theme={nimi.theme || {}}>
      <NimiWrapper>
        <NimiComponent nimi={filteredNimi} />
      </NimiWrapper>
    </ThemeProvider>
  )
}

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  overflow: hidden;
`
