'use client';

import { Mountain } from 'lucide-react';
import SectionShell from './SectionShell';

// ChallengesList
// props:
//   challenges  [{ title, explanation }]
export default function ChallengesList({ challenges = [] }) {
  if (!Array.isArray(challenges) || challenges.length === 0) return null;
  return (
    <SectionShell
      icon={<Mountain size={14} />}
      eyebrow="Challenges"
      title="Hard problems along the way"
    >
      <ul className="space-y-3">
        {challenges.map((c, i) => (
          <li
            key={`${c.title}-${i}`}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
          >
            <div className="flex items-start gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-300/80" />
              <div>
                <div className="text-sm font-semibold text-white">{c.title}</div>
                {c.explanation && (
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                    {c.explanation}
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
