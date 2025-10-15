import React, { useState } from 'react';
import { motion } from 'framer-motion';

import FITT from '../Images/Picture2.png';
import UnnatiMark from '../Images/Picture5-removebg-preview.png';
import AIC from '../Images/Picture1-removebg-preview.png';
import NITI from '../Images/Picture3.png';
import PartnerImage from '../Images/Cadence-Logo.svg.png';
import BharatByteImage from '../Images/IMG_5466-removebg-preview.png';
import PartnerFormModal from './PartnerFormModal';

export default function Hero() {
  const [isPartnerOpen, setPartnerOpen] = useState(false);
  return (
    // STYLE CHANGE:
    // Removed the placeholder "hero-bg" class and added a base color (bg-gray-50)
    // plus a CSS radial-gradient to create the soft blue shape on the left.
    <section className="section section-animated-bg bg-blue-50 relative overflow-hidden min-h-[80svh] md:min-h-[100svh] flex items-center py-0 pt-6 sm:pt-8">
      <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left: Logos stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start gap-5 md:gap-6"
        >
          {/* Top row: AIC | IIT+FITT | NITI/AIM */}
          <div className="flex items-center gap-4 md:gap-4">
            <img src={AIC} alt="AIC" className="h-10 sm:h-12 md:h-20 ml-6 sm:ml-8 md:ml-12 w-auto select-none mix-blend-multiply" />
            <img src={FITT} alt="IIT Delhi & FITT" className="h-10 sm:h-12 md:h-20  w-auto select-none mix-blend-multiply" />
            <img src={NITI} alt="NITI Aayog | AIM" className="h-10 sm:h-12 md:h-20 w-auto select-none mix-blend-multiply" />
          </div>
          {/* Middle: Bharat Byte image logo */}
          <div className="px-0 py-0 text-center select-none mt-4 md:-translate-x-15 ml-10">
            <img src={BharatByteImage} alt="Bharat Byte" className="h-16 sm:h-24 md:h-28 w-auto mx-auto" />
          </div>
          {/* Bottom: Partner image centered under the card with label */}
          <div className="self-center mt-3 text-center md:-translate-x-16 md:mr-12">
            <div className="text-slate-600 text-sm mb-2">Project Partner</div>
            <img src={PartnerImage} alt="Partner" className="h-6 md:h-10 w-auto select-none mx-auto" />
          </div>
        </motion.div>

        {/* Right: Heading and actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-[clamp(2.5rem,6.5vw,5rem)] font-extrabold leading-tight brand-text h-underline">
            Building India’s Semiconductor Future
          </h1>
          <p className="mt-6 text-black font-bold max-w-2xl text-xl md:text-2xl">
            Bharat Byte Semiconductor Accelerator empowers deeptech startups to design, develop, and scale next‑generation semiconductor solutions in chip design, embedded systems, and EDA tools—driving India’s journey towards technological self‑reliance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://fitt.accubate.app/ext/form/12140/1/apply"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#d9574f] hover:bg-[#c24f47] text-white font-semibold shadow-md hover:shadow-lg ring-1 ring-rose-300/40 transition-colors"
            >
              Apply now
            </a>
            <button
              type="button"
              onClick={() => setPartnerOpen(true)}
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#d9574f] hover:bg-[#c24f47] text-white font-semibold shadow-md hover:shadow-lg ring-1 ring-rose-300/40 transition-colors"
            >
              Partner with us
            </button>
          </div>
        </motion.div>
      </div>
      {/* Modal */}
      <PartnerFormModal
        isOpen={isPartnerOpen}
        onClose={() => setPartnerOpen(false)}
        logos={{
          title: 'Bharat Byte <> Partner with Us',
          items: [AIC, FITT, NITI, PartnerImage],
        }}
      />
    </section>
  );
}