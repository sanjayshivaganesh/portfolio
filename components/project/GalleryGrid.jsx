'use client';

import { motion } from 'framer-motion';

// Premium placeholder gallery tiles. Each tile is a unique abstract composition
// built from the project's accent color so the page feels rich even before
// real screenshots are added.
export default function GalleryGrid({ items = [], accent = '#6366f1' }) {
  if (!items?.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <motion.figure
          key={item.title + i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
        >
          <Tile index={i} accent={accent} />
          <figcaption className="flex items-start justify-between gap-3 border-t border-white/5 p-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Frame {String(i + 1).padStart(2, '0')}</div>
              <div className="mt-1 text-sm font-medium text-white">{item.title}</div>
              {item.caption && (
                <div className="mt-0.5 text-xs text-slate-400">{item.caption}</div>
              )}
            </div>
            <span
              className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: accent, boxShadow: `0 0 10px 1px ${accent}80` }}
            />
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}

function Tile({ index, accent }) {
  // Three variants of abstract premium illustrations
  const variant = index % 3;
  const base = (
    <div
      className="absolute inset-0"
      style={{
        background: `radial-gradient(140% 90% at 20% 0%, ${accent}30, transparent 60%), radial-gradient(120% 80% at 100% 100%, ${accent}25, transparent 65%), linear-gradient(180deg, #0b1024, #070b1c)`,
      }}
    />
  );

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden">
      {base}
      {/* grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
          maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)',
        }}
      />

      {/* variant-specific motif */}
      {variant === 0 && (
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 250" fill="none" preserveAspectRatio="none">
          {Array.from({ length: 14 }).map((_, i) => (
            <circle key={i} cx={28 + i * 26} cy={125 + Math.sin(i * 0.7) * 50} r="3" fill={accent} opacity="0.9" />
          ))}
          {Array.from({ length: 13 }).map((_, i) => (
            <line
              key={i}
              x1={28 + i * 26}
              y1={125 + Math.sin(i * 0.7) * 50}
              x2={28 + (i + 1) * 26}
              y2={125 + Math.sin((i + 1) * 0.7) * 50}
              stroke={accent}
              strokeOpacity="0.5"
              strokeWidth="1"
            />
          ))}
        </svg>
      )}
      {variant === 1 && (
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 250" fill="none" preserveAspectRatio="none">
          <defs>
            <radialGradient id={`g-${accent.replace('#', '')}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="200" cy="125" rx="160" ry="60" stroke={accent} strokeOpacity="0.4" />
          <ellipse cx="200" cy="125" rx="110" ry="40" stroke={accent} strokeOpacity="0.55" />
          <ellipse cx="200" cy="125" rx="60" ry="22" stroke={accent} strokeOpacity="0.7" />
          <circle cx="200" cy="125" r="6" fill={accent} />
          <circle cx="200" cy="125" r="40" fill={`url(#g-${accent.replace('#', '')})`} opacity="0.5" />
        </svg>
      )}
      {variant === 2 && (
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 250" fill="none" preserveAspectRatio="none">
          {Array.from({ length: 6 }).map((_, layer) => {
            const nodes = 5 + layer;
            return Array.from({ length: nodes }).map((__, i) => {
              const x = 50 + layer * 60;
              const y = 30 + i * (190 / (nodes - 1));
              return (
                <g key={`${layer}-${i}`}>
                  <circle cx={x} cy={y} r="3" fill={accent} opacity="0.85" />
                  {layer < 5 &&
                    Array.from({ length: nodes + 1 }).map((___, j) => (
                      <line
                        key={j}
                        x1={x}
                        y1={y}
                        x2={x + 60}
                        y2={30 + j * (190 / nodes)}
                        stroke={accent}
                        strokeOpacity="0.18"
                        strokeWidth="0.8"
                      />
                    ))}
                </g>
              );
            });
          })}
        </svg>
      )}

      {/* hover sheen */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/0 transition group-hover:via-white/[0.04]" />
    </div>
  );
}
