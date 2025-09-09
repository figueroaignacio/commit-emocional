// Components
import { PostCard } from '@/components/post-card'

// Utils
import { getPosts } from '@/lib/api'

// Types
import { Post } from '@/payload-types'

export async function AllPosts() {
  const posts = (await getPosts()) as Post[]

  return (
    <ul className="container space-y-5">
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard
            title={post.title}
            slug={post.slug}
            excerpt={post.excerpt}
            publishedDate={post.publishedDate}
          />
        </li>
      ))}
    </ul>
  )
}
