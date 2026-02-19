'use client';

import { siteConfig } from '@/lib/config';
import Link from 'next/link';

interface ShareButtonsProps {
  slug: string;
  title: string;
}

export function ShareButtons({ slug, title }: ShareButtonsProps) {
  const url = `${siteConfig.url}/posts/${slug}`;

  const shareLinks = [
    {
      name: 'Whatsapp',
      url: `https://wa.me/?text=${encodeURIComponent(
        `Che, leé esto que te va a volar la peluca: "${title}" ${url}`,
      )}`,
      color: 'hover:text-green-500',
    },
    {
      name: 'X',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `Acabo de leer esto de Commit Emocional y 🤯.\n\n"${title}"\n\n${url}`,
      )}`,
      color: 'hover:text-foreground',
    },
    {
      name: 'Reddit',
      url: `https://www.reddit.com/submit?url=${encodeURIComponent(
        url,
      )}&title=${encodeURIComponent(title)}`,
      color: 'hover:text-orange-600',
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: 'hover:text-blue-600',
    },
  ];

  return (
    <div className="flex items-center gap-4 my-8 border-t border-b border-border py-6">
      <span className="text-sm font-medium text-muted-foreground">Hacé viral mis crisis:</span>
      <div className="flex gap-4">
        {shareLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-muted-foreground transition-colors font-medium text-sm ${link.color}`}
            aria-label={`Compartir en ${link.name}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
