import { Link, routes } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'

const GET_STANDARD_BMPS_QUICK_ACTIONS = gql`
  query GetStandardBmpsQuickActions {
    standardBmps {
      id
    }
  }
`

const QuickActionsCard = () => {
  const { data, loading, error } = useQuery(GET_STANDARD_BMPS_QUICK_ACTIONS)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading data</div>

  const hasStandardBmps = data.standardBmps.length > 0

  return (
    <div className="rounded-md bg-white p-6 shadow">
      <h3 className="mb-4 text-xl text-blue-600">Quick Actions</h3>
      <Link
        to={routes.newInspection()}
        className="mb-2 block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
      >
        New Inspection
      </Link>
      {!hasStandardBmps ? (
        <Link
          to={routes.standardBmpSettings()}
          className="mb-2 block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
        >
          Configure Standard BMPs
        </Link>
      ) : (
        <Link
          to={routes.newSite()}
          className="mb-2 block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
        >
          Add Site
        </Link>
      )}
    </div>
  )
}

export default QuickActionsCard
