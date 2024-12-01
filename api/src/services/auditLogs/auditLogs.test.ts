import type { AuditLog } from '@prisma/client'

import {
  auditLogs,
  auditLog,
  createAuditLog,
  updateAuditLog,
  deleteAuditLog,
} from './auditLogs'
import type { StandardScenario } from './auditLogs.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('auditLogs', () => {
  scenario('returns all auditLogs', async (scenario: StandardScenario) => {
    const result = await auditLogs()

    expect(result.length).toEqual(Object.keys(scenario.auditLog).length)
  })

  scenario('returns a single auditLog', async (scenario: StandardScenario) => {
    const result = await auditLog({ id: scenario.auditLog.one.id })

    expect(result).toEqual(scenario.auditLog.one)
  })

  scenario('creates a auditLog', async () => {
    const result = await createAuditLog({
      input: { action: 'String', resourceType: 'String', resourceId: 'String' },
    })

    expect(result.action).toEqual('String')
    expect(result.resourceType).toEqual('String')
    expect(result.resourceId).toEqual('String')
  })

  scenario('updates a auditLog', async (scenario: StandardScenario) => {
    const original = (await auditLog({
      id: scenario.auditLog.one.id,
    })) as AuditLog
    const result = await updateAuditLog({
      id: original.id,
      input: { action: 'String2' },
    })

    expect(result.action).toEqual('String2')
  })

  scenario('deletes a auditLog', async (scenario: StandardScenario) => {
    const original = (await deleteAuditLog({
      id: scenario.auditLog.one.id,
    })) as AuditLog
    const result = await auditLog({ id: original.id })

    expect(result).toEqual(null)
  })
})
