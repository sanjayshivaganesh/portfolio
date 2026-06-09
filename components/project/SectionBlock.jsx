'use client';

import { motion } from 'framer-motion';

export default function SectionBlock({ icon, eyebrow, title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.55 }}
    >
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-indigo-300">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-indigo-400/20 bg-indigo-500/10">
          {icon}
        </span>
        {eyebrow}
      </div>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-[1.7rem]">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </motion.section>
  );
}
