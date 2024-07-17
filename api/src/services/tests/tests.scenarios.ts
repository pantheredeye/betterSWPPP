import type { Prisma, test } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.testCreateArgs>({
  test: {
    one: { data: { name: 'String', type: 'String' } },
    two: { data: { name: 'String', type: 'String' } },
  },
})

export type StandardScenario = ScenarioData<test, 'test'>
