import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="mt-8 border-t border-slate-800/60">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm text-slate-300">
        <div>
          <div className="h-9 w-9 rounded bg-slate-700 mb-3" />
          <p>© {new Date().getFullYear()} Placeholder Organization</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-200 mb-2">Contact</h4>
          <p>Email: info@example.com</p>
          <p>Address line, City</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-200 mb-2">Links</h4>
          <ul className="space-y-1">
            <li><a className="hover:text-white" href="#programs">Programs</a></li>
            <li><a className="hover:text-white" href="#news">News</a></li>
            <li><a className="hover:text-white" href="#partners">Partners</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
