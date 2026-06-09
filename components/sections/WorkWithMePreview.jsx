'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, FlaskConical, Globe, Cpu, Code2 } from 'lucide-react';
import SectionHeader from '../SectionHeader';

const items = [
  { icon: FlaskConical, label: 'Research Project Websites' },
  { icon: Globe, label: 'Portfolio Websites' },
  { icon: Cpu, label: 'AI-Powered Applications' },
  { icon: Code2, label: 'Custom Software' },
];

export default function WorkWithMePreview() {
  return (
    <section id="work-with-me" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.08] via-white/[0.02] to-blue-500/[0.05] p-8 md:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Work With Me"
              title="Selectively taking on ambitious work."
              description="Open to research collaborations, software projects, and select freelance engagements with students, researchers, and early-stage founders."
            />
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)] transition hover:from-indigo-400 hover:to-blue-400"
              >
                Start a Conversation <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-5">
            {items.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                    <Icon size={14} />
                  </span>
                  <span className="text-sm text-slate-200">{s.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
