import Link from 'next/link';
import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';
import { isSanityConfigured } from '@/lib/sanity-client';
import { submitNewsArticle } from './actions';

export const metadata = { title: 'Submit a news article — Aqualogic' };

const categories = [
  { value: 'company-news', label: 'Company news' },
  { value: 'sector', label: 'Sector news / commentary' },
  { value: 'awards', label: 'Awards' },
  { value: 'partnerships', label: 'Partnerships' },
  { value: 'leadership', label: 'Leadership update' },
  { value: 'press-release', label: 'Press release' },
  { value: 'thought-leadership', label: 'Thought leadership' },
  { value: 'other', label: 'Other' }
];

export default function SubmitNews({
  searchParams
}: {
  searchParams: { status?: string; error?: string };
}) {
  const configured = isSanityConfigured();
  const submitted = searchParams.status === 'ok';

  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'News', href: '/news' },
          { label: 'Submit' }
        ]}
      />
      <PageHeader
        eyebrow="News / Submit"
        title="Submit a news article."
        lede="Use this form to capture an article for the news library. Internal articles (something we wrote) and external coverage (someone wrote about us) are both welcome."
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
            Thank you. The article is now in the news library as pending review.
          </Callout>
        </section>
      )}

      <section className="container-page pb-20">
        <form action={submitNewsArticle} className="grid gap-6 max-w-3xl">
          <Field label="Title" name="title" required />

          <fieldset>
            <legend className="text-sm font-semibold text-aqualogic-ink">Kind</legend>
            <div className="mt-2 flex flex-wrap gap-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="kind" value="internal" defaultChecked />
                Internal article (we wrote it)
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="kind" value="external" />
                External coverage (someone wrote about us)
              </label>
            </div>
          </fieldset>

          <SelectField label="Category" name="category" options={categories} required />
          <Field
            label="Source / publication"
            name="source"
            hint="Where this was (or will be) published. For external coverage, the name of the publication. For internal, the channel (e.g. Aqualogic press release, LinkedIn)."
          />
          <Field
            label="Source URL"
            name="sourceUrl"
            type="url"
            hint="Link to the published article, if there is one."
          />
          <Field label="Publication date" name="publicationDate" type="date" />

          <Textarea
            label="Summary"
            name="summary"
            rows={4}
            hint="A short summary used on the library tile. Max 400 characters."
          />
          <Textarea
            label="Body"
            name="body"
            rows={10}
            hint="Full article copy. Leave empty for external coverage; link via Source URL instead."
          />

          <ImageField label="Hero image" name="heroImage" accept="image/*" />

          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Submitted by — name" name="submittedByName" required />
            <Field label="Submitted by — email" name="submittedByEmail" type="email" required />
          </div>

          {searchParams.error && (
            <p role="alert" className="text-sm text-red-700">
              Something went wrong while saving. Please try again.
            </p>
          )}

          <div className="flex items-center gap-4 pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-aqualogic-ink text-white px-6 py-3 font-semibold hover:bg-aqualogic-cyan transition-colors disabled:opacity-50"
              disabled={!configured}
            >
              Submit article
            </button>
            <Link href="/news" className="text-sm text-grey-graphite hover:text-aqualogic-ink">
              Back to news
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
  accept
}: {
  label: string;
  name: string;
  accept?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-aqualogic-ink">{label}</span>
      <input
        type="file"
        name={name}
        accept={accept}
        className="mt-2 w-full text-sm text-grey-graphite file:mr-4 file:rounded-xl file:border-0 file:bg-grey-cloud file:px-4 file:py-2 file:font-semibold file:text-aqualogic-ink hover:file:bg-grey-smoke"
      />
    </label>
  );
}
