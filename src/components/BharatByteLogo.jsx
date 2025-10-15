import React from 'react';

export default function BharatByteLogo({ className = '', title = 'Bharat Byte' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 700 160"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      focusable="false"
      style={{ display: 'block', overflow: 'visible' }}
    >
      {/* Exact form logo replication */}
      {/* Main title */}
      <text x="350" y="64" textAnchor="middle" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" fontSize="56" fontWeight="800" fill="#d9574f" style={{letterSpacing: '2px'}}>BHARAT BYTE</text>

      {/* Circled TM above the last 'E' slightly up and left (exact) */}
      <circle cx="577" cy="26" r="11" fill="none" stroke="#d9574f" strokeWidth="2" />
      <text x="577" y="30" textAnchor="middle" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" fontSize="10" fontWeight="700" fill="#d9574f">TM</text>

      {/* Underline directly under the full BHARAT BYTE text (thin) */}
      <line x1="140" x2="560" y1="88" y2="88" stroke="#111827" strokeWidth="2" strokeLinecap="round" />

      {/* Tagline */}
      <text x="350" y="130" textAnchor="middle" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" fontSize="26" fontWeight="800" fill="#0c213c">Innovate. Fabricate. Accelerate.</text>
    </svg>
  );
}
