import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

import { BlockchainAddressesSection } from './BlockchainAddressesSection'
import { NimiBlockchain, NimiThemeType } from 'types'

export default {
  title: 'BlockchainAddressesSection',
  component: BlockchainAddressesSection,
  decorators: [
    Story => (
      <Container>
        <Story />
      </Container>
    )
  ]
} as ComponentMeta<typeof BlockchainAddressesSection>

const Template: ComponentStory<typeof BlockchainAddressesSection> = args => <BlockchainAddressesSection {...args} />

export const Primary = Template.bind({})
Primary.args = {
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
  themeType: NimiThemeType.RAAVE
}

const Container = styled.div`
  max-width: 570px;
  margin: 0 auto;
`
