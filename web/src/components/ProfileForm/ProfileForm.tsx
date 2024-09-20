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
    <Form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="firstName">First Name</Label>
        <TextField
          name="firstName"
          defaultValue={user.firstName}
          validation={{ required: 'First name is required' }}
        />
        <FieldError name="firstName" className="text-red-500" />
      </div>
      <div>
        <Label htmlFor="lastName">Last Name</Label>
        <TextField
          name="lastName"
          defaultValue={user.lastName}
          validation={{ required: 'Last name is required' }}
        />
        <FieldError name="lastName" className="text-red-500" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <EmailField
          name="email"
          defaultValue={user.email}
          validation={{ required: 'Email is required' }}
        />
        <FieldError name="email" className="text-red-500" />
      </div>
      <div>
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <TextField
          name="phoneNumber"
          defaultValue={user.phoneNumber}
          validation={{ required: 'Phone number is required' }}
        />
        <FieldError name="phoneNumber" className="text-red-500" />
      </div>
      <div>
        <Label>Role</Label>
        <div>{user.role?.name}</div>
      </div>
      <Submit disabled={loading}>
        {loading ? 'Saving...' : 'Save Changes'}
      </Submit>
      {error && <p className="text-red-500">{error.message}</p>}
    </Form>
  )
}

export default ProfileForm
