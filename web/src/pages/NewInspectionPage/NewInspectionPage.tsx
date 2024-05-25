import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const NewInspectionPage = () => {
  return (
    <>
      <Metadata title="NewInspection" description="NewInspection page" />

      <h1>NewInspectionPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/NewInspectionPage/NewInspectionPage.tsx</code>
      </p>
      <p>
        My default route is named <code>newInspection</code>, link to me with `
        <Link to={routes.newInspection()}>NewInspection</Link>`
      </p>
    </>
  )
}

export default NewInspectionPage
