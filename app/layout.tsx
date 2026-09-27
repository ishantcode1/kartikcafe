import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scoop N Brew | A Little Scoop of Happiness',
  description: 'Waffles, shakes, and slow sips in a corner made for good company.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen scrollbar-hide">{children}</body>
    </html>
  );
}
