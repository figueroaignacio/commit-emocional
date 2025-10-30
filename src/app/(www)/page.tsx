// Sections
import { Loader } from '@/components/loader';
import { AllPosts } from '@/sections/all-posts';
import { Hero } from '@/sections/hero';
import { Suspense } from 'react';

const info = {
  title: 'Bienvenido a mi espacio personal',
  description: 'Qué se yo… soy un pibe que mientras toma mate, reflexiona.',
};

interface HomePageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { category } = await searchParams;
  const categorySlug = category;

  return (
    <div className="space-y-6">
      <Hero title={info.title} description={info.description} />
      <Suspense fallback={<Loader />}>
        <AllPosts categorySlug={categorySlug} />
      </Suspense>
    </div>
  );
}
