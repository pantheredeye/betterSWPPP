import type { test } from '@prisma/client'

import { tests, test, createTest, updateTest, deleteTest } from './tests'
import type { StandardScenario } from './tests.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tests', () => {
  scenario('returns all tests', async (scenario: StandardScenario) => {
    const result = await tests()

    expect(result.length).toEqual(Object.keys(scenario.test).length)
  })

  scenario('returns a single test', async (scenario: StandardScenario) => {
    const result = await test({ id: scenario.test.one.id })

    expect(result).toEqual(scenario.test.one)
  })

  scenario('creates a test', async () => {
    const result = await createTest({
      input: { name: 'String', type: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.type).toEqual('String')
  })

  scenario('updates a test', async (scenario: StandardScenario) => {
    const original = (await test({ id: scenario.test.one.id })) as test
    const result = await updateTest({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a test', async (scenario: StandardScenario) => {
    const original = (await deleteTest({ id: scenario.test.one.id })) as test
    const result = await test({ id: original.id })

    expect(result).toEqual(null)
  })
})
