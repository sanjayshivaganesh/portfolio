'use client';

import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import leadership from '@/lib/data/timeline';

export default function Timeline() {
  return (
    <section id="leadership" className="relative mx-auto max-w-7xl px-6 py-28">
      <SectionHeader
        eyebrow="Leadership & Impact"
        title="Initiative, mentorship, and student leadership."
        description="A record of the responsibilities I've held and the initiatives I've led across school and community."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-12">
          <ol className="relative border-l border-white/10 pl-6">
            {leadership.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="relative mb-8 last:mb-0"
              >
                <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border border-blue-400/60 bg-slate-950 shadow-[0_0_0_3px_rgba(59,130,246,0.18)]">
                  <span className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-blue-400" />
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <div className="text-base font-semibold text-white">{item.title}</div>
                    <div className="text-sm text-slate-400">{item.org}</div>
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{item.period}</div>
                </div>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.impact.map((x) => (
                    <span
                      key={x}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-slate-300"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
