export const schema = gql`
  type InspectionEventDetails {
    id: String!
    statusChange: JSON
    event: Event!
    eventId: String!
    organization: Organization!
    organizationId: String!
  }

  type Query {
    inspectionEventDetailses: [InspectionEventDetails!]! @requireAuth
    inspectionEventDetails(id: String!): InspectionEventDetails @requireAuth
  }

  input CreateInspectionEventDetailsInput {
    statusChange: JSON
    eventId: String!
    organizationId: String!
  }

  input UpdateInspectionEventDetailsInput {
    statusChange: JSON
    eventId: String
    organizationId: String
  }

  type Mutation {
    createInspectionEventDetails(
      input: CreateInspectionEventDetailsInput!
    ): InspectionEventDetails! @requireAuth
    updateInspectionEventDetails(
      id: String!
      input: UpdateInspectionEventDetailsInput!
    ): InspectionEventDetails! @requireAuth
    deleteInspectionEventDetails(id: String!): InspectionEventDetails!
      @requireAuth
  }
`
