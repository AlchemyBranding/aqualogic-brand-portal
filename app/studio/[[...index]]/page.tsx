import { isSanityConfigured } from '@/lib/sanity-client';
import StudioClient from './StudioClient';

export const dynamic = 'force-static';
export const metadata = { title: 'Studio — Sustec / Aqualogic' };

export default function StudioPage() {
  if (!isSanityConfigured()) {
    return (
      <div className="min-h-screen bg-aqualogic-paper">
        <div className="container-page py-24 max-w-prose">
          <p className="eyebrow mb-4">Sanity Studio</p>
          <h1 className="h-display text-aqualogic-ink mb-6">Studio not configured.</h1>
          <p className="lede mb-6">
            The Sanity project ID and dataset have not been set. Until they are, the Studio
            cannot connect to a content lake and case study submissions cannot be reviewed.
          </p>
          <ol className="body-prose space-y-3 list-decimal pl-6">
            <li>Create a free project at <a className="text-aqualogic-cyan underline" href="https://www.sanity.io/manage" target="_blank" rel="noreferrer">sanity.io/manage</a> and note the project ID.</li>
            <li>Set <code className="bg-grey-cloud px-1 rounded">NEXT_PUBLIC_SANITY_PROJECT_ID</code> in <code className="bg-grey-cloud px-1 rounded">.env.local</code>.</li>
            <li>Set <code className="bg-grey-cloud px-1 rounded">NEXT_PUBLIC_SANITY_DATASET</code> (usually <code className="bg-grey-cloud px-1 rounded">production</code>).</li>
            <li>Generate a Sanity API token with Editor permissions and set <code className="bg-grey-cloud px-1 rounded">SANITY_WRITE_TOKEN</code>.</li>
            <li>Restart the dev server.</li>
          </ol>
        </div>
      </div>
    );
  }
  return <StudioClient />;
}
