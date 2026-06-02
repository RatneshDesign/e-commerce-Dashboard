import { useState } from 'react'
import {
  HiOutlineSearch,
  HiOutlineMail,
  HiOutlineMailOpen,
  HiOutlineTrash,
  HiOutlineReply,
} from 'react-icons/hi'

const messages = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', subject: 'Bulk order inquiry for office chairs', message: 'Hi, I am interested in placing a bulk order of 50 office chairs for our new workspace. Could you provide pricing details?', date: 'Feb 14, 2026', read: false },
  { id: 2, name: 'Michael Chen', email: 'michael@example.com', subject: 'Product warranty question', message: 'I purchased a Techno chair last month and wanted to know about the warranty coverage for the hydraulic mechanism.', date: 'Feb 13, 2026', read: false },
  { id: 3, name: 'Emily Davis', email: 'emily@example.com', subject: 'Custom color options', message: 'Do you offer custom fabric colors for the Apholstered chair? We need a specific shade of navy blue.', date: 'Feb 12, 2026', read: true },
  { id: 4, name: 'Robert Wilson', email: 'robert@example.com', subject: 'Shipping to international address', message: 'I would like to order 3 dining chairs. Can you ship to Melbourne, Australia? What are the shipping costs?', date: 'Feb 11, 2026', read: true },
  { id: 5, name: 'Lisa Thompson', email: 'lisa@example.com', subject: 'Return request - damaged item', message: 'My order #4523 arrived with a scratch on the armrest. I would like to request a replacement or return.', date: 'Feb 10, 2026', read: true },
  { id: 6, name: 'David Park', email: 'david@example.com', subject: 'Partnership opportunity', message: 'We run an interior design firm and would love to discuss a partnership for sourcing furniture for our projects.', date: 'Feb 9, 2026', read: true },
  { id: 7, name: 'Anna Martinez', email: 'anna@example.com', subject: 'Showroom visit appointment', message: 'I would like to schedule a visit to your showroom this weekend. Could you let me know the available timeslots?', date: 'Feb 8, 2026', read: true },
]

export default function Contact() {
  const [search, setSearch] = useState('')
  const [selectedId, setSelectedId] = useState(null)
  const [filter, setFilter] = useState('All')

  const filtered = messages.filter((m) => {
    const matchSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.subject.toLowerCase().includes(search.toLowerCase())
    const matchFilter =
      filter === 'All' ||
      (filter === 'Unread' && !m.read) ||
      (filter === 'Read' && m.read)
    return matchSearch && matchFilter
  })

  const selected = messages.find((m) => m.id === selectedId)
  const unreadCount = messages.filter((m) => !m.read).length

  return (
    <div>
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900 mt-2">Contact</h1>
      <p className="text-sm text-gray-400 mt-1">
        <span className="text-[#e74c3c]">Dashboard</span> &gt; Contact
      </p>

      {/* Stats */}
      <div className="flex gap-4 mt-6">
        <div className="bg-gray-50 rounded-xl px-5 py-4 flex-1">
          <p className="text-2xl font-bold text-gray-900">{messages.length}</p>
          <p className="text-sm text-gray-400 mt-0.5">Total Messages</p>
        </div>
        <div className="bg-red-50 rounded-xl px-5 py-4 flex-1">
          <p className="text-2xl font-bold text-[#e74c3c]">{unreadCount}</p>
          <p className="text-sm text-gray-400 mt-0.5">Unread</p>
        </div>
        <div className="bg-gray-50 rounded-xl px-5 py-4 flex-1">
          <p className="text-2xl font-bold text-gray-900">{messages.length - unreadCount}</p>
          <p className="text-sm text-gray-400 mt-0.5">Read</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-1">
          {['All', 'Unread', 'Read'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                filter === tab
                  ? 'bg-[#e74c3c] text-white'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {tab}
              {tab === 'Unread' && unreadCount > 0 && (
                <span className="ml-1.5 bg-white/20 text-[11px] px-1.5 py-0.5 rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="relative">
          <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search messages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg w-48 outline-none focus:border-[#e74c3c] transition-colors"
          />
        </div>
      </div>

      {/* Messages Layout */}
      <div className="flex gap-5 mt-5">
        {/* Message List */}
        <div className="flex-1 border border-gray-100 rounded-2xl overflow-hidden divide-y divide-gray-50">
          {filtered.map((msg) => (
            <button
              key={msg.id}
              onClick={() => setSelectedId(msg.id)}
              className={`w-full text-left px-5 py-4 hover:bg-gray-50/80 transition-colors ${
                selectedId === msg.id ? 'bg-gray-50' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  {msg.read ? (
                    <HiOutlineMailOpen className="text-lg text-gray-300" />
                  ) : (
                    <HiOutlineMail className="text-lg text-[#e74c3c]" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className={`text-sm ${msg.read ? 'text-gray-600' : 'font-semibold text-gray-900'}`}>
                      {msg.name}
                    </p>
                    <span className="text-[11px] text-gray-400 flex-shrink-0 ml-2">{msg.date}</span>
                  </div>
                  <p className={`text-sm mt-0.5 truncate ${msg.read ? 'text-gray-500' : 'font-medium text-gray-800'}`}>
                    {msg.subject}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5 truncate">{msg.message}</p>
                </div>
              </div>
            </button>
          ))}

          {filtered.length === 0 && (
            <div className="py-12 text-center text-gray-400 text-sm">No messages found</div>
          )}
        </div>

        {/* Message Detail */}
        {selected ? (
          <div className="w-[380px] border border-gray-100 rounded-2xl p-5 flex-shrink-0">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-gray-900">{selected.name}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{selected.email}</p>
              </div>
              <span className="text-xs text-gray-400">{selected.date}</span>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h4 className="text-sm font-semibold text-gray-900">{selected.subject}</h4>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">{selected.message}</p>
            </div>
            <div className="flex gap-2 mt-6">
              <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#e74c3c] text-white text-sm font-medium rounded-xl hover:bg-[#d44332] transition-colors">
                <HiOutlineReply className="text-base" />
                Reply
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-400 hover:text-[#e74c3c] hover:border-[#e74c3c] transition-colors">
                <HiOutlineTrash className="text-base" />
              </button>
            </div>
          </div>
        ) : (
          <div className="w-[380px] border border-gray-100 rounded-2xl flex-shrink-0 flex items-center justify-center text-gray-300 text-sm">
            Select a message to view
          </div>
        )}
      </div>
    </div>
  )
}
