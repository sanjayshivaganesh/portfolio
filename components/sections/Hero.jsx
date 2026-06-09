'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import ParticleField from '../ParticleField';
import profile from '@/lib/data/profile';

export default function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      {/* particle canvas */}
      <div className="absolute inset-0 -z-10">
        <ParticleField />
        {/* grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.20]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.10) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 75%)',
          }}
        />
        {/* glow blobs */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-10 left-10 h-[360px] w-[360px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col items-start justify-center px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 backdrop-blur"
        >
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <MapPin size={12} className="text-slate-400" />
          {profile.location}
          <span className="mx-1 text-slate-600">•</span>
          <Sparkles size={12} className="text-indigo-300" />
          <span>Open to research collaborations</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-5xl text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[1.02] tracking-tight text-white"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-3xl text-[clamp(1.05rem,1.6vw,1.4rem)] leading-snug text-slate-300"
        >
          Exploring the future of intelligence through{' '}
          <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
            quantum computing
          </span>
          ,{' '}
          <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
            artificial intelligence
          </span>
          , and software systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400"
        >
          {profile.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)] transition hover:from-indigo-400 hover:to-blue-400"
          >
            Explore My Work
            <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-200 backdrop-blur transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
          >
            Work With Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 flex flex-wrap gap-2"
        >
          {profile.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-slate-300"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-slate-500">
        scroll
      </div>
    </section>
  );
}
