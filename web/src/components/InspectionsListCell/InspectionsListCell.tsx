import type {
  FindInspectionsListQuery,
  FindInspectionsListQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { columns } from 'src/components/InspectionsTable/columns'
import DataTable from 'src/components/InspectionsTable/InspectionsTable'

export const QUERY: TypedDocumentNode<
  FindInspectionsListQuery,
  FindInspectionsListQueryVariables
> = gql`
  query FindInspectionsListQuery {
    inspections: inspections {
      id
      site {
        name
      }
      date
      inspectionType
      inspector {
        email
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindInspectionsListQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  inspections,
}: CellSuccessProps<
  FindInspectionsListQuery,
  FindInspectionsListQueryVariables
>) => {
  return (
    <div className="container mx-auto md:py-10 p-2">
      <DataTable columns={columns} data={inspections} />
    </div>
  )
}
