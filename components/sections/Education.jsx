'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeader from '../SectionHeader';
import education from '@/lib/data/education';

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-7xl px-6 py-28">
      <SectionHeader eyebrow="Education" title="International Baccalaureate Diploma Programme." />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mt-10 grid gap-6 lg:grid-cols-12"
      >
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.08] to-blue-500/[0.04] p-8">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
              <GraduationCap size={18} />
            </div>
            <div className="mt-5 text-lg font-semibold text-white">{education.school}</div>
            <div className="mt-1 text-sm text-slate-400">{education.program}</div>
            <div className="mt-6 flex flex-wrap gap-2">
              {education.activities.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-200"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          <Card title="Higher Level" items={education.higherLevel} accent="indigo" />
          <Card title="Standard Level" items={education.standardLevel} accent="blue" />
        </div>
      </motion.div>
    </section>
  );
}

function Card({ title, items, accent }) {
  const ring = accent === 'indigo' ? 'ring-indigo-400/30' : 'ring-blue-400/30';
  const dot = accent === 'indigo' ? 'bg-indigo-400' : 'bg-blue-400';
  return (
    <div className={`rounded-2xl border border-white/5 bg-white/[0.02] p-6 ring-1 ${ring}`}>
      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{title}</div>
      <ul className="mt-4 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-200">
            <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
