'use client';

import { Sparkles } from 'lucide-react';
import SectionShell from './SectionShell';

// SolutionSection
// props:
//   solution  string
export default function SolutionSection({ solution }) {
  if (!solution) return null;
  return (
    <SectionShell
      icon={<Sparkles size={14} />}
      eyebrow="Solution"
      title="How it solves the problem"
    >
      <p className="text-[15px] leading-relaxed text-slate-300">{solution}</p>
    </SectionShell>
  );
}
