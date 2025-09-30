// Sections
import { FeaturedPosts } from '@/sections/featured-posts';
import { Hero } from '@/sections/hero';

const info = {
  title: 'Bienvenido a mi espacio personal',
  description:
    'Qué se yo… soy un pibe que a veces piensa demasiado y escribe mientras toma mate cuando el hecatombe mental aprieta. Bienvenido a donde nada está del todo claro, pero algo siempre sale.',
};

export default function HomePage() {
  return (
    <div className="space-y-6">
      <Hero title={info.title} description={info.description} />
      <FeaturedPosts />
    </div>
  );
}
