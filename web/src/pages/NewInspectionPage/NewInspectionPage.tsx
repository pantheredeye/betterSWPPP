import { Form, FieldError, Label, SelectField, TextField, TextAreaField, Submit, CheckboxField, DateField, TimeField, DatetimeLocalField } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import UsersCell from 'src/components/UsersCell'
import SitesCell from 'src/components/SitesCell'
import { useState } from 'react'

const CREATE_INSPECTION_MUTATION = gql`
  mutation CreateInspectionMutation($input: CreateInspectionInput!) {
    createInspection(input: $input) {
      id
    }
  }
`

const NewInspectionPage = () => {
  const [createInspection, { loading, error }] = useMutation(CREATE_INSPECTION_MUTATION)
  const [formData, setFormData] = useState({
    date: '',
    startTime: '',
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
  })

  const handleSubmit = (data) => {
    createInspection({ variables: { input: data } })
  }

  return (
    <div>
      <h2>New Inspection</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label name="date">Date*</Label>
          <DateField name="date" validation={{ required: true }} />
          <FieldError name="date" />
        </div>
        <div>
          <Label name="startTime">Start Time*</Label>
          <TimeField name="startTime" validation={{ required: true }} />
          <FieldError name="startTime" />
        </div>
        <div>
          <Label name="endTime">End Time*</Label>
          <TimeField name="endTime" validation={{ required: true }} />
          <FieldError name="endTime" />
        </div>
        <div>
          <Label name="inspectorId">Inspector*</Label>
            <UsersCell />
          <FieldError name="inspectorId" />
        </div>
        <div>
          <Label name="siteId">Site Name*</Label>
            <SitesCell />
          <FieldError name="siteId" />
        </div>
        <div>
          <Label name="permitOnSite">Is the permit found on site?</Label>
          <CheckboxField name="permitOnSite" />
        </div>
        <div>
          <Label name="swpppOnSite">Is the SWPPP found on site?</Label>
          <CheckboxField name="swpppOnSite" />
        </div>
        <div>
          <Label name="bmpsInstalledPerSwppp">Are BMPs installed per SWPPP?</Label>
          <CheckboxField name="bmpsInstalledPerSwppp" />
        </div>
        <div>
          <Label name="siteInspectionReports">Are 'Site Inspection Reports' on site?</Label>
          <CheckboxField name="siteInspectionReports" />
        </div>
        <div>
          <Label name="inspectionType">Inspection Type*</Label>
          <SelectField name="inspectionType" validation={{ required: true }}>
            <option value="PRE_STORM">Pre Storm</option>
            <option value="DURING_STORM">During Storm</option>
            <option value="POST_STORM">Post Storm</option>
            <option value="REGULAR">Regular</option>
          </SelectField>
          <FieldError name="inspectionType" />
        </div>
        <div>
          <Label name="title">Title*</Label>
          <TextField name="title" validation={{ required: true }} />
          <FieldError name="title" />
        </div>
        <div>
          <Label name="description">Description*</Label>
          <TextAreaField name="description" validation={{ required: true }} />
          <FieldError name="description" />
        </div>
        <div>
          <Label name="severity">Severity*</Label>
          <SelectField name="severity" validation={{ required: true }}>
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </SelectField>
          <FieldError name="severity" />
        </div>
        <div>
          <Label name="violationsNotes">Violations/Notes</Label>
          <TextAreaField name="violationsNotes" />
        </div>
        <div>
          <Label name="whomToContact">Whom To Contact</Label>
          <TextField name="whomToContact" />
        </div>
        <div>
          <Label name="newStormEvent">New Storm Event</Label>
          <CheckboxField name="newStormEvent" />
        </div>
        <div>
          <Label name="stormDateTime">Storm Date-Time</Label>
          <DatetimeLocalField name="stormDateTime" />
        </div>
        <div>
          <Label name="stormDuration">Storm Duration</Label>
          <TextField name="stormDuration" />
        </div>
        <div>
          <Label name="approximatePrecipitation">Approximate Precipitation (in.)</Label>
          <TextField name="approximatePrecipitation" />
        </div>
        <div>
          <Label name="weatherAtTime">Weather at time of this inspection*</Label>
          <SelectField name="weatherAtTime" validation={{ required: true }}>
            <option value="CLEAR">Clear</option>
            <option value="CLOUDY">Cloudy</option>
            <option value="FOG">Fog</option>
            <option value="HIGH_WINDS">High Winds</option>
            <option value="RAIN">Rain</option>
            <option value="SLEET">Sleet</option>
            <option value="SNOWING">Snowing</option>
            <option value="OTHER">Other</option>
          </SelectField>
          <FieldError name="weatherAtTime" />
        </div>
        <div>
          <Label name="temperature">Temperature</Label>
          <TextField name="temperature" />
        </div>
        <div>
          <Label name="previousDischarge">Previous Discharge</Label>
          <CheckboxField name="previousDischarge" />
        </div>
        <div>
          <Label name="newDischarges">New Discharges</Label>
          <CheckboxField name="newDischarges" />
        </div>
        <div>
          <Label name="dischargeAtThisTime">Discharge at this time</Label>
          <CheckboxField name="dischargeAtThisTime" />
        </div>
        <div>
          <Label name="currentDischarges">Current Discharges</Label>
          <CheckboxField name="currentDischarges" />
        </div>
        <Submit disabled={loading}>Save Inspection</Submit>
        {error && <div>{error.message}</div>}
      </Form>
    </div>
  )
}

export default NewInspectionPage
