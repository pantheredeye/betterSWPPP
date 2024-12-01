export const schema = gql`
  type Inspection {
    id: String!
    organization: Organization!
    organizationId: String!
    site: Site!
    siteId: String!
    events: [Event]!
    currentState: JSON
    media: [Media]!
    deletedAt: DateTime
    status: InspectionStatus!
  }

  enum InspectionStatus {
    ACTIVE
    COMPLETED
    ARCHIVED
    UNDER_REVIEW
  }

  type Query {
    inspections: [Inspection!]! @requireAuth
    inspection(id: String!): Inspection @requireAuth
  }

  input CreateInspectionInput {
    organizationId: String!
    siteId: String!
    currentState: JSON
    deletedAt: DateTime
    status: InspectionStatus!
  }

  input UpdateInspectionInput {
    organizationId: String
    siteId: String
    currentState: JSON
    deletedAt: DateTime
    status: InspectionStatus
  }

  type Mutation {
    createInspection(input: CreateInspectionInput!): Inspection! @requireAuth
    updateInspection(id: String!, input: UpdateInspectionInput!): Inspection!
      @requireAuth
    deleteInspection(id: String!): Inspection! @requireAuth
  }
`;
