'use client';

import ParticleField from '@/components/ParticleField';

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 -z-10">
        <ParticleField density={0.00007} />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.10) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          }}
        />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[460px] w-[460px] rounded-full bg-indigo-600/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-indigo-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_2px_rgba(99,102,241,0.6)]" />
            {eyebrow}
          </div>
        )}
        <h1 className="mt-5 max-w-4xl text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.05] tracking-tight text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-3xl text-[clamp(1rem,1.3vw,1.15rem)] leading-relaxed text-slate-300">
            {description}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
