import { Form, TextField, TextAreaField, Submit } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

const CREATE_LEAD = gql`
  mutation CreateLead($input: CreateLeadInput!) {
    createLead(input: $input) {
      id
    }
  }
`

const LeadForm = () => {
  const [createLead] = useMutation(CREATE_LEAD, {
    onCompleted: () => {
      alert('Thanks for signing up!')
    },
  })

  const onSubmit = (data) => {
    createLead({ variables: { input: data } })
  }

  return (
    <Form onSubmit={onSubmit} className="space-y-4">
      <TextField
        name="name"
        placeholder="Your Name"
        className="w-full rounded-lg bg-gray-700 p-3 text-white"
      />
      <TextField
        name="email"
        placeholder="Your Email"
        className="w-full rounded-lg bg-gray-700 p-3 text-white"
        required
      />
      <TextAreaField
        name="feedback"
        placeholder="Feature Requests, Feedback or Ideas"
        className="w-full rounded-lg bg-gray-700 p-3 text-white"
      />
      <Submit className="rounded-xl bg-indigo-600 px-6 py-3 text-lg font-medium text-white shadow-lg hover:bg-indigo-500 focus:outline-none">
        Submit
      </Submit>
    </Form>
  )
}

export default LeadForm
