import { PostListLoader } from '@/components/post-card-loader';
import { Hero } from '@/sections/hero';
import { RecentPosts } from '@/sections/recent-post';
import { Suspense } from 'react';

const info = {
  title: 'Bienvenido a mi rincón de internet',
  description:
    'Soy Nacho. Acá escribo ideas, dudas y conclusiones que parecían buenas a las 2 a.m dentro de mi cabeza. Algunas incluso lo son. Y en otras probablemente cambie de opinión en un futuro',
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
