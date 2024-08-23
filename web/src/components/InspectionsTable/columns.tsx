import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

import { Button } from '/src/components/ui/button'

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
]
