const WelcomeCard = ({ user }) => {
  return (
    <div className="rounded-xl bg-gray-800 p-6 shadow-lg md:col-span-2 lg:col-span-3">
      <h2 className="text-2xl font-bold text-gray-200">
        Welcome back, {user?.firstName ?? 'User'}!
      </h2>
      <p className="mt-2 text-gray-300">
        Here&apos;s what&apos;s happening with your sites today.
      </p>
    </div>
  )
}

export default WelcomeCard
