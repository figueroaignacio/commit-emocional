// Components
import { Calendar, PenBox, User2 } from 'lucide-react';

// Utils
import { formatDate } from '@/lib/utils';

// Types
import type { Post } from '@/payload-types';

interface PostHeaderProps extends Pick<Post, 'title' | 'description' | 'createdAt' | 'updatedAt'> {}

export function PostHeader({ description, title, createdAt, updatedAt }: PostHeaderProps) {
  const info = [
    {
      icon: <User2 size={14} />,
      text: 'Autor: Ignacio Figueroa - Desarrollador de COEM',
    },
    {
      icon: <Calendar size={14} />,
      text: `Publicado: ${formatDate(createdAt)}`,
    },
    {
      icon: <PenBox size={14} />,
      text: `Actualizado: ${formatDate(updatedAt)}`,
    },
  ];

  return (
    <div className="prose-container space-y-4 border-border border-b pb-4">
      <div className="space-y-4">
        <h1 className="text-3xl font-light tracking-tight text-neutral-900">{title}</h1>
        {description ? (
          <p className="text-neutral-500 font-light text-pretty leading-relaxed">{description}</p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-light">
        <span>Ignacio Figueroa</span>
        <span>·</span>
        <span>{formatDate(createdAt)}</span>
        <span>·</span>
        <span>Actualizado {formatDate(updatedAt)}</span>
      </div>
    </div>
  );
}
