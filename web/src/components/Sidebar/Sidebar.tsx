import { Link, routes } from '@redwoodjs/router'

const Sidebar = () => {
  return (
    <aside className="fixed h-full w-64 overflow-y-auto bg-gray-100 px-4 py-6 shadow">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to={routes.dashboard()}
              className="text-gray-700 hover:text-blue-600"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to={routes.dashboard()}
              className="text-gray-700 hover:text-blue-600"
            >
              Inspections
            </Link>
          </li>
          <li>
            <Link
              to={routes.dashboard()}
              className="text-gray-700 hover:text-blue-600"
            >
              Sites
            </Link>
          </li>
          <li>
            <Link
              to={routes.dashboard()}
              className="text-gray-700 hover:text-blue-600"
            >
              BMPs
            </Link>
          </li>
          <li>
            <Link
              to={routes.dashboard()}
              className="text-gray-700 hover:text-blue-600"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
