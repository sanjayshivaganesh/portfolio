'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function RelatedProjects({ projects = [] }) {
  return (
    <section>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-indigo-300">Related Projects</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-[1.7rem]">
            Continue exploring
          </h2>
        </div>
        <Link
          href="/#work"
          className="hidden text-sm text-slate-400 transition hover:text-white sm:inline-flex sm:items-center sm:gap-1"
        >
          All work <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Link
              href={`/projects/${p.slug}`}
              className="group block h-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition hover:border-white/20"
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-400">
                <span>{p.category}</span>
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: p.accent, boxShadow: `0 0 10px 1px ${p.accent}80` }}
                />
              </div>
              <div className="mt-4 text-lg font-semibold text-white">{p.title}</div>
              <p className="mt-2 line-clamp-3 text-sm text-slate-400">{p.description}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-xs text-slate-300 transition group-hover:text-white">
                Read case study <ArrowUpRight size={12} className="transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
