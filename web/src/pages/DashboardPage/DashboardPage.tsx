import { useAuth } from 'src/auth'
import QuickActionsCard from 'src/components/QuickActionsCard'
import RecentActivityCard from 'src/components/RecentActivityCard/RecentActivityCard'
import StatisticsCard from 'src/components/StatisticsCard/StatisticsCard'
import WelcomeCard from 'src/components/WelcomeCard'

const DashboardPage = () => {
  const { currentUser } = useAuth()
  const activities = [
    'Inspection #123 completed at Site A',
    'Site B added by User X',
    // Add more activities as needed
  ]

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <WelcomeCard user={currentUser} />
      <QuickActionsCard />
      <RecentActivityCard activities={activities} />
      <StatisticsCard />
    </div>
  )
}

export default DashboardPage
