import { useState, useEffect } from 'react'

export default function ClockWidget() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  // Angles
  const hourAngle = (hours % 12) * 30 + minutes * 0.5
  const minuteAngle = minutes * 6 + seconds * 0.1
  const secondAngle = seconds * 6

  const cx = 80
  const cy = 80
  const r = 68

  return (
    <div className="bg-[#2563eb] rounded-2xl p-5 flex items-center justify-center">
      <svg width="160" height="160" viewBox="0 0 160 160">
        {/* Outer ring */}
        <circle cx={cx} cy={cy} r={r + 6} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

        {/* Hour markers */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180)
          const x1 = cx + (r - 8) * Math.cos(angle)
          const y1 = cy + (r - 8) * Math.sin(angle)
          const tx = cx + (r - 20) * Math.cos(angle)
          const ty = cy + (r - 20) * Math.sin(angle)
          return (
            <g key={i}>
              <circle cx={x1} cy={y1} r="2" fill="rgba(255,255,255,0.6)" />
              <text x={tx} y={ty} textAnchor="middle" dominantBaseline="central" fill="white" fontSize="10" fontWeight="600">
                {i === 0 ? 12 : i}
              </text>
            </g>
          )
        })}

        {/* Hour hand */}
        <line
          x1={cx} y1={cy}
          x2={cx + 32 * Math.cos((hourAngle - 90) * Math.PI / 180)}
          y2={cy + 32 * Math.sin((hourAngle - 90) * Math.PI / 180)}
          stroke="white" strokeWidth="3.5" strokeLinecap="round"
        />

        {/* Minute hand */}
        <line
          x1={cx} y1={cy}
          x2={cx + 46 * Math.cos((minuteAngle - 90) * Math.PI / 180)}
          y2={cy + 46 * Math.sin((minuteAngle - 90) * Math.PI / 180)}
          stroke="white" strokeWidth="2.5" strokeLinecap="round"
        />

        {/* Second hand */}
        <line
          x1={cx} y1={cy}
          x2={cx + 52 * Math.cos((secondAngle - 90) * Math.PI / 180)}
          y2={cy + 52 * Math.sin((secondAngle - 90) * Math.PI / 180)}
          stroke="#e74c3c" strokeWidth="1.5" strokeLinecap="round"
        />

        {/* Center dot */}
        <circle cx={cx} cy={cy} r="4" fill="#e74c3c" />
        <circle cx={cx} cy={cy} r="2" fill="white" />
      </svg>
    </div>
  )
}
