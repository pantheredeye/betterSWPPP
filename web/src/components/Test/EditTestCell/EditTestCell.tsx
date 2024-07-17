import type {
  EditTestById,
  UpdateTestInput,
  UpdateTestMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TestForm from 'src/components/Test/TestForm'

export const QUERY: TypedDocumentNode<EditTestById> = gql`
  query EditTestById($id: Int!) {
    test: test(id: $id) {
      id
      name
      type
    }
  }
`

const UPDATE_TEST_MUTATION: TypedDocumentNode<
  EditTestById,
  UpdateTestMutationVariables
> = gql`
  mutation UpdateTestMutation($id: Int!, $input: UpdateTestInput!) {
    updateTest(id: $id, input: $input) {
      id
      name
      type
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ test }: CellSuccessProps<EditTestById>) => {
  const [updateTest, { loading, error }] = useMutation(UPDATE_TEST_MUTATION, {
    onCompleted: () => {
      toast.success('Test updated')
      navigate(routes.tests())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateTestInput, id: EditTestById['test']['id']) => {
    updateTest({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Test {test?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TestForm test={test} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
