const forecast = [
  { day: 'MON', icon: 'sun', high: 25, low: 16 },
  { day: 'TUE', icon: 'cloud-sun', high: 15, low: 8 },
  { day: 'WED', icon: 'sun', high: 20, low: 14 },
  { day: 'THU', icon: 'cloud', high: 23, low: 18 },
  { day: 'FRI', icon: 'sun', high: 30, low: 22 },
]

function WeatherIcon({ type, size = 16 }) {
  if (type === 'sun') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
        <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    )
  }
  if (type === 'cloud-sun') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
        <path d="M17 18a5 5 0 00-5-5 5 5 0 00-5 5"/><path d="M12 9V2"/><path d="M4.22 10.22l1.42 1.42"/><path d="M18.36 10.22l-1.42 1.42"/><path d="M20 18H4a2 2 0 010-4h.09A5 5 0 0114 8.17 5 5 0 0119.91 14H20a2 2 0 010 4z"/>
      </svg>
    )
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
    </svg>
  )
}

export default function WeatherWidget() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5">
      {/* Current */}
      <div className="flex items-center gap-1 mb-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/></svg>
        <span className="text-xs text-gray-500">Clear day</span>
      </div>
      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-4xl font-bold text-gray-900">20</span>
        <span className="text-xl text-gray-400">°</span>
      </div>
      <p className="text-xs text-gray-400 mb-4">Brest</p>

      {/* Forecast */}
      <div className="space-y-2">
        {forecast.map((f, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-[11px] font-semibold text-gray-400 w-8">{f.day}</span>
            <WeatherIcon type={f.icon} size={14} />
            <div className="flex-1 flex items-center gap-1.5 ml-1">
              <span className="text-xs font-semibold text-gray-700">+{f.high}</span>
              <span className="text-xs text-gray-400">+{f.low}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
