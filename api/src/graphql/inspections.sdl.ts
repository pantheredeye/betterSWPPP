export const schema = gql`
  type Inspection {
    id: Int!
    site: Site!
    siteId: Int!
    inspector: User!
    inspectorId: Int!
    date: DateTime!
    weather: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    bmpData: [BmpData]!
    media: [Media]!
  }

  type Query {
    inspections: [Inspection!]! @requireAuth
    inspection(id: Int!): Inspection @requireAuth
  }

  input CreateInspectionInput {
    siteId: Int!
    inspectorId: Int!
    date: DateTime!
    weather: String!
  }

  input UpdateInspectionInput {
    siteId: Int
    inspectorId: Int
    date: DateTime
    weather: String
  }

  type Mutation {
    createInspection(input: CreateInspectionInput!): Inspection! @requireAuth
    updateInspection(id: Int!, input: UpdateInspectionInput!): Inspection!
      @requireAuth
    deleteInspection(id: Int!): Inspection! @requireAuth
  }
`
