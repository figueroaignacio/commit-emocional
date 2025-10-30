// Components
import { AnimateIn } from './animate-in';
import { BackButton } from './back-button';
import { Logo } from './logo';

// Utils
import { formatDate } from '@/lib/utils';

// Types
import type { Post } from '@/payload-types';

interface PostHeaderProps extends Pick<Post, 'title' | 'description' | 'createdAt' | 'updatedAt'> {}

export function PostHeader({ description, title, createdAt, updatedAt }: PostHeaderProps) {
  return (
    <AnimateIn variant="fadeLeft">
      <div className="prose-container space-y-4 border-border border-b pb-4">
        <div className="flex  justify-between items-center">
          <BackButton />
          <Logo />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-light tracking-tight text-neutral-900">{title}</h1>
          {description ? (
            <p className="text-neutral-500 font-light text-pretty leading-relaxed">{description}</p>
          ) : null}
        </div>
        <span className="text-xs font-light">Escrito por Nacho el {formatDate(createdAt)}</span>
      </div>
    </AnimateIn>
  );
}
