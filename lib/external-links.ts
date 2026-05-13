// One place to manage outbound links. Update these once the client provides them.
// Items marked NEEDS-URL are flagged in FLAGS.md.

export const externalLinks = {
  sustecWebsite: { label: 'Sustec website', href: '#', flagged: true },
  aqualogicWebsite: { label: 'Aqualogic website', href: '#', flagged: true },
  aqualogicLinkedIn: {
    label: 'Aqualogic on LinkedIn',
    href: '#',
    flagged: true
  },
  sustecLinkedIn: { label: 'Sustec on LinkedIn', href: '#', flagged: true },
  intranet: { label: 'Internal intranet', href: '#', flagged: true }
} as const;

export type ExternalLinkKey = keyof typeof externalLinks;
