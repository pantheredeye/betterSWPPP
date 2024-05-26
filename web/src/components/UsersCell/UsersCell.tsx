import type { UsersQuery, UsersQueryVariables } from 'types/graphql'
import { SelectField } from '@redwoodjs/forms'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<UsersQuery, UsersQueryVariables> = gql`
  query UsersQuery {
    users {
      id
      firstName
      lastName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ users }: CellSuccessProps<UsersQuery>) => {
  return (
    <SelectField
      name="inspectorId"
      validation={{ required: true }}
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    >
      {users.map((user) => {
        return (
          <option key={user.id} value={user.id}>
            {user.firstName} {user.lastName}
          </option>
        )
      })}
    </SelectField>
  )
}
