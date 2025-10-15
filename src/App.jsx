import React from 'react'
 
import Hero from './components/Hero'
import About from './components/About'
import Offerings from './components/Offerings'
import ThematicAreas from './components/ThematicAreas'
import WhoCanApply from './components/WhoCanApply'
import Timeline from './components/Timeline'
import PartnerWithUs from './components/PartnerWithUs'
import Leadership from './components/Leadership'
import Team from './components/Team'
import Roadshows from './components/Roadshows'
import CTA from './components/CTA'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)]">
      <main className="flex-1">
        <Hero />
        <About />
        <Offerings />
        <ThematicAreas />
        <WhoCanApply />
        <Timeline />
        <PartnerWithUs />
        <Leadership />
        <Team />
        <Roadshows />
        <CTA />
        <Contact />
      </main>
    </div>
  )
}

