export const schema = gql`
  type Bmp {
    id: Int!
    name: String!
    description: String!
    isStandard: Boolean!
    site: Site!
    siteId: Int!
    bmpData: [BmpData]!
  }

  type Query {
    bmps: [Bmp!]! @requireAuth
    bmp(id: Int!): Bmp @requireAuth
  }

  input CreateBmpInput {
    name: String!
    description: String!
    isStandard: Boolean!
    siteId: Int!
  }

  input UpdateBmpInput {
    name: String
    description: String
    isStandard: Boolean
    siteId: Int
  }

  type Mutation {
    createBmp(input: CreateBmpInput!): Bmp! @requireAuth
    updateBmp(id: Int!, input: UpdateBmpInput!): Bmp! @requireAuth
    deleteBmp(id: Int!): Bmp! @requireAuth
  }
`
