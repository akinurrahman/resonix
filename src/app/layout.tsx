import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from '@/components/providers';

import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Resonix - Digital Excellence, Delivered On Demand',
  description:
    'High-quality, efficient, and on-demand web solutions for small enterprises and organizations. Professional website design, development, and digital services.',
  keywords: [
    'web design',
    'web development',
    'digital agency',
    'UI/UX design',
    'custom web solutions',
    'business websites',
    'landing pages',
  ],
  openGraph: {
    title: 'Resonix - Digital Excellence, Delivered On Demand',
    description:
      'High-quality, efficient, and on-demand web solutions for small enterprises and organizations.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
