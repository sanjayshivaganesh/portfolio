'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import PageHero from '@/components/PageHero';
import Footer from '@/components/sections/Footer';
import ProjectCard from '@/components/ProjectCard';
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
    const active = projects.filter((p) => p.status === 'In Progress').length;
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
        description="Products, research prototypes, and ventures — open a card for the full story."
      >
        <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.k} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{s.k}</div>
              <div className="mt-1 font-display text-2xl font-semibold text-white">{s.v}</div>
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
                className={`rounded-full border px-3 py-1.5 text-xs transition duration-300 ${
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
              placeholder="Search projects…"
              className="w-full rounded-full border border-white/10 bg-white/[0.02] py-2 pl-8 pr-3 text-sm text-slate-200 placeholder:text-slate-500 outline-none transition focus:border-indigo-400/40 focus:bg-indigo-500/5"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div key={p.id} layout>
                <ProjectCard project={p} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-xl border border-white/5 bg-white/[0.02] p-10 text-center text-sm text-slate-400">
            No projects match your search.
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
