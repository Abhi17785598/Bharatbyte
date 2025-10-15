import React from 'react';
import FadeIn from './anim/FadeIn';

const items = [
  { side: 'right', color: '#ef4444', day: '16', month: 'October', year: '2025', label: 'Program launch' },
  { side: 'left', color: '#3b82f6', day: '17', month: 'October', year: '2025', label: 'Call for Applications Open' },
  { side: 'right', color: '#f59e0b', day: '31', month: 'December', year: '2025', label: 'Call for Applications Closed' },
  { side: 'left', color: '#22c55e', day: '10', month: 'February', year: '2026', label: '1st Cohort Announcement' },
];

export default function Timeline() {
  return (
    <section id="timeline" className="section section-animated-bg bg-blue-50">
      <div className="container">
        {/* Heading */}
        <FadeIn
          as="h2"
          y={16}
          className="brand-text h-underline text-5xl sm:text-6xl md:text-8xl font-extrabold mb-10"
        >
          Important dates
        </FadeIn>

        {/* Timeline wrapper */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical gradient line (desktop only) */}
          <div
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[6px] md:w-2 rounded-full"
            style={{
              background:
                'linear-gradient(180deg, #ef4444 0%, #3b82f6 35%, #f59e0b 70%, #22c55e 100%)',
            }}
            aria-hidden="true"
          />

          {/* Timeline items */}
          <ul className="relative flex flex-col gap-12 sm:gap-0 sm:h-[760px]">
            {items.map((it, idx) => {
              const positions = [12, 36, 60, 84]; // Only used for desktop positioning
              const topPct = positions[idx];
              const isRight = it.side === 'right';

              return (
                <li
                  key={idx}
                  className={`relative sm:absolute left-1/2 -translate-x-1/2 w-full`}
                  style={{ top: `${topPct}%` }}
                >
                  {/* Marker (centered dot) */}
                  <span
                    className="absolute left-1/2 -translate-x-1/2 block w-4 h-4 md:w-5 md:h-5 rounded-full z-10"
                    style={{ background: it.color }}
                    aria-hidden="true"
                  />

                  {/* Card container */}
                  <div
                    className={`px-4 sm:px-0 ${isRight ? 'sm:pl-[calc(50%+2rem)]' : 'sm:pr-[calc(50%+2rem)]'}`}
                  >
                    <FadeIn
                      className={`relative bg-white border-2 rounded-2xl shadow-sm brand-border px-4 py-3 md:px-5 md:py-4 inline-flex flex-col sm:flex-row items-start sm:items-stretch gap-3 md:gap-4 ${
                        isRight ? 'sm:float-left' : 'sm:float-right'
                      }`}
                      delay={idx * 0.08}
                    >
                      {/* Pointer triangle */}
                      <div
                        className={`hidden sm:block absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 brand-border rotate-45 z-0 ${
                          isRight
                            ? 'left-[-7.5px] border-r-0 border-t-0'
                            : 'right-[-7.5px] border-l-0 border-b-0'
                        }`}
                      />

                      {/* Date box */}
                      <div className="shrink-0 text-center font-semibold leading-tight">
                        {it.day ? (
                          <>
                            <div className="text-xl md:text-2xl font-bold leading-none">{it.day}</div>
                            <div className="text-sm md:text-base text-slate-600 leading-tight">{it.month}</div>
                            <div className="text-sm md:text-base text-slate-600 leading-tight">{it.year}</div>
                          </>
                        ) : (
                          <div className="text-base md:text-lg leading-none">{it.month}</div>
                        )}
                      </div>

                      {/* Label */}
                      <div className="self-center text-slate-900 font-bold leading-snug text-lg sm:text-xl md:text-2xl">
                        {it.label}
                      </div>
                    </FadeIn>
                    <div className="clear-both" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
