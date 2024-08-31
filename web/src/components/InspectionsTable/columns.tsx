import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

import { navigate, routes } from '@redwoodjs/router'

import { Button } from 'src/components/ui/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'src/components/ui/DropdownMenu'

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
            <DropdownMenuItem>View inspection</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                navigate(routes.viewInspection({ id: inspection.id }))
              }
            >
              Print inspection
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
