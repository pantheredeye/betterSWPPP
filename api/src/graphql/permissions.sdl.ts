export const schema = gql`
  type Permission {
    id: String!
    name: String!
    description: String
    scope: PermissionScope!
    conditions: JSON
    membershipRole: [MembershipRole]!
    organization: Organization
    organizationId: String
    deletedAt: DateTime
    resourceType: String
    resourceId: String
    deactivatedBy: String
    deactivationReason: String
  }

  enum PermissionScope {
    ORGANIZATION
    SITE
    GLOBAL
    CROSS_ORGANIZATIONAL
  }

  type Query {
    permissions: [Permission!]! @requireAuth
    permission(id: String!): Permission @requireAuth
  }

  input CreatePermissionInput {
    name: String!
    description: String
    scope: PermissionScope!
    conditions: JSON
    organizationId: String
    deletedAt: DateTime
    resourceType: String
    resourceId: String
    deactivatedBy: String
    deactivationReason: String
  }

  input UpdatePermissionInput {
    name: String
    description: String
    scope: PermissionScope
    conditions: JSON
    organizationId: String
    deletedAt: DateTime
    resourceType: String
    resourceId: String
    deactivatedBy: String
    deactivationReason: String
  }

  type Mutation {
    createPermission(input: CreatePermissionInput!): Permission! @requireAuth
    updatePermission(id: String!, input: UpdatePermissionInput!): Permission!
      @requireAuth
    deletePermission(id: String!): Permission! @requireAuth
  }
`
