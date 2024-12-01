import type { Event } from '@prisma/client'

import { events, event, createEvent, updateEvent, deleteEvent } from './events'
import type { StandardScenario } from './events.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('events', () => {
  scenario('returns all events', async (scenario: StandardScenario) => {
    const result = await events()

    expect(result.length).toEqual(Object.keys(scenario.event).length)
  })

  scenario('returns a single event', async (scenario: StandardScenario) => {
    const result = await event({ id: scenario.event.one.id })

    expect(result).toEqual(scenario.event.one)
  })

  scenario('creates a event', async (scenario: StandardScenario) => {
    const result = await createEvent({
      input: {
        type: 'SITE_TYPE_CREATED',
        siteId: scenario.event.two.siteId,
        membershipId: scenario.event.two.membershipId,
        organizationId: scenario.event.two.organizationId,
      },
    })

    expect(result.type).toEqual('SITE_TYPE_CREATED')
    expect(result.siteId).toEqual(scenario.event.two.siteId)
    expect(result.membershipId).toEqual(scenario.event.two.membershipId)
    expect(result.organizationId).toEqual(scenario.event.two.organizationId)
  })

  scenario('updates a event', async (scenario: StandardScenario) => {
    const original = (await event({ id: scenario.event.one.id })) as Event
    const result = await updateEvent({
      id: original.id,
      input: { type: 'MEDIA_UPLOADED' },
    })

    expect(result.type).toEqual('MEDIA_UPLOADED')
  })

  scenario('deletes a event', async (scenario: StandardScenario) => {
    const original = (await deleteEvent({
      id: scenario.event.one.id,
    })) as Event
    const result = await event({ id: original.id })

    expect(result).toEqual(null)
  })
})
