'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/research', label: 'Research' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

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
        <Link href="/" className="group flex items-center gap-2">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-blue-500 text-[11px] font-semibold text-white shadow-lg shadow-indigo-500/30">
            SS
            <span className="absolute inset-0 rounded-md ring-1 ring-white/20" />
          </span>
          <span className="text-sm font-medium tracking-wide text-slate-200">Sanjay Shivaganesh</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`relative rounded-md px-3 py-2 text-sm transition ${
                  isActive(l.href) ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {l.label}
                {isActive(l.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-indigo-300/80 to-transparent"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-2 text-xs font-medium text-white shadow-[0_8px_25px_-10px_rgba(99,102,241,0.7)] ring-1 ring-white/10 transition hover:from-indigo-400 hover:to-blue-400 md:inline-flex"
        >
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
          </span>
          Work With Me
        </Link>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-slate-950/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className={`block rounded-md px-3 py-2.5 text-sm ${
                    isActive(l.href) ? 'bg-white/[0.04] text-white' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                onClick={() => setOpen(false)}
                href="/contact"
                className="flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow-[0_8px_25px_-10px_rgba(99,102,241,0.7)] ring-1 ring-white/10"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Work With Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
