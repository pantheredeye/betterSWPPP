import {
  Form,
  TextField,
  EmailField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

import { Label } from 'src/components/ui/Label'

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      firstName
      lastName
      email
      phoneNumber
    }
  }
`

const ProfileForm = ({ user }) => {
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => {
      // Handle successful update (e.g., show a notification)
    },
  })

  const onSubmit = (data) => {
    updateUser({
      variables: {
        id: user.id,
        input: data,
      },
    })
  }
  return (
    <Form
      onSubmit={onSubmit}
      className="mx-auto max-w-lg space-y-6 rounded-lg bg-white p-6 shadow-lg"
    >
      <div className="space-y-2">
        <Label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          First Name
        </Label>
        <TextField
          name="firstName"
          defaultValue={user.firstName}
          validation={{ required: 'First name is required' }}
          className="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <FieldError name="firstName" className="text-sm text-red-500" />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </Label>
        <TextField
          name="lastName"
          defaultValue={user.lastName}
          validation={{ required: 'Last name is required' }}
          className="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <FieldError name="lastName" className="text-sm text-red-500" />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </Label>
        <EmailField
          name="email"
          defaultValue={user.email}
          validation={{ required: 'Email is required' }}
          className="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <FieldError name="email" className="text-sm text-red-500" />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </Label>
        <TextField
          name="phoneNumber"
          defaultValue={user.phoneNumber}
          validation={{ required: 'Phone number is required' }}
          className="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <FieldError name="phoneNumber" className="text-sm text-red-500" />
      </div>

      <Submit
        disabled={loading}
        className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
      >
        {loading ? 'Saving...' : 'Save Changes'}
      </Submit>

      {error && <p className="mt-2 text-sm text-red-500">{error.message}</p>}
    </Form>
  )
}

export default ProfileForm
