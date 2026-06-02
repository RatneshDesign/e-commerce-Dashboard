import { useState } from 'react'
import { HiOutlinePlusCircle, HiOutlineSearch } from 'react-icons/hi'
import ProductCard from '../components/ProductCard'
import AddProductModal from '../components/AddProductModal'

const allProducts = [
  { id: 1, name: 'Techno chair', img: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=200&h=200&fit=crop' },
  { id: 2, name: 'Open back Steel chair', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&h=200&fit=crop' },
  { id: 3, name: 'Swivel chair', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=200&h=200&fit=crop' },
  { id: 4, name: 'Apholstered chair', img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=200&h=200&fit=crop' },
  { id: 5, name: 'Fabric chair', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop' },
  { id: 6, name: 'Sled base fabric chair', img: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=200&h=200&fit=crop' },
  { id: 7, name: 'Wooden chair', img: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=200&h=200&fit=crop' },
  { id: 8, name: 'Lounge chair', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop' },
  { id: 9, name: 'Recliner chair', img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=200&h=200&fit=crop' },
  { id: 10, name: 'Office chair', img: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=200&h=200&fit=crop' },
  { id: 11, name: 'Dining chair', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=200&h=200&fit=crop' },
  { id: 12, name: 'Bar stool', img: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=200&h=200&fit=crop' },
  { id: 13, name: 'Accent chair', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&h=200&fit=crop' },
  { id: 14, name: 'Wing chair', img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=200&h=200&fit=crop' },
  { id: 15, name: 'Bean bag', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop' },
  { id: 16, name: 'Folding chair', img: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=200&h=200&fit=crop' },
  { id: 17, name: 'Gaming chair', img: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=200&h=200&fit=crop' },
  { id: 18, name: 'Rocking chair', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop' },
  { id: 19, name: 'Papasan chair', img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=200&h=200&fit=crop' },
  { id: 20, name: 'Tulip chair', img: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=200&h=200&fit=crop' },
  { id: 21, name: 'Egg chair', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=200&h=200&fit=crop' },
  { id: 22, name: 'Club chair', img: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=200&h=200&fit=crop' },
  { id: 23, name: 'Chaise lounge', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&h=200&fit=crop' },
  { id: 24, name: 'Arm chair', img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=200&h=200&fit=crop' },
  { id: 25, name: 'Desk chair', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop' },
]

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(6)
  const [search, setSearch] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  const filtered = allProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )
  const totalPages = Math.ceil(filtered.length / perPage)
  const startIdx = (currentPage - 1) * perPage
  const currentProducts = filtered.slice(startIdx, startIdx + perPage)

  const handleEdit = (product) => {
    console.log('Edit product:', product)
  }

  const handleDelete = (product) => {
    console.log('Delete product:', product)
  }

  return (
    <div>
      {/* Page Header */}
      <h1 className="text-2xl font-bold text-gray-900 mt-2">Products</h1>
      <p className="text-sm text-gray-400 mt-1">
        <span className="text-[#e74c3c]">Dashboard</span> &gt; Products
      </p>

      {/* Actions Bar */}
      <div className="flex items-center justify-between mt-6">
        <h2 className="text-lg font-bold text-gray-900">All Products</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-1.5 bg-[#e74c3c] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#d44332] transition-colors"
          >
            <HiOutlinePlusCircle className="text-lg" />
            Add Products
          </button>
          <div className="relative">
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search Products..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setCurrentPage(1)
              }}
              className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg w-48 outline-none focus:border-[#e74c3c] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Show per page */}
      <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
        <span>Show</span>
        <select
          value={perPage}
          onChange={(e) => {
            setPerPage(Number(e.target.value))
            setCurrentPage(1)
          }}
          className="border border-gray-200 rounded-md px-2 py-1 text-sm outline-none"
        >
          <option value={6}>6</option>
          <option value={12}>12</option>
          <option value={24}>24</option>
        </select>
        <span>Products</span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-6 gap-4 mt-4">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-gray-500">
          Showing {startIdx + 1} to {Math.min(startIdx + perPage, filtered.length)} of{' '}
          {filtered.length} Products
        </p>
        <div className="flex items-center gap-1">
          <PaginationBtn
            label="First"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          />
          <PaginationBtn
            label="Previous"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          />
          <PaginationBtn
            label="1"
            onClick={() => setCurrentPage(1)}
            active={currentPage === 1}
          />
          {totalPages > 2 && currentPage > 2 && (
            <span className="px-2 text-gray-400 text-sm">...</span>
          )}
          {totalPages > 1 && currentPage !== 1 && currentPage !== totalPages && (
            <PaginationBtn
              label={String(currentPage)}
              onClick={() => {}}
              active
            />
          )}
          {totalPages > 2 && currentPage < totalPages - 1 && (
            <span className="px-2 text-gray-400 text-sm">...</span>
          )}
          {totalPages > 1 && (
            <PaginationBtn
              label={String(totalPages)}
              onClick={() => setCurrentPage(totalPages)}
              active={currentPage === totalPages}
            />
          )}
          <PaginationBtn
            label="Next"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          />
          <PaginationBtn
            label="Last"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          />
        </div>
      </div>

      {/* Add Product Modal */}
      <AddProductModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

function PaginationBtn({ label, onClick, active, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
        active
          ? 'bg-[#e74c3c] text-white border-[#e74c3c]'
          : disabled
          ? 'text-gray-300 border-gray-200 cursor-not-allowed'
          : 'text-gray-600 border-gray-200 hover:bg-gray-50'
      }`}
    >
      {label}
    </button>
  )
}
