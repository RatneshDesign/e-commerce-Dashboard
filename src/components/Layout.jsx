import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout({ user, onLogout }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar user={user} onLogout={onLogout} />
      <div className="px-8 pb-8">
        <Outlet />
      </div>
    </div>
  )
}
