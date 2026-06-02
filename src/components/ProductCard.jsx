import { useState, useRef, useEffect } from 'react'
import { HiDotsVertical } from 'react-icons/hi'
import { HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi'

export default function ProductCard({ product, onEdit, onDelete }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow relative">
      {/* Image */}
      <div className="aspect-square bg-gray-50 p-3 flex items-center justify-center">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Footer */}
      <div className="relative" ref={menuRef}>
        <div className="flex items-center justify-between px-4 py-3">
          <p className="text-sm text-gray-800 font-medium truncate pr-2">{product.name}</p>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-400 hover:text-gray-600 flex-shrink-0"
          >
            <HiDotsVertical className="text-lg" />
          </button>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-2 top-full -mt-1 z-10 bg-white border border-gray-100 rounded-xl shadow-lg py-1 min-w-[120px]">
            <button
              onClick={() => {
                setMenuOpen(false)
                onEdit?.(product)
              }}
              className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <HiOutlinePencilAlt className="text-base text-gray-400" />
              Edit
            </button>
            <button
              onClick={() => {
                setMenuOpen(false)
                onDelete?.(product)
              }}
              className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <HiOutlineTrash className="text-base text-gray-400" />
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
