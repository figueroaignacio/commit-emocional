// Sections
import { FeaturedPosts } from '@/sections/featured-posts';
import { Hero } from '@/sections/hero';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <Hero
        description="Qué se yo… soy un pibe que piensa demasiado y escribe cuando el caos mental aprieta. Bienvenido a donde nada está del todo claro, pero algo siempre sale."
        title="Bienvenido a mi espacio personal"
      />
      <FeaturedPosts />
    </div>
  );
}
