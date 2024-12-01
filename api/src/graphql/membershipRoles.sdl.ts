export const schema = gql`
  type MembershipRole {
    id: String!
    name: String!
    membership: [Membership]!
    organization: Organization!
    organizationId: String!
    permission: Permission
    permissionId: String
  }

  type Query {
    membershipRoles: [MembershipRole!]! @requireAuth
    membershipRole(id: String!): MembershipRole @requireAuth
  }

  input CreateMembershipRoleInput {
    name: String!
    organizationId: String!
    permissionId: String
  }

  input UpdateMembershipRoleInput {
    name: String
    organizationId: String
    permissionId: String
  }

  type Mutation {
    createMembershipRole(input: CreateMembershipRoleInput!): MembershipRole!
      @requireAuth
    updateMembershipRole(
      id: String!
      input: UpdateMembershipRoleInput!
    ): MembershipRole! @requireAuth
    deleteMembershipRole(id: String!): MembershipRole! @requireAuth
  }
`
