import React, { useState } from 'react'
import FITT from '../Images/Picture2.png'
import AIC from '../Images/Picture1-removebg-preview.png'
import NITI from '../Images/Picture3.png'
import PartnerImage from '../Images/Cadence-Logo.svg.png';
import FadeIn from './anim/FadeIn'
import PartnerFormModal from './PartnerFormModal'
import BharatByteImage from '../Images/IMG_5466-removebg-preview.png'

export default function CTA() {
  const [isPartnerOpen, setPartnerOpen] = useState(false)
  return (
    <section id="cta" className="section section-animated-bg min-h-screen flex items-center bg-blue-50">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="max-w-xl">
          <FadeIn as="h2" y={14} className="text-6xl md:text-8xl font-extrabold brand-text leading-tight">Ready to transform your idea into impact?</FadeIn>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://fitt.accubate.app/ext/form/12140/1/apply"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#d9574f] hover:bg-[#c24f47] text-white font-semibold shadow-md hover:shadow-lg ring-1 ring-rose-300/40 transition-colors"
            >
              Apply now
            </a>
            <button
              type="button"
              onClick={() => setPartnerOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={isPartnerOpen}
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#d9574f] hover:bg-[#c24f47] text-white font-semibold shadow-md hover:shadow-lg ring-1 ring-rose-300/40 transition-colors"
            >
              Partner with us
            </button>
          </div>
        </div>
        {/* Right: Logos stack (structured like Hero) */}
        <FadeIn className="flex flex-col items-center md:items-start md:translate-x-12 xl:translate-x-16 justify-self-auto md:justify-self-end self-start space-y-5 md:space-y-8 mt-4 md:mt-8" delay={0.08}>
          {/* Top row: AIC | IIT+FITT | NITI/AIM */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 md:gap-7">
            <img src={AIC} alt="AIC" className="h-12 sm:h-16 md:h-24 w-auto select-none" />
            <img src={FITT} alt="IIT Delhi & FITT" className="h-12 sm:h-16 md:h-24 w-auto select-none" />
            <img src={NITI} alt="NITI Aayog | AIM" className="h-12 sm:h-16 md:h-24 w-auto select-none" />
          </div>
          {/* Middle: Bharat Byte image logo */}
          <div className="px-0 py-0 text-center md:text-left select-none">
            <img src={BharatByteImage} alt="Bharat Byte" className="h-16 sm:h-24 md:h-28 w-auto mx-auto md:mx-0" />
          </div>
          {/* Bottom: Supported by (center on mobile; slight nudge on md+) */}
          <div className="self-center text-center md:text-left pt-2 md:-ml-16 lg:-ml-20">
            <div className="text-slate-600 text-sm mb-2">Project Partner</div>
            <img src={PartnerImage} alt="Partner" className="h-6 md:h-10 w-auto select-none mx-auto md:mx-0" />
          </div>
        </FadeIn>
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
  )
}
