// Components
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

// Types
import { type Post } from '@/payload-types';

// Utils
import { resetDateLocal } from '@/lib/utils';

interface PostCardProps
  extends Pick<Post, 'slug' | 'featured' | 'title' | 'description' | 'publishedDate'> {}

export function PostCard({ slug, title, description, publishedDate }: PostCardProps) {
  return (
    <div className="border-l-8 border-primary rounded-md p-4">
      <div className="flex items-center justify-between mb-3">
        <Link href={`/posts/${slug}`}>
          <h3 className="text-lg font-semibold transition-colors">{title}</h3>
        </Link>
        <span className="text-xs text-muted-foreground">{resetDateLocal(publishedDate)}</span>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex w-full justify-end">
        <Link
          href={`/posts/${slug}`}
          className="inline-flex items-center gap-x-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium mb-5"
        >
          Leer más <ArrowRightIcon size={14} />
        </Link>
      </div>
    </div>
  );
}
