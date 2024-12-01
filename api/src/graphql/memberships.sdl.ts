export const schema = gql`
  type Membership {
    id: String!
    user: User!
    userId: String!
    organization: Organization!
    organizationId: String!
    deletedAt: DateTime
    roles: [MembershipRole]!
    settings: JSON
    invitationId: String
    invitedEmail: String
    invitationExpiresAt: DateTime
    invitedAt: DateTime
    joinedAt: DateTime
    invitationAttempts: Int!
    lastInvitationSent: DateTime
    invitationChannel: InvitationChannel!
    assignment: [Assignment]!
    event: [Event]!
    media: [Media]!
    auditLog: [AuditLog]!
    status: MembershipStatus!
    deactivationReason: String
  }

  enum InvitationChannel {
    EMAIL
    SLACK
    INTERNAL
    EXTERNAL
  }

  enum MembershipStatus {
    INVITED
    ACTIVE
    SUSPENDED
    PENDING
  }

  type Query {
    memberships: [Membership!]! @requireAuth
    membership(id: String!): Membership @requireAuth
  }

  input CreateMembershipInput {
    userId: String!
    organizationId: String!
    deletedAt: DateTime
    settings: JSON
    invitationId: String
    invitedEmail: String
    invitationExpiresAt: DateTime
    invitedAt: DateTime
    joinedAt: DateTime
    invitationAttempts: Int!
    lastInvitationSent: DateTime
    invitationChannel: InvitationChannel!
    status: MembershipStatus!
    deactivationReason: String
  }

  input UpdateMembershipInput {
    userId: String
    organizationId: String
    deletedAt: DateTime
    settings: JSON
    invitationId: String
    invitedEmail: String
    invitationExpiresAt: DateTime
    invitedAt: DateTime
    joinedAt: DateTime
    invitationAttempts: Int
    lastInvitationSent: DateTime
    invitationChannel: InvitationChannel
    status: MembershipStatus
    deactivationReason: String
  }

  type Mutation {
    createMembership(input: CreateMembershipInput!): Membership! @requireAuth
    updateMembership(id: String!, input: UpdateMembershipInput!): Membership!
      @requireAuth
    deleteMembership(id: String!): Membership! @requireAuth
  }
`;
