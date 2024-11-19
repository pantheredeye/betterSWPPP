import type { Meta, StoryObj } from '@storybook/react'

import NewSitePage from './NewSitePage'

const meta: Meta<typeof NewSitePage> = {
  component: NewSitePage,
}

export default meta

type Story = StoryObj<typeof NewSitePage>

export const Primary: Story = {}
