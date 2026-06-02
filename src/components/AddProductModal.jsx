import { useState, useRef } from 'react'
import { HiX, HiOutlinePhotograph } from 'react-icons/hi'

export default function AddProductModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [images, setImages] = useState([])
  const [activeImageIdx, setActiveImageIdx] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    color: '',
    material: '',
    description: '',
  })
  const fileInputRef = useRef(null)

  if (!isOpen) return null

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }))
    setImages((prev) => [...prev, ...newImages])
  }

  const removeImage = (idx) => {
    setImages((prev) => prev.filter((_, i) => i !== idx))
    if (activeImageIdx >= images.length - 1) {
      setActiveImageIdx(Math.max(0, images.length - 2))
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const files = Array.from(e.dataTransfer.files).filter((f) =>
      f.type.startsWith('image/')
    )
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }))
    setImages((prev) => [...prev, ...newImages])
  }

  const handleSubmit = () => {
    // In a real app this would send data to an API
    console.log('Submitting product:', { images, ...formData })
    handleReset()
    onClose()
  }

  const handleReset = () => {
    setStep(1)
    setImages([])
    setActiveImageIdx(0)
    setFormData({ name: '', price: '', color: '', material: '', description: '' })
  }

  const handleClose = () => {
    handleReset()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[580px] mx-4 overflow-hidden">
        {step === 1 ? (
          /* ====== STEP 1: Image Upload ====== */
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Add Product Images</h2>
                <p className="text-sm text-gray-400 mt-0.5">Step 1 of 2</p>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
              >
                <HiX className="text-lg" />
              </button>
            </div>

            {/* Image Upload Area */}
            <div className="flex gap-3">
              {/* Uploaded Images */}
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-[160px] h-[200px] border border-gray-200 rounded-xl overflow-hidden flex-shrink-0"
                >
                  <img
                    src={img.preview}
                    alt={`Upload ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removeImage(idx)}
                    className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md text-gray-500 hover:text-gray-700"
                  >
                    <HiX className="text-xs" />
                  </button>
                </div>
              ))}

              {/* Drop Zone */}
              {images.length < 3 && (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  className="w-[160px] h-[200px] border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-gray-300 transition-colors flex-shrink-0"
                >
                  <HiOutlinePhotograph className="text-3xl text-gray-300 mb-2" />
                  <p className="text-xs font-medium text-gray-600 text-center px-2">
                    Choose images or Drag & Drop here
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1 text-center px-2">
                    JPEG, PNG and MP4 format, up to 50MB.
                  </p>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={() => setStep(2)}
              disabled={images.length === 0}
              className="w-full mt-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        ) : (
          /* ====== STEP 2: Product Details ====== */
          <div className="p-6 flex gap-5">
            {/* Image Preview Carousel */}
            <div className="w-[200px] flex-shrink-0">
              <div className="w-full h-[220px] bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center">
                {images.length > 0 && (
                  <img
                    src={images[activeImageIdx]?.preview}
                    alt="Product preview"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              {/* Dots */}
              <div className="flex items-center justify-center gap-1.5 mt-3">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === activeImageIdx ? 'bg-gray-900' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Add Product Details</h2>
                  <p className="text-sm text-gray-400 mt-0.5">Step 2 of 2</p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
                >
                  <HiX className="text-lg" />
                </button>
              </div>

              {/* Name & Price */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="text-xs font-medium text-gray-700 mb-1 block">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700 mb-1 block">Price</label>
                  <input
                    type="text"
                    placeholder="Enter Price"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
              </div>

              {/* Color & Material */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="text-xs font-medium text-gray-700 mb-1 block">Color</label>
                  <select
                    value={formData.color}
                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-gray-400 transition-colors appearance-none"
                  >
                    <option value="">Choose Color</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="brown">Brown</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700 mb-1 block">Material</label>
                  <select
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-gray-400 transition-colors appearance-none"
                  >
                    <option value="">Choose Materials</option>
                    <option value="wood">Wood</option>
                    <option value="metal">Metal</option>
                    <option value="fabric">Fabric</option>
                    <option value="leather">Leather</option>
                    <option value="plastic">Plastic</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="text-xs font-medium text-gray-700 mb-1 block">Description</label>
                <textarea
                  placeholder="Enter Description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-gray-400 transition-colors resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="py-2.5 text-sm font-semibold border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="py-2.5 text-sm font-semibold bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
