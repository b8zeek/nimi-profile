import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

import { POAPWidget } from './POAPWidget'

export default {
  title: 'POAP Widget',
  component: POAPWidget,
  decorators: [Story => <Container><Story/></Container>]
} as ComponentMeta<typeof POAPWidget>


const Template: ComponentStory<typeof POAPWidget> = (args) => <POAPWidget {...args} />

export const Primary = Template.bind({})
Primary.args = {
  ensAddress: '0xb492873D940dAc02B5021dFF82282d8374509582',
  widget: {
    tokenIds: ['5742834', '5740068', '5742199', '5733154', '5743494', '5769722']
  }
}

const Container = styled.div`
    max-width: 570px;
    margin: 0 auto;
`
