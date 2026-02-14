import { formatDate } from '@/lib/utils';
import type { Post } from '@/payload-types';
import { BackButton } from './back-button';

export function PostHeader({
  description,
  title,
  createdAt,
}: Pick<Post, 'title' | 'description' | 'createdAt'>) {
  return (
    <div className="prose-container space-y-4 border-border border-b pb-4">
      <BackButton />
      <div className="space-y-4">
        <p className="font-light text-sm">Escrito por Nacho el {formatDate(createdAt)}</p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">{title}</h1>
        {description ? (
          <p className="text-muted-foreground font-light text-pretty leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
