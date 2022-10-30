import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import { POAPWidget } from './POAPWidget'

export default {
  title: 'POAP Widget',
  component: POAPWidget,
  decorators: [Story => <Container><Story/></Container>]
} as ComponentMeta<typeof POAPWidget>

export const Primary = () => <POAPWidget ensAddress='0xb492873D940dAc02B5021dFF82282d8374509582' />

const Container = styled.div`
    width: 570px;
    margin: 100px auto 0;
`
