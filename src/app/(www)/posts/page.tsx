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
  title: 'Archivo de pensamientos',
  description:
    'Un rejunte de ideas que sobrevivieron al borrador. Acá vas a encontrar de todo un poco, crisis existenciales, revelaciones de medianoche y alguna que otra certeza temporal, reseñas de libros, películas y series. En fin, un poco de todo.',
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
