import { useState } from 'react'

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay()
}

export default function CalendarWidget() {
  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth())

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)
  const today = now.getDate()
  const isCurrentMonth = year === now.getFullYear() && month === now.getMonth()

  // Events on specific days
  const eventDays = [7, 16, 17, 20]

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(year - 1) }
    else setMonth(month - 1)
  }
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(year + 1) }
    else setMonth(month + 1)
  }

  // Build calendar grid
  const prevMonthDays = getDaysInMonth(year, month - 1)
  const cells = []
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: prevMonthDays - i, current: false })
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, current: true })
  }
  const remaining = 42 - cells.length
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, current: false })
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-gray-900">Calendar</h3>
        <div className="flex items-center gap-2">
          <button onClick={prevMonth} className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <span className="text-xs font-semibold text-[#e74c3c]">{MONTHS[month]} {year}</span>
          <button onClick={nextMonth} className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {DAYS.map((d, i) => (
          <div key={i} className="text-center text-[11px] font-semibold text-gray-400 py-1">{d}</div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((cell, i) => {
          const isToday = isCurrentMonth && cell.current && cell.day === today
          const hasEvent = cell.current && eventDays.includes(cell.day)
          const isBold = cell.current && (cell.day === 7 || cell.day === 16 || cell.day === 17)

          return (
            <button
              key={i}
              className={`relative w-8 h-8 flex items-center justify-center rounded-full text-xs transition-all ${
                !cell.current
                  ? 'text-gray-300'
                  : isToday
                  ? 'bg-[#34d399] text-white font-bold'
                  : hasEvent
                  ? 'bg-[#ddd6fe] text-gray-800 font-bold'
                  : isBold
                  ? 'text-gray-900 font-bold hover:bg-gray-100'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cell.day}
            </button>
          )
        })}
      </div>
    </div>
  )
}
