'use client';

import { Mountain } from 'lucide-react';
import SectionShell from './SectionShell';

// ProblemSection
// props:
//   problem  string
//   context? string
export default function ProblemSection({ problem, context }) {
  if (!problem) return null;
  return (
    <SectionShell
      icon={<Mountain size={14} />}
      eyebrow="Problem"
      title="The problem this addresses"
    >
      <p className="text-[15px] leading-relaxed text-slate-300">{problem}</p>
      {context && (
        <p className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-sm leading-relaxed text-slate-400">
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Context</span>
          <span className="mt-1 block">{context}</span>
        </p>
      )}
    </SectionShell>
  );
}
