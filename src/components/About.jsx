import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './anim/FadeIn';
import BharatBytePhoto from '../Images/picture4.png'; // Make sure this path is correct
import BharatByteImage from '../Images/IMG_5466-removebg-preview.png';

export default function About() {
  return (
    <section id="about" className="section section-animated-bg bg-blue-50">
      <div className="container">
        {/*
          HEADING SIZE REDUCED:
          - Font size is now smaller: text-5xl up to lg:text-7xl.
          - Logo height is also reduced to match the new font size.
        */}
        <FadeIn as="h2" y={16} className="w-full flex flex-col sm:flex-row flex-wrap items-center gap-2 sm:gap-4 md:gap-6 text-green-600 font-extrabold text-5xl sm:text-6xl md:text-8xl mb-6 sm:mb-10">
          <span className="whitespace-normal sm:whitespace-nowrap">About</span>
          <img src={BharatByteImage} alt="Bharat Byte" className="h-16 sm:h-20 lg:h-24 w-auto shrink-0" />
          <span className="whitespace-normal sm:whitespace-nowrap">Accelerator</span>
        </FadeIn>

        {/* Main content grid - this structure remains the same */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 md:gap-14 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Column: Text Content */}
          <div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-slate-900 heading-black">
              Empowering India’s Next-Gen Innovators from the Grassroots
            </h3>
            <div className="space-y-4 text-slate-700 mt-6 text-lg md:text-xl leading-relaxed">
              <p>
              The Bharat Byte Semiconductor Accelerator is a CSR initiave by Cadence in collaboration with FITT IIT Delhi and AIC IIT Delhi to nurture India’s next generation of semiconductor innovators.
              </p>
              <p>
                With a strong focus on chip design, RISC-V, AI/ML hardware, and sustainable electronics, the program provides startups with funding support, technical mentorship, investor access, and incubation support to bring breakthrough solutions to market.
              </p>
              <p>
                Aligned with the national semiconductor mission, Bharat Byte equips startups with the resources they need—advanced tools, prototyping facilities, and industry guidance—to build globally competitive products. Our vision is to transform India from a consumer of semiconductor technologies into a creator of world-class semiconductor innovation.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="group rounded-2xl my-10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 bg-white w-full h-80 sm:h-96 md:h-[28rem]">
            <img src={BharatBytePhoto} alt="Bharat Byte program illustration" className="w-full h-full object-cover block select-none transform transition-transform duration-300 group-hover:scale-[1.04]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}