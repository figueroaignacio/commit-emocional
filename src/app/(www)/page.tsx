import { PostListLoader } from '@/components/post-card-loader';
import { Hero } from '@/sections/hero';
import { RecentPosts } from '@/sections/recent-post';
import { Suspense } from 'react';

const info = {
  title: 'Bienvenido al despelote',
  description:
    'Soy Nacho. Acá vuelco todo lo que me hace ruido, me inspira o me quita el sueño. Algunas cosas tienen sentido, otras solo sirvieron para ahorrarme terapia. Pasá y servite, la casa invita.',
};

export default async function HomePage() {
  return (
    <div className="space-y-6">
      <Hero title={info.title} description={info.description} />
      <Suspense fallback={<PostListLoader />}>
        <RecentPosts />
      </Suspense>
    </div>
  );
}
