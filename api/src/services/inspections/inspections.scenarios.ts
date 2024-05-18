import type { Prisma, Inspection } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InspectionCreateArgs>({
  inspection: {
    one: {
      data: {
        date: '2024-05-18T12:32:23.149Z',
        weather: 'String',
        updatedAt: '2024-05-18T12:32:23.149Z',
        site: {
          create: {
            name: 'String',
            address: 'String',
            city: 'String',
            state: 'String',
            zipCode: 'String',
            updatedAt: '2024-05-18T12:32:23.149Z',
            siteType: { create: { name: 'String7643316' } },
            owner: {
              create: {
                email: 'String7280818',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-05-18T12:32:23.149Z',
                role: { create: { name: 'String9824106' } },
              },
            },
          },
        },
        inspector: {
          create: {
            email: 'String1069886',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-05-18T12:32:23.149Z',
            role: { create: { name: 'String173716' } },
          },
        },
      },
    },
    two: {
      data: {
        date: '2024-05-18T12:32:23.150Z',
        weather: 'String',
        updatedAt: '2024-05-18T12:32:23.150Z',
        site: {
          create: {
            name: 'String',
            address: 'String',
            city: 'String',
            state: 'String',
            zipCode: 'String',
            updatedAt: '2024-05-18T12:32:23.150Z',
            siteType: { create: { name: 'String8934363' } },
            owner: {
              create: {
                email: 'String653908',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-05-18T12:32:23.150Z',
                role: { create: { name: 'String3060693' } },
              },
            },
          },
        },
        inspector: {
          create: {
            email: 'String8557224',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-05-18T12:32:23.150Z',
            role: { create: { name: 'String7120869' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Inspection, 'inspection'>
