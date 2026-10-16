'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../SectionHeader';
import ProjectCard from '../ProjectCard';
import { projects } from '@/lib/data/projects';

const FEATURED_SLUGS = ['zentime', 'zentora', 'qml-vs-hopfield-networks'];

export default function FeaturedProjects() {
  const featured = FEATURED_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean);

  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow="Featured Projects"
        title="Proof — what I'm building right now."
        description="Products and research systems — skim the visuals, open a case study when something catches you."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} featured />
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-100 transition duration-300 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
        >
          View All Projects
          <ArrowRight size={14} className="transition duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
