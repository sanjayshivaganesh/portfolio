'use client';

import { motion } from 'framer-motion';
import { Award, Crown, Star, Trophy, FlaskConical, Code2 } from 'lucide-react';
import SectionHeader from '../SectionHeader';
import achievements from '@/lib/data/achievements';

const iconMap = {
  crown: Crown,
  star: Star,
  award: Award,
  trophy: Trophy,
  flask: FlaskConical,
  code: Code2,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative mx-auto max-w-7xl px-6 py-28">
      <SectionHeader eyebrow="Achievements" title="Recognition across academics, leadership, and craft." />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = iconMap[a.icon] || Award;
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition hover:border-white/15"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl transition group-hover:bg-indigo-500/20" />
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{a.title}</h3>
                <div className="text-xs text-slate-400">{a.subtitle}</div>
                <p className="mt-3 text-sm text-slate-300">{a.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
