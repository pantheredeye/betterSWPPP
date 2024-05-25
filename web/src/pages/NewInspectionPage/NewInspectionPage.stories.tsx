import type { Meta, StoryObj } from '@storybook/react'

import NewInspectionPage from './NewInspectionPage'

const meta: Meta<typeof NewInspectionPage> = {
  component: NewInspectionPage,
}

export default meta

type Story = StoryObj<typeof NewInspectionPage>

export const Primary: Story = {}
