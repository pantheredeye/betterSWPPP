import { Metadata } from '@redwoodjs/web'

import InspectionsListCell from 'src/components/InspectionsListCell'

const InspectionsPage = () => {
  return (
    <>
      <Metadata title="Inspections" description="Inspections page" />

      <h1>InspectionsPage</h1>
      <InspectionsListCell />
    </>
  )
}

export default InspectionsPage
