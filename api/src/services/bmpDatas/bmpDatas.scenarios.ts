import type { Prisma, BmpData } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BmpDataCreateArgs>({
  bmpData: {
    one: {
      data: {
        implemented: true,
        maintenanceRequired: true,
        repeatOccurrence: true,
        correctiveActionNeeded: 'String',
        notes: 'String',
        bmp: {
          create: {
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
                updatedAt: '2024-05-18T12:33:15.002Z',
                siteType: { create: { name: 'String6606309' } },
                owner: {
                  create: {
                    email: 'String4649378',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-05-18T12:33:15.002Z',
                    role: { create: { name: 'String7765712' } },
                  },
                },
              },
            },
          },
        },
        inspection: {
          create: {
            date: '2024-05-18T12:33:15.002Z',
            weather: 'String',
            updatedAt: '2024-05-18T12:33:15.002Z',
            site: {
              create: {
                name: 'String',
                address: 'String',
                city: 'String',
                state: 'String',
                zipCode: 'String',
                updatedAt: '2024-05-18T12:33:15.002Z',
                siteType: { create: { name: 'String24098' } },
                owner: {
                  create: {
                    email: 'String80551',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-05-18T12:33:15.002Z',
                    role: { create: { name: 'String397080' } },
                  },
                },
              },
            },
            inspector: {
              create: {
                email: 'String9482763',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-05-18T12:33:15.002Z',
                role: { create: { name: 'String2177067' } },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        implemented: true,
        maintenanceRequired: true,
        repeatOccurrence: true,
        correctiveActionNeeded: 'String',
        notes: 'String',
        bmp: {
          create: {
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
                updatedAt: '2024-05-18T12:33:15.002Z',
                siteType: { create: { name: 'String9811727' } },
                owner: {
                  create: {
                    email: 'String5588138',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-05-18T12:33:15.002Z',
                    role: { create: { name: 'String2233328' } },
                  },
                },
              },
            },
          },
        },
        inspection: {
          create: {
            date: '2024-05-18T12:33:15.002Z',
            weather: 'String',
            updatedAt: '2024-05-18T12:33:15.002Z',
            site: {
              create: {
                name: 'String',
                address: 'String',
                city: 'String',
                state: 'String',
                zipCode: 'String',
                updatedAt: '2024-05-18T12:33:15.002Z',
                siteType: { create: { name: 'String3836797' } },
                owner: {
                  create: {
                    email: 'String7655375',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-05-18T12:33:15.002Z',
                    role: { create: { name: 'String4206161' } },
                  },
                },
              },
            },
            inspector: {
              create: {
                email: 'String4127737',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-05-18T12:33:15.002Z',
                role: { create: { name: 'String5054549' } },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<BmpData, 'bmpData'>
