export const schema = gql`
  type Inspection {
    id: Int!
    site: Site!
    siteId: Int!
    inspector: User!
    inspectorId: Int!
    date: DateTime!
    startTime: DateTime!
    endTime: DateTime!
    permitOnSite: Boolean!
    swpppOnSite: Boolean!
    bmpsInstalledPerSwppp: Boolean!
    siteInspectionReports: Boolean!
    inspectionType: String!
    title: String!
    description: String!
    severity: String!
    violationsNotes: String
    whomToContact: String
    newStormEvent: Boolean!
    stormDateTime: DateTime
    stormDuration: String
    approximatePrecipitation: Float
    weatherAtTime: String!
    temperature: Float
    previousDischarge: Boolean!
    newDischarges: Boolean!
    dischargeAtThisTime: Boolean!
    currentDischarges: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    bmpData: [BmpData]!
    media: [Media]!
  }

  type Query {
    inspections: [Inspection!]! @requireAuth
    inspection(id: Int!): Inspection @requireAuth
  }

  input CreateInspectionInput {
    siteId: Int!
    inspectorId: Int!
    date: DateTime!
    startTime: DateTime!
    endTime: DateTime!
    permitOnSite: Boolean!
    swpppOnSite: Boolean!
    bmpsInstalledPerSwppp: Boolean!
    siteInspectionReports: Boolean!
    inspectionType: String!
    title: String!
    description: String!
    severity: String!
    violationsNotes: String
    whomToContact: String
    newStormEvent: Boolean!
    stormDateTime: DateTime
    stormDuration: String
    approximatePrecipitation: Float
    weatherAtTime: String!
    temperature: Float
    previousDischarge: Boolean!
    newDischarges: Boolean!
    dischargeAtThisTime: Boolean!
    currentDischarges: Boolean!
    bmpData: [InspectionBmpInput!]
    media: [CreateMediaInput!]
  }

  input UpdateInspectionInput {
    siteId: Int
    inspectorId: Int
    date: DateTime
    startTime: DateTime
    endTime: DateTime
    permitOnSite: Boolean
    swpppOnSite: Boolean
    bmpsInstalledPerSwppp: Boolean
    siteInspectionReports: Boolean
    inspectionType: String
    title: String
    description: String
    severity: String
    violationsNotes: String
    whomToContact: String
    newStormEvent: Boolean
    stormDateTime: DateTime
    stormDuration: String
    approximatePrecipitation: Float
    weatherAtTime: String
    temperature: Float
    previousDischarge: Boolean
    newDischarges: Boolean
    dischargeAtThisTime: Boolean
    currentDischarges: Boolean
    bmpData: [InspectionBmpInput!]
    media: [CreateMediaInput!]
  }

  type Mutation {
    createInspection(input: CreateInspectionInput!): Inspection! @requireAuth
    updateInspection(id: Int!, input: UpdateInspectionInput!): Inspection!
      @requireAuth
    deleteInspection(id: Int!): Inspection! @requireAuth
  }
`