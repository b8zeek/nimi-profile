import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

import { BlockchainAddressesSection } from './BlockchainAddressesSection'
import { NimiBlockchain } from '../../types'

export default {
  title: 'BlockchainAddressesSection',
  component: BlockchainAddressesSection,
  decorators: [Story => <Container><Story/></Container>]
} as ComponentMeta<typeof BlockchainAddressesSection>


const Template: ComponentStory<typeof BlockchainAddressesSection> = (args) => <BlockchainAddressesSection {...args} />

export const Primary = Template.bind({})
Primary.args = {
    addresses: [
        { address: "0x26358E62C2eDEd350e311bfde51588b8383A9315", blockchain: NimiBlockchain.ETHEREUM },
        { address: "0x26358E62C2eDEd350e311bfde51588b8383A9315", blockchain: NimiBlockchain.ETHEREUM },
        { address: "0x26358E62C2eDEd350e311bfde51588b8383A9315", blockchain: NimiBlockchain.ETHEREUM }
    ]
}

const Container = styled.div`
    max-width: 570px;
    margin: 0 auto;
`
