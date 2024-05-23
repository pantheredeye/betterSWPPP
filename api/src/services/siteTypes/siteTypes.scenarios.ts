import type { Prisma, SiteType } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SiteTypeCreateArgs>({
  siteType: {
    one: { data: { name: 'String2534900' } },
    two: { data: { name: 'String9509849' } },
  },
})

export type StandardScenario = ScenarioData<SiteType, 'siteType'>
