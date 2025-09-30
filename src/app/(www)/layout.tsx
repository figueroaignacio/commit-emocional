import React from 'react';

// Components
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

// Font
import { fontSans } from '@/lib/font';

// Styles
import '@/css/globals.css';

export const metadata = {
  description:
    'Escribo para ponerle palabras a lo que me pesa, me inspira o me transforma. Y si en el camino, le sirve a alguien más, entonces habrá valido el doble.',
  title: 'Commit Emocional',
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={`${fontSans.className}`}>
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
