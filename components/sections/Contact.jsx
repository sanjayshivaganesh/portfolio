'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Download, Send, Check, Loader2 } from 'lucide-react';
import SectionHeader from '../SectionHeader';
import profile from '@/lib/data/profile';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-700/10 blur-[140px]" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something ambitious."
            description="Reach out for research collaborations, product builds, or to discuss anything at the intersection of quantum computing, AI, and software."
          />
          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-indigo-400/30 hover:bg-indigo-500/[0.06]"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                <Mail size={15} />
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Email</div>
                <div className="text-sm text-white">{profile.email}</div>
              </div>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-indigo-400/30 hover:bg-indigo-500/[0.06]"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                <Linkedin size={15} />
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">LinkedIn</div>
                <div className="text-sm text-white">linkedin.com/in/sanjayshivaganesh</div>
              </div>
            </a>
            <a
              href={profile.resumeUrl}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-indigo-400/30 hover:bg-indigo-500/[0.06]"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                <Download size={15} />
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Resume</div>
                <div className="text-sm text-white">Download CV</div>
              </div>
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 lg:col-span-7 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
            <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
          </div>
          <div className="mt-4">
            <label className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Message</label>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project, research, or idea…"
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-indigo-400/40 focus:bg-slate-950/60"
            />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="text-xs text-slate-500">
              {status === 'sent' && (
                <span className="inline-flex items-center gap-1.5 text-emerald-300">
                  <Check size={14} /> Message sent. I'll get back to you soon.
                </span>
              )}
              {status === 'error' && (
                <span className="text-rose-300">Something went wrong. Try emailing directly.</span>
              )}
            </div>
            <button
              disabled={status === 'sending'}
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)] transition hover:from-indigo-400 hover:to-blue-400 disabled:opacity-60"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending
                </>
              ) : (
                <>
                  Send Message <Send size={14} />
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = 'text', required }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.2em] text-slate-400">{label}</label>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-indigo-400/40 focus:bg-slate-950/60"
      />
    </div>
  );
}
