export const schema = gql`
  type Organization {
    id: String!
    name: String!
    createdAt: DateTime!
    users: [Membership]!
    sites: [Site]!
    settings: JSON
    billingEmail: String
    stripeCustomerId: String
    inspection: [Inspection]!
    event: [Event]!
    membershipRole: [MembershipRole]!
    media: [Media]!
    inspectionEventDetails: [InspectionEventDetails]!
    assignment: [Assignment]!
    permission: [Permission]!
    deletedAt: DateTime
    status: OrganizationStatus!
  }

  enum OrganizationStatus {
    ACTIVE
    SUSPENDED
    ARCHIVED
    PENDING
  }

  type Query {
    organizations: [Organization!]! @requireAuth
    organization(id: String!): Organization @requireAuth
  }

  input CreateOrganizationInput {
    name: String!
    settings: JSON
    billingEmail: String
    stripeCustomerId: String
    deletedAt: DateTime
    status: OrganizationStatus!
  }

  input UpdateOrganizationInput {
    name: String
    settings: JSON
    billingEmail: String
    stripeCustomerId: String
    deletedAt: DateTime
    status: OrganizationStatus
  }

  type Mutation {
    createOrganization(input: CreateOrganizationInput!): Organization!
      @requireAuth
    updateOrganization(
      id: String!
      input: UpdateOrganizationInput!
    ): Organization! @requireAuth
    deleteOrganization(id: String!): Organization! @requireAuth
  }
`;
