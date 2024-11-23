import { Metadata } from '@redwoodjs/web'

import SitesListCell from 'src/components/SitesListCell'

const SitesPage = () => {
  return (
    <>
      <Metadata title="Sites" description="Sites page" />

      <SitesListCell />
    </>
  )
}

export default SitesPage
