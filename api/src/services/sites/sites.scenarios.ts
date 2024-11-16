import type { Prisma, Site } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SiteCreateArgs>({
  site: {
    one: {
      data: {
        name: 'String',
        addressLine1: 'String',
        city: 'String',
        ownerName: 'String',
        updatedAt: '2024-05-25T00:49:28.407Z',
        siteType: { create: { name: 'String2819272' } },
      },
    },
    two: {
      data: {
        name: 'String',
        addressLine1: 'String',
        city: 'String',
        ownerName: 'String',
        updatedAt: '2024-05-25T00:49:28.407Z',
        siteType: { create: { name: 'String6630844' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Site, 'site'>
