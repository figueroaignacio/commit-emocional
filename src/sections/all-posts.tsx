// Components
import { AnimateIn } from '@/components/animate-in';
import { PostCard } from '@/components/post-card';
import { CategoryFilter } from './category-filter';

// Utils
import { getCategories, getPosts } from '@/lib/services';

// Types
import type { Category, Post } from '@/payload-types';

interface AllPostsProps {
  categorySlug?: string;
}

export async function AllPosts({ categorySlug }: AllPostsProps) {
  const [posts, categories]: [Post[], Category[]] = await Promise.all([
    getPosts(categorySlug),
    getCategories(),
  ]);

  const currentCategory = categories.find((cat) => cat.slug === categorySlug);

  return (
    <div>
      <CategoryFilter categories={categories} />
      {posts.length === 0 ? (
        <div>
          <p className="text-gray-400 font-light tracking-wide">
            {categorySlug
              ? `No hay posts en la categoría "${currentCategory?.name || categorySlug}"`
              : 'No hay posts disponibles'}
          </p>
        </div>
      ) : (
        <ul className="space-y-8">
          {posts.map((post, index) => {
            const delay = 0.1 + index * 0.1;
            return (
              <div key={post.id} className="space-y-5">
                <AnimateIn variant="fadeLeft" delay={delay}>
                  <PostCard
                    createdAt={post.createdAt}
                    title={post.title}
                    slug={post.slug}
                    description={post.description}
                  />
                </AnimateIn>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}
