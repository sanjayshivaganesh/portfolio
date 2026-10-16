'use client';

import { motion } from 'framer-motion';
import { BookOpen, FileText, FlaskConical } from 'lucide-react';
import SectionHeader from '../SectionHeader';
import { featuredResearch, researchInterests, researchTimeline, futurePapers } from '@/lib/data/research';

export default function Research() {
  return (
    <section id="research" className="relative overflow-hidden py-28">
      {/* subtle academic backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-700/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(148,163,184,0.35) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Research & Frontier Technologies"
          title="Investigating intelligence — classical, quantum, and hybrid."
          description="Combining theoretical investigation with practical implementation of AI systems across artificial intelligence, machine learning, quantum machine learning, optimisation, and human-centred computing."
        />

        {/* Featured paper */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.08] via-white/[0.02] to-blue-500/[0.05] p-8 md:p-10"
        >
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-indigo-300">
            <FlaskConical size={14} /> Featured Research
          </div>
          <h3 className="mt-4 max-w-4xl text-2xl font-semibold leading-tight text-white md:text-3xl">
            {featuredResearch.title}
          </h3>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/5 px-3 py-1 text-[11px] text-amber-200">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" /> {featuredResearch.status}
          </div>
          <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-slate-300">
            {featuredResearch.abstract}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {featuredResearch.keywords.map((k) => (
              <span
                key={k}
                className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300"
              >
                {k}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Interests + timeline */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
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

            <h4 className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Future Papers</h4>
            <ul className="mt-4 space-y-3">
              {futurePapers.map((p) => (
                <li
                  key={p.title}
                  className="flex items-start justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                >
                  <div className="flex items-start gap-3">
                    <FileText size={14} className="mt-0.5 text-indigo-300" />
                    <span className="text-sm text-slate-200">{p.title}</span>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-slate-400">
                    {p.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              <BookOpen size={14} /> Research Timeline
            </h4>
            <ol className="mt-5 relative border-l border-white/10 pl-6">
              {researchTimeline.map((t, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative mb-7 last:mb-0"
                >
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-indigo-400/50 bg-slate-950 shadow-[0_0_0_3px_rgba(99,102,241,0.18)]">
                    <span className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  </span>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-indigo-300">{t.period}</div>
                  <div className="mt-1 text-base font-medium text-white">{t.title}</div>
                  <div className="mt-1 text-sm text-slate-400">{t.description}</div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
