'use client';

import { Cpu } from 'lucide-react';
import SectionShell from './SectionShell';

// TechStackPills
// props:
//   techStack  string[]
//   placeholder? string  (shown when techStack is empty)
export default function TechStackPills({
  techStack = [],
  placeholder = 'Stack details pending verification.',
}) {
  const hasItems = Array.isArray(techStack) && techStack.length > 0;

  return (
    <SectionShell
      icon={<Cpu size={14} />}
      eyebrow="Technologies Used"
      title="Tech stack"
    >
      {hasItems ? (
        <div className="flex flex-wrap gap-2">
          {techStack.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.01] p-4 text-sm text-slate-500">
          {placeholder}
        </div>
      )}
    </SectionShell>
  );
}
