'use client';

import { motion } from 'framer-motion';
import { Award, Crown, Star, Trophy, FlaskConical, Code2 } from 'lucide-react';
import SectionHeader from '../SectionHeader';

const iconMap = { crown: Crown, star: Star, award: Award, trophy: Trophy, flask: FlaskConical, code: Code2 };

const timeline = [
  { title: 'Deputy Head Boy', org: 'CPS Global School', period: '2024 – 2025', description: 'Elected to represent the senior student body, leading school-wide initiatives across academics, wellbeing, and student voice.' },
  { title: 'Mental Health Week Initiatives', org: 'Student Leadership', period: '2024', description: 'Designed and launched digital experiences for school-wide Mental Health Week.' },
  { title: 'Peer Tutoring Programs', org: 'Academic Mentorship', period: '2023 – Present', description: 'Mentor peers in Computer Science, Physics, and Mathematics — translating advanced concepts into clear learning paths.' },
];

const highlights = [
  { title: 'School Topper', subtitle: 'Grades 8 – 10', icon: 'crown' },
  { title: 'IAYP Silver Award', subtitle: 'International Award for Young People', icon: 'award' },
  { title: 'Hackathon Finalist', subtitle: 'Competitive Engineering', icon: 'trophy' },
];

export default function LeadershipImpact() {
  return (
    <section id="leadership" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow="Impact & Leadership"
        title="Recognition, initiative, and mentorship."
        description="Proof points from school leadership, academics, and community work."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ol className="relative border-l border-white/10 pl-6">
            {timeline.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="relative mb-7 last:mb-0"
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
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">{item.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="grid content-start gap-3 lg:col-span-5">
          {highlights.map((a, i) => {
            const Icon = iconMap[a.icon] || Award;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition hover:border-white/15"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                  <Icon size={18} />
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">{a.title}</div>
                  <div className="text-xs text-slate-400">{a.subtitle}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
