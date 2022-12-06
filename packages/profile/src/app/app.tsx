import styled from 'styled-components'
import NxWelcome from './nx-welcome'

import { Components } from '@nimi/components'

const StyledApp = styled.div`
  // Your style here
`

export function App() {
  return (
    <StyledApp>
      <Components />
      {/* <NxWelcome title='profile' /> */}
    </StyledApp>
  )
}

export default App
