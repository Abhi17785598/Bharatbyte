import React from 'react'
import IIT1 from '../Images/iit1.png'
import IIT2 from '../Images/iit2.png'
import IIT3 from '../Images/iit3.png'
import FadeIn from './anim/FadeIn'

const groups = [
  { title: 'Early Stage startups', img: IIT1, burst: 'burst burst-orange' },
  { title: 'Student teams and developers', img: IIT2, burst: 'burst burst-blue' },
  { title: 'Researchers and Innovators', img: IIT3, burst: 'burst burst-purple' },
]

export default function WhoCanApply() {
  return (
    <section id="apply" className="section section-animated-bg bg-blue-50">
      <div className="container">
        <FadeIn as="h2" y={16} className="text-7xl md:text-8xl font-extrabold brand-text h-underline leading-[1.1] pb-1 overflow-visible mb-10">Who can apply</FadeIn>
        <div className="grid md:grid-cols-3 gap-12">
          {groups.map((g, idx) => (
            <FadeIn key={g.title} className="group flex flex-col items-center text-center" delay={idx * 0.1}>
              <figure className="relative w-full mx-auto max-w-[360px] md:max-w-[400px] aspect-[4/3] rounded-[20px] rounded-tr-[56px] overflow-hidden shadow-lg border border-slate-200 bg-white transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                {/* decorative burst */}
                <div className="absolute -top-6 -left-6" aria-hidden="true">
                  <div className={g.burst} />
                </div>
                {/* image */}
                <img src={g.img} alt={g.title} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110" />
              </figure>
              <div className="mt-4 text-black font-bold md:font-extrabold tracking-tight text-lg sm:text-xl md:text-2xl leading-snug drop-shadow-sm max-w-[24ch]">{g.title}</div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

