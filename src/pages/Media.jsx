import { useState, useRef } from 'react'
import {
  HiOutlineSearch,
  HiOutlineUpload,
  HiOutlineTrash,
  HiOutlineDownload,
  HiOutlinePhotograph,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiX,
} from 'react-icons/hi'

const initialFiles = [
  { id: 1, name: 'techno-chair-front.jpg', type: 'image', size: '2.4 MB', date: 'Feb 12, 2026', url: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=400&h=300&fit=crop' },
  { id: 2, name: 'steel-chair-side.jpg', type: 'image', size: '1.8 MB', date: 'Feb 11, 2026', url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop' },
  { id: 3, name: 'swivel-chair-angle.jpg', type: 'image', size: '3.1 MB', date: 'Feb 10, 2026', url: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=300&fit=crop' },
  { id: 4, name: 'apholstered-detail.jpg', type: 'image', size: '2.7 MB', date: 'Feb 9, 2026', url: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop' },
  { id: 5, name: 'fabric-chair-studio.jpg', type: 'image', size: '4.2 MB', date: 'Feb 8, 2026', url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
  { id: 6, name: 'sled-base-red.jpg', type: 'image', size: '1.9 MB', date: 'Feb 7, 2026', url: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=300&fit=crop' },
  { id: 7, name: 'wooden-chair-classic.jpg', type: 'image', size: '2.2 MB', date: 'Feb 6, 2026', url: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=400&h=300&fit=crop' },
  { id: 8, name: 'lounge-lifestyle.jpg', type: 'image', size: '5.1 MB', date: 'Feb 5, 2026', url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop' },
  { id: 9, name: 'office-setup-wide.jpg', type: 'image', size: '3.6 MB', date: 'Feb 4, 2026', url: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop' },
]

export default function Media() {
  const [search, setSearch] = useState('')
  const [view, setView] = useState('grid')
  const [selectedIds, setSelectedIds] = useState([])
  const [previewFile, setPreviewFile] = useState(null)
  const fileInputRef = useRef(null)

  const filtered = initialFiles.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  )

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const totalSize = initialFiles.reduce((sum, f) => {
    const num = parseFloat(f.size)
    return sum + num
  }, 0)

  return (
    <div>
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900 mt-2">Media</h1>
      <p className="text-sm text-gray-400 mt-1">
        <span className="text-[#e74c3c]">Dashboard</span> &gt; Media
      </p>

      {/* Stats */}
      <div className="flex gap-4 mt-6">
        <div className="bg-gray-50 rounded-xl px-5 py-4 flex-1">
          <p className="text-2xl font-bold text-gray-900">{initialFiles.length}</p>
          <p className="text-sm text-gray-400 mt-0.5">Total Files</p>
        </div>
        <div className="bg-gray-50 rounded-xl px-5 py-4 flex-1">
          <p className="text-2xl font-bold text-gray-900">{initialFiles.filter((f) => f.type === 'image').length}</p>
          <p className="text-sm text-gray-400 mt-0.5">Images</p>
        </div>
        <div className="bg-gray-50 rounded-xl px-5 py-4 flex-1">
          <p className="text-2xl font-bold text-gray-900">{totalSize.toFixed(1)} MB</p>
          <p className="text-sm text-gray-400 mt-0.5">Storage Used</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 bg-[#e74c3c] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#d44332] transition-colors"
          >
            <HiOutlineUpload className="text-lg" />
            Upload Files
          </button>
          <input ref={fileInputRef} type="file" multiple className="hidden" />
          {selectedIds.length > 0 && (
            <button className="flex items-center gap-1.5 text-sm font-medium text-[#e74c3c] border border-[#e74c3c] px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
              <HiOutlineTrash className="text-lg" />
              Delete ({selectedIds.length})
            </button>
          )}
        </div>
        <div className="flex items-center gap-3">
          {/* View Toggle */}
          <div className="flex border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setView('grid')}
              className={`p-2 transition-colors ${view === 'grid' ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-50'}`}
            >
              <HiOutlineViewGrid className="text-base" />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 transition-colors ${view === 'list' ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-50'}`}
            >
              <HiOutlineViewList className="text-base" />
            </button>
          </div>
          <div className="relative">
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search files..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg w-48 outline-none focus:border-[#e74c3c] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Grid View */}
      {view === 'grid' ? (
        <div className="grid grid-cols-4 gap-4 mt-5">
          {filtered.map((file) => (
            <div
              key={file.id}
              className={`group bg-white border rounded-2xl overflow-hidden hover:shadow-lg transition-all cursor-pointer ${
                selectedIds.includes(file.id) ? 'border-[#e74c3c] ring-1 ring-[#e74c3c]' : 'border-gray-100'
              }`}
            >
              <div
                className="h-40 overflow-hidden relative"
                onClick={() => setPreviewFile(file)}
              >
                <img
                  src={file.url}
                  alt={file.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Checkbox */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(file.id)}
                    onChange={(e) => {
                      e.stopPropagation()
                      toggleSelect(file.id)
                    }}
                    onClick={(e) => e.stopPropagation()}
                    className="w-4 h-4 rounded accent-[#e74c3c]"
                  />
                </div>
                {/* Hover actions */}
                <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow text-gray-500 hover:text-[#e74c3c] transition-colors"
                  >
                    <HiOutlineDownload className="text-sm" />
                  </button>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow text-gray-500 hover:text-[#e74c3c] transition-colors"
                  >
                    <HiOutlineTrash className="text-sm" />
                  </button>
                </div>
              </div>
              <div className="px-3 py-2.5">
                <p className="text-xs font-medium text-gray-800 truncate">{file.name}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">{file.size} &middot; {file.date}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="mt-5 border border-gray-100 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-5 py-3 w-8">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded accent-[#e74c3c]"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedIds(filtered.map((f) => f.id))
                      } else {
                        setSelectedIds([])
                      }
                    }}
                  />
                </th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">File</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Size</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((file) => (
                <tr key={file.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-5 py-3">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(file.id)}
                      onChange={() => toggleSelect(file.id)}
                      className="w-4 h-4 rounded accent-[#e74c3c]"
                    />
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                        <img src={file.url} alt={file.name} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-sm font-medium text-gray-800">{file.name}</p>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-500">{file.size}</td>
                  <td className="px-5 py-3 text-sm text-gray-500">{file.date}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-colors">
                        <HiOutlineDownload className="text-base" />
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
        </div>
      )}

      {/* Image Preview Modal */}
      {previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setPreviewFile(null)} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <HiOutlinePhotograph className="text-gray-400" />
                <span className="text-sm font-medium text-gray-800">{previewFile.name}</span>
              </div>
              <button
                onClick={() => setPreviewFile(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
              >
                <HiX className="text-lg" />
              </button>
            </div>
            <img
              src={previewFile.url}
              alt={previewFile.name}
              className="w-full max-h-[500px] object-contain bg-gray-50"
            />
            <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100">
              <span className="text-xs text-gray-400">{previewFile.size} &middot; {previewFile.date}</span>
              <button className="flex items-center gap-1.5 text-sm font-medium text-[#e74c3c] hover:underline">
                <HiOutlineDownload className="text-base" />
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
