import type {
  FindInspectionsListQuery,
  FindInspectionsListQueryVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
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
      <Link
        to={routes.newInspection()}
        className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white shadow-lg hover:bg-indigo-500 focus:outline-none"
      >
        Add Inspection
      </Link>
      <DataTable columns={columns} data={inspections} />
    </div>
  )
}
