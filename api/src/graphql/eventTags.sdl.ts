export const schema = gql`
  type EventTag {
    id: String!
    eventId: String!
    tag: String!
    event: Event!
  }

  type Query {
    eventTags: [EventTag!]! @requireAuth
    eventTag(id: String!): EventTag @requireAuth
  }

  input CreateEventTagInput {
    eventId: String!
    tag: String!
  }

  input UpdateEventTagInput {
    eventId: String
    tag: String
  }

  type Mutation {
    createEventTag(input: CreateEventTagInput!): EventTag! @requireAuth
    updateEventTag(id: String!, input: UpdateEventTagInput!): EventTag!
      @requireAuth
    deleteEventTag(id: String!): EventTag! @requireAuth
  }
`;
