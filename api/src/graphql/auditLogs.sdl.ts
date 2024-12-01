export const schema = gql`
  type AuditLog {
    id: String!
    member: Membership
    membershipId: String
    action: String!
    resourceType: String!
    resourceId: String!
    changes: JSON
    ipAddress: String
    deviceDetails: JSON
    createdAt: DateTime!
  }

  type Query {
    auditLogs: [AuditLog!]! @requireAuth
    auditLog(id: String!): AuditLog @requireAuth
  }

  input CreateAuditLogInput {
    membershipId: String
    action: String!
    resourceType: String!
    resourceId: String!
    changes: JSON
    ipAddress: String
    deviceDetails: JSON
  }

  input UpdateAuditLogInput {
    membershipId: String
    action: String
    resourceType: String
    resourceId: String
    changes: JSON
    ipAddress: String
    deviceDetails: JSON
  }

  type Mutation {
    createAuditLog(input: CreateAuditLogInput!): AuditLog! @requireAuth
    updateAuditLog(id: String!, input: UpdateAuditLogInput!): AuditLog!
      @requireAuth
    deleteAuditLog(id: String!): AuditLog! @requireAuth
  }
`
