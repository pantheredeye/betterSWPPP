import { useCallback } from 'react'

import { gql, useLazyQuery } from '@apollo/client'

export const FETCH_INSPECTION_QUERY = gql`
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
export type InspectionData = {
  id: number
  site: {
    name: string
  }
  inspector: {
    id: number
  }
  date: string
  startTime: string
  endTime: string
  permitOnSite: boolean
  swpppOnSite: boolean
  bmpsInstalledPerSwppp: boolean
  siteInspectionReports: string
  inspectionType: string
  title: string
  description: string
  severity: string
  violationsNotes: string
  whomToContact: string
  newStormEvent: boolean
  stormDateTime: string
  stormDuration: string
  approximatePrecipitation: string
  weatherAtTime: string
  temperature: string
  previousDischarge: string
  newDischarges: string
  dischargeAtThisTime: string
  currentDischarges: string
  createdAt: string
  updatedAt: string
  bmpData: { id: number }[]
  media: { id: number; url: string }[]
}

export const useFetchInspection = () => {
  const [loadInspection, { called, loading, error }] = useLazyQuery(
    FETCH_INSPECTION_QUERY
  )

  const fetchInspection = useCallback(
    async (id: number): Promise<InspectionData> => {
      const { data } = await loadInspection({ variables: { id } })
      if (error) {
        throw error
      }
      return data.inspection
    },
    [loadInspection, error]
  )

  return { fetchInspection, loading, called, error }
}
