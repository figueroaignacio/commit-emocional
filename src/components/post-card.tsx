// Types
import { type Post } from '@/payload-types'

// Utils
import { resetDateLocal } from '@/lib/utils'

// Components
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

export function PostCard({
  slug,
  title,
  excerpt,
  publishedDate,
}: Pick<Post, 'slug' | 'featured' | 'title' | 'excerpt' | 'excerpt' | 'publishedDate'>) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <Link href={`/posts/${slug}`}>
          <h3 className="text-lg font-semibold transition-colors">{title}</h3>
        </Link>
        <span className="text-xs text-muted-foreground">{resetDateLocal(publishedDate)}</span>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{excerpt}</p>
      <Link
        href={`/posts/${slug}`}
        className="inline-flex items-center gap-x-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium mb-5"
      >
        Leer más <ArrowRightIcon size={14} />
      </Link>
    </div>
  )
}
