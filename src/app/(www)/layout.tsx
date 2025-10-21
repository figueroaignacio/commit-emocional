import React from 'react';

// Font
import { fontSans } from '@/lib/font';

// Components
import { Footer } from '@/components/footer';

// Config
import { siteConfig } from '@/lib/config';

// Styles
import '@/css/globals.css';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Reflexiones que inspiran y transforman`,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  openGraph: {
    title: siteConfig.og.title,
    description: siteConfig.og.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
    images: [
      {
        url: siteConfig.og.image,
        width: 1200,
        height: 630,
        alt: siteConfig.og.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.og.title,
    description: siteConfig.og.description,
    creator: siteConfig.creator,
    images: [siteConfig.og.image],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={fontSans.className}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
