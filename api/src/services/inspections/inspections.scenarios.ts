import type { Prisma, Inspection } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InspectionCreateArgs>({
  inspection: {
    one: {
      data: {
        date: '2024-05-26T20:34:07.192Z',
        startTime: '2024-05-26T20:34:07.192Z',
        endTime: '2024-05-26T20:34:07.192Z',
        weather: 'String',
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
        updatedAt: '2024-05-26T20:34:07.192Z',
        site: {
          create: {
            name: 'String',
            addressLine1: 'String',
            ownerName: 'String',
            updatedAt: '2024-05-26T20:34:07.192Z',
            siteType: { create: { name: 'String3653403' } },
          },
        },
        inspector: {
          create: {
            email: 'String3312895',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-05-26T20:34:07.192Z',
            role: { create: { name: 'String5195073' } },
          },
        },
      },
    },
    two: {
      data: {
        date: '2024-05-26T20:34:07.192Z',
        startTime: '2024-05-26T20:34:07.192Z',
        endTime: '2024-05-26T20:34:07.192Z',
        weather: 'String',
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
        updatedAt: '2024-05-26T20:34:07.192Z',
        site: {
          create: {
            name: 'String',
            addressLine1: 'String',
            ownerName: 'String',
            updatedAt: '2024-05-26T20:34:07.192Z',
            siteType: { create: { name: 'String4961836' } },
          },
        },
        inspector: {
          create: {
            email: 'String9623927',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-05-26T20:34:07.192Z',
            role: { create: { name: 'String8407679' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Inspection, 'inspection'>
