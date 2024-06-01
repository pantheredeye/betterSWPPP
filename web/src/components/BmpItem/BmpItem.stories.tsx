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

import BmpItem from './BmpItem'

const meta: Meta<typeof BmpItem> = {
  component: BmpItem,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof BmpItem>

export const Primary: Story = {}
