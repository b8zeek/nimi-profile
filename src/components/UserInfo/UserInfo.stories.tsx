import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'
import { NimiThemeType } from '../../types'

import { UserInfo } from './UserInfo'

export default {
  title: 'UserInfo',
  component: UserInfo,
  decorators: [
    Story => (
      <Container>
        <Story />
      </Container>
    )
  ]
} as ComponentMeta<typeof UserInfo>

const Template: ComponentStory<typeof UserInfo> = args => <UserInfo {...args} />

export const Primary = Template.bind({})
Primary.args = {
  displayName: '🍀 Bejzik 🍀',
  description: 'Experience technologist focused on crafting future-proof web applications.',
  ensAddress: '0xb492873D940dAc02B5021dFF82282d8374509582',
  ensName: 'bejzik.eth',
  setProfilePhotoRotated: () => console.log('Rotate profile photo click.'),
  themeType: NimiThemeType.DAIVINITY
}

const Container = styled.div`
  max-width: 570px;
  margin: 0 auto;
`
