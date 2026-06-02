import TotalIncomeChart from '../components/TotalIncomeChart'
import ActivityChart from '../components/ActivityChart'
import IncomeExpensesChart from '../components/IncomeExpensesChart'
import UsersGrowthCard from '../components/widgets/UsersGrowthCard'
import CalendarWidget from '../components/widgets/CalendarWidget'
import WeatherWidget from '../components/widgets/WeatherWidget'
import ClockWidget from '../components/widgets/ClockWidget'
import RecentOrdersWidget from '../components/widgets/RecentOrdersWidget'

const stats = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
    ),
    value: '22',
    label: 'Total Users',
    change: '+12%',
    up: true,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
    ),
    value: '70k',
    label: 'Avg Monthly Profit',
    change: '+8.2%',
    up: true,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
    ),
    value: '27+',
    label: 'Products',
    change: '+3',
    up: true,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    ),
    value: '9',
    label: 'Categories',
    change: '+1',
    up: true,
  },
]

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mt-2">Dashboard</h1>
      <p className="text-sm text-gray-400 mt-1">
        <span className="text-[#e74c3c]">Dashboard</span> &gt; Home
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-gray-50 rounded-2xl p-5 hover:shadow-md transition-shadow group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-600 group-hover:text-[#e74c3c] transition-colors shadow-sm">
                {stat.icon}
              </div>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                stat.up ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'
              }`}>
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-400 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Analysis Charts */}
      <h2 className="text-lg font-bold text-gray-900 mt-8 mb-4">Analysis</h2>
      <div className="grid grid-cols-3 gap-4">
        <TotalIncomeChart />
        <ActivityChart />
        <IncomeExpensesChart />
      </div>

      {/* Widgets Row */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <UsersGrowthCard />
        <CalendarWidget />
        <WeatherWidget />
        <ClockWidget />
      </div>

      {/* Recent Orders */}
      <div className="mt-6">
        <RecentOrdersWidget />
      </div>
    </div>
  )
}
