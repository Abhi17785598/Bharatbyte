import React from 'react'
import { motion } from 'framer-motion'
import FadeIn from './anim/FadeIn'

// HD-style inline SVG icons (tailwind-scalable via className)
const IconRiscV = ({ className = 'w-7 h-7 text-slate-900', ...props }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="7.5" y="7.5" width="9" height="9" rx="1.2" fill="currentColor" stroke="none"/>
    <rect x="5" y="5" width="14" height="14" rx="2"/>
    {Array.from({length:8}).map((_,i)=>null)}
    <path d="M3 8h2M3 12h2M3 16h2M19 8h2M19 12h2M19 16h2M8 3v2M12 3v2M16 3v2M8 19v2M12 19v2M16 19v2"/>
  </svg>
);
const IconAIChip = ({ className = 'w-7 h-7 text-slate-900', ...props }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true" {...props}>
    <rect x="5" y="5" width="14" height="14" rx="2" fill="currentColor" opacity="0.1"/>
    <rect x="8" y="8" width="8" height="8" rx="1.2" fill="currentColor"/>
    <path d="M9.2 14.5h1l.3-.9h1.9l.3.9h1l-1.8-5h-1l-1.7 5zm1.6-1.7l.6-1.8.6 1.8h-1.2z" fill="currentColor"/>
    <path d="M4 9h2M4 12h2M4 15h2M18 9h2M18 12h2M18 15h2M9 4v2M12 4v2M15 4v2M9 18v2M12 18v2M15 18v2" stroke="currentColor" fill="none"/>
  </svg>
);
const IconLowPower = ({ className = 'w-7 h-7 text-slate-900', ...props }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="3"/>
    <path d="M13 3L7 13h4l-1 8 7-11h-4l1-7z" fill="currentColor" stroke="none"/>
  </svg>
);
const IconAutonomous = ({ className = 'w-7 h-7 text-slate-900', ...props }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true" {...props}>
    <path d="M6 15h12l2 3H4l2-3z"/>
    <path d="M7 15a5 5 0 0 1 10 0" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="8" cy="18.5" r="1.2"/>
    <circle cx="16" cy="18.5" r="1.2"/>
    <path d="M12 6c2.8 0 5 2.2 5 5" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const IconCircular = ({ className = 'w-7 h-7 text-slate-900', ...props }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1l2.1-2.1M17 7l2.1-2.1"/>
    <path d="M7 14l2 2-2 3h8l-2-3 2-2-3-6-3 6z"/>
  </svg>
);
// Simple supply-chain style icon (boxes and graph)
const IconSupplyChain = ({ className = 'w-7 h-7 text-slate-900', ...props }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="3" y="4" width="7" height="6" rx="1"/>
    <rect x="14" y="14" width="7" height="6" rx="1"/>
    <path d="M10 7h4M7 10v4m0 0h4m-4 0l3 3M14 7v4m0 0h3m0 0l-3 3"/>
  </svg>
);

// Rows exactly as per the provided table
const themes = [
  {
    title: 'AI & Edge Computing for Chip Innovation',
    icon: IconAutonomous,
    problem: 'AI and Edge Computing for Chip Innovation (Startups developing specialized SoCs, NPUs, and AI accelerators optimized for low-power edge devices)'
  },
  {
    title: 'AI-Powered Semiconductor Design Tools',
    icon: IconAIChip,
    problem: 'AI-powered Semiconductor Design Tools (Leveraging ML for automating RTL synthesis, timing closure, and reducing chip design cycles by 30%–40%)'
  },
  {
    title: 'AI-Driven Semiconductor Supply Chain & Yield Forecasting',
    icon: IconSupplyChain,
    problem: 'AI-driven Semiconductor Supply Chain Forecasting (Predictive models for risk mitigation, yield management, and demand forecasting using real-time data)'
  },
  {
    title: 'Energy Efficiency & Sustainable Chip Manufacturing',
    icon: IconLowPower,
    problem: 'Energy Efficiency in Chip Manufacturing (Solutions targeting reduced carbon footprint and power optimization across design-to-silicon workflows)'
  },
  {
    title: 'RISC-V Based Designs & Architectures',
    icon: IconRiscV,
    problem: 'RISC-V based designs'
  },
]

export default function ThematicAreas() {
  return (
    <section id="themes" className="section section-animated-bg bg-blue-50 py-14 md:py-20">
      <div className="container">
        <FadeIn as="h2" y={16} className="text-5xl sm:text-6xl md:text-8xl font-extrabold brand-text h-underline mb-12">Thematic areas</FadeIn>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-start justify-items-center gap-2 md:gap-3 overflow-visible"
        >
          {themes.map((t, i) => {
            // Large-screen staggered layout (3 on top, 2 below):
            // indices -> positions: 0@col1, 1@col3, 2@col5, 3@row2 col2, 4@row2 col4
            const lgLayout = [
              'lg:col-start-1 lg:row-start-1',
              'lg:col-start-3 lg:row-start-1',
              'lg:col-start-5 lg:row-start-1',
              'lg:col-start-2 lg:row-start-2',
              'lg:col-start-4 lg:row-start-2',
            ];
            const layoutClass = lgLayout[i] || '';
            return (
              <div key={t.title} className={`group w-full max-w-[620px] lg:max-w-[460px] ${layoutClass}`}>
                <div className="relative p-2 md:p-3 flex flex-col items-center text-center overflow-visible z-10">
                  {t.icon && (
                    <div className="mb-1 sm:mb-2">
                      {React.createElement(t.icon, { className: 'w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 text-[#0c213c] drop-shadow-sm group-hover:scale-105 transition-transform' })}
                    </div>
                  )}
                  <div className="mx-auto max-w-[620px] lg:max-w-[460px] px-4 overflow-visible">
                    <h2 className="font-extrabold text-slate-900 heading-black text-xl sm:text-2xl md:text-3xl lg:text-3xl leading-snug break-words hyphens-none tracking-normal">
                      {t.title}
                    </h2>
                    <p className="mt-2 text-slate-800 text-base sm:text-lg md:text-lg lg:text-base font-medium leading-relaxed text-left mx-auto max-w-[42ch] md:max-w-[48ch] break-words hyphens-none">
                      {t.problem}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}