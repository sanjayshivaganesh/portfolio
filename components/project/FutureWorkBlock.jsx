'use client';

import { Map } from 'lucide-react';
import SectionShell from './SectionShell';

// FutureWorkBlock
// props:
//   futureWork  string
export default function FutureWorkBlock({ futureWork }) {
  if (!futureWork) return null;
  return (
    <SectionShell
      icon={<Map size={14} />}
      eyebrow="Future Work"
      title="Where this is going"
    >
      <p className="rounded-xl border border-white/5 bg-white/[0.02] p-5 text-[15px] leading-relaxed text-slate-300">
        {futureWork}
      </p>
    </SectionShell>
  );
}
