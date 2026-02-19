import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { siteConfig } from '@/lib/config';
import { fontSans } from '@/lib/font';
import type { Metadata } from 'next';
import '../globals.css';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={fontSans.className}>
        <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh">
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: `${siteConfig.name} | Intentando entender la vida`,
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
