import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './anim/FadeIn';

// Leader images
import L1 from '../Images/0001.png';
import L2 from '../Images/PRP-removebg-preview.png';
import L3 from '../Images/dr.nikhil-removebg-preview.png';
// Removed 4th leader image per request

const leaders = [
  {
    name: 'Prof. Rangan Banerjee',
    title1: 'Director IIT Delhi,',
    title2: '& Chairman, GC–FITT',
    img: L1,
    imgClass: 'object-contain p-1 md:p-2 scale-[1.25] object-[50%_60%]',
  },
  {
    name: 'Prof. Preeti Ranjan Panda',
    title1: 'Dean (Corporate Relations),',
    title2: 'IIT Delhi',
    img: L2,
    imgClass: 'object-contain p-1 md:p-2 scale-[1.25] object-[50%_60%]',
  },
  {
    name: 'Dr Nikhil Agarwal',
    title1: 'Managing Director',
    title2: 'FITT IIT Delhi',
    img: L3,
    imgClass: 'object-cover object-center',
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="section section-animated-bg bg-blue-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <FadeIn
          as="h2"
          y={16}
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold brand-text h-underline mb-12"
        >
          Our leadership
        </FadeIn>

        {/* Responsive grid: 1 col mobile, 2 on sm, 3 on lg and xl (4th card removed) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="relative group flex flex-col items-center max-w-xs w-full"
            >
              {/* Container with responsive width/height */}
              <div className="w-[180px] h-[210px] sm:w-[220px] sm:h-[260px] md:w-[240px] md:h-[280px] lg:w-[260px] lg:h-[300px] bg-[#c9c1b8] rounded-3xl overflow-hidden cursor-pointer transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-[0.5deg] shadow-md group-hover:shadow-2xl ring-1 ring-slate-200 hover:ring-2 hover:ring-[var(--accent)]/60">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className={`w-full h-full max-w-full max-h-full block transform transition-transform duration-300 group-hover:scale-110 ${leader.imgClass || 'object-cover object-top'}`}
                />
              </div>

              {/* Leader Info */}
              <div className="mt-2 sm:mt-3 text-center px-2">
                <h3 className="text-slate-900 heading-black font-semibold text-base sm:text-lg md:text-xl">
                  {leader.name}
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-tight">
                  {leader.title1}
                </p>
                <p className="text-slate-700 text-xs sm:text-sm leading-tight">
                  {leader.title2}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
