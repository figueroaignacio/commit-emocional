// Components
import { AllPosts } from '@/sections/all-posts'
import { Hero } from '@/sections/hero'

export default async function ArticlesPage() {
  return (
    <section>
      <Hero
        title="Todos los Artículos"
        description="Todo lo que escribí entre mates cuando no sabía si necesitaba terapia, un abrazo o simplemente volcarlo en palabras."
      />
      <AllPosts />
    </section>
  )
}
