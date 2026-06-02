const orders = [
  { id: '#4523', customer: 'Sarah Johnson', product: 'Techno Chair', amount: '$249.00', status: 'Delivered', avatar: 'https://i.pravatar.cc/32?img=1' },
  { id: '#4522', customer: 'Michael Chen', product: 'Swivel Chair', amount: '$189.00', status: 'Shipped', avatar: 'https://i.pravatar.cc/32?img=3' },
  { id: '#4521', customer: 'Emily Davis', product: 'Fabric Chair x2', amount: '$378.00', status: 'Processing', avatar: 'https://i.pravatar.cc/32?img=5' },
  { id: '#4520', customer: 'Robert Wilson', product: 'Bar Stool x3', amount: '$537.00', status: 'Delivered', avatar: 'https://i.pravatar.cc/32?img=8' },
  { id: '#4519', customer: 'Lisa Thompson', product: 'Lounge Chair', amount: '$420.00', status: 'Cancelled', avatar: 'https://i.pravatar.cc/32?img=9' },
]

const statusStyle = {
  Delivered: 'bg-green-50 text-green-600',
  Shipped: 'bg-blue-50 text-blue-600',
  Processing: 'bg-amber-50 text-amber-600',
  Cancelled: 'bg-red-50 text-red-500',
}

export default function RecentOrdersWidget() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-gray-900">Recent Orders</h3>
        <button className="text-xs text-[#e74c3c] font-medium hover:underline">View All</button>
      </div>

      <div className="space-y-3">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
              <img src={order.avatar} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 truncate">{order.customer}</p>
                <span className="text-sm font-semibold text-gray-900 flex-shrink-0">{order.amount}</span>
              </div>
              <div className="flex items-center justify-between mt-0.5">
                <p className="text-xs text-gray-400 truncate">{order.product} &middot; {order.id}</p>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${statusStyle[order.status]}`}>
                  {order.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
