import type { SiteType } from '@prisma/client'

import {
  siteTypes,
  siteType,
  createSiteType,
  updateSiteType,
  deleteSiteType,
} from './siteTypes'
import type { StandardScenario } from './siteTypes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('siteTypes', () => {
  scenario('returns all siteTypes', async (scenario: StandardScenario) => {
    const result = await siteTypes()

    expect(result.length).toEqual(Object.keys(scenario.siteType).length)
  })

  scenario('returns a single siteType', async (scenario: StandardScenario) => {
    const result = await siteType({ id: scenario.siteType.one.id })

    expect(result).toEqual(scenario.siteType.one)
  })

  scenario('creates a siteType', async () => {
    const result = await createSiteType({
      input: { name: 'String2867037' },
    })

    expect(result.name).toEqual('String2867037')
  })

  scenario('updates a siteType', async (scenario: StandardScenario) => {
    const original = (await siteType({
      id: scenario.siteType.one.id,
    })) as SiteType
    const result = await updateSiteType({
      id: original.id,
      input: { name: 'String6631262' },
    })

    expect(result.name).toEqual('String6631262')
  })

  scenario('deletes a siteType', async (scenario: StandardScenario) => {
    const original = (await deleteSiteType({
      id: scenario.siteType.one.id,
    })) as SiteType
    const result = await siteType({ id: original.id })

    expect(result).toEqual(null)
  })
})
