import { ColumnDef } from '@tanstack/react-table'

export type Inspection = {
  id: number
  site: string
  date: string
  inspectionType: string
  //violationCount: number
  inspector: string
}

export const columns: ColumnDef<Inspection>[] = [
  {
    accessorKey: 'site',
    header: 'Site',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'inspectionType',
    header: 'Inspection Ty',
  },
  {
    accessorKey: 'inspector',
    header: 'Inspector',
  },
]
