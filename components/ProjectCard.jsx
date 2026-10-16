'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ImageIcon } from 'lucide-react';

/**
 * Visual-first project card — photo placeholder + minimal copy.
 * Drop a real screenshot into `cover` later without changing layout.
 */
export default function ProjectCard({ project, index = 0, featured = false }) {
  const href = `/projects/${project.slug || project.id}`;
  const blurb = (project.shortDescription || '').split(/[.!?]/)[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition duration-500 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_30px_60px_-40px_rgba(99,102,241,0.45)]"
    >
      <Link href={href} className="relative block overflow-hidden">
        <div
          className={`relative ${featured ? 'aspect-[16/11]' : 'aspect-[16/10]'} w-full`}
          style={{
            background: `linear-gradient(145deg, ${project.accent || '#6366f1'}33 0%, rgba(15,23,42,0.9) 55%, rgba(7,11,28,1) 100%)`,
          }}
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '28px 28px',
            }}
          />
          {/* browser chrome placeholder for future screenshots */}
          <div className="absolute inset-x-4 bottom-0 top-8 overflow-hidden rounded-t-lg border border-white/10 bg-slate-950/50 shadow-2xl backdrop-blur-sm transition duration-500 group-hover:translate-y-[-4px] sm:inset-x-6 sm:top-10">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
              <span className="ml-2 truncate font-mono text-[9px] text-slate-500">
                {project.slug}.app
              </span>
            </div>
            <div className="flex h-[calc(100%-28px)] flex-col items-center justify-center gap-2 p-4 text-center">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400">
                <ImageIcon size={16} strokeWidth={1.6} />
              </span>
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Screenshot soon</p>
            </div>
          </div>
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.color || ''} opacity-0 transition duration-500 group-hover:opacity-100`} />
        </div>
      </Link>

      <div className="relative flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="truncate text-[10px] uppercase tracking-[0.18em] text-slate-500">
            {project.category?.split('/')[0]?.trim()}
          </span>
          <StatusDot status={project.status} />
        </div>

        <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
          <Link href={href} className="transition hover:text-indigo-200">
            {project.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-400">{blurb}.</p>

        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="text-[11px] text-slate-500">{project.year}</span>
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 transition group-hover:text-white"
          >
            View <ArrowUpRight size={12} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function StatusDot({ status }) {
  const color =
    status === 'Completed' ? 'bg-blue-400' : status === 'Not Started' ? 'bg-slate-400' : 'bg-emerald-400';
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-400">
      <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
      {status}
    </span>
  );
}
