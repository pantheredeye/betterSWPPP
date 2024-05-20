import { useState } from 'react'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation, useQuery } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const GET_STANDARD_BMPS_NEW_SITE = gql`
  query GetStandardBmpsNewSite {
    standardBmps {
      id
      name
      description
    }
    siteTypes {
      id
      name
    }
  }
`

const CREATE_SITE = gql`
  mutation CreateSite($input: CreateSiteInput!) {
    createSite(input: $input) {
      id
      name
    }
  }
`

const NewSitePage = () => {
  const { data, loading, error } = useQuery(GET_STANDARD_BMPS_NEW_SITE)
  const [createSite] = useMutation(CREATE_SITE)
  const [name, setName] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [addressLine1, setAddressLine1] = useState<string>('')
  const [addressLine2, setAddressLine2] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [state, setState] = useState<string>('')
  const [postalCode, setPostalCode] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [npdesTrackingNo, setNpdesTrackingNo] = useState<string>('')
  const [siteTypeId, setSiteTypeId] = useState<number>(0)
  const [siteInspector, setSiteInspector] = useState<string>('')
  const [siteMap, setSiteMap] = useState<string>('')
  const [ownerName, setOwnerName] = useState<string>('')

  const handleCreateSite = async () => {
    await createSite({
      variables: {
        input: {
          name,
          location,
          addressLine1,
          addressLine2,
          city,
          state,
          postalCode,
          country,
          npdesTrackingNo,
          siteTypeId,
          siteInspector,
          siteMap,
          ownerName
        }
      }
    })
    toast.success('Site created')
    navigate(routes.dashboard())
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading data</div>

  return (
    <div>
      <h1 className="text-2xl font-bold">Add New Site</h1>
      <div className="mt-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Site Name"
          className="border p-2"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="border p-2"
        />
        <input
          type="text"
          value={addressLine1}
          onChange={(e) => setAddressLine1(e.target.value)}
          placeholder="Address Line 1"
          className="border p-2"
        />
        <input
          type="text"
          value={addressLine2}
          onChange={(e) => setAddressLine2(e.target.value)}
          placeholder="Address Line 2"
          className="border p-2"
        />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City / District"
          className="border p-2"
        />
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="State / Province"
          className="border p-2"
        />
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder="Postal Code"
          className="border p-2"
        />
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
          className="border p-2"
        />
        <input
          type="text"
          value={npdesTrackingNo}
          onChange={(e) => setNpdesTrackingNo(e.target.value)}
          placeholder="NPDES Tracking No"
          className="border p-2"
        />
        <select
          value={siteTypeId}
          onChange={(e) => setSiteTypeId(Number(e.target.value))}
          className="border p-2"
        >
          {data.siteTypes.map((type: { id: number, name: string }) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={siteInspector}
          onChange={(e) => setSiteInspector(e.target.value)}
          placeholder="Select Site Inspector"
          className="border p-2"
        />
        <input
          type="file"
          onChange={(e) => setSiteMap(e.target.files?.[0]?.name ?? '')}
          className="border p-2"
        />
        <input
          type="text"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          placeholder="Owner Name"
          className="border p-2"
        />
        <button onClick={handleCreateSite} className="bg-blue-600 text-white p-2 mt-2">Create Site</button>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Standard BMPs</h2>
        <ul>
          {data.standardBmps.map((bmp: { id: number, name: string, description: string }) => (
            <li key={bmp.id}>{bmp.name} - {bmp.description}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NewSitePage
