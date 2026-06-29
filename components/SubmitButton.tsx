'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton({
  children,
  pendingLabel = 'Submitting…',
  disabled,
  className
}: {
  children: React.ReactNode;
  pendingLabel?: string;
  disabled?: boolean;
  className?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending || disabled || undefined}
      disabled={pending || disabled}
      className={
        className ??
        'inline-flex items-center gap-2 rounded-xl bg-aqualogic-ink text-white px-6 py-3 font-semibold hover:bg-aqualogic-cyan transition-colors disabled:opacity-60 disabled:cursor-not-allowed'
      }
    >
      {pending && (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 animate-spin"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      )}
      {pending ? pendingLabel : children}
    </button>
  );
}
