import React from 'react'
import Pic7 from '../Images/1E5A8939.JPG'
import FadeIn from './anim/FadeIn'

const events = [
  'Launch Event, IIT Delhi',
]

export default function Roadshows() {
  return (
    <section id="roadshows" className="section section-animated-bg bg-blue-50 md:min-h-screen py-10 md:py-16">
      <div className="container">
        <FadeIn as="h2" y={16} className="text-5xl sm:text-6xl md:text-8xl font-extrabold brand-text h-underline mb-8 md:mb-10 text-center md:text-left">Our Roadshows So Far</FadeIn>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left: Image card */}
          <FadeIn className="group w-full" delay={0.05}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 heading-black mb-3 text-center md:text-left">{events[0]}</h3>
            <div className="w-full aspect-[16/9] mt-8 rounded-2xl overflow-hidden bg-white shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
              <img src={Pic7} alt="Launch Event, IIT Delhi" className="w-full h-full object-cover block transform transition-transform duration-300 group-hover:scale-110" />
            </div>
          </FadeIn>

          {/* Right: Description */}
          <FadeIn className="max-w-xl mx-auto md:mx-0 text-center md:text-left" delay={0.12}>
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 heading-black mb-4">Program Announcement at IIT Delhi</h4>
            <p className="text-slate-700 leading-relaxed mb-4 text-base sm:text-lg md:text-xl">
              Highlights from the Bharat Byte program launch with ecosystem partners and innovators. Sessions covered the vision, eligibility, timelines, and support available to startups.
            </p>
            <ul className="text-slate-700 space-y-2 text-base sm:text-lg md:text-xl">
              <li><span className="font-medium text-slate-900">Date:</span> 22 August 2025</li>
              <li><span className="font-medium text-slate-900">Venue:</span> IIT Delhi</li>
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}