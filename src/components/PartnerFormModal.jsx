import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
// Removed unused UnnatiMark image; using unified SVG logo component instead
import BharatByteImage from '../Images/IMG_5466-removebg-preview.png';


export default function PartnerFormModal({ isOpen, onClose, logos = {} }) {
  const formRef = useRef(null);
  const panelRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null); // { ok: boolean, msg: string }

  // Backend API base (localhost:3001 in dev, relative '/api' in prod)
  const API_BASE = useMemo(() => (
    (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
      ? 'http://localhost:3001/api'
      : '/api'
  ), []);

  // Lock body scroll when the modal is open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  // Ensure the modal content starts at the top and close on Escape
  useEffect(() => {
    if (!isOpen) return;
    try { panelRef.current?.scrollTo({ top: 0, behavior: 'instant' }); } catch {}
    const onKey = (e) => { if (e.key === 'Escape') onClose?.(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const { left, center, right, items, title = 'Partner with Us' } = logos;
  // Support both the old API (left/center/right) and a new array-based API (items)
  const allLogos = useMemo(() => {
    const arr = Array.isArray(items) ? items.filter(Boolean) : [];
    if (arr.length) return arr;
    return [left, center, right].filter(Boolean);
  }, [items, left, center, right]);

  if (!isOpen) return null;

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setSending(true);
      setResult(null);
      // Build FormData from the form and POST to backend
      const fd = new FormData(formRef.current);
      // add a helpful subject/context field
      const nameVal = String(fd.get('name') || '').trim();
      fd.set('subject', `Partner enquiry from ${nameVal || 'Anonymous'}`);
      fd.set('_source', 'PartnerFormModal');

      const resp = await fetch(`${API_BASE}/partner`, {
        method: 'POST',
        body: fd,
      });
      const ok = resp.ok;
      setResult({ ok, msg: ok ? 'Thanks! Your enquiry has been sent.' : `Send failed: ${resp.status} ${resp.statusText}` });
      if (ok) formRef.current?.reset();
    } catch (err) {
      setResult({ ok: false, msg: 'Failed to send. Please try again later.' });
      // Helpful console context
      console.error('Getform send error (PartnerFormModal):', err);
    } finally {
      setSending(false);
    }
  };

  const modal = (
    <div className="fixed inset-0 z-[100] bg-black/50 overflow-y-auto overscroll-contain" onClick={handleBackdrop}>
      <div className="min-h-screen w-full flex items-start justify-center py-6 px-3">
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          className="w-full max-w-3xl rounded-2xl bg-[#fde8e7] border border-[#ffd6d1] shadow-2xl overflow-hidden overflow-y-auto max-h-[92vh]"
        >
          {/* Header with logos (branded soft pink background) */}
          <div className="px-5 md:px-8 py-4 border-b border-[#ffd6d1] bg-[#fde8e7]">
            <h3 className="text-center text-lg md:text-xl font-bold text-slate-800 mb-3">{title}</h3>
            <div className="flex flex-col items-center justify-center">
              {/* Bharat Byte image logo */}
              <img src={BharatByteImage} alt="Bharat Byte" className="h-16 sm:h-20 md:h-24 w-auto" />
              {allLogos.length > 0 && (
                <div className="mt-3 flex flex-wrap items-center justify-center gap-3 md:gap-5">
                  {allLogos.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`Logo ${idx + 1}`}
                      className="h-6 md:h-8 w-auto max-w-[80px] md:max-w-[100px] object-contain"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Form (posts to Getform) */}
          <form ref={formRef} onSubmit={onSubmit} className="px-5 md:px-8 py-5 space-y-5">
            {/* Hidden fields for context */}
            <input type="hidden" name="subject" />
            <input type="hidden" name="_source" value="PartnerFormModal" />
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name <span className="text-red-500">*</span></label>
              <input
                name="name"
                required
                type="text"
                placeholder="Enter Your Name"
                pattern="^[A-Za-z][A-Za-z ]*$"
                title="Use alphabets and spaces only"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                maxLength={50}
                onKeyDown={e => {
                  const control = ['Backspace','Delete','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Tab','Home','End'];
                  if (control.includes(e.key)) return;
                  if (!/^[A-Za-z ]$/.test(e.key)) e.preventDefault();
                }}
                onPaste={e => {
                  e.preventDefault();
                  const text = (e.clipboardData || window.clipboardData).getData('text') || '';
                  const sanitized = text.replace(/[^A-Za-z ]/g,' ').replace(/\s{2,}/g,' ').trimStart();
                  const t = e.target; const s=t.selectionStart, ed=t.selectionEnd;
                  t.value = (t.value.slice(0,s) + sanitized + t.value.slice(ed)).trimStart();
                  t.dispatchEvent(new Event('input',{bubbles:true}));
                }}
                onInput={e => {
                  e.target.value = e.target.value.replace(/[^A-Za-z ]/g,'').replace(/\s{2,}/g,' ').trimStart();
                }}
              />
              <p className="text-right text-xs text-slate-400">50 characters remaining</p>
            </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email <span className="text-red-500">*</span></label>
            <input name="email" required type="email" placeholder="Enter Your Email" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Organisation <span className="text-red-500">*</span></label>
            <input
              name="organisation"
              required
              type="text"
              placeholder="Enter Your Organisation"
              pattern="^[A-Za-z][A-Za-z ]*$"
              title="Use alphabets and spaces only"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
              maxLength={250}
              onKeyDown={e => {
                const control = ['Backspace','Delete','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Tab','Home','End'];
                if (control.includes(e.key)) return;
                if (!/^[A-Za-z ]$/.test(e.key)) e.preventDefault();
              }}
              onPaste={e => {
                e.preventDefault();
                const text = (e.clipboardData || window.clipboardData).getData('text') || '';
                const sanitized = text.replace(/[^A-Za-z ]/g,' ').replace(/\s{2,}/g,' ').trimStart();
                const t = e.target; const s=t.selectionStart, ed=t.selectionEnd;
                t.value = (t.value.slice(0,s) + sanitized + t.value.slice(ed)).trimStart();
                t.dispatchEvent(new Event('input',{bubbles:true}));
              }}
              onInput={e => {
                e.target.value = e.target.value.replace(/[^A-Za-z ]/g,'').replace(/\s{2,}/g,' ').trimStart();
              }}
            />
            <p className="text-right text-xs text-slate-400">250 characters remaining</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Enquiry <span className="text-red-500">*</span></label>
            <textarea name="enquiry" required rows={6} placeholder="Type your message" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Attachments (optional)</label>
            <input
              name="attachments"
              type="file"
              multiple
              accept="application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,image/jpeg,image/png"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 bg-white"
            />
            <p className="text-xs text-slate-500 mt-1">Up to 10MB per file. Allowed: PDF, PPT/PPTX, DOC/DOCX, XLS/XLSX, JPG, PNG.</p>
          </div>

          {result && (
            <div className={`${result.ok ? 'text-green-600' : 'text-red-600'} text-sm`}>
              {result.msg}
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <button type="button" onClick={onClose} className="px-5 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100" disabled={sending}>Cancel</button>
            <button type="submit" className="px-6 py-2 rounded-full bg-[#d9574f] hover:bg-[#c24f47] text-white font-semibold shadow-md hover:shadow-lg ring-1 ring-rose-300/40 disabled:opacity-70 disabled:hover:bg-[#d9574f]" disabled={sending}>
              {sending ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
