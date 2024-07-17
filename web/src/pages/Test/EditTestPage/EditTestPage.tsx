import EditTestCell from 'src/components/Test/EditTestCell'

type TestPageProps = {
  id: number
}

const EditTestPage = ({ id }: TestPageProps) => {
  return <EditTestCell id={id} />
}

export default EditTestPage
