import { formatDate } from '@/lib/utils';
import type { Post } from '@/payload-types';
import { AnimateIn } from './animate-in';
import { BackButton } from './back-button';

interface PostHeaderProps extends Pick<Post, 'title' | 'description' | 'createdAt'> {}

export function PostHeader({ description, title, createdAt }: PostHeaderProps) {
  return (
    <AnimateIn variant="fadeLeft">
      <div className="prose-container space-y-4 border-border border-b pb-4">
        <BackButton />
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">{title}</h1>
          {description ? (
            <p className="text-muted-foreground font-light text-pretty leading-relaxed">
              {description}
            </p>
          ) : null}
        </div>
        <span className="font-light">Escrito por Nacho el {formatDate(createdAt)}</span>
      </div>
    </AnimateIn>
  );
}
