import type { EventTag } from '@prisma/client'

import {
  eventTags,
  eventTag,
  createEventTag,
  updateEventTag,
  deleteEventTag,
} from './eventTags'
import type { StandardScenario } from './eventTags.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('eventTags', () => {
  scenario('returns all eventTags', async (scenario: StandardScenario) => {
    const result = await eventTags()

    expect(result.length).toEqual(Object.keys(scenario.eventTag).length)
  })

  scenario('returns a single eventTag', async (scenario: StandardScenario) => {
    const result = await eventTag({ id: scenario.eventTag.one.id })

    expect(result).toEqual(scenario.eventTag.one)
  })

  scenario('creates a eventTag', async (scenario: StandardScenario) => {
    const result = await createEventTag({
      input: { eventId: scenario.eventTag.two.eventId, tag: 'String' },
    })

    expect(result.eventId).toEqual(scenario.eventTag.two.eventId)
    expect(result.tag).toEqual('String')
  })

  scenario('updates a eventTag', async (scenario: StandardScenario) => {
    const original = (await eventTag({
      id: scenario.eventTag.one.id,
    })) as EventTag
    const result = await updateEventTag({
      id: original.id,
      input: { tag: 'String2' },
    })

    expect(result.tag).toEqual('String2')
  })

  scenario('deletes a eventTag', async (scenario: StandardScenario) => {
    const original = (await deleteEventTag({
      id: scenario.eventTag.one.id,
    })) as EventTag
    const result = await eventTag({ id: original.id })

    expect(result).toEqual(null)
  })
})
