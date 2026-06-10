'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ParticleField from '@/components/ParticleField';

// HeroHeader
// Props-only renderer. Zero project-specific text.
//
// props:
//   title          string
//   tagline        string
//   outcomeLine    string
//   category       string
//   status         string
//   role?          string
//   year?          string
//   accent?        hex color string (presentation metadata)
//   backHref       string  (e.g. '/projects')
//   backLabel      string  (e.g. 'Back to projects')
export default function HeroHeader({
  title,
  tagline,
  outcomeLine,
  category,
  status,
  role,
  year,
  accent = '#6366f1',
  backHref = '/projects',
  backLabel = 'Back to projects',
}) {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 -z-10">
        <ParticleField density={0.00008} />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.10) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          }}
        />
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 h-[460px] w-[460px] rounded-full blur-[120px]"
          style={{ background: `${accent}22` }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 backdrop-blur transition hover:border-white/25 hover:text-white"
        >
          <ArrowLeft size={12} /> {backLabel}
        </Link>

        {category && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-300"
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: accent, boxShadow: `0 0 10px 2px ${accent}80` }}
            />
            {category}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-5 max-w-4xl text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight text-white"
        >
          {title}
        </motion.h1>

        {tagline && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-3xl text-[clamp(1.05rem,1.4vw,1.25rem)] leading-snug text-slate-300"
          >
            {tagline}
          </motion.p>
        )}

        {outcomeLine && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 inline-flex max-w-3xl items-start gap-2 rounded-lg border border-indigo-400/15 bg-indigo-500/[0.06] px-3 py-2 text-sm text-indigo-100/90"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
            <span>{outcomeLine}</span>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-7 flex flex-wrap items-center gap-2"
        >
          {role && (
            <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-slate-300">
              {role}
            </span>
          )}
          {year && (
            <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-slate-300">
              {year}
            </span>
          )}
          {status && (
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs ring-1"
              style={{ color: accent, borderColor: `${accent}55`, background: `${accent}10` }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
              {status}
            </span>
          )}
        </motion.div>
      </div>
    </section>
  );
}
