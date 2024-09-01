import { useApolloClient } from '@redwoodjs/web'

const FETCH_INSPECTION_QUERY = gql`
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

export const fetchInspection = async (id: number) => {
  const client = useApolloClient()

  try {
    const { data } = await client.query({
      query: FETCH_INSPECTION_QUERY,
      variables: { id },
    })
    return data.inspection
  } catch (error) {
    console.error('Error fetching inspection:', error)
    throw error
  }
}
