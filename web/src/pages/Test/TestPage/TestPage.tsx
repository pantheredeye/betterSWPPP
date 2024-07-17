import TestCell from 'src/components/Test/TestCell'

type TestPageProps = {
  id: number
}

const TestPage = ({ id }: TestPageProps) => {
  return <TestCell id={id} />
}

export default TestPage
