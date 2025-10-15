import React from 'react';
import PartnersImage from '../Images/partners.jpg';
import FadeIn from './anim/FadeIn';

export default function PartnerWithUs() {
  return (
    <section id="partner" className="section section-animated-bg bg-blue-50 pt-10 md:pt-12 pb-16 md:pb-20">
      {/*
        STRUCTURE CHANGE:
        - The grid now uses a larger gap and `items-center` for better alignment.
        - The image container on the right has been simplified and repositioned.
        - Text styles have been updated for a cleaner, more professional appearance.
      */}
      <div className="container grid md:grid-cols-2 gap-12 md:gap-20 lg:gap-24 items-start">
        {/* Left Column: Text Content */}
        <div className="relative z-10 max-w-2xl md:pr-4 lg:pr-8">
          <FadeIn as="h2" y={16} className="text-5xl sm:text-6xl md:text-8xl my-5 font-extrabold brand-text h-underline mb-6 whitespace-normal break-words overflow-visible pr-4 md:pr-8 lg:pr-16">Partner with us</FadeIn>

          <FadeIn as="h3" delay={0.05} className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800 heading-black mb-4">
            Accelerating India’s Journey from Silicon Dreams to Global Leadership
          </FadeIn>

          {/* Text is no longer italicized */}
          <FadeIn as="p" delay={0.1} className="text-slate-700 text-lg md:text-xl leading-relaxed">
            Bharat Byte is more than an accelerator—it’s a platform to empower startups and innovators solving India’s most critical semiconductor challenges. By joining forces with corporates, investors, policymakers, and academia, we aim to accelerate chip design innovation, strengthen supply chains, and develop sustainable technologies.
          </FadeIn>

          <FadeIn as="p" delay={0.18} className="text-slate-700 text-lg md:text-xl leading-relaxed mt-4">
            Together, we can unlock India’s potential to not just consume semiconductors but to create world-class technologies that shape the future of the global electronics industry.
          </FadeIn>
        </div>

        {/* Right Column: Image */}
        {/* The image is now positioned naturally within its grid column, pulling it left */}
        <FadeIn className="group relative z-0 w-full max-w-xl sm:max-w-2xl md:max-w-3xl rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 justify-self-end mt-6 md:mt-10" delay={0.12}>
          <div className="w-full h-72 sm:h-80 md:h-96 overflow-hidden rounded-2xl">
            <img src={PartnersImage} alt="Two professionals shaking hands over a contract" className="w-full h-full object-cover block rounded-2xl transform transition-transform duration-300 group-hover:scale-110" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}