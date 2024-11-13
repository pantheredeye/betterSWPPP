import type {
  FindStandardBmpsQuery,
  FindStandardBmpsQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FindStandardBmpsQuery,
  FindStandardBmpsQueryVariables
> = gql`
  query FindStandardBmpsQuery {
    standardBmps {
      id
      name
      description
      isStandard
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No standard BMPs found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindStandardBmpsQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  standardBmps,
}: CellSuccessProps<FindStandardBmpsQuery, FindStandardBmpsQueryVariables>) => {
  return (
    <ul className="mt-4">
      {standardBmps.map((bmp) => (
        <li key={bmp.id}>
          {bmp.name} - {bmp.description}
        </li>
      ))}
    </ul>
  )
}
