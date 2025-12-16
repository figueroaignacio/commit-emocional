// Components
import { PostListLoader } from '@/components/post-card-loader';
import { Hero } from '@/sections/hero';
import { RecentPosts } from '@/sections/recent-post';
import { Suspense } from 'react';

const info = {
  title: 'Bienvenido a mi espacio personal',
  description: 'Mi nombre es Nacho, me gusta escribir de las cosas que pasan por mi cabeza.',
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
