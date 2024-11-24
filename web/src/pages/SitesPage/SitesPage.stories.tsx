import type { Meta, StoryObj } from '@storybook/react'

import SitesPage from './SitesPage'

const meta: Meta<typeof SitesPage> = {
  component: SitesPage,
}

export default meta

type Story = StoryObj<typeof SitesPage>

export const Primary: Story = {}
