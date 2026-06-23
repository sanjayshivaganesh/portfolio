'use client';

import { ClipboardCheck, FileText, ListChecks, PackageCheck, Wrench } from 'lucide-react';
import SectionShell from './SectionShell';

export default function StructuredDetails({
  technicalImplementation,
  currentProgress,
  keyFeatures = [],
  outputOrArtifacts = [],
  constraintsOrChallenges = [],
}) {
  const hasFeatures = Array.isArray(keyFeatures) && keyFeatures.length > 0;
  const hasArtifacts = Array.isArray(outputOrArtifacts) && outputOrArtifacts.length > 0;
  const hasConstraints = Array.isArray(constraintsOrChallenges) && constraintsOrChallenges.length > 0;

  return (
    <>
      {technicalImplementation && (
        <SectionShell
          icon={<Wrench size={14} />}
          eyebrow="Technical Implementation"
          title="Implementation details"
        >
          <p className="text-[15px] leading-relaxed text-slate-300">
            {technicalImplementation}
          </p>
        </SectionShell>
      )}

      {currentProgress && (
        <SectionShell
          icon={<ClipboardCheck size={14} />}
          eyebrow="Current Progress"
          title="What is done and what remains"
        >
          <p className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-sm leading-relaxed text-slate-300">
            {currentProgress}
          </p>
        </SectionShell>
      )}

      {(hasFeatures || hasArtifacts) && (
        <section className="grid gap-6 md:grid-cols-2">
          {hasFeatures && (
            <DetailList
              icon={<ListChecks size={14} />}
              eyebrow="Key Features"
              title="Functional scope"
              items={keyFeatures}
            />
          )}
          {hasArtifacts && (
            <DetailList
              icon={<PackageCheck size={14} />}
              eyebrow="Outputs"
              title="Artifacts"
              items={outputOrArtifacts}
            />
          )}
        </section>
      )}

      {hasConstraints && (
        <DetailList
          icon={<FileText size={14} />}
          eyebrow="Constraints"
          title="Constraints and challenges"
          items={constraintsOrChallenges}
        />
      )}
    </>
  );
}

function DetailList({ icon, eyebrow, title, items }) {
  return (
    <SectionShell icon={icon} eyebrow={eyebrow} title={title}>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={`${item}-${i}`} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
