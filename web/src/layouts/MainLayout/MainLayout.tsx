import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  return (
    <div className="text-dark-gray-700 bg-gradient-blue-silver flex min-h-screen flex-col">
      <header className="flex items-center justify-between bg-blue-600 px-6 py-4 text-white shadow">
        <h1 className="text-2xl font-bold">BetterSWPPP</h1>
        <nav>
          <Link to={routes.home()} className="px-4">
            Home
          </Link>
          <Link to={routes.login()} className="px-4">
            Login
          </Link>
          <Link to={routes.signup()} className="px-4">
            Sign Up
          </Link>
        </nav>
      </header>
      <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      <footer className="bg-gray-100 py-4 text-center">
        <p className="text-sm">&copy; 2024 BetterSWPPP. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default MainLayout
