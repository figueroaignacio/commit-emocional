// Components
import { AllPosts } from '@/sections/all-posts';
import { Hero } from '@/sections/hero';

interface ArticlesPageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const { category } = await searchParams;
  const categorySlug = category;

  return (
    <section>
      <Hero
        title="Todos los Artículos"
        description="Todo lo que escribí entre mates cuando no sabía si necesitaba terapia, un abrazo o simplemente volcarlo en palabras."
      />
      <AllPosts categorySlug={categorySlug} />
    </section>
  );
}
