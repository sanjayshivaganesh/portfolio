'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, FlaskConical } from 'lucide-react';
import SectionHeader from '../SectionHeader';
import { featuredResearch, researchInterests, researchTimeline } from '@/lib/data/research';

export default function ResearchPreview() {
  const shortTimeline = researchTimeline.slice(0, 3);

  return (
    <section id="research" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-700/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage: 'radial-gradient(rgba(148,163,184,0.35) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Research & Frontier Technologies"
          title="Quantum, AI, and the systems that learn."
          description="Studying how quantum computing, machine learning, and emerging technologies can be brought together to expand what intelligent systems are capable of."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.08] via-white/[0.02] to-blue-500/[0.05] p-8 md:p-10"
        >
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-indigo-300">
            <FlaskConical size={14} /> Featured Paper
          </div>
          <h3 className="mt-4 max-w-4xl text-2xl font-semibold leading-tight text-white md:text-[1.7rem]">
            {featuredResearch.title}
          </h3>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/5 px-3 py-1 text-[11px] text-amber-200">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" /> {featuredResearch.status}
          </div>
        </motion.div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Research Interests</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {researchInterests.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-slate-200"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              <BookOpen size={14} /> Recent Timeline
            </h4>
            <ol className="mt-5 relative border-l border-white/10 pl-6">
              {shortTimeline.map((t, i) => (
                <li key={i} className="relative mb-5 last:mb-0">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-indigo-400/50 bg-slate-950 shadow-[0_0_0_3px_rgba(99,102,241,0.18)]">
                    <span className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  </span>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-indigo-300">{t.period}</div>
                  <div className="mt-0.5 text-sm font-medium text-white">{t.title}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
          >
            Explore Research <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
