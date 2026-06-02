import { useState } from 'react'
import {
  HiOutlinePlusCircle,
  HiOutlineSearch,
  HiOutlineEye,
  HiOutlinePencilAlt,
  HiOutlineTrash,
} from 'react-icons/hi'

const articles = [
  { id: 1, title: 'How to Choose the Perfect Office Chair', category: 'Guide', status: 'Published', date: 'Feb 10, 2026', views: 1240 },
  { id: 2, title: 'Top 10 Ergonomic Chairs for 2026', category: 'Blog', status: 'Published', date: 'Feb 8, 2026', views: 980 },
  { id: 3, title: 'Sustainable Furniture Materials Guide', category: 'Guide', status: 'Draft', date: 'Feb 5, 2026', views: 0 },
  { id: 4, title: 'Chair Maintenance Tips & Tricks', category: 'Blog', status: 'Published', date: 'Jan 28, 2026', views: 560 },
  { id: 5, title: 'New Collection: Spring 2026 Launch', category: 'News', status: 'Scheduled', date: 'Mar 1, 2026', views: 0 },
  { id: 6, title: 'Designing Your Home Office Space', category: 'Blog', status: 'Published', date: 'Jan 15, 2026', views: 2100 },
  { id: 7, title: 'Product Recall Notice: Model X200', category: 'News', status: 'Published', date: 'Jan 10, 2026', views: 3400 },
  { id: 8, title: 'Behind the Scenes: Our Workshop', category: 'Blog', status: 'Draft', date: 'Jan 5, 2026', views: 0 },
]

const statusColors = {
  Published: 'bg-green-50 text-green-600',
  Draft: 'bg-gray-100 text-gray-500',
  Scheduled: 'bg-blue-50 text-blue-600',
}

export default function Content() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')

  const filtered = articles.filter((a) => {
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === 'All' || a.status === filter
    return matchSearch && matchFilter
  })

  return (
    <div>
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900 mt-2">Content</h1>
      <p className="text-sm text-gray-400 mt-1">
        <span className="text-[#e74c3c]">Dashboard</span> &gt; Content
      </p>

      {/* Actions */}
      <div className="flex items-center justify-between mt-6">
        <h2 className="text-lg font-bold text-gray-900">All Articles</h2>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 bg-[#e74c3c] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#d44332] transition-colors">
            <HiOutlinePlusCircle className="text-lg" />
            New Article
          </button>
          <div className="relative">
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search Articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg w-48 outline-none focus:border-[#e74c3c] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1 mt-5">
        {['All', 'Published', 'Draft', 'Scheduled'].map((tab) => (
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
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="mt-5 border border-gray-100 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Views</th>
              <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((article) => (
              <tr key={article.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-gray-900">{article.title}</p>
                </td>
                <td className="px-5 py-4">
                  <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                    {article.category}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[article.status]}`}>
                    {article.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm text-gray-500">{article.date}</td>
                <td className="px-5 py-4 text-sm text-gray-500">{article.views.toLocaleString()}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center justify-end gap-1">
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-colors">
                      <HiOutlineEye className="text-base" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-[#e74c3c] hover:bg-red-50 transition-colors">
                      <HiOutlinePencilAlt className="text-base" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-[#e74c3c] hover:bg-red-50 transition-colors">
                      <HiOutlineTrash className="text-base" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="py-12 text-center text-gray-400 text-sm">No articles found</div>
        )}
      </div>
    </div>
  )
}
