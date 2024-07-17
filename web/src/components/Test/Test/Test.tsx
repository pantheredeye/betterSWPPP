import type {
  DeleteTestMutation,
  DeleteTestMutationVariables,
  FindTestById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_TEST_MUTATION: TypedDocumentNode<
  DeleteTestMutation,
  DeleteTestMutationVariables
> = gql`
  mutation DeleteTestMutation($id: Int!) {
    deleteTest(id: $id) {
      id
    }
  }
`

interface Props {
  test: NonNullable<FindTestById['test']>
}

const Test = ({ test }: Props) => {
  const [deleteTest] = useMutation(DELETE_TEST_MUTATION, {
    onCompleted: () => {
      toast.success('Test deleted')
      navigate(routes.tests())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteTestMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete test ' + id + '?')) {
      deleteTest({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Test {test.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{test.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{test.name}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{test.type}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTest({ id: test.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(test.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Test
