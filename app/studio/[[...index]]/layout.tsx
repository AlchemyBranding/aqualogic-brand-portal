export const metadata = {
  title: 'Studio — Sustec / Aqualogic',
  robots: { index: false, follow: false }
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <div className="h-full">{children}</div>;
}
