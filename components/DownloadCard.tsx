import type { AssetFile } from '@/lib/assets';

type Props = {
  asset?: AssetFile;
  title: string;
  description?: string;
  comingSoon?: boolean;
};

const IMAGE_EXTS = new Set(['svg', 'png', 'jpg', 'jpeg', 'webp', 'gif', 'avif']);

function needsDarkPreview(fileName: string): boolean {
  const f = fileName.toLowerCase();
  // Artworks designed for dark surfaces would disappear on a light preview.
  return (
    f.includes('white') ||
    f.includes('reverse') ||
    f.includes('on-ink') ||
    f.includes('on-dark') ||
    f.includes('on-black')
  );
}

function previewLabel(ext: string): string {
  const map: Record<string, string> = {
    pdf: 'PDF',
    pptx: 'Slides',
    ppt: 'Slides',
    docx: 'Document',
    doc: 'Document',
    zip: 'Archive',
    eps: 'EPS',
    ai: 'Adobe Illustrator',
    psd: 'Photoshop',
    indd: 'InDesign'
  };
  return map[ext.toLowerCase()] ?? ext.toUpperCase();
}

export function DownloadCard({ asset, title, description, comingSoon }: Props) {
  const isReady = !!asset && !comingSoon;
  const isImage = !!asset && IMAGE_EXTS.has(asset.ext.toLowerCase());
  const dark = !!asset && needsDarkPreview(asset.fileName);

  return (
    <div className="card flex flex-col h-full">
      {isReady && (
        <div
          className={`-mx-6 -mt-6 mb-5 h-40 rounded-t-2xl flex items-center justify-center overflow-hidden ${
            dark ? 'bg-aqualogic-ink' : 'bg-grey-cloud/60'
          }`}
        >
          {isImage ? (
            <img
              src={asset!.href}
              alt=""
              className="max-h-[80%] max-w-[80%] object-contain"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-grey-graphite">
              <span className="font-mono text-3xl font-bold text-aqualogic-ink uppercase">
                {asset!.ext}
              </span>
              <span className="text-xs uppercase tracking-widest">{previewLabel(asset!.ext)}</span>
            </div>
          )}
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="h-sub text-aqualogic-ink">{title}</h3>
          {description && <p className="text-sm text-grey-graphite mt-2">{description}</p>}
        </div>
        {asset?.variant && <span className="pill shrink-0">{asset.variant}</span>}
      </div>

      <div className="mt-5 text-sm">
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
