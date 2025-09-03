// Types
import { type Post } from '@/payload-types'

// Components
import Link from 'next/link'

export function PostCard({
  slug,
  title,
  excerpt,
  publishedDate,
}: Pick<Post, 'slug' | 'featured' | 'title' | 'excerpt' | 'excerpt' | 'publishedDate'>) {
  return (
    <div>
      <div>
        <Link href={`/posts/${slug}`}>
          <h2>{title}</h2>
        </Link>
        <span>{publishedDate}</span>
      </div>
      <p>{excerpt}</p>
    </div>
  )
}
