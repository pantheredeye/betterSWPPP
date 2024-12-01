export const schema = gql`
  type Event {
    id: String!
    type: EventType!
    site: Site!
    siteId: String!
    membership: Membership!
    membershipId: String!
    organization: Organization!
    organizationId: String!
    details: JSON
    createdAt: DateTime!
    media: [Media]!
    metadata: JSON
    inspectionEventDetails: InspectionEventDetails
    inspection: Inspection
    inspectionId: String
    eventTag: [EventTag]!
    user: User
    userId: String
  }

  enum EventType {
    SITE_TYPE_CREATED
    SITE_TYPE_UPDATED
    SITE_TYPE_DELETED
    BMP_CREATED
    BMP_UPDATED
    BMP_DELETED
    ROLE_CREATED
    ROLE_UPDATED
    ROLE_DELETED
    MEDIA_UPLOADED
  }

  type Query {
    events: [Event!]! @requireAuth
    event(id: String!): Event @requireAuth
  }

  input CreateEventInput {
    type: EventType!
    siteId: String!
    membershipId: String!
    organizationId: String!
    details: JSON
    metadata: JSON
    inspectionId: String
    userId: String
  }

  input UpdateEventInput {
    type: EventType
    siteId: String
    membershipId: String
    organizationId: String
    details: JSON
    metadata: JSON
    inspectionId: String
    userId: String
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event! @requireAuth
    updateEvent(id: String!, input: UpdateEventInput!): Event! @requireAuth
    deleteEvent(id: String!): Event! @requireAuth
  }
`;
