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

const getArgs = (themeType: NimiThemeType) => ({
  displayName: '🍀 Bejzik 🍀',
  description: 'Experience technologist focused on crafting future-proof web applications.',
  ensAddress: '0xb492873D940dAc02B5021dFF82282d8374509582',
  ensName: 'bejzik.eth',
  setProfilePhotoRotated: () => console.log('Rotate profile photo click.'),
  themeType: themeType
})

export const Default = Template.bind({})
Default.args = getArgs(NimiThemeType.DAIVINITY)

export const Devcon = Template.bind({})
Devcon.args = getArgs(NimiThemeType.DEVCON)

export const Raave = Template.bind({})
Raave.args = getArgs(NimiThemeType.RAAVE)

export const Daivinity = Template.bind({})
Daivinity.args = getArgs(NimiThemeType.DAIVINITY)

export const Infinite = Template.bind({})
Infinite.args = getArgs(NimiThemeType.INFINITE)

const Container = styled.div`
  max-width: 570px;
  margin: 0 auto;
`
