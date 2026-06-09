import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Github,
  Layers,
  Map,
  Mountain,
  Sparkles,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/sections/Footer';
import ProjectHero from '@/components/project/ProjectHero';
import GalleryGrid from '@/components/project/GalleryGrid';
import RelatedProjects from '@/components/project/RelatedProjects';
import SectionBlock from '@/components/project/SectionBlock';
import { projects, getProjectBySlug, getRelatedProjects } from '@/lib/data/projects';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: project.title,
    description: project.tagline || project.description,
    openGraph: {
      title: `${project.title} — Sanjay Shivaganesh`,
      description: project.tagline || project.description,
      type: 'article',
    },
  };
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  const related = getRelatedProjects(project.slug, 3);

  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <ProjectHero project={project} />

      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* sticky meta sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-6">
              <MetaBlock label="Role" value={project.role} />
              <MetaBlock label="Status" value={project.status} accent={project.accent} />
              <MetaBlock label="Year" value={project.year} />
              <MetaBlock label="Category" value={project.category} />

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Technologies</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={project.github}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-slate-200 transition hover:border-white/25 hover:text-white"
                >
                  <Github size={14} /> Source
                </a>
                <a
                  href={project.demo}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_-12px_rgba(99,102,241,0.7)] transition hover:from-indigo-400 hover:to-blue-400"
                >
                  Live <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </aside>

          {/* main content */}
          <article className="space-y-14 lg:col-span-8">
            <SectionBlock
              icon={<Sparkles size={14} />}
              eyebrow="Overview"
              title="What it is"
            >
              <p className="text-[15px] leading-relaxed text-slate-300">{project.overview}</p>
            </SectionBlock>

            <SectionBlock
              icon={<Mountain size={14} />}
              eyebrow="Problem Statement"
              title="The problem this solves"
            >
              <p className="text-[15px] leading-relaxed text-slate-300">{project.problem}</p>
            </SectionBlock>

            <SectionBlock
              icon={<Layers size={14} />}
              eyebrow="Technical Architecture"
              title="How it's built"
            >
              <ul className="space-y-2.5">
                {project.architecture.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-[15px] text-slate-300">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: project.accent }}
                    />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock
              icon={<CheckCircle2 size={14} />}
              eyebrow="Features"
              title="What it does"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3.5"
                  >
                    <CheckCircle2 size={14} className="mt-0.5 text-indigo-300" />
                    <span className="text-sm text-slate-200">{f}</span>
                  </div>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              icon={<Cpu size={14} />}
              eyebrow="Screenshots"
              title="Selected views"
            >
              <GalleryGrid items={project.gallery} accent={project.accent} />
            </SectionBlock>

            <SectionBlock
              icon={<Mountain size={14} />}
              eyebrow="Challenges Encountered"
              title="Hard problems along the way"
            >
              <ul className="space-y-2.5">
                {project.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[15px] text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-300/70" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock
              icon={<Map size={14} />}
              eyebrow="Future Roadmap"
              title="What's next"
            >
              <ol className="relative space-y-5 border-l border-white/10 pl-6">
                {project.roadmap.map((r, i) => (
                  <li key={r} className="relative">
                    <span
                      className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-indigo-400/50 bg-slate-950"
                      style={{ boxShadow: `0 0 0 3px ${project.accent}30` }}
                    >
                      <span
                        className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full"
                        style={{ background: project.accent }}
                      />
                    </span>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Phase {i + 1}</div>
                    <div className="mt-0.5 text-[15px] text-slate-200">{r}</div>
                  </li>
                ))}
              </ol>
            </SectionBlock>
          </article>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <RelatedProjects projects={related} />
          </div>
        )}

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-10 sm:flex-row sm:items-center">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-slate-200 transition hover:border-white/25 hover:text-white"
          >
            <ArrowLeft size={14} /> All projects
          </Link>
          <Link
            href="/#contact"
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

function MetaBlock({ label, value, accent }) {
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
