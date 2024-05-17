const QuickActionsCard = () => {
  return (
    <div className="rounded-md bg-white p-6 shadow">
      <h3 className="mb-4 text-xl text-blue-600">Quick Actions</h3>
      <button className="mb-2 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        New Inspection
      </button>
      <button className="mb-2 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Add Site
      </button>
    </div>
  )
}

export default QuickActionsCard
