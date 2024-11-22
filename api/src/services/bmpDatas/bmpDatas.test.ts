import type { BmpData } from '@prisma/client'

import {
  bmpDatas,
  bmpData,
  createBmpData,
  updateBmpData,
  deleteBmpData,
} from './bmpDatas'
import type { StandardScenario } from './bmpDatas.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe.skip('bmpDatas', () => {
  scenario('returns all bmpDatas', async (scenario: StandardScenario) => {
    const result = await bmpDatas()

    expect(result.length).toEqual(Object.keys(scenario.bmpData).length)
  })

  scenario('returns a single bmpData', async (scenario: StandardScenario) => {
    const result = await bmpData({ id: scenario.bmpData.one.id })

    expect(result).toEqual(scenario.bmpData.one)
  })

  scenario('creates a bmpData', async (scenario: StandardScenario) => {
    const result = await createBmpData({
      input: {
        bmpId: scenario.bmpData.two.bmpId,
        inspectionId: scenario.bmpData.two.inspectionId,
        implemented: true,
        maintenanceRequired: true,
        repeatOccurrence: true,
        correctiveActionNeeded: 'String',
        notes: 'String',
      },
    })

    expect(result.bmpId).toEqual(scenario.bmpData.two.bmpId)
    expect(result.inspectionId).toEqual(scenario.bmpData.two.inspectionId)
    expect(result.implemented).toEqual(true)
    expect(result.maintenanceRequired).toEqual(true)
    expect(result.repeatOccurrence).toEqual(true)
    expect(result.correctiveActionNeeded).toEqual('String')
    expect(result.notes).toEqual('String')
  })

  scenario('updates a bmpData', async (scenario: StandardScenario) => {
    const original = (await bmpData({ id: scenario.bmpData.one.id })) as BmpData
    const result = await updateBmpData({
      id: original.id,
      input: { implemented: false },
    })

    expect(result.implemented).toEqual(false)
  })

  scenario('deletes a bmpData', async (scenario: StandardScenario) => {
    const original = (await deleteBmpData({
      id: scenario.bmpData.one.id,
    })) as BmpData
    const result = await bmpData({ id: original.id })

    expect(result).toEqual(null)
  })
})
