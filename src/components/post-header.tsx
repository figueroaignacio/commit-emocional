// Components
import { Calendar, PenBox, User2 } from 'lucide-react';

// Utils
import { formatDate } from '@/lib/utils';

// Types
import { type Post } from '@/payload-types';

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
    <div className="prose-container space-y-3 border-b border-border pb-5">
      <div className="space-y-3">
        <h1 className="text-xl font-bold text-primary">{title}</h1>
        {description ? <p className="text-muted-foreground ">{description}</p> : null}
      </div>
      <div className="flex flex-col flex-wrap gap-2">
        {info.map((item, idx) => (
          <div key={idx} className="flex items-center gap-x-2">
            {item.icon}
            <span className="text-muted-foreground text-xs">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
