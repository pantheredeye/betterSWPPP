export const schema = gql`
  type BmpData {
    id: Int!
    bmp: Bmp!
    bmpId: Int!
    inspection: Inspection!
    inspectionId: Int!
    implemented: Boolean!
    maintenanceRequired: Boolean!
    repeatOccurrence: Boolean!
    correctiveActionNeeded: String!
    notes: String!
  }

  type Query {
    bmpDatas: [BmpData!]! @requireAuth
    bmpData(id: Int!): BmpData @requireAuth
  }

  input InspectionBmpInput {
    bmpId: Int!
    implemented: Boolean!
    maintenanceRequired: Boolean!
    repeatOccurrence: Boolean!
    correctiveActionNeeded: String!
    notes: String!
  }

  input CreateBmpDataInput {
    bmpId: Int!
    inspectionId: Int!
    implemented: Boolean!
    maintenanceRequired: Boolean!
    repeatOccurrence: Boolean!
    correctiveActionNeeded: String!
    notes: String!
  }

  input UpdateBmpDataInput {
    bmpId: Int
    inspectionId: Int
    implemented: Boolean
    maintenanceRequired: Boolean
    repeatOccurrence: Boolean
    correctiveActionNeeded: String
    notes: String
  }

  type Mutation {
    createBmpData(input: CreateBmpDataInput!): BmpData! @requireAuth
    updateBmpData(id: Int!, input: UpdateBmpDataInput!): BmpData! @requireAuth
    deleteBmpData(id: Int!): BmpData! @requireAuth
  }
`
