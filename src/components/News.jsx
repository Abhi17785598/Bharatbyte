import React from 'react'

const posts = [
  { title: 'Announcement 1', date: '2025-09-01' },
  { title: 'Announcement 2', date: '2025-08-18' },
  { title: 'Announcement 3', date: '2025-07-30' },
]

export default function News() {
  return (
    <section id="news" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">News & Updates</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, idx) => (
            <article key={idx} className="card p-6">
              <time className="text-xs text-slate-400">{new Date(p.date).toDateString()}</time>
              <h3 className="mt-2 font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-300 mt-2">Short excerpt placeholder. Replace with real content.</p>
              <button className="mt-3 text-blue-400 hover:text-blue-300 text-sm">Read more →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
