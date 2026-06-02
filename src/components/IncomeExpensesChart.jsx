const data = [
  { day: 'Sun', income: 40, expenses: 30 },
  { day: 'Mon', income: 55, expenses: 45 },
  { day: 'Tue', income: 45, expenses: 60 },
  { day: 'Wed', income: 70, expenses: 35 },
  { day: 'Thu', income: 50, expenses: 55 },
  { day: 'Fri', income: 65, expenses: 40 },
  { day: 'Sat', income: 55, expenses: 50 },
]

function smooth(points, chartW, chartH, maxVal) {
  const step = chartW / (points.length - 1)
  const pts = points.map((v, i) => ({ x: i * step, y: chartH - (v / maxVal) * chartH }))

  if (pts.length < 2) return ''
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 0; i < pts.length - 1; i++) {
    const cp1x = pts[i].x + step / 3
    const cp1y = pts[i].y
    const cp2x = pts[i + 1].x - step / 3
    const cp2y = pts[i + 1].y
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${pts[i + 1].x} ${pts[i + 1].y}`
  }
  return d
}

function smoothArea(points, chartW, chartH, maxVal) {
  const step = chartW / (points.length - 1)
  const path = smooth(points, chartW, chartH, maxVal)
  return `${path} L ${(points.length - 1) * step} ${chartH} L 0 ${chartH} Z`
}

export default function IncomeExpensesChart() {
  const maxVal = 80
  const chartW = 260
  const chartH = 110
  const step = chartW / (data.length - 1)

  const incomeLine = smooth(data.map((d) => d.income), chartW, chartH, maxVal)
  const expensesLine = smooth(data.map((d) => d.expenses), chartW, chartH, maxVal)
  const incomeArea = smoothArea(data.map((d) => d.income), chartW, chartH, maxVal)
  const expensesArea = smoothArea(data.map((d) => d.expenses), chartW, chartH, maxVal)

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-900">Income & Expenses</h3>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[10px] text-gray-500">
            <span className="w-3 h-2 rounded-sm bg-[#e74c3c] inline-block" />Income
          </span>
          <span className="flex items-center gap-1 text-[10px] text-gray-500">
            <span className="w-3 h-2 rounded-sm bg-gray-800 inline-block" />Expenses
          </span>
        </div>
      </div>

      <svg width="100%" viewBox={`-30 -5 ${chartW + 40} ${chartH + 28}`} className="overflow-visible">
        {[0, 20, 40, 60, 80].map((v) => {
          const y = chartH - (v / maxVal) * chartH
          return (
            <g key={v}>
              <line x1="0" y1={y} x2={chartW} y2={y} stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
              <text x="-8" y={y + 3} textAnchor="end" fill="#9ca3af" fontSize="9">{v}%</text>
            </g>
          )
        })}

        <path d={incomeArea} fill="rgba(231,76,60,0.08)" />
        <path d={expensesArea} fill="rgba(26,26,46,0.04)" />
        <path d={incomeLine} fill="none" stroke="#e74c3c" strokeWidth="2.5" strokeLinecap="round" />
        <path d={expensesLine} fill="none" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" />

        {data.map((d, i) => {
          const x = i * step
          const y = chartH - (d.income / maxVal) * chartH
          return <circle key={i} cx={x} cy={y} r="3" fill="#e74c3c" />
        })}

        {data.map((d, i) => (
          <text key={i} x={i * step} y={chartH + 16} textAnchor="middle" fill="#9ca3af" fontSize="10">{d.day}</text>
        ))}
      </svg>
    </div>
  )
}
