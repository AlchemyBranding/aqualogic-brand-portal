import Link from 'next/link';
import { BrandFrame } from '@/components/BrandFrame';
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

  return (
    <BrandFrame brand="aqualogic">
      <PageHeader
        eyebrow="Case studies / Submit"
        title="Submit a case study."
        lede="Use this form to capture a project for Alchemy to turn into social, web or sales content. Submissions land in the case study library as pending review."
      />

      {!configured && (
        <section className="container-page pb-10">
          <Callout title="Sanity not configured" variant="flag">
            The form will render, but submissions cannot be saved until the Sanity project is
            connected. See the README for setup steps.
          </Callout>
        </section>
      )}

      {submitted && (
        <section className="container-page pb-10">
          <Callout title="Submission received" variant="note">
            Thank you. The case study is now visible in the library as pending review. Alchemy
            will follow up.
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
