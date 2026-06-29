'use client';

import { useState } from 'react';
import { formatSubmission, type SubmissionType } from '@/lib/format-submission';

type Item = {
  _id: string;
  _type: SubmissionType;
  title?: string;
  client?: string;
  source?: string;
  status?: string;
  submittedAt?: string;
  [key: string]: unknown;
};

const STATUS_LABEL: Record<string, string> = {
  submitted: 'Submitted',
  rewriting: 'Rewriting',
  'in-wordpress': 'In WordPress draft',
  live: 'Live on website',
  'pending-review': 'Submitted',
  approved: 'Rewriting',
  published: 'Live on website'
};

export function CopyRow({ item }: { item: Item }) {
  const [state, setState] = useState<'idle' | 'copied' | 'error'>('idle');

  async function handleCopy() {
    try {
      const text = formatSubmission(item._type, item as unknown as Record<string, unknown>);
      await navigator.clipboard.writeText(text);
      setState('copied');
      setTimeout(() => setState('idle'), 2500);
    } catch {
      setState('error');
      setTimeout(() => setState('idle'), 3000);
    }
  }

  const typeLabel = item._type === 'caseStudy' ? 'Case study' : 'News article';
  const subline = item.client || item.source || '';
  const statusKey = item.status ?? '';
  const statusLabel = STATUS_LABEL[statusKey] ?? '';

  const buttonClass =
    state === 'copied'
      ? 'bg-emerald-600 text-white'
      : state === 'error'
      ? 'bg-red-600 text-white'
      : 'bg-aqualogic-ink text-white hover:bg-aqualogic-cyan';

  return (
    <article className="card flex items-center justify-between gap-4">
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-grey-graphite mb-1">
          {typeLabel}
          {subline ? ` • ${subline}` : ''}
          {statusLabel ? ` • ${statusLabel}` : ''}
        </div>
        <h2 className="text-base font-semibold text-aqualogic-ink truncate">
          {item.title || 'Untitled'}
        </h2>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className={`shrink-0 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${buttonClass}`}
      >
        {state === 'copied' ? 'Copied' : state === 'error' ? 'Failed — try again' : 'Copy for rewriting'}
      </button>
    </article>
  );
}
