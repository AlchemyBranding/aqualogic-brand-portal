// Formats a submitted case study or news article as a markdown block,
// ready to paste into a Claude project for the brand-aligned rewrite.

const CASE_STUDY_SERVICE_CATEGORY: Record<string, string> = {
  'leakage-detection': 'Leakage detection',
  'demand-management': 'Demand management',
  'customer-side-delivery': 'Customer-side delivery',
  'network-support': 'Network support',
  'data-technology': 'Data / technology',
  other: 'Other'
};

const NEWS_CATEGORY: Record<string, string> = {
  'company-news': 'Company news',
  sector: 'Sector news / commentary',
  awards: 'Awards',
  partnerships: 'Partnerships',
  leadership: 'Leadership update',
  'press-release': 'Press release',
  'thought-leadership': 'Thought leadership',
  other: 'Other'
};

function asString(value: unknown): string {
  if (value === undefined || value === null) return '';
  return String(value).trim();
}

function fmtLine(label: string, value: unknown): string | null {
  const s = asString(value);
  return s ? `${label}: ${s}` : null;
}

function fmtSection(heading: string, body: unknown): string | null {
  const s = asString(body);
  return s ? `## ${heading}\n${s}` : null;
}

function fmtTitledSection(
  heading: string,
  title: unknown,
  body: unknown
): string | null {
  const t = asString(title);
  const b = asString(body);
  if (!t && !b) return null;
  const headline = t ? `## ${heading} — ${t}` : `## ${heading}`;
  return b ? `${headline}\n${b}` : headline;
}

function formatSubmittedBy(doc: Record<string, unknown>): string | null {
  const name = asString(doc.submittedByName);
  const email = asString(doc.submittedByEmail);
  if (!name && !email) return null;
  return `Submitted by: ${name}${email ? ` <${email}>` : ''}`;
}

function formatResults(doc: Record<string, unknown>): string | null {
  const raw = Array.isArray(doc.results) ? doc.results : [];
  const items = raw
    .map((r) => {
      const obj = (r as Record<string, unknown>) ?? {};
      const figure = asString(obj.figure);
      const subtitle = asString(obj.subtitle);
      if (!figure && !subtitle) return null;
      if (figure && subtitle) return `- **${figure}** — ${subtitle}`;
      return `- ${figure || subtitle}`;
    })
    .filter(Boolean) as string[];
  if (!items.length) return null;
  return `## Results\n${items.join('\n')}`;
}

function formatProgramme(doc: Record<string, unknown>): string | null {
  const title = asString(doc.programmeTitle);
  const raw = Array.isArray(doc.programmeRows) ? doc.programmeRows : [];
  const rows = raw
    .map((r) => {
      const obj = (r as Record<string, unknown>) ?? {};
      const rowTitle = asString(obj.rowTitle);
      const rowCopy = asString(obj.rowCopy);
      if (!rowTitle && !rowCopy) return null;
      if (rowTitle && rowCopy) return `- **${rowTitle}:** ${rowCopy}`;
      return `- ${rowTitle || rowCopy}`;
    })
    .filter(Boolean) as string[];
  const imagePresent = doc.programmeImage ? 'yes' : 'no';
  if (!title && !rows.length && imagePresent === 'no') return null;
  const headline = title ? `## Programme at a Glance — ${title}` : '## Programme at a Glance';
  const body = [
    rows.length ? rows.join('\n') : null,
    `Programme image: ${imagePresent}`
  ]
    .filter(Boolean)
    .join('\n\n');
  return `${headline}\n${body}`;
}

function formatEndorsement(doc: Record<string, unknown>): string | null {
  const quote = asString(doc.endorsementQuote);
  const name = asString(doc.endorsementClientName);
  const position = asString(doc.endorsementClientPosition);
  if (!quote && !name && !position) return null;
  const attribution = [name, position].filter(Boolean).join(', ');
  const body = quote ? `> ${quote}` : '';
  const tag = attribution ? `— ${attribution}` : '';
  return ['## Endorsement', body, tag].filter(Boolean).join('\n');
}

export function formatCaseStudy(doc: Record<string, unknown>): string {
  const galleryCount = Array.isArray(doc.gallery) ? doc.gallery.length : 0;
  const clientLogoPresent = doc.clientLogo ? 'yes' : 'no';
  const heroPresent = doc.heroImage ? 'yes' : 'no';
  const programmeImagePresent = doc.programmeImage ? 'yes' : 'no';
  const categorySlug = asString(doc.serviceCategory);
  const categoryLabel = categorySlug
    ? CASE_STUDY_SERVICE_CATEGORY[categorySlug] ?? categorySlug
    : '';

  const meta = [
    fmtLine('Client', doc.client),
    fmtLine('Service category', categoryLabel),
    fmtLine('Region', doc.region),
    fmtLine('Date completed', doc.dateCompleted),
    formatSubmittedBy(doc),
    fmtLine('Submitted at', doc.submittedAt)
  ]
    .filter(Boolean)
    .join('\n');

  const intro = fmtSection('Intro', doc.introText);

  const sections = [
    intro,
    formatResults(doc),
    fmtTitledSection('Context', doc.contextTitle, doc.contextCopy),
    fmtTitledSection('Challenge', doc.challengeTitle, doc.challengeCopy),
    fmtTitledSection('Approach', doc.approachTitle, doc.approachCopy),
    formatProgramme(doc),
    formatEndorsement(doc),
    fmtTitledSection('What this proves', doc.proofHeadline, doc.proofCopy)
  ]
    .filter(Boolean)
    .join('\n\n');

  const media = `## Media\nClient logo: ${clientLogoPresent}\nIntro picture: ${heroPresent}\nProgramme image: ${programmeImagePresent}\nAdditional images: ${galleryCount} image(s)`;

  return [`# ${asString(doc.title) || 'Untitled case study'}`, meta, sections, media]
    .filter(Boolean)
    .join('\n\n');
}

export function formatNewsArticle(doc: Record<string, unknown>): string {
  const kind = asString(doc.kind);
  const kindLabel =
    kind === 'external' ? 'External coverage' : kind === 'internal' ? 'Internal article' : kind;
  const categorySlug = asString(doc.category);
  const categoryLabel = NEWS_CATEGORY[categorySlug] ?? categorySlug;

  const meta = [
    fmtLine('Kind', kindLabel),
    fmtLine('Category', categoryLabel),
    fmtLine('Source', doc.source),
    fmtLine('Source URL', doc.sourceUrl),
    fmtLine('Publication date', doc.publicationDate),
    formatSubmittedBy(doc),
    fmtLine('Submitted at', doc.submittedAt)
  ]
    .filter(Boolean)
    .join('\n');

  const sections = [fmtSection('Summary', doc.summary), fmtSection('Body', doc.body)]
    .filter(Boolean)
    .join('\n\n');

  const heroPresent = doc.heroImage ? 'yes' : 'no';
  const media = `## Media\nHero image: ${heroPresent}`;

  return [`# ${asString(doc.title) || 'Untitled article'}`, meta, sections, media]
    .filter(Boolean)
    .join('\n\n');
}

export type SubmissionType = 'caseStudy' | 'newsArticle';

export function formatSubmission(
  type: SubmissionType,
  doc: Record<string, unknown>
): string {
  return type === 'caseStudy' ? formatCaseStudy(doc) : formatNewsArticle(doc);
}
