import { useState, Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Sidebar from 'src/components/Sidebar'

interface AuthenticatedLayoutProps {
  children: ReactNode
}

const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-300">
      {/* Mobile Sidebar */}
      <Transition show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition-transform duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform duration-300"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 left-0 w-64 bg-gray-900 p-4 shadow-lg">
              {/* Close Button */}
              <button
                className="text-gray-300 hover:text-white"
                onClick={() => setSidebarOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              <Sidebar
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
                setSidebarOpen={setSidebarOpen} // Pass the function
              />{' '}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-shrink-0">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />{' '}
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:ml-64">
        {/* Mobile Menu Toggle */}
        <header className="p-4 lg:hidden">
          <button
            className="text-gray-300 hover:text-white"
            onClick={() => setSidebarOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </header>

        {/* Main Section */}
        <main className="flex-grow p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 p-4 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2024 SWPPP-TOP. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default AuthenticatedLayout
