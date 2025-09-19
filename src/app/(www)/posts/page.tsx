// Components
import { AllPosts } from '@/sections/all-posts'
import { Hero } from '@/sections/hero'

interface ArticlesPageProps {
  searchParams: {
    category?: string
  }
}

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const categorySlug = searchParams.category

  return (
    <section>
      <Hero
        title="Todos los Artículos"
        description="Todo lo que escribí entre mates cuando no sabía si necesitaba terapia, un abrazo o simplemente volcarlo en palabras."
      />
      <AllPosts categorySlug={categorySlug} />
    </section>
  )
}
