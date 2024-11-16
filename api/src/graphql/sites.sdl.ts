export const schema = gql`
  type Site {
    id: Int!
    name: String!
    addressLine1: String!
    addressLine2: String
    city: String!
    state: String
    postalCode: String
    country: String
    npdesTrackingNo: String
    siteType: SiteType!
    siteTypeId: Int!
    siteInspector: String
    siteMap: String
    ownerName: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    inspections: [Inspection]!
    bmps: [Bmp]!
    User: User
    userId: Int
  }

  type Query {
    sites: [Site!]! @requireAuth
    site(id: Int!): Site @requireAuth
  }

  input CreateSiteInput {
    name: String!
    addressLine1: String!
    addressLine2: String
    city: String!
    state: String
    postalCode: String
    country: String
    npdesTrackingNo: String
    siteTypeId: Int!
    siteInspector: String
    siteMap: String
    bmps: [BmpInput]!
    ownerName: String!
    userId: Int
  }

  input UpdateSiteInput {
    name: String
    addressLine1: String
    addressLine2: String
    city: String
    state: String
    postalCode: String
    country: String
    npdesTrackingNo: String
    siteTypeId: Int
    siteInspector: String
    siteMap: String
    bmps: [BmpInput]!
    ownerName: String
    userId: Int
  }

  input BmpInput {
    name: String
    description: String
    isStandard: Boolean
    siteId: Int
  }

  type Mutation {
    createSite(input: CreateSiteInput!): Site! @requireAuth
    updateSite(id: Int!, input: UpdateSiteInput!): Site! @requireAuth
    deleteSite(id: Int!): Site! @requireAuth
  }
`
