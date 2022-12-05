import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'
import { NimiThemeType } from 'types'

import { NimiSection } from './NimiSection'

export default {
  title: 'NimiSection',
  component: NimiSection,
  decorators: [
    Story => (
      <Content>
        <Story />
      </Content>
    )
  ]
} as ComponentMeta<typeof NimiSection>

const Template: ComponentStory<typeof NimiSection> = args => <NimiSection {...args}>Mirko Basic</NimiSection>

export const Primary = Template.bind({})
Primary.args = {
  themeType: NimiThemeType.DAIVINITY
}

const Content = styled.div`
  max-width: 570px;
  margin: 0 auto;
`
