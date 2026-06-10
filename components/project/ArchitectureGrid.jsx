'use client';

import { Layers } from 'lucide-react';
import SectionShell from './SectionShell';

// ArchitectureGrid
// props:
//   architecture: { overview: string, components: [{ name, description }] }
//   accent?      hex color string
export default function ArchitectureGrid({ architecture, accent = '#6366f1' }) {
  if (!architecture) return null;
  const { overview, components = [] } = architecture;

  return (
    <SectionShell
      icon={<Layers size={14} />}
      eyebrow="Architecture"
      title="How it's structured"
    >
      {overview && (
        <p className="text-[15px] leading-relaxed text-slate-300">{overview}</p>
      )}
      {components.length > 0 && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {components.map((c) => (
            <div
              key={c.name}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: accent, boxShadow: `0 0 8px 1px ${accent}80` }}
                />
                <span className="text-sm font-semibold text-white">{c.name}</span>
              </div>
              {c.description && (
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </SectionShell>
  );
}
