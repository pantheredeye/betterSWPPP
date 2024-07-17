import type { FindTestById, FindTestByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Test from 'src/components/Test/Test'

export const QUERY: TypedDocumentNode<
  FindTestById,
  FindTestByIdVariables
> = gql`
  query FindTestById($id: Int!) {
    test: test(id: $id) {
      id
      name
      type
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Test not found</div>

export const Failure = ({ error }: CellFailureProps<FindTestByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  test,
}: CellSuccessProps<FindTestById, FindTestByIdVariables>) => {
  return <Test test={test} />
}
