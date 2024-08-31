// web/src/pages/ViewInspectionPage/ViewInspectionPage.js

import jsPDF from 'jspdf'

import { useParams } from '@redwoodjs/router'

import InspectionCell from 'src/components/InspectionCell'
import { Button } from 'src/components/ui/Button'

const ViewInspectionPage = () => {
  const { id } = useParams()

  const handleExportPDF = () => {
    // Example implementation using jsPDF
    const doc = new jsPDF()

    doc.text('Inspection Report', 10, 10)
    // Add more fields as needed, customize positions
    doc.save('inspection-report.pdf')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">View Inspection</h1>
      <InspectionCell id={parseInt(id)} />
      <Button onClick={handleExportPDF} className="mt-4">
        Export to PDF
      </Button>
    </div>
  )
}

export default ViewInspectionPage
