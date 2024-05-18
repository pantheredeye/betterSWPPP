export const schema = gql`
  type Site {
    id: Int!
    name: String!
    address: String!
    city: String!
    state: String!
    zipCode: String!
    siteType: SiteType!
    siteTypeId: Int!
    owner: User!
    ownerId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    inspections: [Inspection]!
    bmps: [Bmp]!
  }

  type Query {
    sites: [Site!]! @requireAuth
    site(id: Int!): Site @requireAuth
  }

  input CreateSiteInput {
    name: String!
    address: String!
    city: String!
    state: String!
    zipCode: String!
    siteTypeId: Int!
    ownerId: Int!
  }

  input UpdateSiteInput {
    name: String
    address: String
    city: String
    state: String
    zipCode: String
    siteTypeId: Int
    ownerId: Int
  }

  type Mutation {
    createSite(input: CreateSiteInput!): Site! @requireAuth
    updateSite(id: Int!, input: UpdateSiteInput!): Site! @requireAuth
    deleteSite(id: Int!): Site! @requireAuth
  }
`
