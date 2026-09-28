import './globals.css';
import type { Metadata } from 'next';
import ScrollReveal from './components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Scoop N Brew | A Little Scoop of Happiness',
  description: 'Waffles, shakes, and slow sips in a corner made for good company.',
  applicationName: 'Scoop N Brew',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen scrollbar-hide">
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
