import React, { useState } from 'react'

import { PDFDownloadLink } from '@react-pdf/renderer'

import InspectionPDF from 'src/components/InspectionPDF/InspectionPDF'
import { DropdownMenuItem } from 'src/components/ui/DropdownMenu'
import { useFetchInspection } from 'src/utils/fetchInspection'

interface ExportPDFButtonProps {
  inspectionId: number
}

const ExportPDFButton: React.FC<ExportPDFButtonProps> = ({ inspectionId }) => {
  const [inspectionData, setInspectionData] = useState(null)
  const { fetchInspection, loading, error } = useFetchInspection()

  const handleExportPDF = async () => {
    try {
      const data = await fetchInspection(inspectionId)
      setInspectionData(data)
      console.log(data)
    } catch (err) {
      console.error('Error fetching inspection data:', err)
    }
  }

  if (loading) return <span>Loading...</span>
  if (error) return <span>Error: {error.message}</span>

  return (
    <>
      <DropdownMenuItem onClick={handleExportPDF}>Export PDF</DropdownMenuItem>

      {inspectionData && (
        <PDFDownloadLink
          document={<InspectionPDF inspection={inspectionData} />}
          fileName={`${inspectionData.title || 'inspection'}.pdf`}
        >
          {({ loading, error }) =>
            loading
              ? 'Generating PDF...'
              : error
              ? `Error: ${error.message}`
              : 'Download PDF'
          }
        </PDFDownloadLink>
      )}
    </>
  )
}

export default ExportPDFButton
