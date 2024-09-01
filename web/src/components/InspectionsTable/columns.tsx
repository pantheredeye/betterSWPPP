import React, { useState } from 'react'

import { PDFDownloadLink } from '@react-pdf/renderer'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

import { navigate, routes } from '@redwoodjs/router'

import InspectionPDF from 'src/components/InspectionPDF/InspectionPDF'
import { Button } from 'src/components/ui/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'src/components/ui/DropdownMenu'
import { fetchInspection } from 'src/utils/fetchInspection'

export type Inspection = {
  id: number
  site: {
    name: string
  }
  date: string
  inspectionType: string
  inspector: {
    email: string
  }
}

export const columns: ColumnDef<Inspection>[] = [
  {
    accessorKey: 'site.name',
    header: 'Site',
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => {
      const date = new Date(row.getValue('date'))
      const formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(date)

      return <div>{formattedDate}</div>
    },
  },
  {
    accessorKey: 'inspectionType',
    header: 'Inspection Type',
  },
  {
    accessorKey: 'inspector.email',
    header: 'Inspector',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const inspection = row.original

      const handleExportPDF = async (inspectionId: number) => {
        try {
          // Step 1: Fetch data using your `fetchInspection` utility
          const inspectionData = await fetchInspection(inspectionId)

          // Step 2: Create the PDF document using `BlobProvider`
          const MyDocument = <InspectionPDF inspection={inspectionData} />

          // Step 3: Use BlobProvider to generate the PDF Blob and trigger download
          const downloadPDF = async (document: JSX.Element) => {
            const { BlobProvider } = require('@react-pdf/renderer')

            return (
              <BlobProvider document={document}>
                {({ blob, url, loading, error }) => {
                  if (loading) return 'Generating PDF...'
                  if (error) return 'Error generating PDF...'

                  // Create a link element, set its href to the blob URL, and trigger a click
                  const link = document.createElement('a')
                  link.href = URL.createObjectURL(blob)
                  link.download = `${inspectionData.title}.pdf`
                  link.click()

                  // Clean up the URL object after the download
                  URL.revokeObjectURL(link.href)

                  return null
                }}
              </BlobProvider>
            )
          }

          // Trigger the download
          await downloadPDF(MyDocument)
        } catch (error) {
          console.error('Error exporting PDF:', error)
          // Handle error gracefully, e.g., show a notification to the user
        }
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(inspection.id.toString())
              }
            >
              Copy inspection ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() =>
                navigate(routes.viewInspection({ id: inspection.id }))
              }
            >
              View inspection
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleExportPDF(inspection.id)}>
              Export PDF
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
