import type { Inspection } from '@prisma/client'

import {
  inspections,
  inspection,
  createInspection,
  updateInspection,
  deleteInspection,
} from './inspections'
import type { StandardScenario } from './inspections.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('inspections', () => {
  scenario('returns all inspections', async (scenario: StandardScenario) => {
    const result = await inspections()

    expect(result.length).toEqual(Object.keys(scenario.inspection).length)
  })

  scenario(
    'returns a single inspection',
    async (scenario: StandardScenario) => {
      const result = await inspection({ id: scenario.inspection.one.id })

      expect(result).toEqual(scenario.inspection.one)
    }
  )

  scenario('creates a inspection', async (scenario: StandardScenario) => {
    const result = await createInspection({
      input: {
        siteId: scenario.inspection.two.siteId,
        inspectorId: scenario.inspection.two.inspectorId,
        date: '2024-05-26T20:34:07.099Z',
        startTime: '2024-05-26T20:34:07.099Z',
        endTime: '2024-05-26T20:34:07.099Z',
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
        updatedAt: '2024-05-26T20:34:07.099Z',
      },
    })

    expect(result.siteId).toEqual(scenario.inspection.two.siteId)
    expect(result.inspectorId).toEqual(scenario.inspection.two.inspectorId)
    expect(result.date).toEqual(new Date('2024-05-26T20:34:07.099Z'))
    expect(result.startTime).toEqual(new Date('2024-05-26T20:34:07.099Z'))
    expect(result.endTime).toEqual(new Date('2024-05-26T20:34:07.099Z'))
    expect(result.weather).toEqual('String')
    expect(result.permitOnSite).toEqual(true)
    expect(result.swpppOnSite).toEqual(true)
    expect(result.bmpsInstalledPerSwppp).toEqual(true)
    expect(result.siteInspectionReports).toEqual(true)
    expect(result.inspectionType).toEqual('String')
    expect(result.title).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.severity).toEqual('String')
    expect(result.newStormEvent).toEqual(true)
    expect(result.weatherAtTime).toEqual('String')
    expect(result.previousDischarge).toEqual(true)
    expect(result.newDischarges).toEqual(true)
    expect(result.dischargeAtThisTime).toEqual(true)
    expect(result.currentDischarges).toEqual(true)
    expect(result.updatedAt).toEqual(new Date('2024-05-26T20:34:07.099Z'))
  })

  scenario('updates a inspection', async (scenario: StandardScenario) => {
    const original = (await inspection({
      id: scenario.inspection.one.id,
    })) as Inspection
    const result = await updateInspection({
      id: original.id,
      input: { date: '2024-05-27T20:34:07.099Z' },
    })

    expect(result.date).toEqual(new Date('2024-05-27T20:34:07.099Z'))
  })

  scenario('deletes a inspection', async (scenario: StandardScenario) => {
    const original = (await deleteInspection({
      id: scenario.inspection.one.id,
    })) as Inspection
    const result = await inspection({ id: original.id })

    expect(result).toEqual(null)
  })
})
