'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import PageHero from '@/components/PageHero';
import Footer from '@/components/sections/Footer';
import { projects, categories } from '@/lib/data/projects';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = filter === 'All' || p.category === filter;
      const q = query.trim().toLowerCase();
      const stack = (p.techStack || []).join(' ').toLowerCase();
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        (p.shortDescription || '').toLowerCase().includes(q) ||
        stack.includes(q);
      return matchCat && matchQuery;
    });
  }, [filter, query]);

  const stats = useMemo(() => {
    const techs = new Set();
    projects.forEach((p) => (p.techStack || []).forEach((t) => techs.add(t)));
    const active = projects.filter((p) => /Active|Development|Ongoing/i.test(p.status)).length;
    return [
      { k: 'Projects', v: projects.length },
      { k: 'Active', v: active },
      { k: 'Categories', v: categories.length - 1 },
      { k: 'Technologies', v: techs.size },
    ];
  }, []);

  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <PageHero
        eyebrow="Projects"
        title="Things I've built."
        description="Products, research prototypes, and ventures across quantum computing, AI, accessibility, productivity, and health."
      >
        <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.k} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{s.k}</div>
              <div className="mt-1 text-2xl font-semibold text-white">{s.v}</div>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-3 py-1.5 text-xs transition ${
                  filter === c
                    ? 'border-indigo-400/40 bg-indigo-500/15 text-white'
                    : 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search size={14} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tech, ideas…"
              className="w-full rounded-full border border-white/10 bg-white/[0.02] py-2 pl-8 pr-3 text-sm text-slate-200 placeholder:text-slate-500 outline-none transition focus:border-indigo-400/40 focus:bg-indigo-500/5"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.04 }}
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
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {(p.techStack || []).map((t) => (
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
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-xl border border-white/5 bg-white/[0.02] p-10 text-center text-sm text-slate-400">
            No projects match your search. New work is added regularly.
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

function StatusBadge({ status }) {
  const map = {
    'Active Development': { dot: 'bg-emerald-400', text: 'text-emerald-300', ring: 'ring-emerald-400/30' },
    'Live': { dot: 'bg-blue-400', text: 'text-blue-300', ring: 'ring-blue-400/30' },
    'Research Prototype': { dot: 'bg-violet-400', text: 'text-violet-300', ring: 'ring-violet-400/30' },
    'In Development': { dot: 'bg-amber-400', text: 'text-amber-300', ring: 'ring-amber-400/30' },
    'Ongoing': { dot: 'bg-sky-400', text: 'text-sky-300', ring: 'ring-sky-400/30' },
  };
  const s = map[status] || map['Active Development'];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full bg-white/[0.03] px-2 py-0.5 text-[10px] ring-1 ${s.ring} ${s.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {status}
    </span>
  );
}
