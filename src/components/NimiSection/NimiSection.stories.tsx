import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components';

import { NimiSection } from './NimiSection'

export default {
  title: 'NimiSection',
  component: NimiSection,
  decorators: [
    Story => <Container><Content><Story /></Content></Container>]
} as ComponentMeta<typeof NimiSection>

const Template: ComponentStory<typeof NimiSection> = (args) => <NimiSection>Test NimiSection</NimiSection>;

export const Primary = Template.bind({})

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #222;
`

const Content = styled.div`
  max-width: 570px;
  margin: 0 auto;
`
