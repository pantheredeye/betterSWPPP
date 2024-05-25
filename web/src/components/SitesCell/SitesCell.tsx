import type { SitesQuery, SitesQueryVariables } from 'types/graphql'
import { SelectField } from '@redwoodjs/forms'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { Select } from '@headlessui/react'

export const QUERY: TypedDocumentNode<SitesQuery, SitesQueryVariables> = gql`
  query SitesQuery {
    sites {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ sites }: CellSuccessProps<SitesQuery>) => {
  return (
    <SelectField  name="siteId" validation={{ required: true }} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
      {sites.map((site) => (
        <option key={site.id} value={site.id}>
          {site.name}
        </option>
      ))}
    </SelectField>
  )
}
