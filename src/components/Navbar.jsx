import { NavLink } from 'react-router-dom'
import { HiOutlineHome } from 'react-icons/hi'
import { HiOutlineViewGrid } from 'react-icons/hi'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { HiOutlineCube } from 'react-icons/hi'
import { HiOutlinePhone } from 'react-icons/hi'
import { HiOutlinePhotograph } from 'react-icons/hi'
import ProfileDropdown from './ProfileDropdown'

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: HiOutlineHome },
  { path: '/categories', label: 'Categories', icon: HiOutlineViewGrid },
  { path: '/content', label: 'Content', icon: HiOutlineDocumentText },
  { path: '/products', label: 'Products', icon: HiOutlineCube },
  { path: '/contact', label: 'Contact', icon: HiOutlinePhone },
  { path: '/media', label: 'Media', icon: HiOutlinePhotograph },
]

export default function Navbar({ user, onLogout }) {
  return (
    <div className="flex items-center justify-between px-6 pt-5 pb-3">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="4" y="10" width="8" height="4" rx="1" fill="#e74c3c" />
          <rect x="16" y="10" width="8" height="4" rx="1" fill="#e74c3c" />
          <rect x="10" y="4" width="4" height="8" rx="1" fill="#e74c3c" />
          <rect x="10" y="16" width="4" height="8" rx="1" fill="#e74c3c" />
        </svg>
        <div className="leading-tight">
          <p className="text-[11px] font-bold text-gray-800">Cross</p>
          <p className="text-[10px] text-gray-500">Enterprise</p>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex items-center gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                isActive
                  ? 'bg-[#e74c3c] text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`
            }
          >
            <item.icon className="text-[15px]" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Notifications + Profile */}
      <div className="flex items-center gap-3">
        <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#e74c3c] rounded-full" />
        </button>
        <ProfileDropdown user={user} onLogout={onLogout} />
      </div>
    </div>
  )
}
