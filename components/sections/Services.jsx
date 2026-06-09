'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Code2, FlaskConical, Globe, Cpu, Layers } from 'lucide-react';
import SectionHeader from '../SectionHeader';
import services from '@/lib/data/services';

const icons = [Globe, Briefcase, FlaskConical, Code2, Cpu, Layers];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Work With Me"
            title="From idea to polished software product."
            description="I work with students, researchers, and early-stage founders to transform ideas into polished software products, research platforms, and professional web experiences."
          />
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)] transition hover:from-indigo-400 hover:to-blue-400"
          >
            Start a Project <ArrowRight size={16} />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition hover:border-white/15"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                  <Icon size={16} />
                </div>
                <div className="mt-4 text-base font-semibold text-white">{s.title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
