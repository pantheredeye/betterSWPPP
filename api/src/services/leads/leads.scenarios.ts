import type { Prisma, Lead } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LeadCreateArgs>({
  lead: {
    one: { data: { email: 'String' } },
    two: { data: { email: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Lead, 'lead'>
