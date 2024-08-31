import type {
  FindInspectionQuery,
  FindInspectionQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FindInspectionQuery,
  FindInspectionQueryVariables
> = gql`
  query FindInspectionQuery($id: Int!) {
    inspection: inspection(id: $id) {
      id
      site {
        name
      }
      inspector {
        id
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
      }
      media {
        id
        url
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindInspectionQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  inspection,
}: CellSuccessProps<FindInspectionQuery, FindInspectionQueryVariables>) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">{inspection.title}</h2>
      <p>{inspection.description}</p>
      <p>Inspector: {inspection.inspector.name}</p>
      <p>Site: {inspection.site.name}</p>
      <p>Date: {new Date(inspection.date).toLocaleDateString()}</p>
      <p>Severity: {inspection.severity}</p>
      {/* Add more fields as needed */}
    </div>
  )
}
