import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

import { ProfilePhoto } from './ProfilePhoto'
import { NimiImageType, NimiThemeType } from 'types'

export default {
  title: 'ProfilePhoto',
  component: ProfilePhoto,
  decorators: [
    Story => (
      <Container>
        <Story />
      </Container>
    )
  ]
} as ComponentMeta<typeof ProfilePhoto>

const Template: ComponentStory<typeof ProfilePhoto> = args => <ProfilePhoto {...args} />

export const Primary = Template.bind({})
Primary.args = {
  ensName: 'bejzik.eth',
  image: {
    type: NimiImageType.URL,
    url: 'https://ipfs.io/ipfs/bafkreigkp5o6b5pwgxfbcyt2iz7afvhmupacqxv2y2af7ufw52yvtni7bi'
  },
  profilePhotoRotated: false,
  setProfilePhotoRotated: () => console.log('Rotate profile photo click.'),
  themeType: NimiThemeType.RAAVE
}

const Container = styled.div`
  max-width: 570px;
  margin: 0 auto;
`
