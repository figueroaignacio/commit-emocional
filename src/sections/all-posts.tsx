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
    <div className="container">
      <CategoryFilter categories={categories} />
      {posts.length === 0 ? (
        <div className="py-12">
          <p className="text-muted-foreground">
            {categorySlug
              ? `No hay posts en la categoría "${currentCategory?.name || categorySlug}"`
              : 'No hay posts disponibles'}
          </p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 space-y-5 gap-6 mb-10">
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard
                title={post.title}
                slug={post.slug}
                description={post.description}
                publishedDate={post.publishedDate}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
