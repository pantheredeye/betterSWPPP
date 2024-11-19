export const schema = gql`
  type User {
    id: Int!
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    firstName: String
    lastName: String
    phoneNumber: String
    roles: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    inspections: [Inspection]!
    sites: [Site]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    firstName: String
    lastName: String
    phoneNumber: String
    roles: String!
  }

  input UpdateUserInput {
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    firstName: String
    lastName: String
    phoneNumber: String
    roles: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
