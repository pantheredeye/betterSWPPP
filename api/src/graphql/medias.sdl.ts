export const schema = gql`
  type Media {
    id: Int!
    inspection: Inspection!
    inspectionId: Int!
    url: String!
    description: String!
  }

  type MediaUpload {
    inspection: Inspection!
    inspectionId: Int!
    url: String!
    description: String!
  }

  type Query {
    medias: [Media!]! @requireAuth
    media(id: Int!): Media @requireAuth
  }

  input CreateMediaInput {
    url: String!
    description: String!
  }

  input UpdateMediaInput {
    inspectionId: Int
    url: String
    description: String
  }

  type Mutation {
    createMedia(input: CreateMediaInput!): Media! @requireAuth
    updateMedia(id: Int!, input: UpdateMediaInput!): Media! @requireAuth
    deleteMedia(id: Int!): Media! @requireAuth
  }
`
