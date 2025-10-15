import React from 'react'
import FadeIn from './anim/FadeIn'

export default function Partners() {
  return (
    <section id="partners" className="section">
      <div className="container">
        <FadeIn as="h2" y={14} className="text-2xl md:text-3xl font-semibold mb-8">Partners</FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
          {Array.from({ length: 12 }).map((_, i) => (
            <FadeIn key={i} delay={i * 0.05} className="h-12 bg-slate-800/60 rounded-md" />
          ))}
        </div>
      </div>
    </section>
  )
}
