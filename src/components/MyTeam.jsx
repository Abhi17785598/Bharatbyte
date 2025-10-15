import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './anim/FadeIn';

// Team images
import T1 from '../Images/Alok_sir-removebg-preview.png';
import T2 from '../Images/Neelabh_Pathak-removebg-preview.png';

const teamMembers = [
  {
    name: 'Alok Pandey',
    title1: 'Team Member',
    title2: 'Position',
    img: T1,
    imgClass: 'object-contain p-1 md:p-2 scale-[1.35]',
  },
  {
    name: 'Neelabh Pathak',
    title1: 'Team Member',
    title2: 'Position',
    img: T2,
    imgClass: 'object-contain p-1 md:p-2 scale-[1.35]',
  },
];

export default function MyTeam() {
  return (
    <section id="my-team" className="section">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* My Team Heading */}
        <FadeIn
          as="h2"
          y={16}
          className="text-4xl sm:text-5xl md:text-6xl font-bold brand-text h-underline mb-8 sm:mb-10"
        >
          My Team
        </FadeIn>

        {/* Team grid: 1 col mobile, 2 on sm */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 justify-items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative group flex flex-col items-center max-w-xs w-full"
            >
              {/* Container with responsive width/height - reduced spacing */}
              <div className="w-[160px] h-[190px] sm:w-[200px] sm:h-[240px] md:w-[220px] md:h-[260px] lg:w-[240px] lg:h-[280px] bg-[#c9c1b8] rounded-3xl overflow-hidden cursor-pointer transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-[0.5deg] shadow-md group-hover:shadow-2xl ring-1 ring-slate-200 hover:ring-2 hover:ring-[var(--accent)]/60">
                <img
                  src={member.img}
                  alt={member.name}
                  className={`w-full h-full max-w-full max-h-full block transform transition-transform duration-300 group-hover:scale-110 ${member.imgClass || 'object-cover object-top'}`}
                />
              </div>

              {/* Member Info - reduced spacing */}
              <div className="mt-1 sm:mt-2 text-center px-2">
                <h3 className="text-slate-900 font-semibold text-base sm:text-lg md:text-xl">
                  {member.name}
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-tight">
                  {member.title1}
                </p>
                <p className="text-slate-700 text-xs sm:text-sm leading-tight">
                  {member.title2}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}