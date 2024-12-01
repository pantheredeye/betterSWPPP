export const schema = gql`
  type Media {
    id: String!
    url: String!
    description: String
    inspection: Inspection
    inspectionId: String
    site: Site
    siteId: String
    event: Event
    eventId: String
    type: MediaType!
    fileSize: Int
    mimeType: String
    uploadedBy: Membership
    membershipId: String
    organization: Organization!
    organizationId: String!
    json: JSON
  }

  enum MediaType {
    IMAGE
    DOCUMENT
    VIDEO
    AUDIO
  }

  type Query {
    medias: [Media!]! @requireAuth
    media(id: String!): Media @requireAuth
  }

  input CreateMediaInput {
    url: String!
    description: String
    inspectionId: String
    siteId: String
    eventId: String
    type: MediaType!
    fileSize: Int
    mimeType: String
    membershipId: String
    organizationId: String!
    json: JSON
  }

  input UpdateMediaInput {
    url: String
    description: String
    inspectionId: String
    siteId: String
    eventId: String
    type: MediaType
    fileSize: Int
    mimeType: String
    membershipId: String
    organizationId: String
    json: JSON
  }

  type Mutation {
    createMedia(input: CreateMediaInput!): Media! @requireAuth
    updateMedia(id: String!, input: UpdateMediaInput!): Media! @requireAuth
    deleteMedia(id: String!): Media! @requireAuth
  }
`;
