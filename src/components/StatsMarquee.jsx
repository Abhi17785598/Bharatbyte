import React from 'react'

export default function StatsMarquee() {
  return (
    <div className="border-y border-slate-800/60 py-4 bg-slate-950/40">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-[marquee_25s_linear_infinite] gap-10 px-4 text-slate-300">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Impact metric placeholder #{i + 1}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  )
}
