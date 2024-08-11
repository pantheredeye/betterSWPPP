import { ColumnDef } from '@tanstack/react-table'

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
