import { ComponentStory, ComponentMeta } from '@storybook/react'

import { NimiSection } from './NimiSection'

export default {
  title: 'NimiSection',
  component: NimiSection
} as ComponentMeta<typeof NimiSection>

const Template: ComponentStory<typeof NimiSection> = (args) => <NimiSection>Test NimiSection</NimiSection>;

export const Primary = Template.bind({})
