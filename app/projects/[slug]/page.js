import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/sections/Footer';

import HeroHeader from '@/components/project/HeroHeader';
import ProblemSection from '@/components/project/ProblemSection';
import SolutionSection from '@/components/project/SolutionSection';
import ArchitectureGrid from '@/components/project/ArchitectureGrid';
import TechStackPills from '@/components/project/TechStackPills';
import ChallengesList from '@/components/project/ChallengesList';
import LearningsList from '@/components/project/LearningsList';
import FutureWorkBlock from '@/components/project/FutureWorkBlock';
import LinksFooter from '@/components/project/LinksFooter';
import RelatedProjects from '@/components/project/RelatedProjects';

import { projects, getProjectBySlug, getRelatedProjects } from '@/lib/data/projects';

// ----------------------------------------------------------------------------
// /projects/[slug]
// Pure renderer. No project-specific text lives in this file — every string
// shown to the user comes from the project data object.
// ----------------------------------------------------------------------------

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug || p.id }));
}

export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: project.title,
    description: project.hero?.tagline || project.shortDescription,
    openGraph: {
      title: `${project.title} — Sanjay Shivaganesh`,
      description: project.hero?.tagline || project.shortDescription,
      type: 'article',
    },
  };
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.slug || project.id, 3);
  const accent = project.accent || '#6366f1';

  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />

      <HeroHeader
        title={project.title}
        tagline={project.hero?.tagline}
        outcomeLine={project.hero?.outcomeLine}
        category={project.category}
        status={project.status}
        role={project.role}
        year={project.year}
        accent={accent}
        backHref="/projects"
        backLabel="Back to projects"
      />

      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* sidebar */}
          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <MetaCard label="Status" value={project.status} accent={accent} />
              <MetaCard label="Category" value={project.category} />
              {project.role && <MetaCard label="Role" value={project.role} />}
              {project.year && <MetaCard label="Year" value={project.year} />}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Links</div>
                <div className="mt-3">
                  <LinksFooter links={project.links || {}} />
                </div>
              </div>
            </div>
          </aside>

          {/* main */}
          <article className="space-y-14 lg:col-span-8">
            <ProblemSection problem={project.problem} context={project.context} />
            <SolutionSection solution={project.solution} />
            <ArchitectureGrid architecture={project.architecture} accent={accent} />
            <TechStackPills techStack={project.techStack} />
            <ChallengesList challenges={project.challenges} />
            <LearningsList learnings={project.learnings} />
            <FutureWorkBlock futureWork={project.futureWork} />
          </article>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <RelatedProjects projects={related} />
          </div>
        )}

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-10 sm:flex-row sm:items-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-slate-200 transition hover:border-white/25 hover:text-white"
          >
            <ArrowLeft size={14} /> All projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_-12px_rgba(99,102,241,0.7)] transition hover:from-indigo-400 hover:to-blue-400"
          >
            Discuss a similar project <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function MetaCard({ label, value, accent }) {
  if (!value) return null;
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{label}</div>
      <div className="mt-1 flex items-center gap-2 text-sm font-medium text-white">
        {accent && (
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: accent, boxShadow: `0 0 10px 1px ${accent}99` }}
          />
        )}
        {value}
      </div>
    </div>
  );
}
