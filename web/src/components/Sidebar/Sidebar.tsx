import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  DocumentDuplicateIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'

import { Link, routes } from '@redwoodjs/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  {
    name: 'Dashboard',
    href: 'dashboard',
    icon: HomeIcon,
    current: false,
  },
  {
    name: 'Inspections',
    href: 'inspections', // Change to 'inspections' when route is available
    icon: UsersIcon,
    current: false,
  },
  {
    name: 'Sites',
    href: 'dashboard', // Change to 'sites' when route is available
    icon: FolderIcon,
    current: false,
  },
  {
    name: 'BMPs',
    href: 'dashboard', // Change to 'bmps' when route is available
    icon: DocumentDuplicateIcon,
    current: false,
  },
  {
    name: 'Settings',
    href: 'dashboard', // Change to 'settings' when route is available
    icon: Cog6ToothIcon,
    current: false,
  },
]

const Sidebar = () => {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={routes[item.href]()}
                    className={classNames(
                      item.current
                        ? 'bg-gray-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-indigo-600'
                          : 'text-gray-400 group-hover:text-indigo-600',
                        'h-6 w-6 shrink-0'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
