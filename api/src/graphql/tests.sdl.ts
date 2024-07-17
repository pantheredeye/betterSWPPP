export const schema = gql`
  type Test {
    id: Int!
    name: String!
    type: String!
  }

  type Query {
    tests: [Test!]! @requireAuth
    test(id: Int!): Test @requireAuth
  }

  input CreateTestInput {
    name: String!
    type: String!
  }

  input UpdateTestInput {
    name: String
    type: String
  }

  type Mutation {
    createTest(input: CreateTestInput!): Test! @requireAuth
    updateTest(id: Int!, input: UpdateTestInput!): Test! @requireAuth
    deleteTest(id: Int!): Test! @requireAuth
  }
`
