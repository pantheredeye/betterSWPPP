// TODO: Prevent Empty Submittal

import { useState, useEffect } from 'react'

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
      bmps {
        id
        name
        description
      }
    }
  }
`

const NewSitePage = () => {
  const { data, loading, error } = useQuery(GET_STANDARD_BMPS_NEW_SITE)
  const [createSite] = useMutation(CREATE_SITE)
  const [name, setName] = useState<string>('')
  const [addressLine1, setAddressLine1] = useState<string>('')
  const [addressLine2, setAddressLine2] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [state, setState] = useState<string>('')
  const [postalCode, setPostalCode] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [npdesTrackingNo, setNpdesTrackingNo] = useState<string>('')
  const [siteTypeId, setSiteTypeId] = useState<number>(1)
  const [siteInspector, setSiteInspector] = useState<string>('')
  const [siteMap, setSiteMap] = useState<string>('')
  const [ownerName, setOwnerName] = useState<string>('')

  const [bmps, setBmps] = useState<{ name: string; description: string }[]>([])
  const [newBmpName, setNewBmpName] = useState<string>('')
  const [newBmpDescription, setNewBmpDescription] = useState<string>('')

  useEffect(() => {
    if (data && data.siteTypes.length > 0) {
      setSiteTypeId(data.siteTypes[0].id)
    }
  }, [data])

  const handleAddBmp = () => {
    setBmps([
      ...bmps,
      {
        name: newBmpName,
        description: newBmpDescription,
      },
    ])
    setNewBmpName('')
    setNewBmpDescription('')
  }

  const handleRemoveBmp = (index: number) => {
    setBmps(bmps.filter((_, i) => i !== index))
  }

  const handleCreateSite = async () => {
    await createSite({
      variables: {
        input: {
          name,
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
          ownerName,
          bmps,
        },
      },
    })
    toast.success('Site created')
    navigate(routes.dashboard())
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading data</div>

  return (
    <form>
      <div className="space-y-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div className="px-4 sm:px-0">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Site Details
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Please fill out the details for the new site.
            </p>
            <p className="mt-1 text-sm leading-6 text-red-600">* = required</p>
          </div>
          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Site Name*
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 required:border-red-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="addressLine1"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address Line 1*
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="addressLine1"
                  id="addressLine1"
                  value={addressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="addressLine2"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address Line 2
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="addressLine2"
                  id="addressLine2"
                  value={addressLine2}
                  onChange={(e) => setAddressLine2(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="state"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Postal Code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="npdesTrackingNo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                NPDES Tracking No
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="npdesTrackingNo"
                  id="npdesTrackingNo"
                  value={npdesTrackingNo}
                  onChange={(e) => setNpdesTrackingNo(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="siteTypeId"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Site Type*
              </label>
              <div className="mt-2">
                <select
                  id="siteTypeId"
                  name="siteTypeId"
                  value={siteTypeId}
                  onChange={(e) => setSiteTypeId(Number(e.target.value))}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {data.siteTypes.map((type: { id: number; name: string }) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="siteInspector"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Site Inspector
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="siteInspector"
                  id="siteInspector"
                  value={siteInspector}
                  onChange={(e) => setSiteInspector(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="siteMap"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Site Map
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <input
                  type="file"
                  name="siteMap"
                  id="siteMap"
                  onChange={(e) => setSiteMap(e.target.files?.[0]?.name ?? '')}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="ownerName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Owner Name*
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="ownerName"
                  id="ownerName"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        {siteTypeId !== 2 && (
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                BMPs
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Add any custom BMPs for the site. Standard BMPs will show on the
                inspection form automatically.
              </p>
            </div>
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div className="col-span-full">
                {bmps.length > 0 && (
                  <ul className="space-y-4 bg-white p-4 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
                    {bmps.map((bmp, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between border-b border-gray-200 pb-4"
                      >
                        <div>
                          <h3 className="text-lg font-medium leading-6 text-gray-900">
                            {bmp.name}
                          </h3>
                          <p className="mt-2 text-sm text-gray-600">
                            {bmp.description}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveBmp(index)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-4">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Add New BMP
                  </h3>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label
                        htmlFor="newBmpName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        BMP Name*
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="newBmpName"
                          id="newBmpName"
                          value={newBmpName}
                          onChange={(e) => setNewBmpName(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="newBmpDescription"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Description*
                      </label>
                      <div className="mt-2">
                        <textarea
                          name="newBmpDescription"
                          id="newBmpDescription"
                          value={newBmpDescription}
                          onChange={(e) => setNewBmpDescription(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-full flex justify-end">
                <button
                  type="button"
                  onClick={handleAddBmp}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add BMP
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6 ">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleCreateSite}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create Site
        </button>
      </div>
    </form>
  )
}

export default NewSitePage
