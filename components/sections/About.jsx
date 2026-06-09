'use client';

import { motion } from 'framer-motion';
import profile from '@/lib/data/profile';
import SectionHeader from '../SectionHeader';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow="About" title="A student at the intersection of frontier disciplines." />
        </div>
        <div className="space-y-5 text-[15px] leading-relaxed text-slate-300 lg:col-span-7">
          {profile.about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {p}
            </motion.p>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {[
              { k: 'Focus', v: 'Quantum + AI' },
              { k: 'Stage', v: 'IB Diploma' },
              { k: 'Based in', v: 'Chennai, India' },
              { k: 'Building', v: 'Always' },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{s.k}</div>
                <div className="mt-1 text-sm font-medium text-white">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
