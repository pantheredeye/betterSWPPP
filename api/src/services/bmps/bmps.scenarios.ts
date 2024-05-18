import type { Prisma, Bmp } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BmpCreateArgs>({
  bmp: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        isStandard: true,
        site: {
          create: {
            name: 'String',
            address: 'String',
            city: 'String',
            state: 'String',
            zipCode: 'String',
            updatedAt: '2024-05-18T12:46:55.404Z',
            siteType: { create: { name: 'String9787630' } },
            owner: {
              create: {
                email: 'String7831744',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-05-18T12:46:55.404Z',
                role: { create: { name: 'String8532305' } },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        isStandard: true,
        site: {
          create: {
            name: 'String',
            address: 'String',
            city: 'String',
            state: 'String',
            zipCode: 'String',
            updatedAt: '2024-05-18T12:46:55.404Z',
            siteType: { create: { name: 'String229114' } },
            owner: {
              create: {
                email: 'String5439211',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-05-18T12:46:55.404Z',
                role: { create: { name: 'String1934885' } },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Bmp, 'bmp'>
