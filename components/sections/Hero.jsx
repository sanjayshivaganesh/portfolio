'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import ParticleField from '../ParticleField';
import CodeBlocksField from '../CodeBlocksField';
import profile from '@/lib/data/profile';

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <ParticleField density={0.00008} />
        <div className="hidden md:block">
          <CodeBlocksField />
        </div>
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.10) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 75%)',
          }}
        />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-10 left-10 h-[360px] w-[360px] rounded-full bg-violet-600/10 blur-[120px]" />
        {/* keep hero copy readable over interactive layer */}
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#070b1c] via-[#070b1c]/85 to-transparent md:w-[58%]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-start justify-center px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 backdrop-blur"
        >
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <MapPin size={12} className="text-slate-400" />
          {profile.location}
          <span className="mx-1 text-slate-600">·</span>
          <span>Open to collaborations</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.05, ease }}
          className="max-w-4xl font-display text-[clamp(2.6rem,6.5vw,4.8rem)] font-semibold leading-[1.02] tracking-tight text-white"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.14, ease }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl"
        >
          Exploring the future of intelligence through{' '}
          <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
            quantum computing
          </span>
          , AI, and software systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease }}
          className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base"
        >
          {profile.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)] transition duration-300 hover:from-indigo-400 hover:to-blue-400"
          >
            Explore My Work
            <ArrowRight size={16} className="transition duration-300 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-200 backdrop-blur transition duration-300 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
          >
            Work With Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-2"
        >
          {profile.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-slate-300"
            >
              {t}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 hidden text-[10px] uppercase tracking-[0.22em] text-slate-500 md:block"
        >
          Hover code · click two chips to join
        </motion.p>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-slate-500">
        scroll
      </div>
    </section>
  );
}
