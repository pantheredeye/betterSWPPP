const RecentActivityCard = ({ activities }) => {
  return (
    <div className="rounded-xl bg-gray-800 p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-semibold text-gray-200">
        Recent Activity
      </h3>
      <ul className="space-y-2">
        {activities.map((activity, index) => (
          <li key={index} className="text-gray-300">
            • {activity}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentActivityCard
