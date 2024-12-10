import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  DocumentDuplicateIcon,
  ArrowLeftOnRectangleIcon,
  ArrowUturnLeftIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

import { Link, useLocation } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Sidebar = ({
  isCollapsed = false,
  setIsCollapsed,
  setSidebarOpen,
}: {
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
  setSidebarOpen?: (open: boolean) => void
}) => {
  const { logOut } = useAuth()
  const { currentUser } = useAuth()
  const location = useLocation()

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Inspections', href: '/inspections', icon: UsersIcon },
    { name: 'Sites', href: '/sites', icon: FolderIcon },
    { name: 'BMPs', href: '/bmps', icon: DocumentDuplicateIcon },
    {
      name: 'Profile',
      href: currentUser ? `/profile/${currentUser.id}` : '/profile',
      icon: UserIcon,
    },
  ]

  const actions = [
    {
      name: 'Back',
      action: () => window.history.back(),
      icon: ArrowUturnLeftIcon,
    },
    { name: 'Logout', action: logOut, icon: ArrowLeftOnRectangleIcon },
  ]

  const NavigationItem = ({ name, href, Icon }) => (
    <li>
      <Link
        to={href}
        className={classNames(
          'group relative flex items-center rounded-xl px-2 py-2 text-sm font-medium',
          location.pathname === href
            ? 'bg-gray-700'
            : 'bg-gray-800 hover:bg-gray-700',
          'shadow-lg',
          isCollapsed ? 'justify-center' : 'justify-start'
        )}
        onClick={() => {
          if (setSidebarOpen) setSidebarOpen(false)
        }}
      >
        <Icon
          className="h-6 w-6 text-gray-400 group-hover:text-gray-200"
          aria-hidden="true"
          aria-label={name}
        />
        {!isCollapsed && <span className="ml-3 text-gray-200">{name}</span>}
        {isCollapsed && (
          <span className="absolute left-full ml-3 w-auto min-w-max whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-200 opacity-0 group-hover:opacity-100">
            {name}
          </span>
        )}
      </Link>
    </li>
  )

  const ActionItem = ({ name, action, Icon }) => (
    <li>
      <button
        onClick={action}
        className="group flex w-full items-center rounded-xl px-2 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-700 shadow-lg"
        aria-label={name}
      >
        <Icon
          className="h-6 w-6 text-gray-400 group-hover:text-gray-200"
          aria-hidden="true"
        />
        <span className="ml-3 text-gray-200">{name}</span>
      </button>
    </li>
  )

  return (
    <div className="flex flex-col w-64 bg-gray-900 text-gray-300 shadow-inner">
      <div className="flex h-16 items-center px-4">
        <span className="text-2xl font-bold text-gray-200">SWPPP-TOP</span>
        <button
          className="ml-auto text-gray-300 hover:text-white"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? '▶' : '◀'}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <NavigationItem
              key={item.name}
              name={item.name}
              href={item.href}
              Icon={item.icon}
            />
          ))}
        </ul>
      </nav>

      {/* Actions */}
      <div className="px-2 py-2 pb-4">
        <ul className="space-y-2">
          {actions.map((action) => (
            <ActionItem
              key={action.name}
              name={action.name}
              action={action.action}
              Icon={action.icon}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
