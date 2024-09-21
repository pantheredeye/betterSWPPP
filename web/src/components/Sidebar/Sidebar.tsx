import { useState } from 'react'

import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  DocumentDuplicateIcon,
  Cog6ToothIcon,
  BellIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLeftOnRectangleIcon, // Logout icon
  ArrowUturnLeftIcon, // Back icon
} from '@heroicons/react/24/outline'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Dashboard', href: 'dashboard', icon: HomeIcon },
  { name: 'Inspections', href: 'inspections', icon: UsersIcon },
  { name: 'Sites', href: 'dashboard', icon: FolderIcon },
  { name: 'BMPs', href: 'dashboard', icon: DocumentDuplicateIcon },
  { name: 'Settings', href: 'dashboard', icon: Cog6ToothIcon },
]

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { logOut } = useAuth()

  return (
    <div
      className={classNames(
        'flex flex-col transition-all duration-300',
        isCollapsed ? 'w-20' : 'w-64',
        'bg-gray-900 text-gray-300',
        'shadow-inner' // Neuromorphism effect
      )}
    >
      {/* Header with Title and Collapse Button */}
      <div className="flex h-16 items-center justify-between px-4">
        {!isCollapsed && (
          <span className="text-2xl font-bold text-gray-200">SWPPP-Tip</span>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-gray-300 hover:text-gray-400 focus:outline-none"
        >
          {isCollapsed ? (
            <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={routes[item.href]()}
                className={classNames(
                  'group relative flex items-center rounded-xl px-2 py-2 text-sm font-medium',
                  'bg-gray-800 hover:bg-gray-700',
                  'shadow-lg', // Neuromorphism effect
                  isCollapsed ? 'justify-center' : 'justify-start'
                )}
              >
                <item.icon
                  className="h-6 w-6 text-gray-400 group-hover:text-gray-200"
                  aria-hidden="true"
                />
                {!isCollapsed && (
                  <span className="ml-3 text-gray-200">{item.name}</span>
                )}
                {isCollapsed && (
                  <span className="absolute left-full ml-3 w-auto min-w-max whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-200 opacity-0 group-hover:opacity-100">
                    {item.name}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Profile Section at the Bottom */}
      <div className="px-4 pb-4">
        <div className="border-t border-gray-700 pt-4">
          <div className="flex items-center">
            <div className="relative">
              <img
                className="h-10 w-10 rounded-full bg-gray-800 shadow-lg"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt=""
              />
              {/* Status indicator */}
              <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-gray-900"></span>
            </div>
            {!isCollapsed && (
              <div className="ml-3">
                {/* <p className="text-sm font-medium text-gray-200">
                  {currentUser?.firstName ?? 'User'}
                </p> */}
                <div className="mt-1 flex space-x-2">
                  <button
                    onClick={logOut}
                    className="flex items-center text-xs text-gray-400 hover:text-gray-200 focus:outline-none"
                  >
                    <ArrowLeftOnRectangleIcon
                      className="mr-1 h-4 w-4"
                      aria-hidden="true"
                    />
                    Logout
                  </button>
                  <button
                    onClick={() => window.history.back()}
                    className="flex items-center text-xs text-gray-400 hover:text-gray-200 focus:outline-none"
                  >
                    <ArrowUturnLeftIcon
                      className="mr-1 h-4 w-4"
                      aria-hidden="true"
                    />
                    Back
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Notifications Icon */}
          <div className="mt-4 flex items-center">
            <button
              type="button"
              className="flex items-center text-gray-400 hover:text-gray-200 focus:outline-none"
            >
              <BellIcon className="h-6 w-6" aria-hidden="true" />
              {!isCollapsed && (
                <span className="ml-2 text-sm">Notifications</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
