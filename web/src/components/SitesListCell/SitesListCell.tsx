import type {
  FindSitesListQuery,
  FindSitesListQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { columns } from 'src/components/SitesTable/columns'
import DataTable from 'src/components/SitesTable/SitesTable'
import { Link, routes } from '@redwoodjs/router'

export const QUERY: TypedDocumentNode<
  FindSitesListQuery,
  FindSitesListQueryVariables
> = gql`
  query FindSitesListQuery {
    sites: sites {
      id
      name
      ownerName
      addressLine1
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindSitesListQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  sites,
}: CellSuccessProps<
  FindSitesListQuery,
  FindSitesListQueryVariables
>) => {
  return (
    <div className="container mx-auto py-10">

                <Link
            to={routes.newSite()}
            className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white shadow-lg hover:bg-indigo-500 focus:outline-none"
          >
            Add Site
          </Link>
      <DataTable columns={columns} data={sites} />
    </div>
  )
}
