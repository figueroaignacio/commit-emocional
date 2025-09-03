// Components
import { PostCard } from '@/components/post-card'
import { Hero } from '@/sections/hero'

// Types
import { Post } from '@/payload-types'

// Utils
import { getPosts } from '@/lib/api'

export default async function ArticlesPage() {
  const posts = (await getPosts()) as Post[]

  return (
    <section>
      <Hero
        title="Todos los Artículos"
        description="Todo lo que escribí entre mates cuando no sabía si necesitaba terapia, un abrazo o simplemente volcarlo en palabras."
      />
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
    </section>
  )
}
