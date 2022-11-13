import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import { NimiComponent } from './NimiComponent'
import { Nimi, NimiImageType, NimiBlockchain, NimiLinkType, NimiWidgetType, NimiThemeType } from 'types'
import { NIMI_CARDS_WIDTH } from '../../constants'

export default {
  title: 'NimiMobile',
  component: NimiComponent,
  decorators: [
    Story => (
      <Container>
        <Story />
      </Container>
    )
  ]
} as ComponentMeta<typeof NimiComponent>

const Template: ComponentStory<typeof NimiComponent> = args => <NimiComponent {...args} />

export const Default = Template.bind({})
Default.args = { nimi: getNimi(NimiThemeType.NIMI) }

export const Devcon = Template.bind({})
Devcon.args = { nimi: getNimi(NimiThemeType.DEVCON) }

export const Raave = Template.bind({})
Raave.args = { nimi: getNimi(NimiThemeType.RAAVE) }

export const Daivinity = Template.bind({})
Daivinity.args = { nimi: getNimi(NimiThemeType.DAIVINITY) }

export const Infinite = Template.bind({})
Infinite.args = { nimi: getNimi(NimiThemeType.INFINITE) }

const Container = styled.div`
  width: ${NIMI_CARDS_WIDTH}px;
  margin: 0 auto;
`

function getNimi(themeType: NimiThemeType): Nimi {
  return {
    displayName: '🍀 Bejzik 🍀',
    image: {
      type: NimiImageType.URL,
      url: 'https://ipfs.io/ipfs/bafkreigkp5o6b5pwgxfbcyt2iz7afvhmupacqxv2y2af7ufw52yvtni7bi'
    },
    addresses: [
      {
        address: '0xb492873D940dAc02B5021dFF82282d8374509582',
        blockchain: NimiBlockchain.ETHEREUM
      },
      {
        address: '0x26358E62C2eDEd350e311bfde51588b8383A9315',
        blockchain: NimiBlockchain.ETHEREUM
      }
    ],
    description: 'Experience technologist focused on crafting future-proof web applications.',
    ensAddress: '0x26358E62C2eDEd350e311bfde51588b8383A9315',
    widgets: [
      {
        type: NimiWidgetType.POAP,
        context: {
          tokenIds: ['5742834', '5740068', '5742199', '5733154', '5743494', '5769722']
        }
      }
    ],
    ensName: 'nimi.eth',
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
    theme: {
      type: themeType
    }
  }
}
