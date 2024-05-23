import type { Prisma, Site } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SiteCreateArgs>({
  site: {
    one: {
      data: {
        name: 'String',
        address: 'String',
        city: 'String',
        state: 'String',
        zipCode: 'String',
        updatedAt: '2024-05-18T12:31:17.613Z',
        siteType: { create: { name: 'String8400264' } },
        owner: {
          create: {
            email: 'String4215135',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-05-18T12:31:17.613Z',
            role: { create: { name: 'String6438356' } },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        address: 'String',
        city: 'String',
        state: 'String',
        zipCode: 'String',
        updatedAt: '2024-05-18T12:31:17.613Z',
        siteType: { create: { name: 'String8486360' } },
        owner: {
          create: {
            email: 'String7063936',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-05-18T12:31:17.613Z',
            role: { create: { name: 'String1063493' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Site, 'site'>
