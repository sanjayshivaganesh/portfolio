'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, FlaskConical, Cpu, Globe, Code2 } from 'lucide-react';

const items = [
  { icon: FlaskConical, label: 'Research prototypes' },
  { icon: Cpu, label: 'AI applications' },
  { icon: Globe, label: 'Portfolio & product builds' },
  { icon: Code2, label: 'Technical consulting' },
];

export default function CollaborateWithMe() {
  return (
    <section id="collaborate" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.08] via-white/[0.02] to-blue-500/[0.05] p-8 md:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-indigo-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Collaborate With Me
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl"
            >
              Build something worth building.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300"
            >
              I collaborate with researchers, founders, and student teams on quantum computing, AI systems, and software prototypes.
            </motion.p>
            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)] transition hover:from-indigo-400 hover:to-blue-400"
              >
                Start a Collaboration <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-5">
            {items.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                    <Icon size={14} />
                  </span>
                  <span className="text-sm text-slate-200">{s.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
