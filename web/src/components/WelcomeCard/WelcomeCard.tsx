const WelcomeCard = ({ user }) => {
  return (
    <div className="rounded-md bg-white p-6 shadow">
      <h3 className="mb-4 text-xl text-blue-600">Welcome, {user.firstName}!</h3>
      <p className="text-gray-700">
        Here&apos;s a quick overview of your account.
      </p>
    </div>
  )
}

export default WelcomeCard
