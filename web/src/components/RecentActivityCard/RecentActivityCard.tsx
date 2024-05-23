const RecentActivityCard = ({ activities }) => {
  return (
    <div className="rounded-md bg-white p-6 shadow">
      <h3 className="mb-4 text-xl text-blue-600">Recent Activity</h3>
      <ul className="space-y-2">
        {activities.map((activity, index) => (
          <li key={index} className="text-gray-700">
            {activity}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentActivityCard
