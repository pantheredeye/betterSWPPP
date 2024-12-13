export const schema = gql`
  type Lead {
    id: Int!
    name: String
    email: String!
    feedback: String
    createdAt: DateTime!
  }

  type Query {
    leads: [Lead!]! @requireAuth
    lead(id: Int!): Lead @requireAuth
  }

  input CreateLeadInput {
    name: String
    email: String!
    feedback: String
  }

  input UpdateLeadInput {
    name: String
    email: String
    feedback: String
  }

  type Mutation {
    createLead(input: CreateLeadInput!): Lead! @skipAuth
    updateLead(id: Int!, input: UpdateLeadInput!): Lead! @requireAuth
    deleteLead(id: Int!): Lead! @requireAuth
  }
`
