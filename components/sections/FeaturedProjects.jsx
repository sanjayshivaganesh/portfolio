'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import SectionHeader from '../SectionHeader';
import { projects } from '@/lib/data/projects';

const FEATURED_SLUGS = ['zentime', 'zentora', 'qml-vs-hopfield-networks'];

export default function FeaturedProjects() {
  const featured = FEATURED_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean);

  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow="Featured Projects"
        title="Proof — what I'm building right now."
        description="Three projects that best demonstrate how I move from research questions and real problems to working software."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 transition hover:border-white/15"
          >
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 transition group-hover:opacity-100`} />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{p.category}</span>
                <StatusBadge status={p.status} />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.accent, boxShadow: `0 0 14px 2px ${p.accent}55` }} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.shortDescription}</p>
              {p.hero?.outcomeLine && (
                <div className="mt-4 flex items-start gap-2 rounded-lg border border-indigo-400/15 bg-indigo-500/[0.06] p-2.5">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
                  <span className="text-[11px] leading-relaxed text-indigo-100/90">
                    {p.hero.outcomeLine}
                  </span>
                </div>
              )}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {(p.techStack || []).slice(0, 4).map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">{p.role}</span>
                <div className="flex items-center gap-2">
                  {p.links?.github && (
                    <a
                      href={p.links.github}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-slate-300 transition hover:border-white/30 hover:text-white"
                      aria-label="GitHub"
                    >
                      <Github size={13} />
                    </a>
                  )}
                  <Link
                    href={`/projects/${p.slug || p.id}`}
                    className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-200 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
                  >
                    Case study <ArrowUpRight size={11} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
        >
          View All Projects <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}

function StatusBadge({ status }) {
  const map = {
    Completed: { dot: 'bg-blue-400', text: 'text-blue-300', ring: 'ring-blue-400/30' },
    'In Progress': { dot: 'bg-emerald-400', text: 'text-emerald-300', ring: 'ring-emerald-400/30' },
    'Not Started': { dot: 'bg-slate-400', text: 'text-slate-300', ring: 'ring-slate-400/30' },
  };
  const s = map[status] || map['In Progress'];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full bg-white/[0.03] px-2 py-0.5 text-[10px] ring-1 ${s.ring} ${s.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {status}
    </span>
  );
}
