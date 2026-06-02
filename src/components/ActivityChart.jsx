const data = [
  { day: 'Sun', value: 45 },
  { day: 'Mon', value: 60 },
  { day: 'Tue', value: 85 },
  { day: 'Wed', value: 55 },
  { day: 'Thu', value: 70 },
  { day: 'Fri', value: 90 },
  { day: 'Sat', value: 75 },
]

export default function ActivityChart() {
  const maxVal = 100
  const barW = 24
  const gap = 16
  const chartH = 120
  const totalW = data.length * (barW + gap) - gap + 40
  const refY = (1 - 50 / maxVal) * chartH

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-900">Activity</h3>
        <span className="text-[11px] text-gray-400 bg-gray-50 rounded-full px-3 py-1">Last 7 Days</span>
      </div>

      <svg width="100%" viewBox={`0 0 ${totalW} ${chartH + 28}`} className="overflow-visible">
        {[0, 25, 50, 75, 100].map((v) => {
          const y = (1 - v / maxVal) * chartH
          return <line key={v} x1="0" y1={y} x2={totalW} y2={y} stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
        })}
        <line x1="0" y1={refY} x2={totalW} y2={refY} stroke="#e74c3c" strokeWidth="1.5" strokeDasharray="4 4" />
        <text x="2" y={refY - 5} fill="#e74c3c" fontSize="9" fontWeight="600">50k</text>

        {data.map((d, i) => {
          const x = i * (barW + gap) + 20
          const barH = (d.value / maxVal) * chartH
          const y = chartH - barH
          return (
            <g key={i}>
              <rect x={x} y={y} width={barW} height={barH} rx="5" fill={d.value >= 80 ? '#e74c3c' : '#fecaca'} />
              <text x={x + barW / 2} y={chartH + 16} textAnchor="middle" fill="#9ca3af" fontSize="10">{d.day}</text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
