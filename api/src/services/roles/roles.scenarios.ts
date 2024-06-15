import type { Prisma, Role } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RoleCreateArgs>({
  role: {
    one: { data: { name: 'String9788711' } },
    two: { data: { name: 'String859536' } },
  },
})

export type StandardScenario = ScenarioData<Role, 'role'>
