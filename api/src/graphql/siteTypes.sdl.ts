export const schema = gql`
  type SiteType {
    id: Int!
    name: String!
    sites: [Site]!
  }

  type Query {
    siteTypes: [SiteType!]! @requireAuth
    siteType(id: Int!): SiteType @requireAuth
  }

  input CreateSiteTypeInput {
    name: String!
  }

  input UpdateSiteTypeInput {
    name: String
  }

  type Mutation {
    createSiteType(input: CreateSiteTypeInput!): SiteType! @requireAuth
    updateSiteType(id: Int!, input: UpdateSiteTypeInput!): SiteType!
      @requireAuth
    deleteSiteType(id: Int!): SiteType! @requireAuth
  }
`
