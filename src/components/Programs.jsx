import React from 'react'

const items = [
  { title: 'Program A', desc: 'Brief description for a program card. Replace with real content.' },
  { title: 'Program B', desc: 'Brief description for a program card. Replace with real content.' },
  { title: 'Program C', desc: 'Brief description for a program card. Replace with real content.' },
]

export default function Programs() {
  return (
    <section id="programs" className="section">
      <div className="container">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Programs</h2>
          <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">View all</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <article key={idx} className="card p-6 hover:shadow-2xl hover:-translate-y-0.5 transition">
              <div className="h-36 rounded-xl bg-slate-800/60 mb-4" />
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{it.desc}</p>
              <button className="mt-4 text-blue-400 hover:text-blue-300 text-sm">Learn more →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
