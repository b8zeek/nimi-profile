import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'
import { NimiThemeType } from 'types'

import { Header } from './Header'

export default {
  title: 'Header',
  component: Header,
  decorators: [
    Story => (
      <Container>
        <Story />
      </Container>
    )
  ]
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => <Header {...args} />

export const Primary = Template.bind({})
Primary.args = {
  themeType: NimiThemeType.NIMI
}

const Container = styled.div`
  max-width: 570px;
  margin: 0 auto;
`
