import type {
  CreateTestMutation,
  CreateTestInput,
  CreateTestMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TestForm from 'src/components/Test/TestForm'

const CREATE_TEST_MUTATION: TypedDocumentNode<
  CreateTestMutation,
  CreateTestMutationVariables
> = gql`
  mutation CreateTestMutation($input: CreateTestInput!) {
    createTest(input: $input) {
      id
    }
  }
`

const NewTest = () => {
  const [createTest, { loading, error }] = useMutation(CREATE_TEST_MUTATION, {
    onCompleted: () => {
      toast.success('Test created')
      navigate(routes.tests())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateTestInput) => {
    createTest({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Test</h2>
      </header>
      <div className="rw-segment-main">
        <TestForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTest
