// web/src/components/Table/Table.tsx
import React, { FC } from 'react'

interface TableProps {
  headers: string[]
  children: React.ReactNode
}

const Table: FC<TableProps> = ({ headers, children }) => {
  return (
    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-6 py-2 text-gray-500">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

export default Table
