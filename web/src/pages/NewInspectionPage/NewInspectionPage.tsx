import { useEffect, useState } from 'react'

import {
  Form,
  FieldError,
  Label,
  SelectField,
  TextField,
  TextAreaField,
  Submit,
  CheckboxField,
  DateField,
  TimeField,
  DatetimeLocalField,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

import BmpsCell from 'src/components/BmpsCell'
import CloudinaryUploadWidget from 'src/components/CloudinaryUploadWidget/CloudinaryUploadWidget'
import SitesCell from 'src/components/SitesCell'
import UsersCell from 'src/components/UsersCell'

const CREATE_INSPECTION_MUTATION = gql`
  mutation CreateInspectionMutation($input: CreateInspectionInput!) {
    createInspection(input: $input) {
      id
      bmpData {
        id
        implemented
        maintenanceRequired
        repeatOccurrence
        correctiveActionNeeded
        notes
      }
    }
  }
`

const NewInspectionPage = () => {
  const [cloudName] = useState('goodswppp')
  const [uploadPreset] = useState('swppp_unsigned')
  const [selectedImage, setSelectedImage] = useState(null)

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
    // thumbnails: '.content',
    // form: 'inspectionForm',
    // fieldName: 'media[]',
  })

  const [createInspection, { loading, error }] = useMutation(
    CREATE_INSPECTION_MUTATION
  )

  const [formData, setFormData] = useState(() => {
    const now = new Date()
    const formattedDate = now.toISOString().split('T')[0]
    const formattedTime = now.toTimeString().split(' ')[0].substring(0, 5)
    return {
      date: formattedDate,
      startTime: formattedTime,
      endTime: '',
      inspectorId: '',
      siteId: '',
      permitOnSite: false,
      swpppOnSite: false,
      bmpsInstalledPerSwppp: false,
      siteInspectionReports: false,
      inspectionType: 'REGULAR',
      title: '',
      description: '',
      severity: 'LOW',
      violationsNotes: '',
      whomToContact: '',
      newStormEvent: false,
      stormDateTime: '',
      stormDuration: '',
      approximatePrecipitation: '',
      weatherAtTime: 'CLEAR',
      temperature: '',
      previousDischarge: false,
      newDischarges: false,
      dischargeAtThisTime: false,
      currentDischarges: false,
    }
  })

  const [media, setMedia] = useState([])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleThumbnailClick = (event) => {
    const thumbnail = event.target.closest('.cloudinary-thumbnail')
    if (thumbnail) {
      const data = JSON.parse(thumbnail.getAttribute('data-cloudinary'))
      setSelectedImage(data.secure_url)
      // Add new media entry if not already present
      setMedia((prevMedia) => {
        if (!prevMedia.some((item) => item.url === data.thumbnail_url)) {
          return [...prevMedia, { url: data.thumbnail_url, description: '' }]
        }
        return prevMedia
      })
    }
  }

  const handleDescriptionChange = (index, description) => {
    setMedia((prevMedia) => {
      const newMedia = [...prevMedia]
      newMedia[index].description = description
      return newMedia
    })
  }

  const handleSubmit = async (data) => {
    try {
      console.log(data)
      // Parse IDs to integers
      data.siteId = parseInt(data.siteId, 10)
      data.inspectorId = parseInt(data.inspectorId, 10)

      // Combine date with startTime and endTime to form valid DateTime strings
      const baseDate = new Date(data.date)
      const [startHours, startMinutes] = data.startTime.split(':')
      const [endHours, endMinutes] = data.endTime.split(':')

      const startTime = new Date(baseDate)
      startTime.setHours(startHours, startMinutes)

      const endTime = new Date(baseDate)
      endTime.setHours(endHours, endMinutes)

      data.startTime = startTime.toISOString()
      data.endTime = endTime.toISOString()

      // Extract BMP data from form data
      const bmpData = []
      const cleanedData = { ...data }

      Object.keys(data).forEach((key) => {
        const match = key.match(/(.*)-(\d+)/)
        if (match) {
          const fieldName = match[1]
          const bmpId = parseInt(match[2], 10)
          if (!bmpData[bmpId]) {
            bmpData[bmpId] = { bmpId }
          }
          bmpData[bmpId][fieldName] = data[key]
          delete cleanedData[key]
        }
      })

      const filteredBmpData = bmpData.filter(Boolean)

      // Ensure Float fields are handled correctly
      cleanedData.temperature = cleanedData.temperature
        ? parseFloat(cleanedData.temperature)
        : null
      cleanedData.approximatePrecipitation =
        cleanedData.approximatePrecipitation
          ? parseFloat(cleanedData.approximatePrecipitation)
          : null

      // Add media array to form data
      data.media = media.map((item) => ({
        url: item.url,
        description: item.description,
      }))

      // Create inspection with nested BMP and media data
      await createInspection({
        variables: {
          input: {
            ...cleanedData,
            bmpData: filteredBmpData, // Add the nested bmpData array
            media: data.media, // Add the nested media array
          },
        },
      })
    } catch (error) {
      console.error('Error in handleSubmit:', error.message)
      alert(
        'There was an error processing the form. Please check your input and try again.'
      )
    }
  }

  useEffect(() => {
    const contentDiv = document.querySelector('.content')
    contentDiv?.addEventListener('click', handleThumbnailClick)

    return () => {
      contentDiv?.removeEventListener('click', handleThumbnailClick)
    }
  }, [])

  return (
    <>
      <Form id="inspectionForm" onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div className="px-4 sm:px-0">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                New Inspection
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Please fill out the inspection details.
              </p>
              <p className="mt-1 text-sm leading-6 text-red-600">
                * = required
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-3 sm:col-span-3">
                  <Label
                    name="siteId"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Site Name*
                  </Label>
                  <div className="mt-2">
                    <SitesCell />
                    <FieldError name="siteId" className="text-red-600" />
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-3">
                  <Label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    name="inspectorId"
                  >
                    Inspector*
                  </Label>
                  <div className="mt-2">
                    <UsersCell />
                    <FieldError name="inspectorId" className="text-red-600" />
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <Label
                    name="date"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Date*
                  </Label>
                  <div className="mt-2">
                    <DateField
                      name="date"
                      value={formData.date} // Bind to state
                      onChange={handleChange} // Update state on change
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      validation={{ required: true }}
                    />
                    <FieldError name="date" className="text-red-600" />
                  </div>
                </div>

                <div className="col-span-3 sm:col-span-2">
                  <Label
                    name="startTime"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Start Time*
                  </Label>
                  <div className="mt-2">
                    <TimeField
                      name="startTime"
                      value={formData.startTime} // Bind to state
                      onChange={handleChange} // Update state on change
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      validation={{ required: true }}
                    />
                    <FieldError name="startTime" className="text-red-600" />
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <Label
                    name="endTime"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    End Time*
                  </Label>
                  <div className="mt-2">
                    <TimeField
                      name="endTime"
                      value={formData.endTime} // Bind to state
                      onChange={handleChange} // Update state on change
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      validation={{ required: true }}
                    />
                    <FieldError name="endTime" className="text-red-600" />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <Label
                    name="whomToContact"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Whom To Contact
                  </Label>
                  <div className="mt-2">
                    <TextField
                      name="whomToContact"
                      value={formData.whomToContact} // Bind to state
                      onChange={handleChange} // Update state on change
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-6">
                  <Label
                    name="title"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Title*
                  </Label>
                  <TextField
                    name="title"
                    value={formData.title} // Bind to state
                    onChange={handleChange} // Update state on change
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    validation={{ required: true }}
                  />
                  <FieldError name="title" className="text-red-600" />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <Label
                    name="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description*
                  </Label>
                  <TextAreaField
                    name="description"
                    value={formData.description} // Bind to state
                    onChange={handleChange} // Update state on change
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    validation={{ required: true }}
                  />
                  <FieldError name="description" className="text-red-600" />
                </div>
                <div className="col-span-3">
                  <Label
                    name="inspectionType"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Inspection Type*
                  </Label>
                  <SelectField
                    name="inspectionType"
                    value={formData.inspectionType} // Bind to state
                    onChange={handleChange} // Update state on change
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    validation={{ required: true }}
                  >
                    <option value="PRE_STORM">Pre Storm</option>
                    <option value="DURING_STORM">During Storm</option>
                    <option value="POST_STORM">Post Storm</option>
                    <option value="REGULAR">Regular</option>
                  </SelectField>
                  <FieldError name="inspectionType" className="text-red-600" />
                </div>
                <div className="col-span-3">
                  <Label
                    name="severity"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Severity*
                  </Label>
                  <SelectField
                    name="severity"
                    value={formData.severity} // Bind to state
                    onChange={handleChange} // Update state on change
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    validation={{ required: true }}
                  >
                    <option value="HIGH">High</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="LOW">Low</option>
                  </SelectField>
                  <FieldError name="severity" className="text-red-600" />
                </div>
                <div className="col-span-3">
                  <Label
                    name="permitOnSite"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Is the permit found on site?
                  </Label>
                  <CheckboxField
                    name="permitOnSite"
                    checked={formData.permitOnSite} // Bind to state
                    onChange={handleChange} // Update state on change
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                  />
                </div>
                <div className="col-span-3">
                  <Label
                    name="swpppOnSite"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Is the SWPPP found on site?
                  </Label>
                  <CheckboxField
                    name="swpppOnSite"
                    checked={formData.swpppOnSite} // Bind to state
                    onChange={handleChange} // Update state on change
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                  />
                </div>
                <div className="col-span-3">
                  <Label
                    name="bmpsInstalledPerSwppp"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Are BMPs installed per SWPPP?
                  </Label>
                  <CheckboxField
                    name="bmpsInstalledPerSwppp"
                    checked={formData.bmpsInstalledPerSwppp} // Bind to state
                    onChange={handleChange} // Update state on change
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                  />
                </div>
                <div className="col-span-3">
                  <Label
                    name="siteInspectionReports"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Are &apos;Site Inspection Reports&apos; on site?
                  </Label>
                  <CheckboxField
                    name="siteInspectionReports"
                    checked={formData.siteInspectionReports} // Bind to state
                    onChange={handleChange} // Update state on change
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                  />
                </div>
                <div className="col-span-6">
                  <Label
                    name="violationsNotes"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Violations/Notes
                  </Label>
                  <TextAreaField
                    name="violationsNotes"
                    value={formData.violationsNotes} // Bind to state
                    onChange={handleChange} // Update state on change
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Weather Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Please fill out the weather details.
              </p>
              <p className="mt-1 text-sm leading-6 text-red-600">
                * = required
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-4">
                  <Label
                    name="weatherAtTime"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Weather at time of this inspection*
                  </Label>
                  <SelectField
                    name="weatherAtTime"
                    value={formData.weatherAtTime} // Bind to state
                    onChange={handleChange} // Update state on change
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    validation={{ required: true }}
                  >
                    <option value="CLEAR">Clear</option>
                    <option value="CLOUDY">Cloudy</option>
                    <option value="FOG">Fog</option>
                    <option value="HIGH_WINDS">High Winds</option>
                    <option value="RAIN">Rain</option>
                    <option value="SLEET">Sleet</option>
                    <option value="SNOWING">Snowing</option>
                    <option value="OTHER">Other</option>
                  </SelectField>
                  <FieldError name="weatherAtTime" className="text-red-600" />
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <Label
                    name="temperature"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Temperature
                  </Label>
                  <TextField
                    name="temperature"
                    value={formData.temperature} // Bind to state
                    onChange={handleChange} // Update state on change
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="col-span-6">
                  <Label
                    name="newStormEvent"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Has there been a storm event since the last inspection?
                  </Label>
                  <CheckboxField
                    name="newStormEvent"
                    checked={formData.newStormEvent} // Bind to state
                    onChange={handleChange} // Update state on change
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                  />
                </div>
                <div className="col-span-3 sm:col-span-3">
                  <Label
                    name="stormDateTime"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Storm Date-Time
                  </Label>
                  <DatetimeLocalField
                    name="stormDateTime"
                    value={formData.stormDateTime} // Bind to state
                    onChange={handleChange} // Update state on change
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="col-span-3 sm:col-span-3">
                  <Label
                    name="stormDuration"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Storm Duration
                  </Label>
                  <TextField
                    name="stormDuration"
                    value={formData.stormDuration} // Bind to state
                    onChange={handleChange} // Update state on change
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="col-span-3 sm:col-span-3">
                  <Label
                    name="approximatePrecipitation"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Approximate Precipitation (in.)
                  </Label>
                  <TextField
                    name="approximatePrecipitation"
                    value={formData.approximatePrecipitation} // Bind to state
                    onChange={handleChange} // Update state on change
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                      <Label
                        name="previousDischarge"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Previous Discharge
                      </Label>
                      <CheckboxField
                        name="previousDischarge"
                        checked={formData.previousDischarge} // Bind to state
                        onChange={handleChange} // Update state on change
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                      />
                    </div>
                    <div className="col-span-1">
                      <Label
                        name="newDischarges"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        New Discharges
                      </Label>
                      <CheckboxField
                        name="newDischarges"
                        checked={formData.newDischarges} // Bind to state
                        onChange={handleChange} // Update state on change
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                      <Label
                        name="dischargeAtThisTime"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Discharge at this time
                      </Label>
                      <CheckboxField
                        name="dischargeAtThisTime"
                        checked={formData.dischargeAtThisTime} // Bind to state
                        onChange={handleChange} // Update state on change
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                      />
                    </div>
                    <div className="col-span-1">
                      <Label
                        name="currentDischarges"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Current Discharges
                      </Label>
                      <CheckboxField
                        name="currentDischarges"
                        checked={formData.currentDischarges} // Bind to state
                        onChange={handleChange} // Update state on change
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CloudinaryUploadWidget
            uwConfig={uwConfig}
            setPublicId={(id) =>
              setMedia((prev) => [...prev, { url: id, description: '' }])
            }
          />
          <div className="col-span-6 sm:col-span-2">
            <Label
              name="media"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Uploaded Images
            </Label>
            <div className="mt-2">
              {media.map((item, index) => (
                <div key={index} className="mb-4">
                  <img
                    src={item.url}
                    alt={`Uploaded ${item.original_filename}`}
                    className="h-32 w-32 object-cover"
                  />
                  <TextField
                    name={`media-description-${index}`}
                    value={item.description}
                    onChange={(e) =>
                      handleDescriptionChange(index, e.target.value)
                    }
                    placeholder="Enter description"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Standard BMPs
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Review and update the standard BMPs.
              </p>
            </div>
            <div className="md:col-span-2">
              <BmpsCell isStandard={true} />
            </div>
          </div>
          {formData.siteId && (
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Site BMPs
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Review and update the site-specific BMPs.
                </p>
              </div>
              <div className="md:col-span-2">
                <BmpsCell
                  isStandard={false}
                  siteId={parseInt(formData.siteId, 10)}
                />
              </div>
            </div>
          )}
          <div className="col-span-full flex justify-end">
            <Submit
              disabled={loading}
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save Inspection
            </Submit>
          </div>
          {error && <div className="text-red-600">{error.message}</div>}
        </div>
      </Form>
      {selectedImage && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-content">
            <button
              className="close"
              onClick={() => setSelectedImage(null)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImage(null)
                }
              }}
              tabIndex={0}
              aria-label="Close"
            >
              &times;
            </button>
            <img src={selectedImage} alt="Full size" />
          </div>
        </div>
      )}

      <style>{`
        .modal {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgb(0, 0, 0);
          background-color: rgba(0, 0, 0, 0.4);
        }
        .modal-content {
          background-color: #fefefe;
          margin: auto;
          padding: 20px;
          border: 1px solid #888;
          width: 80%;
        }
        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }
        .close:hover,
        .close:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default NewInspectionPage
