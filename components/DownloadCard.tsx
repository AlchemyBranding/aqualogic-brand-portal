import type { AssetFile } from '@/lib/assets';

type Props = {
  asset?: AssetFile;
  title: string;
  description?: string;
  comingSoon?: boolean;
};

export function DownloadCard({ asset, title, description, comingSoon }: Props) {
  const isReady = !!asset && !comingSoon;

  return (
    <div className="card flex flex-col h-full">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="h-sub text-aqualogic-ink">{title}</h3>
          {description && <p className="text-sm text-grey-graphite mt-2">{description}</p>}
        </div>
        {asset?.variant && <span className="pill">{asset.variant}</span>}
      </div>

      <div className="mt-6 text-sm">
        {isReady ? (
          <dl className="grid grid-cols-2 gap-x-3 gap-y-1 text-grey-graphite">
            <dt className="font-medium">Format</dt>
            <dd className="font-mono uppercase">{asset!.ext}</dd>
            <dt className="font-medium">Size</dt>
            <dd className="font-mono">{asset!.sizeKb} KB</dd>
            <dt className="font-medium">Filename</dt>
            <dd className="font-mono text-xs break-all">{asset!.fileName}</dd>
          </dl>
        ) : (
          <p className="text-sm text-grey-space italic">
            Coming soon &mdash; drop the file into the relevant <code className="px-1 py-0.5 bg-grey-cloud rounded text-xs not-italic">/public/assets</code> folder.
          </p>
        )}
      </div>

      <div className="mt-auto pt-6">
        {isReady ? (
          <a
            href={asset!.href}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-aqualogic-ink text-white px-4 py-2 text-sm font-semibold hover:bg-aqualogic-cyan transition-colors focus-ring focus-visible:ring-aqualogic-cyan"
          >
            Download
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-xl bg-grey-cloud text-grey-space px-4 py-2 text-sm font-semibold">
            Not yet available
          </span>
        )}
      </div>
    </div>
  );
}
