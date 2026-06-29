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

function formatSubmittedBy(doc: Record<string, unknown>): string | null {
  const name = asString(doc.submittedByName);
  const email = asString(doc.submittedByEmail);
  if (!name && !email) return null;
  return `Submitted by: ${name}${email ? ` <${email}>` : ''}`;
}

export function formatCaseStudy(doc: Record<string, unknown>): string {
  const galleryCount = Array.isArray(doc.gallery) ? doc.gallery.length : 0;
  const heroPresent = doc.heroImage ? 'yes' : 'no';
  const categorySlug = asString(doc.serviceCategory);
  const categoryLabel = CASE_STUDY_SERVICE_CATEGORY[categorySlug] ?? categorySlug;

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

  const sections = [
    fmtSection('Challenge', doc.challenge),
    fmtSection('Approach', doc.approach),
    fmtSection('Solution', doc.solution),
    fmtSection('Results', doc.results)
  ]
    .filter(Boolean)
    .join('\n\n');

  const quoteBody = asString(doc.quote);
  const quoteAttribution = asString(doc.quoteAttribution);
  const quote = quoteBody
    ? `## Quote\n> ${quoteBody}${quoteAttribution ? `\n— ${quoteAttribution}` : ''}`
    : null;

  const media = `## Media\nHero image: ${heroPresent}\nGallery: ${galleryCount} image(s)`;

  return [`# ${asString(doc.title) || 'Untitled case study'}`, meta, sections, quote, media]
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
