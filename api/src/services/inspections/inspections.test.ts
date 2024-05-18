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
        date: '2024-05-18T12:32:23.037Z',
        weather: 'String',
        updatedAt: '2024-05-18T12:32:23.037Z',
      },
    })

    expect(result.siteId).toEqual(scenario.inspection.two.siteId)
    expect(result.inspectorId).toEqual(scenario.inspection.two.inspectorId)
    expect(result.date).toEqual(new Date('2024-05-18T12:32:23.037Z'))
    expect(result.weather).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2024-05-18T12:32:23.037Z'))
  })

  scenario('updates a inspection', async (scenario: StandardScenario) => {
    const original = (await inspection({
      id: scenario.inspection.one.id,
    })) as Inspection
    const result = await updateInspection({
      id: original.id,
      input: { date: '2024-05-19T12:32:23.037Z' },
    })

    expect(result.date).toEqual(new Date('2024-05-19T12:32:23.037Z'))
  })

  scenario('deletes a inspection', async (scenario: StandardScenario) => {
    const original = (await deleteInspection({
      id: scenario.inspection.one.id,
    })) as Inspection
    const result = await inspection({ id: original.id })

    expect(result).toEqual(null)
  })
})
