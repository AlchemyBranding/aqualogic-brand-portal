'use client';

import { useState } from 'react';
import Link from 'next/link';

type Props = {
  label: string;
  count: number;
  note?: string;
  guideLink?: { href: string; label: string };
  defaultOpen?: boolean;
  children: React.ReactNode;
};

export function DownloadSection({
  label,
  count,
  note,
  guideLink,
  defaultOpen = false,
  children
}: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `download-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <section>
      <header className="border-b border-grey-smoke">
        <h2 className="m-0">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="group flex w-full items-center gap-4 py-4 text-left"
          >
            <svg
              className={`h-5 w-5 flex-none text-aqualogic-cyan transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 5l6 5-6 5" />
            </svg>
            <span className="h-section text-aqualogic-ink group-hover:text-aqualogic-cyan transition-colors">
              {label}
            </span>
            <span className="ml-auto text-sm text-grey-graphite whitespace-nowrap">
              {count} file{count === 1 ? '' : 's'}
            </span>
          </button>
        </h2>
      </header>

      {open && (
        <div id={panelId} className="pt-5">
          {note && <p className="text-sm text-grey-graphite mb-5 max-w-prose">{note}</p>}
          {guideLink && (
            <p className="mb-5 text-sm">
              <Link
                href={guideLink.href}
                className="text-aqualogic-cyan font-semibold hover:underline"
              >
                {guideLink.label} &rarr;
              </Link>
            </p>
          )}
          {children}
        </div>
      )}
    </section>
  );
}
