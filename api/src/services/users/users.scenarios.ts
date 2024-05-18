import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String9451190',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2024-05-18T12:32:02.836Z',
        role: { create: { name: 'String7160454' } },
      },
    },
    two: {
      data: {
        email: 'String6406400',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2024-05-18T12:32:02.836Z',
        role: { create: { name: 'String6373414' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
