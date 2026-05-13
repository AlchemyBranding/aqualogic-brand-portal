import Link from 'next/link';
import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';
import { isSanityConfigured } from '@/lib/sanity-client';
import { uploadPhoto } from './actions';

export const metadata = { title: 'Photo upload — Admin' };

const categories = ['office', 'team', 'sites', 'equipment', 'events'];

export default function UploadPage({ searchParams }: { searchParams: { status?: string; error?: string } }) {
  const configured = isSanityConfigured();
  return (
    <BrandFrame brand="group">
      <PageHeader
        eyebrow="Admin / Photo upload"
        title="Photography library."
        lede="Add brand photography to the shared library. Uploaded photos appear automatically in the relevant brand's photography section."
      />

      {!configured && (
        <section className="container-page pb-10">
          <Callout title="Sanity not configured" variant="flag">
            Uploads write to Sanity. Add the project ID, dataset and write token to
            <code className="px-1 py-0.5 mx-1 bg-amber-100 rounded text-xs">.env.local</code>
            to enable.
          </Callout>
        </section>
      )}

      {searchParams.status === 'ok' && (
        <section className="container-page pb-10">
          <Callout title="Uploaded">Photo saved. It is now available in the library.</Callout>
        </section>
      )}

      <section className="container-page pb-20">
        <form action={uploadPhoto} className="grid gap-6 max-w-2xl">
          <label className="block">
            <span className="text-sm font-semibold text-aqualogic-ink">Title</span>
            <input
              type="text"
              name="title"
              required
              className="mt-2 w-full rounded-xl border border-grey-smoke bg-white px-4 py-3 focus-ring focus-visible:ring-aqualogic-cyan"
            />
          </label>

          <fieldset>
            <legend className="text-sm font-semibold text-aqualogic-ink">Brand</legend>
            <div className="mt-2 flex gap-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="brand" value="aqualogic" defaultChecked />
                Aqualogic
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="brand" value="sustec" />
                Sustec
              </label>
            </div>
          </fieldset>

          <label className="block">
            <span className="text-sm font-semibold text-aqualogic-ink">Category</span>
            <select
              name="category"
              defaultValue=""
              required
              className="mt-2 w-full rounded-xl border border-grey-smoke bg-white px-4 py-3 focus-ring focus-visible:ring-aqualogic-cyan"
            >
              <option value="" disabled>
                Choose…
              </option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c[0].toUpperCase() + c.slice(1)}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-aqualogic-ink">Caption (optional)</span>
            <textarea
              name="caption"
              rows={3}
              className="mt-2 w-full rounded-xl border border-grey-smoke bg-white px-4 py-3 focus-ring focus-visible:ring-aqualogic-cyan resize-y"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-aqualogic-ink">Image</span>
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              className="mt-2 w-full text-sm text-grey-graphite file:mr-4 file:rounded-xl file:border-0 file:bg-grey-cloud file:px-4 file:py-2 file:font-semibold file:text-aqualogic-ink hover:file:bg-grey-smoke"
            />
          </label>

          {searchParams.error && (
            <p role="alert" className="text-sm text-red-700">
              Upload failed. Please try again.
            </p>
          )}

          <div className="flex items-center gap-4 pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-aqualogic-ink text-white px-6 py-3 font-semibold hover:bg-aqualogic-cyan transition-colors disabled:opacity-50"
              disabled={!configured}
            >
              Upload photo
            </button>
            <Link href="/aqualogic/visuals/imagery" className="text-sm text-grey-graphite hover:text-aqualogic-ink">
              Cancel
            </Link>
          </div>
        </form>
      </section>
    </BrandFrame>
  );
}
