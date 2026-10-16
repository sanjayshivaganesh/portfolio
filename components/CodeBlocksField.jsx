'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SNIPPETS = [
  { id: 'a', lang: 'py', lines: ['def train(circuit, data):', '  return optimize(θ)'] },
  { id: 'b', lang: 'js', lines: ['const plan = schedule(tasks)', 'await focus(plan.next)'] },
  { id: 'c', lang: 'py', lines: ['qml.compare(hopfield)', '# associative memory'] },
  { id: 'd', lang: 'ts', lines: ['type Block = { id: string }', 'join(a, b) → edge'] },
  { id: 'e', lang: 'py', lines: ['for shot in shots:', '  measure(q)'] },
  { id: 'f', lang: 'js', lines: ['export const ZenTime', '// execute, don’t decide'] },
  { id: 'g', lang: 'py', lines: ['backend = AerSimulator()', 'job = backend.run(qc)'] },
  { id: 'h', lang: 'ts', lines: ['if (near(a, b))', '  connect(a, b)'] },
];

/**
 * Floating interactive code chips over the hero.
 * Hover expands · click selects · click a second chip to “join” them with a pulse.
 */
export default function CodeBlocksField({ className = '' }) {
  const wrapRef = useRef(null);
  const [size, setSize] = useState({ w: 1200, h: 800 });
  const [selected, setSelected] = useState(null);
  const [joined, setJoined] = useState(null); // { a, b }
  const [hovered, setHovered] = useState(null);
  const [positions, setPositions] = useState([]);

  const blocks = useMemo(() => {
    // Stable-ish layout anchors (percent of viewport) — drift is animated separately
    const anchors = [
      { x: 8, y: 18 },
      { x: 72, y: 14 },
      { x: 82, y: 42 },
      { x: 6, y: 58 },
      { x: 68, y: 68 },
      { x: 38, y: 78 },
      { x: 88, y: 78 },
      { x: 18, y: 38 },
    ];
    return SNIPPETS.map((s, i) => ({
      ...s,
      ax: anchors[i].x,
      ay: anchors[i].y,
      drift: 10 + (i % 4) * 4,
      duration: 14 + i * 1.4,
      delay: i * 0.35,
    }));
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ w: width, h: height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Track live centers for join lines (approximate from anchors + size)
  useEffect(() => {
    setPositions(
      blocks.map((b) => ({
        id: b.id,
        x: (b.ax / 100) * size.w + 90,
        y: (b.ay / 100) * size.h + 28,
      }))
    );
  }, [blocks, size]);

  const blockRefs = useRef({});

  const onSelect = useCallback(
    (id) => {
      if (selected === id) {
        setSelected(null);
        return;
      }
      if (selected && selected !== id) {
        const elA = blockRefs.current[selected];
        const elB = blockRefs.current[id];
        const wrap = wrapRef.current?.getBoundingClientRect();
        if (elA && elB && wrap) {
          const ra = elA.getBoundingClientRect();
          const rb = elB.getBoundingClientRect();
          setJoined({
            a: selected,
            b: id,
            x1: ra.left + ra.width / 2 - wrap.left,
            y1: ra.top + ra.height / 2 - wrap.top,
            x2: rb.left + rb.width / 2 - wrap.left,
            y2: rb.top + rb.height / 2 - wrap.top,
          });
        } else {
          setJoined({ a: selected, b: id });
        }
        setSelected(null);
        window.setTimeout(() => setJoined(null), 1600);
        return;
      }
      setSelected(id);
    },
    [selected]
  );

  const line = joined?.x1 != null
    ? { x1: joined.x1, y1: joined.y1, x2: joined.x2, y2: joined.y2 }
    : null;

  // Soft proximity hints between nearby chips
  const nearLines = useMemo(() => {
    const lines = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const a = positions[i];
        const b = positions[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.hypot(dx, dy);
        if (d < 220) {
          lines.push({ a: a.id, b: b.id, x1: a.x, y1: a.y, x2: b.x, y2: b.y, alpha: 1 - d / 220 });
        }
      }
    }
    return lines;
  }, [positions]);

  return (
    <div
      ref={wrapRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden={false}
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full">
        {nearLines.map((l) => (
          <line
            key={`${l.a}-${l.b}`}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke={`rgba(129,140,248,${0.08 + l.alpha * 0.18})`}
            strokeWidth="1"
          />
        ))}
        <AnimatePresence>
          {line && (
            <motion.line
              key="join"
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="url(#joinGrad)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            />
          )}
        </AnimatePresence>
        <defs>
          <linearGradient id="joinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>

      {blocks.map((b) => {
        const isSel = selected === b.id;
        const isJoined = joined && (joined.a === b.id || joined.b === b.id);
        const isHover = hovered === b.id;
        return (
          <motion.button
            key={b.id}
            type="button"
            ref={(el) => {
              if (el) blockRefs.current[b.id] = el;
            }}
            onClick={() => onSelect(b.id)}
            onMouseEnter={() => setHovered(b.id)}
            onMouseLeave={() => setHovered(null)}
            className="pointer-events-auto absolute left-0 top-0 max-w-[220px] select-none rounded-xl border border-white/10 bg-slate-950/70 px-3 py-2 text-left shadow-[0_10px_40px_-20px_rgba(99,102,241,0.55)] backdrop-blur-md outline-none transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400/50"
            style={{
              left: `${b.ax}%`,
              top: `${b.ay}%`,
              boxShadow: isSel || isJoined
                ? '0 0 0 1px rgba(129,140,248,0.55), 0 20px 50px -20px rgba(99,102,241,0.75)'
                : undefined,
              borderColor: isSel || isJoined ? 'rgba(129,140,248,0.55)' : undefined,
            }}
            animate={{
              y: [0, -b.drift, 0, b.drift * 0.6, 0],
              x: [0, b.drift * 0.4, 0, -b.drift * 0.3, 0],
              scale: isHover || isSel || isJoined ? 1.06 : 1,
            }}
            transition={{
              y: { duration: b.duration, repeat: Infinity, ease: 'easeInOut', delay: b.delay },
              x: { duration: b.duration * 1.15, repeat: Infinity, ease: 'easeInOut', delay: b.delay },
              scale: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
            }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Code snippet ${b.lang}. Click to select or join.`}
          >
            <div className="mb-1.5 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              <span className="ml-1 font-mono text-[9px] uppercase tracking-wider text-indigo-300/80">
                {b.lang}
              </span>
            </div>
            <pre className="font-mono text-[10px] leading-relaxed text-slate-300 sm:text-[11px]">
              <code>
                {b.lines[0]}
                {(isHover || isSel || isJoined) && (
                  <>
                    {'\n'}
                    <span className="text-slate-500">{b.lines[1]}</span>
                  </>
                )}
              </code>
            </pre>
            {isSel && (
              <span className="mt-1.5 block text-[9px] uppercase tracking-[0.16em] text-indigo-300">
                Select another to join
              </span>
            )}
            {isJoined && (
              <span className="mt-1.5 block text-[9px] uppercase tracking-[0.16em] text-sky-300">
                Linked
              </span>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
