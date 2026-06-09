'use client';

import profile from '@/lib/data/profile';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row">
        <div>
          © {new Date().getFullYear()} {profile.name}. Crafted with curiosity in {profile.location}.
        </div>
        <div className="flex items-center gap-3">
          <a href={`mailto:${profile.email}`} className="rounded-md p-2 hover:bg-white/5 hover:text-white" aria-label="Email">
            <Mail size={15} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-md p-2 hover:bg-white/5 hover:text-white" aria-label="LinkedIn">
            <Linkedin size={15} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-md p-2 hover:bg-white/5 hover:text-white" aria-label="GitHub">
            <Github size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
