// Components
import Link from 'next/link';

// Types
import { type Post } from '@/payload-types';

// Utils
import { formatDate } from '@/lib/utils';

interface PostCardProps
  extends Pick<Post, 'slug' | 'featured' | 'title' | 'description' | 'createdAt'> {}

export function PostCard({ slug, title, description, createdAt }: PostCardProps) {
  return (
    <div className="space-y-3">
      <span>{formatDate(createdAt)}</span>
      <Link href={`/posts/${slug}`}>
        <h2 className="text-2xl font-light mt-2 mb-3  transition-colors">{title}</h2>
      </Link>
      <p className="text-sm text-muted-foreground leading-relaxed font-light">{description}</p>
    </div>
  );
}
