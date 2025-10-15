import React from 'react'
import Img5 from '../Images/Himanshu_Pic.jpg' // Himanshu
import FadeIn from './anim/FadeIn'

const contacts = [
  { 
    name: 'Dr. Himanshu Agrawal', 
    role: 'Manager, AIC IIT Delhi', 
    email: 'himanshuag@aic-iitd.in', 
    phone: '+91-7496959613',
    img: Img5,
    burst: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section section-animated-bg relative overflow-hidden py-20 bg-blue-50 min-h-[80svh] md:min-h-screen flex items-center">

      <div className="container relative z-10 mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-extrabold brand-text h-underline mb-10">
          Contact Us
        </h2>

        {/* Contacts */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
          {contacts.map((person, i) => (
            <FadeIn key={person.name} delay={i * 0.1} className="text-center group">
              {/* Photo card */}
              <div className="relative flex-none w-[320px] h-[400px] mx-auto transition-all duration-300">
                <div className={`relative z-10 w-full h-full shadow-md rounded-3xl overflow-hidden flex items-center justify-center transition-transform duration-300 bg-[#c9c1b8] cursor-pointer group-hover:-translate-y-2 group-hover:rotate-[0.5deg] group-hover:shadow-2xl ring-1 ring-slate-200 hover:ring-2 hover:ring-[var(--accent)]/60`}>
                  <img src={person.img} alt={person.name} className={`block w-full h-full object-cover object-[50%_34%] rounded-3xl transition-transform duration-300 ${i === 1 ? 'scale-[1.18]' : ''} group-hover:scale-[1.03]`} />
                </div>
              </div>

              {/* Name + Role */}
              <div className="mt-4">
                <h3 className="font-bold text-slate-900 heading-black text-lg mb-1.5">{person.name}</h3>
                <p className="text-slate-600 font-medium leading-relaxed whitespace-pre-line text-sm mb-2">{person.role}</p>
              </div>

              {/* Contact links row */}
              <div className="mt-3.5 flex items-center justify-center gap-6 flex-wrap">
                {/* Phone (optional) */}
                {person.phone && (
                  <a 
                    href={`tel:${person.phone.replace(/\D/g, '')}`}
                    className="inline-flex items-center gap-2 text-slate-900 font-semibold text-sm group"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0">
                      <circle cx="12" cy="12" r="11" fill="#111827"/>
                      <path d="M16.5 14.5l-1.6 1.6c-.4.4-1 .5-1.5.3-1.5-.6-3.2-2.2-4.2-3.8-.3-.5-.2-1.1.2-1.5L10 9.5c.3-.3.4-.8.2-1.2l-1-2c-.2-.4-.7-.6-1.1-.5L6.7 6.1c-.7.2-1.2.8-1.3 1.6-.2 2 1 4.6 3.3 7 2.4 2.3 5 3.5 7 3.3.8-.1 1.4-.6 1.6-1.3l.3-1.4c.1-.4-.1-.9-.5-1.1l-2-.1c-.4 0-.8.1-1.1.4z" fill="white"/>
                    </svg>
                    <span>{person.phone}</span>
                  </a>
                )}
                {/* Email */}
                <a 
                  href={`mailto:${person.email}`} 
                  className="inline-flex items-center gap-2 text-slate-900 font-semibold text-sm group"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0">
                    <circle cx="12" cy="12" r="11" fill="#111827"/>
                    <path d="M7 9.5L11.5 12.5L17 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 8C7 7.44772 7.44772 7 8 7H16C16.5523 7 17 7.44772 17 8V16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16V8Z" stroke="white" strokeWidth="1.5"/>
                  </svg>
                  <span>{person.email}</span>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
