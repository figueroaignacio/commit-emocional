// Components
import { Loader } from '@/components/loader';
import { AllPosts } from '@/sections/all-posts';
import { Hero } from '@/sections/hero';
import { Suspense } from 'react';

interface PostPageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

const info = {
  title: 'De todo un poco',
  description: 'Literalmente, de todo un poco.',
};

export default async function PostsPage({ searchParams }: PostPageProps) {
  const { category } = await searchParams;
  const categorySlug = category;

  return (
    <section>
      <Hero title={info.title} description={info.description} />
      <Suspense fallback={<Loader />}>
        <AllPosts categorySlug={categorySlug} />
      </Suspense>
    </section>
  );
}
