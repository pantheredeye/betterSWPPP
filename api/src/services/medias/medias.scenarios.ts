import type { Prisma, Media } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MediaCreateArgs>({
  media: {
    one: {
      data: {
        url: 'String',
        type: 'String',
        inspection: {
          create: {
            date: '2024-05-18T12:33:41.740Z',
            weather: 'String',
            updatedAt: '2024-05-18T12:33:41.740Z',
            site: {
              create: {
                name: 'String',
                address: 'String',
                city: 'String',
                state: 'String',
                zipCode: 'String',
                updatedAt: '2024-05-18T12:33:41.740Z',
                siteType: { create: { name: 'String5115069' } },
                owner: {
                  create: {
                    email: 'String3622045',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-05-18T12:33:41.740Z',
                    role: { create: { name: 'String5693592' } },
                  },
                },
              },
            },
            inspector: {
              create: {
                email: 'String4124706',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-05-18T12:33:41.740Z',
                role: { create: { name: 'String450032' } },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        url: 'String',
        type: 'String',
        inspection: {
          create: {
            date: '2024-05-18T12:33:41.740Z',
            weather: 'String',
            updatedAt: '2024-05-18T12:33:41.740Z',
            site: {
              create: {
                name: 'String',
                address: 'String',
                city: 'String',
                state: 'String',
                zipCode: 'String',
                updatedAt: '2024-05-18T12:33:41.740Z',
                siteType: { create: { name: 'String6547890' } },
                owner: {
                  create: {
                    email: 'String3346509',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-05-18T12:33:41.740Z',
                    role: { create: { name: 'String6306549' } },
                  },
                },
              },
            },
            inspector: {
              create: {
                email: 'String969616',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-05-18T12:33:41.740Z',
                role: { create: { name: 'String8153207' } },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Media, 'media'>
