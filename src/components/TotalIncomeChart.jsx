export default function TotalIncomeChart() {
  const pct = 70
  const cx = 90, cy = 85, radius = 55
  const startAngle = 180
  const filledAngle = startAngle - (pct / 100) * 180

  const toRad = (deg) => (deg * Math.PI) / 180
  const arcPoint = (angle) => ({
    x: cx + radius * Math.cos(toRad(angle)),
    y: cy - radius * Math.sin(toRad(angle)),
  })

  const start = arcPoint(startAngle)
  const end = arcPoint(0)
  const filled = arcPoint(filledAngle)

  const bgArc = `M ${start.x} ${start.y} A ${radius} ${radius} 0 0 1 ${end.x} ${end.y}`
  const fillArc = `M ${start.x} ${start.y} A ${radius} ${radius} 0 0 1 ${filled.x} ${filled.y}`
  const remainArc = `M ${filled.x} ${filled.y} A ${radius} ${radius} 0 0 1 ${end.x} ${end.y}`

  return (
    <div className="bg-[#e74c3c] rounded-2xl p-5 text-white relative overflow-hidden">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-sm font-semibold">Total income</h3>
        <span className="bg-white/20 text-[11px] rounded-full px-2.5 py-0.5 cursor-pointer">Monthly</span>
      </div>

      <div className="flex items-end justify-between">
        <div className="relative">
          <svg width="180" height="100" viewBox="0 0 180 100">
            <path d={bgArc} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="20" strokeLinecap="round" />
            <path d={fillArc} fill="none" stroke="white" strokeWidth="20" strokeLinecap="round" />
            <path d={remainArc} fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="20" strokeLinecap="round" />
            <circle cx={filled.x} cy={filled.y} r="6" fill="white" />
            <circle cx={filled.x} cy={filled.y} r="3" fill="#e74c3c" />
          </svg>
          <div className="absolute bottom-1 left-4">
            <p className="text-xl font-bold leading-none">{pct}%</p>
            <p className="text-[10px] opacity-80 mt-0.5">Extra Profit</p>
          </div>
        </div>

        <div className="text-right pb-2">
          <div className="flex items-center gap-1 justify-end mb-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
          </div>
          <p className="text-2xl font-bold">$ 25,000</p>
        </div>
      </div>

      <div className="absolute -bottom-12 -right-12 w-36 h-36 rounded-full border-[3px] border-white/10" />
      <div className="absolute -bottom-20 -right-4 w-28 h-28 rounded-full border-[2px] border-white/5" />
    </div>
  )
}
