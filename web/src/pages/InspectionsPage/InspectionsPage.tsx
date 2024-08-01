import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const InspectionsPage = () => {
  return (
    <>
      <Metadata title="Inspections" description="Inspections page" />

      <h1>InspectionsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/InspectionsPage/InspectionsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>inspections</code>, link to me with `
        <Link to={routes.inspections()}>Inspections</Link>`
      </p>
    </>
  )
}

export default InspectionsPage
