'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#research', label: 'Research' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-slate-950/70 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-blue-500 text-[11px] font-semibold text-white shadow-lg shadow-indigo-500/30">
            SS
            <span className="absolute inset-0 rounded-md ring-1 ring-white/20" />
          </span>
          <span className="text-sm font-medium tracking-wide text-slate-200">Sanjay Shivaganesh</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-3 py-2 text-sm text-slate-400 transition hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white md:inline-flex"
        >
          Work With Me
        </a>
        <button
          aria-label="Toggle menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/5 bg-slate-950/90 md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}
