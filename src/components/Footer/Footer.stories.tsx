import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'
import { NimiThemeType } from 'types'

import { Footer } from './Footer'

export default {
  title: 'Footer',
  component: Footer,
  decorators: [
    Story => (
      <Container>
        <Story />
      </Container>
    )
  ]
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />

export const Primary = Template.bind({})
Primary.args = {
  themeType: NimiThemeType.NIMI
}

const Container = styled.div`
  max-width: 570px;
  margin: 0 auto;
`
