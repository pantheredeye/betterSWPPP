import type { Prisma, Media } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MediaCreateArgs>({
  media: {
    one: {
      data: {
        url: 'String',
        description: 'String',
        inspection: {
          create: {
            date: '2024-07-02T00:19:29.811Z',
            startTime: '2024-07-02T00:19:29.811Z',
            endTime: '2024-07-02T00:19:29.811Z',
            permitOnSite: true,
            swpppOnSite: true,
            bmpsInstalledPerSwppp: true,
            siteInspectionReports: true,
            inspectionType: 'String',
            title: 'String',
            description: 'String',
            severity: 'String',
            newStormEvent: true,
            weatherAtTime: 'String',
            previousDischarge: true,
            newDischarges: true,
            dischargeAtThisTime: true,
            currentDischarges: true,
            updatedAt: '2024-07-02T00:19:29.811Z',
            site: {
              create: {
                name: 'String',
                addressLine1: 'String',
                ownerName: 'String',
                updatedAt: '2024-07-02T00:19:29.811Z',
                siteType: { create: { name: 'String6159064' } },
              },
            },
            inspector: {
              create: {
                email: 'String5319575',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-07-02T00:19:29.811Z',
                role: { create: { name: 'String8295340' } },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        url: 'String',
        description: 'String',
        inspection: {
          create: {
            date: '2024-07-02T00:19:29.812Z',
            startTime: '2024-07-02T00:19:29.812Z',
            endTime: '2024-07-02T00:19:29.812Z',
            permitOnSite: true,
            swpppOnSite: true,
            bmpsInstalledPerSwppp: true,
            siteInspectionReports: true,
            inspectionType: 'String',
            title: 'String',
            description: 'String',
            severity: 'String',
            newStormEvent: true,
            weatherAtTime: 'String',
            previousDischarge: true,
            newDischarges: true,
            dischargeAtThisTime: true,
            currentDischarges: true,
            updatedAt: '2024-07-02T00:19:29.812Z',
            site: {
              create: {
                name: 'String',
                addressLine1: 'String',
                ownerName: 'String',
                updatedAt: '2024-07-02T00:19:29.812Z',
                siteType: { create: { name: 'String2305697' } },
              },
            },
            inspector: {
              create: {
                email: 'String8435685',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-07-02T00:19:29.812Z',
                role: { create: { name: 'String78607' } },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Media, 'media'>
