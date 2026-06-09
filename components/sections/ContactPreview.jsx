'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Linkedin } from 'lucide-react';
import profile from '@/lib/data/profile';

export default function ContactPreview() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-indigo-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" /> Contact
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Let's build something ambitious.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-400">
            Reach out for research collaborations, product builds, or anything at the intersection of quantum computing, AI, and software.
          </p>
        </div>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row lg:flex-col">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)] transition hover:from-indigo-400 hover:to-blue-400"
          >
            Open Contact Page <ArrowRight size={14} />
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-slate-100 transition hover:border-indigo-400/40 hover:bg-indigo-500/10"
          >
            <Mail size={14} /> Email Directly
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-slate-100 transition hover:border-indigo-400/40 hover:bg-indigo-500/10"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
