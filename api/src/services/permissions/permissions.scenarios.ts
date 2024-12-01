import type { Prisma, Permission } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PermissionCreateArgs>({
  permission: {
    one: { data: { name: 'String', scope: 'ORGANIZATION' } },
    two: { data: { name: 'String', scope: 'ORGANIZATION' } },
  },
})

export type StandardScenario = ScenarioData<Permission, 'permission'>
