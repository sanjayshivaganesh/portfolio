'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BookOpen, FileText, FlaskConical, Layers, Mail, Sparkles, Atom, BrainCircuit } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import PageHero from '@/components/PageHero';
import Footer from '@/components/sections/Footer';
import { featuredResearch, researchInterests, researchTimeline, futurePapers } from '@/lib/data/research';

const roadmap = [
  { phase: 'Now', title: 'Complete Hopfield comparative analysis', detail: 'Finalize experiments and submit the paper for review.' },
  { phase: 'Next', title: 'Quantum-Assisted Optimization for ML Training', detail: 'Benchmark variational optimizers against classical baselines on small ML tasks.' },
  { phase: 'Later', title: 'Educational Frameworks for QML', detail: 'Curate interactive learning paths that translate QML theory into intuition.' },
  { phase: 'Long-term', title: 'Apply to research-driven CS programs', detail: 'Pursue undergraduate research at top programs aligned with quantum and AI.' },
];

const workStreams = [
  {
    icon: Atom,
    title: 'Quantum Computing Work',
    description: 'Foundational study in quantum information, circuit design, and the mathematics of quantum systems. Building familiarity across Qiskit and PennyLane ecosystems.',
  },
  {
    icon: BrainCircuit,
    title: 'Quantum Machine Learning',
    description: 'Variational quantum classifiers, hybrid quantum-classical optimization, and exploring quantum extensions of associative memory and energy-based models.',
  },
];

export default function ResearchPage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <PageHero
        eyebrow="Research & Frontier Technologies"
        title="A young researcher's laboratory."
        description="Investigating intelligence — classical, quantum, and hybrid. This page documents what I am studying, what I am building, and where I am going."
      />

      <div className="mx-auto max-w-6xl px-6 pb-24">
        {/* Featured paper */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.08] via-white/[0.02] to-blue-500/[0.05] p-8 md:p-10"
        >
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-indigo-300">
            <FlaskConical size={14} /> Featured Paper
          </div>
          <h2 className="mt-4 max-w-4xl text-2xl font-semibold leading-tight text-white md:text-[1.8rem]">
            {featuredResearch.title}
          </h2>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/5 px-3 py-1 text-[11px] text-amber-200">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" /> {featuredResearch.status}
          </div>
          <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-slate-300">{featuredResearch.abstract}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {featuredResearch.keywords.map((k) => (
              <span key={k} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300">
                {k}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Interests + Timeline */}
        <section className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel icon={<Sparkles size={14} />}>Research Interests</SectionLabel>
            <div className="mt-4 flex flex-wrap gap-2">
              {researchInterests.map((r) => (
                <span key={r} className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-slate-200">
                  {r}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionLabel icon={<BookOpen size={14} />}>Research Timeline</SectionLabel>
            <ol className="relative mt-5 border-l border-white/10 pl-6">
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
        </section>

        {/* Work streams */}
        <section className="mt-20">
          <SectionLabel icon={<Layers size={14} />}>Work Streams</SectionLabel>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-[1.7rem]">Where the work happens</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {workStreams.map((w, i) => {
              const Icon = w.icon;
              return (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{w.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Roadmap */}
        <section className="mt-20">
          <SectionLabel icon={<Sparkles size={14} />}>Research Roadmap</SectionLabel>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-[1.7rem]">Where this is going</h2>
          <ol className="relative mt-8 border-l border-white/10 pl-6">
            {roadmap.map((r, i) => (
              <motion.li
                key={r.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative mb-7 last:mb-0"
              >
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-blue-400/50 bg-slate-950 shadow-[0_0_0_3px_rgba(59,130,246,0.18)]">
                  <span className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-blue-400" />
                </span>
                <div className="text-[11px] uppercase tracking-[0.2em] text-blue-300">{r.phase}</div>
                <div className="mt-1 text-base font-medium text-white">{r.title}</div>
                <div className="mt-1 text-sm text-slate-400">{r.detail}</div>
              </motion.li>
            ))}
          </ol>
        </section>

        {/* Publications / Future papers */}
        <section className="mt-20 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel icon={<FileText size={14} />}>Publications</SectionLabel>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-[1.7rem]">In progress</h2>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-amber-200">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" /> Research Paper In Progress
              </div>
              <div className="mt-3 text-sm font-medium text-white">{featuredResearch.title}</div>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Comparative study with implementation, experiments, and theoretical framing.
              </p>
            </div>
            <div className="mt-3 rounded-2xl border border-dashed border-white/10 bg-white/[0.01] p-5 text-xs text-slate-500">
              Additional preprints, notes, and write-ups will appear here as research matures.
            </div>
          </div>

          <div className="lg:col-span-6">
            <SectionLabel icon={<FileText size={14} />}>Future Papers</SectionLabel>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-[1.7rem]">On the horizon</h2>
            <ul className="mt-5 space-y-3">
              {futurePapers.map((p) => (
                <li key={p.title} className="flex items-start justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
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
        </section>

        {/* CTA */}
        <section className="mt-20 flex flex-col items-start justify-between gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.08] via-white/[0.02] to-blue-500/[0.05] p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h3 className="text-xl font-semibold text-white md:text-2xl">Interested in collaborating?</h3>
            <p className="mt-1 text-sm text-slate-400">Research conversations, paper feedback, and joint experiments welcome.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)] transition hover:from-indigo-400 hover:to-blue-400"
          >
            <Mail size={14} /> Get in touch <ArrowRight size={14} />
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}

function SectionLabel({ icon, children }) {
  return (
    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-indigo-300">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-indigo-400/20 bg-indigo-500/10">
        {icon}
      </span>
      {children}
    </div>
  );
}
