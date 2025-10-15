import React from 'react'
import { motion } from 'framer-motion'
import iit1 from '../Images/iit1.png'
import iit2 from '../Images/iit2.png'
import iit3 from '../Images/iit3.png'
import iit4 from '../Images/iit4.png'
import iit5 from '../Images/iit5.png'
import iit6 from '../Images/iit6.png'
import FadeIn from './anim/FadeIn'

const items = [
  { title: 'Seed Grants & Funding Support', img: iit1 },
  { title: 'EDA Tools & Prototyping Infrastructure', img: iit2 },
  { title: 'Market Access & Industry Partnerships', img: iit3 },
  { title: 'Bootcamps & Specialized Workshops', img: iit4 },
  { title: 'Exclusive Innovators & Semiconductor Community', img: iit5 },
  { title: 'Technical & Business Mentorship', img: iit6 },
];
export default function Offerings() {
  return (
    <section id="offerings" className="section section-animated-bg min-h-[80svh] md:min-h-screen flex items-center bg-blue-50">
      <div className="container">
        <FadeIn as="h2" y={16} className="text-5xl sm:text-6xl md:text-8xl font-extrabold brand-text h-underline leading-[1.1] pb-1 overflow-visible mb-16">Our offerings</FadeIn>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {items.map((it, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center">
              {/* Tile image with rounded corners and green accent bar */}
              <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-lg bg-white mb-5 relative transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 right-0 h-2 brand-bg" />
              </div>
              <div className="text-black font-bold md:font-extrabold leading-snug tracking-tight text-2xl md:text-3xl drop-shadow-sm max-w-[26ch]">{it.title}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
