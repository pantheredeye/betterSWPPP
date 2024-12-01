export const schema = gql`
  type Site {
    id: String!
    name: String!
    organization: Organization!
    organizationId: String!
    metadata: JSON
    currentData: JSON
    assignments: [Assignment]!
    events: [Event]!
    createdAt: DateTime!
    updatedAt: DateTime!
    inspection: [Inspection]!
    media: [Media]!
    deletedAt: DateTime
    isActive: Boolean!
  }

  type Query {
    sites: [Site!]! @requireAuth
    site(id: String!): Site @requireAuth
  }

  input CreateSiteInput {
    name: String!
    organizationId: String!
    metadata: JSON
    currentData: JSON
    deletedAt: DateTime
    isActive: Boolean!
  }

  input UpdateSiteInput {
    name: String
    organizationId: String
    metadata: JSON
    currentData: JSON
    deletedAt: DateTime
    isActive: Boolean
  }

  type Mutation {
    createSite(input: CreateSiteInput!): Site! @requireAuth
    updateSite(id: String!, input: UpdateSiteInput!): Site! @requireAuth
    deleteSite(id: String!): Site! @requireAuth
  }
`;
