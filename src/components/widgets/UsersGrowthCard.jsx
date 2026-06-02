export default function UsersGrowthCard() {
  const bars = [
    { label: '12.01', pct: 45 },
    { label: '13.01', pct: 72 },
    { label: '14.01', pct: 95 },
  ]

  return (
    <div className="bg-gray-900 rounded-2xl p-5 text-white relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#a78bfa"/></svg>
          <span className="text-sm font-semibold">Users growth</span>
        </div>
        <div className="w-7 h-7 rounded-full overflow-hidden bg-gray-700">
          <img src="https://i.pravatar.cc/28?img=3" alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Percentage */}
      <div className="flex items-center gap-3 mb-1">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        <span className="text-4xl font-bold tracking-tight">+88.3%</span>
      </div>
      <div className="flex items-center gap-1.5 mb-5 ml-11">
        <span className="text-xs text-gray-400">+1.78%</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
      </div>

      {/* Horizontal Bars */}
      <div className="space-y-2.5">
        {bars.map((bar, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-xs text-gray-400 w-10 flex-shrink-0">{bar.label}</span>
            <div className="flex-1 h-8 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${bar.pct}%`,
                  background: i === bars.length - 1
                    ? 'linear-gradient(90deg, #e2e8f0, #a78bfa)'
                    : '#f1f5f9',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
