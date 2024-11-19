import type { Bmp } from '@prisma/client'

import { bmps, bmp, createBmp, updateBmp, deleteBmp } from './bmps'
import type { StandardScenario } from './bmps.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('bmps', () => {
  scenario('returns all bmps', async (scenario: StandardScenario) => {
    const result = await bmps()

    expect(result.length).toEqual(Object.keys(scenario.bmp).length)
  })

  scenario('returns a single bmp', async (scenario: StandardScenario) => {
    const result = await bmp({ id: scenario.bmp.one.id })

    expect(result).toEqual(scenario.bmp.one)
  })

  scenario('creates a bmp', async (scenario: StandardScenario) => {
    const result = await createBmp({
      input: {
        name: 'String',
        description: 'String',
        isStandard: true,
        siteId: scenario.bmp.two.siteId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.isStandard).toEqual(true)
    expect(result.siteId).toEqual(scenario.bmp.two.siteId)
  })

  scenario('updates a bmp', async (scenario: StandardScenario) => {
    const original = (await bmp({ id: scenario.bmp.one.id })) as Bmp
    const result = await updateBmp({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a bmp', async (scenario: StandardScenario) => {
    const original = (await deleteBmp({ id: scenario.bmp.one.id })) as Bmp
    const result = await bmp({ id: original.id })

    expect(result).toEqual(null)
  })
})
