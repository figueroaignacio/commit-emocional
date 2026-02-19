import { formatDate, getReadingTime } from '@/lib/utils';
import type { Post } from '@/payload-types';
import { BackButton } from './back-button';

export function PostHeader({
  description,
  title,
  createdAt,
  content,
}: Pick<Post, 'title' | 'description' | 'createdAt' | 'content'>) {
  const readingTime = getReadingTime(content);

  return (
    <div className="prose-container space-y-4 border-border border-b pb-4">
      <BackButton />
      <div className="space-y-4">
        <div className="flex flex-col gap-1">
          <p className="font-light text-sm text-muted-foreground">
            Escrito por Nacho el {formatDate(createdAt)} • {readingTime}{' '}
            {readingTime === 1 ? 'minuto' : 'minutos'} de lectura (tiempo no reembolsable).
          </p>
        </div>
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
