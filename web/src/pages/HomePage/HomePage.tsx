import { navigate, routes } from '@redwoodjs/router'

import Button from 'src/components/Button/Button'

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <header className="mb-8 text-center">
        <h1 className="mb-4 text-3xl font-bold">Welcome to BetterSWPPP</h1>
        <p className="text-base text-gray-600">
          Your ultimate solution for managing stormwater inspections
          efficiently.
        </p>
      </header>
      <section className="mb-8 w-full max-w-md rounded-md bg-white p-4 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Get Started</h2>
        <Button
          className="mb-4 w-full"
          onClick={() => navigate(routes.signup())}
        >
          Sign Up
        </Button>
        <Button className="w-full" onClick={() => navigate(routes.login())}>
          Login
        </Button>
      </section>
      <section className="w-full max-w-md rounded-md bg-white p-4 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Why BetterSWPPP?</h2>
        <ul className="list-inside list-disc text-gray-600">
          <li>Streamlined inspections</li>
          <li>Easy site management</li>
          <li>Comprehensive reporting</li>
          <li>Mobile-friendly design</li>
        </ul>
      </section>
    </div>
  )
}

export default HomePage
