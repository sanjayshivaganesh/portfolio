'use client';

import { ArrowUpRight, FileText, Github } from 'lucide-react';

// LinksFooter
// props:
//   links  { github?, demo?, paper? }
export default function LinksFooter({ links = {} }) {
  const items = [
    { key: 'github', label: 'Source', href: links.github, icon: Github },
    { key: 'demo', label: 'Live demo', href: links.demo, icon: ArrowUpRight },
    { key: 'paper', label: 'Paper', href: links.paper, icon: FileText },
  ].filter((i) => i.href);

  if (items.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.01] p-4 text-sm text-slate-500">
        Links pending verification.
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {items.map(({ key, label, href, icon: Icon }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-slate-200 transition hover:border-white/25 hover:text-white"
        >
          <Icon size={14} /> {label}
        </a>
      ))}
    </div>
  );
}
