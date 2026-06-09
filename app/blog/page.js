'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import PageHero from '@/components/PageHero';
import Footer from '@/components/sections/Footer';

const BLOG_CATEGORIES = [
  'All',
  'Quantum Computing',
  'AI',
  'Software Engineering',
  'Research Notes',
  'Entrepreneurship',
];

// Empty for now — add entries here as articles are written.
const posts = [];

export default function BlogPage() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchCat = filter === 'All' || p.category === filter;
      const q = query.trim().toLowerCase();
      const matchQuery = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [filter, query]);

  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <PageHero
        eyebrow="Writing"
        title="Notes from the frontier."
        description="A space for research notes, technical writing, and reflections on building at the intersection of quantum, AI, and software."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((c) => (
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
              placeholder="Search articles…"
              className="w-full rounded-full border border-white/10 bg-white/[0.02] py-2 pl-8 pr-3 text-sm text-slate-200 placeholder:text-slate-500 outline-none transition focus:border-indigo-400/40 focus:bg-indigo-500/5"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.06] via-white/[0.02] to-blue-500/[0.04] p-10 md:p-16"
          >
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                <FileText size={20} />
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-white md:text-3xl">The first essay is coming soon.</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                I'm preparing a series of write-ups on quantum machine learning, neural associative memory, and the craft of building research-grade software. Check back soon — or get in touch if you'd like to be notified.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {['Quantum Computing', 'Quantum Machine Learning', 'Neural Networks', 'Research Notes', 'AI Tooling'].map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                { title: 'Hopfield Networks, Revisited', category: 'Research Notes' },
                { title: 'A Soft Introduction to QML', category: 'Quantum Computing' },
                { title: 'Shipping Research-Grade Software', category: 'Software Engineering' },
              ].map((p) => (
                <div key={p.title} className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-5">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-indigo-300">
                    <Sparkles size={12} /> Drafting
                  </div>
                  <div className="mt-3 text-sm font-medium text-white">{p.title}</div>
                  <div className="mt-1 text-xs text-slate-400">{p.category}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article key={p.slug} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-indigo-300">{p.category}</div>
                <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{p.excerpt}</p>
              </article>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
