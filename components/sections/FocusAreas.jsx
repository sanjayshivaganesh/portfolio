'use client';

import { motion } from 'framer-motion';
import { Atom, BrainCircuit, Cpu, FlaskConical } from 'lucide-react';

const focusAreas = [
  {
    icon: Atom,
    title: 'Quantum Computing',
    description: 'Foundations, circuits, and the math of quantum information.',
  },
  {
    icon: BrainCircuit,
    title: 'Artificial Intelligence',
    description: 'Neural networks, language models, and learning systems.',
  },
  {
    icon: Cpu,
    title: 'Machine Learning Systems',
    description: 'Hybrid quantum-classical ML, optimization, and associative memory.',
  },
  {
    icon: FlaskConical,
    title: 'Applied Research & Software Prototypes',
    description: 'Research-grade software bridging theory and real-world use.',
  },
];

export default function FocusAreas() {
  return (
    <section id="focus" className="relative mx-auto max-w-7xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-indigo-300"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_2px_rgba(99,102,241,0.6)]" />
        Focus Areas
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-white md:text-[1.7rem]"
      >
        The four directions everything I build points toward.
      </motion.h2>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition hover:border-white/15"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-indigo-500/10 blur-2xl transition group-hover:bg-indigo-500/20" />
              <div className="relative">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                  <Icon size={16} />
                </span>
                <div className="mt-4 text-sm font-semibold text-white">{f.title}</div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{f.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
