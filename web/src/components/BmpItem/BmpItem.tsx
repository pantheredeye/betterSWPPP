<<<<<<< HEAD
import { CheckboxField, TextField, TextAreaField, Label } from '@redwoodjs/forms'
import { useState, useEffect } from 'react'
import useBmpStore from 'src/stores/bmpStore'

interface Bmp {
  id: number;
  name: string;
  description: string;
  implemented: boolean;
  maintenanceRequired: boolean;
  repeatOccurrence: boolean;
  correctiveActionNeeded: string;
  notes: string;
}

interface BmpItemProps {
  bmp: Bmp;
}

const BmpItem = ({ bmp }: BmpItemProps) => {
=======
import { useState } from 'react'

import {
  CheckboxField,
  TextField,
  TextAreaField,
  Label,
} from '@redwoodjs/forms'

const BmpItem = ({ bmp, onChange }) => {
>>>>>>> 899a984ca2de8666a3ca4b3f91d954ef2dfcb5e5
  const [expanded, setExpanded] = useState(false)
  const [bmpData, setBmpData] = useState<Bmp>(bmp)
  const updateBmp = useBmpStore((state) => state.updateBmp)

  useEffect(() => {
    setBmpData(bmp)
  }, [bmp])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const updatedData = {
      ...bmpData,
      [name]: type === 'checkbox' ? checked : value,
    }
    setBmpData(updatedData)
<<<<<<< HEAD
    updateBmp(bmp.id, updatedData)
=======
    onChange(bmp.id, updatedData)

    console.log(`BMP ID: ${bmp.id}, Updated BMP Data:`, updatedData)
>>>>>>> 899a984ca2de8666a3ca4b3f91d954ef2dfcb5e5
  }

  return (
    <div className="rounded-md bg-white p-2 shadow-sm ring-1 ring-gray-300">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{bmp.name}</h3>
          <p className="text-sm text-gray-600">{bmp.description}</p>
        </div>
        <button type="button" onClick={() => setExpanded(!expanded)} className="text-indigo-600 hover:text-indigo-900">
          {expanded ? 'Collapse' : 'Expand'}
        </button>
      </div>
      {expanded && (
        <div className="mt-4 space-y-2">
<<<<<<< HEAD
          <Label name={`implemented-${bmp.id}`} className="block text-sm font-medium leading-6 text-gray-900">
            Implemented
          </Label>
          <CheckboxField name="implemented" checked={bmpData.implemented} onChange={handleChange} />
          <Label name={`maintenanceRequired-${bmp.id}`} className="block text-sm font-medium leading-6 text-gray-900">
            Maintenance Required
          </Label>
          <CheckboxField name="maintenanceRequired" checked={bmpData.maintenanceRequired} onChange={handleChange} />
          <Label name={`repeatOccurrence-${bmp.id}`} className="block text-sm font-medium leading-6 text-gray-900">
            Repeat Occurrence
          </Label>
          <CheckboxField name="repeatOccurrence" checked={bmpData.repeatOccurrence} onChange={handleChange} />
          <Label name={`correctiveActionNeeded-${bmp.id}`} className="block text-sm font-medium leading-6 text-gray-900">
            Corrective Action Needed
          </Label>
          <TextField name="correctiveActionNeeded" value={bmpData.correctiveActionNeeded} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
          <Label name={`notes-${bmp.id}`} className="block text-sm font-medium leading-6 text-gray-900">
=======
          <Label
            name="implemented"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Implemented
          </Label>
          <CheckboxField
            name="implemented"
            checked={bmpData.implemented}
            onChange={handleChange}
          />
          <Label
            name="maintenanceRequired"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Maintenance Required
          </Label>
          <CheckboxField
            name="maintenanceRequired"
            checked={bmpData.maintenanceRequired}
            onChange={handleChange}
          />
          <Label
            name="repeatOccurrence"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Repeat Occurrence
          </Label>
          <CheckboxField
            name="repeatOccurrence"
            checked={bmpData.repeatOccurrence}
            onChange={handleChange}
          />
          <Label
            name="correctiveActionNeeded"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Corrective Action Needed
          </Label>
          <TextField
            name="correctiveActionNeeded"
            value={bmpData.correctiveActionNeeded}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
          />
          <Label
            name="notes"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
>>>>>>> 899a984ca2de8666a3ca4b3f91d954ef2dfcb5e5
            Notes
          </Label>
          <TextAreaField
            name="notes"
            value={bmpData.notes}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
      )}
    </div>
  )
}

export default BmpItem
