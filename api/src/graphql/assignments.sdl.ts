export const schema = gql`
  type Assignment {
    id: String!
    site: Site!
    siteId: String!
    member: Membership!
    membershipId: String!
    organization: Organization!
    organizationId: String!
    user: User
    userId: String
  }

  type Query {
    assignments: [Assignment!]! @requireAuth
    assignment(id: String!): Assignment @requireAuth
  }

  input CreateAssignmentInput {
    siteId: String!
    membershipId: String!
    organizationId: String!
    userId: String
  }

  input UpdateAssignmentInput {
    siteId: String
    membershipId: String
    organizationId: String
    userId: String
  }

  type Mutation {
    createAssignment(input: CreateAssignmentInput!): Assignment! @requireAuth
    updateAssignment(id: String!, input: UpdateAssignmentInput!): Assignment!
      @requireAuth
    deleteAssignment(id: String!): Assignment! @requireAuth
  }
`
