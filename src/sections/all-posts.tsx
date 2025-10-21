// Components
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
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard
                title={post.title}
                slug={post.slug}
                description={post.description}
                createdAt={post.createdAt}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
