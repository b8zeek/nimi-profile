import { ComponentStory, ComponentMeta } from '@storybook/react'

import { POAPWidget } from './POAPWidget'

export default {
  title: 'NimiSection',
  component: POAPWidget
} as ComponentMeta<typeof POAPWidget>

const Template: ComponentStory<typeof POAPWidget> = (args) => <POAPWidget ensAddress='0xb492873D940dAc02B5021dFF82282d8374509582' />;

export const Primary = Template.bind({})
