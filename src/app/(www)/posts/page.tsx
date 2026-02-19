import { PostListLoader } from '@/components/post-card-loader';
import { AllPosts } from '@/sections/all-posts';
import { Hero } from '@/sections/hero';
import { Suspense } from 'react';

interface PostPageProps {
  searchParams: Promise<{
    category?: string;
    page?: string;
  }>;
}

const info = {
  title: 'Un poco de todo',
  description: 'Ideas sueltas, temas variados y pensamientos que no entran en una sola categoría.',
};

export default async function PostsPage({ searchParams }: PostPageProps) {
  const { category, page } = await searchParams;
  const categorySlug = category;
  const pageNumber = page ? parseInt(page) : 1;

  return (
    <section>
      <Hero title={info.title} description={info.description} />
      <Suspense fallback={<PostListLoader />}>
        <AllPosts categorySlug={categorySlug} page={pageNumber} />
      </Suspense>
    </section>
  );
}
