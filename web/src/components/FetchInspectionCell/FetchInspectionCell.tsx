import type {
  FetchInspectionQuery,
  FetchInspectionQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FetchInspectionQuery,
  FetchInspectionQueryVariables
> = gql`
  query FetchInspectionQuery($id: Int!) {
    inspection: inspection(id: $id) {
      id
      site {
        name
      }
      inspector {
        id
        firstName
        lastName
      }
      date
      startTime
      endTime
      permitOnSite
      swpppOnSite
      bmpsInstalledPerSwppp
      siteInspectionReports
      inspectionType
      title
      description
      severity
      violationsNotes
      whomToContact
      newStormEvent
      stormDateTime
      stormDuration
      approximatePrecipitation
      weatherAtTime
      temperature
      previousDischarge
      newDischarges
      dischargeAtThisTime
      currentDischarges
      createdAt
      updatedAt
      bmpData {
        id
        implemented
        maintenanceRequired
        repeatOccurrence
        correctiveActionNeeded
        notes
        bmp {
          id
          name
          description
        }
      }
      media {
        id
        url
        description
      }
    }
  }
`

export const Success = ({
  fetchInspection,
}: CellSuccessProps<FetchInspectionQuery, FetchInspectionQueryVariables>) => {
  return <div>{JSON.stringify(fetchInspection)}</div>
}
