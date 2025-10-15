import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './anim/FadeIn';

// Team images
import Alok from '../Images/Alok_sir-removebg-preview.png';
import Neelabh from '../Images/Neelabh_Pathak-removebg-preview.png';

const team = [
  {
    name: 'Alok Pandey',
    title1: 'CEO,',
    title2: 'AIC IIT Delhi',
    img: Alok,
    imgClass: 'object-contain p-1 md:p-2 scale-[1.35]',
  },
  {
    name: 'Neelabh Pathak',
    title1: 'Head Of CSR',
    title2: 'FITT IIT Delhi',
    img: Neelabh,
    imgClass: 'object-contain p-1 md:p-2 scale-[1.15] object-[50%_60%]',
  },
];

export default function Team() {
  return (
    <section id="team" className="section section-animated-bg bg-blue-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Heading matching other sections */}
        <FadeIn as="h2" y={16} className="text-5xl sm:text-6xl md:text-8xl font-extrabold brand-text h-underline mb-12">
          Our team
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 justify-items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {team.map((member) => (
            <div key={member.name} className="relative group flex flex-col items-center max-w-xs w-full">
              <div className="w-[200px] h-[230px] sm:w-[240px] sm:h-[280px] md:w-[260px] md:h-[300px] lg:w-[280px] lg:h-[320px] bg-[#c9c1b8] rounded-3xl overflow-hidden cursor-pointer transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-[0.5deg] shadow-md group-hover:shadow-2xl ring-1 ring-slate-200 hover:ring-2 hover:ring-[var(--accent)]/60">
                <img src={member.img} alt={member.name} className={`w-full h-full max-w-full max-h-full block transform transition-transform duration-300 group-hover:scale-110 ${member.imgClass || 'object-cover object-top'}`} />
              </div>
              <div className="mt-2 sm:mt-3 text-center px-2">
                <h3 className="text-slate-900 heading-black font-semibold text-base sm:text-lg md:text-xl">{member.name}</h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-tight">{member.title1}</p>
                <p className="text-slate-700 text-xs sm:text-sm leading-tight">{member.title2}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
