import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

import { NimiLink } from './NimiLink'

export default {
  title: 'NimiLink',
  component: NimiLink,
  decorators: [
    Story => (
      <Container>
        <Story />
      </Container>
    )
  ]
} as ComponentMeta<typeof NimiLink>

const Template: ComponentStory<typeof NimiLink> = args => <NimiLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Bejzik',
  onClick: () => console.log('Link click action.')
}

const Container = styled.div`
  max-width: 570px;
  margin: 0 auto;
`
