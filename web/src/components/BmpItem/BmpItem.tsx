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
      [name.replace(`-${bmp.id}`, '')]: type === 'checkbox' ? checked : value,
    }
    console.log(`Updating BMP ${bmp.id}:`, updatedData)
    setBmpData(updatedData)
    updateBmp(bmp.id, updatedData)
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
          <Label name={`implemented-${bmp.id}`} className="block text-sm font-medium leading-6 text-gray-900">
            Implemented
          </Label>
          <CheckboxField name={`implemented-${bmp.id}`} checked={bmpData.implemented} onChange={handleChange} />
          <Label name={`maintenanceRequired-${bmp.id}`} className="block text-sm font-medium leading-6 text-gray-900">
            Maintenance Required
          </Label>
          <CheckboxField name={`maintenanceRequired-${bmp.id}`} checked={bmpData.maintenanceRequired} onChange={handleChange} />
          <Label name={`repeatOccurrence-${bmp.id}`} className="block text-sm font-medium leading-6 text-gray-900">
            Repeat Occurrence
          </Label>
          <CheckboxField name={`repeatOccurrence-${bmp.id}`} checked={bmpData.repeatOccurrence} onChange={handleChange} />
          <Label name={`correctiveActionNeeded-${bmp.id}`} className="block text-sm font-medium leading-6 text-gray-900">
            Corrective Action Needed
          </Label>
          <TextField name={`correctiveActionNeeded-${bmp.id}`} value={bmpData.correctiveActionNeeded} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
          <Label name={`notes-${bmp.id}`} className="block text-sm font-medium leading-6 text-gray-900">
            Notes
          </Label>
          <TextAreaField name={`notes-${bmp.id}`} value={bmpData.notes} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
        </div>
      )}
    </div>
  )
}

export default BmpItem
