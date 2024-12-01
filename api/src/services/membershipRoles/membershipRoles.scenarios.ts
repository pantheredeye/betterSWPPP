import type { Prisma, MembershipRole } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MembershipRoleCreateArgs>({
  membershipRole: {
    one: {
      data: {
        name: 'String9041892',
        organization: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        name: 'String3526703',
        organization: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<MembershipRole, 'membershipRole'>
