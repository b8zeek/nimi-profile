import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

import { NimiLogo } from './NimiLogo'
import { NimiThemeType } from '../../types'

export default {
  title: 'NimiLogo',
  component: NimiLogo,
  decorators: [
    Story => (
      <Container>
        <Story />
      </Container>
    )
  ]
} as ComponentMeta<typeof NimiLogo>

const Template: ComponentStory<typeof NimiLogo> = args => <NimiLogo {...args} />

export const Primary = Template.bind({})
Primary.args = {
  theme: { type: NimiThemeType.DAIVINITY }
}

const Container = styled.div`
  max-width: 570px;
  margin: 0 auto;
`
