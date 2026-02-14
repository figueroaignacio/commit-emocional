import { formatDate } from '@/lib/utils';
import { type Post } from '@/payload-types';
import Link from 'next/link';

interface PostCardProps extends Pick<
  Post,
  'slug' | 'featured' | 'title' | 'description' | 'createdAt'
> {}

export function PostCard({ slug, title, description, createdAt }: PostCardProps) {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="space-y-3 hover:scale-[1.02] transition-all duration-100 opacity-80 hover:opacity-100 cursor-default active:scale-[0.98]">
        <div className="py-8 px-5 bg-card rounded-xl border border-border">
          <span>{formatDate(createdAt)}</span>
          <h2 className="text-2xl mt-2 mb-3 font-semibold transition-colors ">{title}</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed font-light px-4 line-clamp-3">
          {description}
        </p>
        <div className="w-full flex justify-end">
          <span className="underline font-medium px-4">Leer más</span>
        </div>
      </div>
    </Link>
  );
}
