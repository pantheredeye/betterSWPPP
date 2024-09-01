import { gql, useLazyQuery } from '@apollo/client'

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

export const fetchInspection = (id: number) => {
  const [loadInspection] = useLazyQuery(FETCH_INSPECTION_QUERY, {
    variables: { id },
  })

  return new Promise((resolve, reject) => {
    loadInspection().then((result) => {
      if (result.error) {
        reject(result.error)
      } else {
        resolve(result.data.inspection)
      }
    })
  })
}
