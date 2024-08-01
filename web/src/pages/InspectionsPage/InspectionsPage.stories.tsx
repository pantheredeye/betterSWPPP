import type { Meta, StoryObj } from '@storybook/react'

import InspectionsPage from './InspectionsPage'

const meta: Meta<typeof InspectionsPage> = {
  component: InspectionsPage,
}

export default meta

type Story = StoryObj<typeof InspectionsPage>

export const Primary: Story = {}
