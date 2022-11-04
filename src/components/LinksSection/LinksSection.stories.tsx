import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

import { LinksSection } from './LinksSection'
import { NimiLinkType, NimiThemeType } from '../../types'

export default {
  title: 'LinksSection',
  component: LinksSection,
  decorators: [
    Story => (
      <Container>
        <Story />
      </Container>
    )
  ]
} as ComponentMeta<typeof LinksSection>

const Template: ComponentStory<typeof LinksSection> = args => <LinksSection {...args} />

export const Primary = Template.bind({})
Primary.args = {
  links: [
    {
      type: NimiLinkType.GITHUB,
      title: 'Github',
      content: 'https://github.com/bejzik8'
    },
    {
      type: NimiLinkType.LINKEDIN,
      title: 'LinkedIn',
      content: 'https://www.linkedin.com/in/basic-mirko/'
    },
    { type: NimiLinkType.DISCORD, title: 'Discord', content: 'tmrk24#0963' },
    { type: NimiLinkType.KEYBASE, title: 'Keybase', content: 'bejzik8' },
    { type: NimiLinkType.TWITTER, title: 'Twitter', content: 'bejzik8' },
    {
      type: NimiLinkType.TELEGRAM,
      title: 'Telegram',
      content: 'https://t.me/bejzik8'
    },
    { type: NimiLinkType.EMAIL, title: 'Gmail', content: 'bejzik8@gmail.com' }
  ],
  themeType: NimiThemeType.RAAVE
}

const Container = styled.div`
  max-width: 570px;
  margin: 0 auto;
`
