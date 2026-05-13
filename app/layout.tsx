import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sustec Group Brand Portal',
  description:
    'The working brand bible for Sustec Group and its operating businesses, including Aqualogic. For internal teams only.',
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-white text-grey-phantom antialiased">{children}</body>
    </html>
  );
}
