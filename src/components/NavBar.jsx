import React from 'react'

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded brand-bg-90" />
          <div className="h-6 w-32 rounded bg-slate-300" />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#about" className="hover-brand-text">About</a>
          <a href="#offerings" className="hover-brand-text">Offerings</a>
          <a href="#themes" className="hover-brand-text">Thematic areas</a>
          <a href="#apply" className="hover-brand-text">Who can apply</a>
          <a href="#timeline" className="hover-brand-text">Important dates</a>
          <a href="#partner" className="hover-brand-text">Partner with us</a>
          <a href="#leadership" className="hover-brand-text">Leadership</a>
          <a href="#roadshows" className="hover-brand-text">Roadshows</a>
          <a href="#contact" className="hover-brand-text">Contact</a>
        </nav>
        <a href="https://fitt.accubate.app/ext/form/12140/1/apply" className="px-4 py-2 rounded-full brand-bg text-white text-sm font-medium hover-brand-bg transition">Apply now</a>
      </div>
    </header>
  )
}

