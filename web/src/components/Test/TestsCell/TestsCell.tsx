import type { FindTests, FindTestsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Tests from 'src/components/Test/Tests'

export const QUERY: TypedDocumentNode<FindTests, FindTestsVariables> = gql`
  query FindTests {
    tests {
      id
      name
      type
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tests yet. '}
      <Link to={routes.newTest()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindTests>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  tests,
}: CellSuccessProps<FindTests, FindTestsVariables>) => {
  return <Tests tests={tests} />
}
