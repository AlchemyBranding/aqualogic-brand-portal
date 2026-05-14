// One place to manage outbound links. Update these if URLs change.
// Items marked NEEDS-URL are flagged in FLAGS.md.

export const externalLinks = {
  sustecWebsite: { label: 'Sustec website', href: 'https://sustec.uk/', flagged: false },
  aqualogicWebsite: {
    label: 'Aqualogic website',
    href: 'https://aqualogic-wc.com/',
    flagged: false
  },
  aqualogicLinkedIn: {
    label: 'Aqualogic on LinkedIn',
    href: 'https://www.linkedin.com/company/aqualogic-wc-ltd/',
    flagged: false
  },
  // Sustec does not currently have a LinkedIn presence. Intentionally omitted.
  intranet: { label: 'Internal intranet', href: '#', flagged: true }
} as const;

export type ExternalLinkKey = keyof typeof externalLinks;
