// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import AvailableBmps from './AvailableBmps'

const meta: Meta<typeof AvailableBmps> = {
  component: AvailableBmps,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AvailableBmps>

export const Primary: Story = {}
