import Link from 'next/link';
import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';
import { SubmitButton } from '@/components/SubmitButton';
import { isSanityConfigured } from '@/lib/sanity-client';
import { submitCaseStudy } from './actions';

export const metadata = { title: 'Submit a case study — Aqualogic' };

const categories = [
  { value: 'leakage-detection', label: 'Leakage detection' },
  { value: 'demand-management', label: 'Demand management' },
  { value: 'customer-side-delivery', label: 'Customer-side delivery' },
  { value: 'network-support', label: 'Network support' },
  { value: 'data-technology', label: 'Data / technology' },
  { value: 'other', label: 'Other' }
];

export default function SubmitCaseStudy({
  searchParams
}: {
  searchParams: { error?: string };
}) {
  const configured = isSanityConfigured();

  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'Case studies', href: '/case-studies' },
          { label: 'Submit' }
        ]}
      />
      <PageHeader
        eyebrow="Case studies / Submit"
        title="Submit a case study."
        lede="This form mirrors the case study layout on the new website — each section maps to a block on the page. Leave any section blank if it isn’t relevant; the website will hide empty sections automatically."
      />

      {!configured && (
        <section className="container-page pb-10">
          <Callout title="Sanity not configured" variant="flag">
            The form will render, but submissions cannot be saved until the Sanity project is
            connected. See the README for setup steps.
          </Callout>
        </section>
      )}

      <section className="container-page pb-20">
        <form action={submitCaseStudy} className="grid gap-10 max-w-3xl">
          <SectionHeader
            title="Project reference"
            lede="For internal use — this doesn’t appear on the website."
          />
          <Field
            label="Project title (internal reference)"
            name="title"
            required
            hint='Short internal name, e.g. "SWW smart meter rollout".'
          />

          <SectionHeader
            title="Intro"
            lede="A short overview of the project, the client name, and two images."
          />
          <Textarea
            label="Introduction text"
            name="introText"
            rows={4}
            hint="A short paragraph giving a brief overview of the entire project."
          />
          <Field
            label="Client name"
            name="client"
            required
            hint='The client name, e.g. "South West Water".'
          />
          <ImageField
            label="Client logo"
            name="clientLogo"
            accept="image/*"
            hint="Where possible, use a transparent PNG."
          />
          <ImageField
            label="Intro picture"
            name="heroImage"
            accept="image/*"
            hint="A headline image to sit alongside the introduction."
          />

          <SectionHeader
            title="Results"
            lede="Up to four headline figures. Use fewer if needed, but aim for three or four where possible."
          />
          <ResultRow n={1} />
          <ResultRow n={2} />
          <ResultRow n={3} />
          <ResultRow n={4} />

          <SectionHeader
            title="Context"
            lede="A short headline plus copy setting the scene for the project."
          />
          <Field label="Context — title" name="contextTitle" hint="Keep this short." />
          <Textarea label="Context — copy" name="contextCopy" rows={5} />

          <SectionHeader title="Challenge" lede="What the client needed solving." />
          <Field label="Challenge — title" name="challengeTitle" hint="Keep this short." />
          <Textarea label="Challenge — copy" name="challengeCopy" rows={5} />

          <SectionHeader title="Approach" lede="How Aqualogic tackled it." />
          <Field label="Approach — title" name="approachTitle" hint="Keep this short." />
          <Textarea label="Approach — copy" name="approachCopy" rows={5} />

          <SectionHeader
            title="Programme at a Glance (optional)"
            lede="A two-column table highlighting key facts. Skip this section if it isn’t useful, otherwise fill in at least four rows. Keep each entry short."
          />
          <Field
            label="Programme title"
            name="programmeTitle"
            hint='Short title for this area, e.g. "Programme at a glance".'
          />
          <ProgrammeRow n={1} exampleTitle="Client" exampleCopy="South West Water" />
          <ProgrammeRow n={2} exampleTitle="Location" exampleCopy="South West of England" />
          <ProgrammeRow n={3} exampleTitle="Scope" exampleCopy="Meter exchanges and retrofits" />
          <ProgrammeRow n={4} exampleTitle="Meter technology" exampleCopy="Diehl Metering" />
          <ProgrammeRow n={5} exampleTitle="Status" exampleCopy="Ongoing — year 3" />
          <ProgrammeRow n={6} exampleTitle="—" exampleCopy="—" />
          <ImageField
            label="Programme image"
            name="programmeImage"
            accept="image/*"
            hint="Optional additional image for this section."
          />

          <SectionHeader title="Endorsement" lede="A quote from the client." />
          <Textarea
            label="Quote from client"
            name="endorsementQuote"
            rows={3}
            hint="Please keep the quote reasonably short."
          />
          <Field
            label="Client name (for quote)"
            name="endorsementClientName"
            hint='e.g. "John Smith".'
          />
          <Field
            label="Client position"
            name="endorsementClientPosition"
            hint='Their role or company, e.g. "South West Water".'
          />

          <SectionHeader
            title="What this proves"
            lede="A closing statement about what the project demonstrates."
          />
          <Field label="Proof — headline" name="proofHeadline" hint="Keep this short." />
          <Textarea label="Proof — copy" name="proofCopy" rows={5} />

          <SectionHeader
            title="Extras (optional, internal)"
            lede="Not shown on the new case study layout, but useful for filtering and admin."
          />
          <SelectField label="Service category" name="serviceCategory" options={categories} />
          <Field label="Region or location" name="region" />
          <Field label="Date completed" name="dateCompleted" type="date" />
          <ImageField
            label="Additional images"
            name="gallery"
            accept="image/*"
            multiple
            hint="Any extra images that don’t belong to a specific section above."
          />

          <SectionHeader title="Your details" />
          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Submitted by — name" name="submittedByName" required />
            <Field label="Submitted by — email" name="submittedByEmail" type="email" required />
          </div>

          {searchParams.error && (
            <p role="alert" className="text-sm text-red-700">
              Something went wrong while saving. Please try again, or contact Alchemy.
            </p>
          )}

          <div className="flex items-center gap-4 pt-2">
            <SubmitButton disabled={!configured} pendingLabel="Submitting — please wait…">
              Submit case study
            </SubmitButton>
            <Link href="/case-studies" className="text-sm text-grey-graphite hover:text-aqualogic-ink">
              Back to case studies
            </Link>
          </div>
        </form>
      </section>
    </BrandFrame>
  );
}

function SectionHeader({ title, lede }: { title: string; lede?: string }) {
  return (
    <div className="border-b border-grey-smoke pb-2 pt-2">
      <h2 className="text-xl font-semibold text-aqualogic-ink">{title}</h2>
      {lede && <p className="mt-1 text-sm text-grey-graphite">{lede}</p>}
    </div>
  );
}

function ResultRow({ n }: { n: number }) {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <Field
        label={`Result ${n} — figure`}
        name={`result${n}Figure`}
        hint={n === 1 ? 'e.g. "175,000".' : undefined}
      />
      <Field
        label={`Result ${n} — subtitle`}
        name={`result${n}Subtitle`}
        hint={n === 1 ? 'e.g. "Smart meters installed".' : undefined}
      />
    </div>
  );
}

function ProgrammeRow({
  n,
  exampleTitle,
  exampleCopy
}: {
  n: number;
  exampleTitle: string;
  exampleCopy: string;
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <Field
        label={`Row ${n} — title`}
        name={`row${n}Title`}
        hint={n === 1 ? `e.g. "${exampleTitle}".` : undefined}
      />
      <Field
        label={`Row ${n} — copy`}
        name={`row${n}Copy`}
        hint={n === 1 ? `e.g. "${exampleCopy}".` : undefined}
      />
    </div>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  hint
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-aqualogic-ink">
        {label}
        {required && <span aria-hidden className="ml-1 text-aqualogic-cyan">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-xl border border-grey-smoke bg-white px-4 py-3 text-base focus-ring focus-visible:ring-aqualogic-cyan"
      />
      {hint && <span className="block text-xs text-grey-graphite mt-1">{hint}</span>}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-aqualogic-ink">
        {label}
        {required && <span aria-hidden className="ml-1 text-aqualogic-cyan">*</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full rounded-xl border border-grey-smoke bg-white px-4 py-3 text-base focus-ring focus-visible:ring-aqualogic-cyan"
      >
        <option value="" disabled>
          Choose…
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function Textarea({
  label,
  name,
  rows = 4,
  required,
  hint
}: {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-aqualogic-ink">
        {label}
        {required && <span aria-hidden className="ml-1 text-aqualogic-cyan">*</span>}
      </span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        className="mt-2 w-full rounded-xl border border-grey-smoke bg-white px-4 py-3 text-base focus-ring focus-visible:ring-aqualogic-cyan resize-y"
      />
      {hint && <span className="block text-xs text-grey-graphite mt-1">{hint}</span>}
    </label>
  );
}

function ImageField({
  label,
  name,
  accept,
  multiple,
  hint
}: {
  label: string;
  name: string;
  accept?: string;
  multiple?: boolean;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-aqualogic-ink">{label}</span>
      <input
        type="file"
        name={name}
        accept={accept}
        multiple={multiple}
        className="mt-2 w-full text-sm text-grey-graphite file:mr-4 file:rounded-xl file:border-0 file:bg-grey-cloud file:px-4 file:py-2 file:font-semibold file:text-aqualogic-ink hover:file:bg-grey-smoke"
      />
      {hint && <span className="block text-xs text-grey-graphite mt-1">{hint}</span>}
    </label>
  );
}
