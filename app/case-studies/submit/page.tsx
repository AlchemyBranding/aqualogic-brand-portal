import Link from 'next/link';
import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';
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
  searchParams: { status?: string; error?: string };
}) {
  const configured = isSanityConfigured();
  const submitted = searchParams.status === 'ok';

  if (submitted) {
    return (
      <BrandFrame brand="aqualogic">
        <Breadcrumbs
          items={[
            { label: 'Portal', href: '/' },
            { label: 'Case studies', href: '/case-studies' },
            { label: 'Submitted' }
          ]}
        />
        <section className="container-page pt-16 md:pt-24 pb-12">
          <div className="max-w-3xl">
            <span
              aria-hidden
              className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-aqualogic-cyan/15 text-aqualogic-cyan"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <p className="eyebrow mt-6">Case studies</p>
            <h1 className="h-display text-aqualogic-ink mt-3">Thank you.</h1>
            <p className="lede mt-6 max-w-prose">
              Your case study has been submitted and is now in the library as <strong>pending
              review</strong>. We&rsquo;ll review it shortly and use it for website content,
              social, email marketing and sales materials.
            </p>
            <p className="text-sm text-grey-graphite mt-4 max-w-prose">
              Need to add another? Submit a separate entry for each project so each gets the
              attention it deserves.
            </p>
          </div>
        </section>

        <section className="container-page pb-20">
          <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
            <Link
              href="/case-studies/submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-aqualogic-ink text-white px-5 py-3 text-sm font-semibold hover:bg-aqualogic-cyan transition-colors"
            >
              Submit another case study
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-aqualogic-ink text-aqualogic-ink px-5 py-3 text-sm font-semibold hover:bg-aqualogic-ink hover:text-white transition-colors"
            >
              View the case study library
            </Link>
          </div>
        </section>
      </BrandFrame>
    );
  }

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
        lede="Use this form to capture a project for the case study library. Submissions land as pending review and feed website content, social, email marketing and sales materials."
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
        <form action={submitCaseStudy} className="grid gap-6 max-w-3xl">
          <Field label="Title" name="title" required />
          <Field label="Client (water company)" name="client" required />
          <SelectField label="Service category" name="serviceCategory" options={categories} required />
          <Field label="Region or location" name="region" />
          <Field label="Date completed" name="dateCompleted" type="date" />

          <Textarea label="Challenge" name="challenge" rows={4} hint="What was the problem the client was facing?" />
          <Textarea label="Approach" name="approach" rows={4} hint="What did we do to tackle it?" />
          <Textarea label="Solution" name="solution" rows={4} hint="The work we delivered." />
          <Textarea
            label="Results"
            name="results"
            rows={4}
            hint="Outcomes and metrics where possible: water saved, leaks found, performance change."
          />
          <Textarea label="Quote / testimonial (optional)" name="quote" rows={3} />
          <Field label="Quote attribution (optional)" name="quoteAttribution" />

          <ImageField label="Hero image" name="heroImage" accept="image/*" />
          <ImageField label="Gallery images" name="gallery" accept="image/*" multiple />

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
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-aqualogic-ink text-white px-6 py-3 font-semibold hover:bg-aqualogic-cyan transition-colors disabled:opacity-50"
              disabled={!configured}
            >
              Submit case study
            </button>
            <Link href="/case-studies" className="text-sm text-grey-graphite hover:text-aqualogic-ink">
              Back to case studies
            </Link>
          </div>
        </form>
      </section>
    </BrandFrame>
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
  multiple
}: {
  label: string;
  name: string;
  accept?: string;
  multiple?: boolean;
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
    </label>
  );
}
