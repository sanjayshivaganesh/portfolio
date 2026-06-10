'use client';

import { BookOpen } from 'lucide-react';
import SectionShell from './SectionShell';

// LearningsList
// props:
//   learnings  string[]
export default function LearningsList({ learnings = [] }) {
  if (!Array.isArray(learnings) || learnings.length === 0) return null;
  return (
    <SectionShell
      icon={<BookOpen size={14} />}
      eyebrow="Learnings"
      title="What I took away"
    >
      <ul className="space-y-2.5">
        {learnings.map((l, i) => (
          <li key={`${l}-${i}`} className="flex items-start gap-3 text-[15px] text-slate-300">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
            <span>{l}</span>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
