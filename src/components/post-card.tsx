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
    <Link href={`/posts/${slug}`}>
      <div className="space-y-3 hover:translate-x-1.5 transition-all duration-100 opacity-80 hover:opacity-100 cursor-default active:scale-[0.98]">
        <span>{formatDate(createdAt)}</span>
        <h2 className="text-2xl mt-2 mb-3 font-semibold transition-colors">{title}</h2>
        <p className="text-muted-foreground leading-relaxed font-light">{description}</p>
      </div>
    </Link>
  );
}
