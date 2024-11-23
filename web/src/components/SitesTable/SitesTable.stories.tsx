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

import SitesTable from './SitesTable'

const meta: Meta<typeof SitesTable> = {
  component: SitesTable,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SitesTable>

export const Primary: Story = {}
