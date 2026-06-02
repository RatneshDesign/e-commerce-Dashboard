import { useState } from 'react'
import {
  HiOutlinePlusCircle,
  HiOutlineSearch,
  HiOutlinePencilAlt,
  HiOutlineTrash,
} from 'react-icons/hi'

const initialCategories = [
  { id: 1, name: 'Office Chairs', products: 8, img: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=300&h=200&fit=crop' },
  { id: 2, name: 'Dining Chairs', products: 5, img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&h=200&fit=crop' },
  { id: 3, name: 'Lounge Chairs', products: 4, img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop' },
  { id: 4, name: 'Bar Stools', products: 3, img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&h=200&fit=crop' },
  { id: 5, name: 'Accent Chairs', products: 2, img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=200&fit=crop' },
  { id: 6, name: 'Recliners', products: 1, img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop' },
  { id: 7, name: 'Gaming Chairs', products: 2, img: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=300&h=200&fit=crop' },
  { id: 8, name: 'Outdoor Chairs', products: 1, img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=200&fit=crop' },
  { id: 9, name: 'Kids Chairs', products: 1, img: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=300&h=200&fit=crop' },
]

export default function Categories() {
  const [search, setSearch] = useState('')
  const [showAdd, setShowAdd] = useState(false)
  const [newName, setNewName] = useState('')

  const filtered = initialCategories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900 mt-2">Categories</h1>
      <p className="text-sm text-gray-400 mt-1">
        <span className="text-[#e74c3c]">Dashboard</span> &gt; Categories
      </p>

      {/* Actions */}
      <div className="flex items-center justify-between mt-6">
        <h2 className="text-lg font-bold text-gray-900">All Categories</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowAdd(!showAdd)}
            className="flex items-center gap-1.5 bg-[#e74c3c] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#d44332] transition-colors"
          >
            <HiOutlinePlusCircle className="text-lg" />
            Add Category
          </button>
          <div className="relative">
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search Categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg w-48 outline-none focus:border-[#e74c3c] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Add Category Inline */}
      {showAdd && (
        <div className="mt-4 flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
          <input
            type="text"
            placeholder="Category name..."
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="flex-1 px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg outline-none focus:border-[#e74c3c]"
          />
          <button className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
            Save
          </button>
          <button
            onClick={() => { setShowAdd(false); setNewName('') }}
            className="px-5 py-2 text-sm font-medium border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Category Grid */}
      <div className="grid grid-cols-3 gap-5 mt-6">
        {filtered.map((cat) => (
          <div
            key={cat.id}
            className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-40 overflow-hidden relative">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {/* Hover Actions */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-gray-600 hover:text-[#e74c3c] transition-colors">
                  <HiOutlinePencilAlt className="text-sm" />
                </button>
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-gray-600 hover:text-[#e74c3c] transition-colors">
                  <HiOutlineTrash className="text-sm" />
                </button>
              </div>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">{cat.name}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{cat.products} Products</p>
              </div>
              <span className="text-xs font-medium text-[#e74c3c] bg-red-50 px-2.5 py-1 rounded-full">
                {cat.products}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
