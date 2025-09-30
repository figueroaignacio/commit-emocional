// Components
import { PostCard } from '@/components/post-card';
import { CategoryFilter } from './category-filter';

// Utils
import { getCategories, getPosts } from '@/lib/services';

// Types
import { Category, Post } from '@/payload-types';

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
      {categorySlug && (
        <div className="mb-6">
          <h2 className="font-bold mb-2">Posts en "{currentCategory?.name || categorySlug}"</h2>
        </div>
      )}
      {posts.length === 0 ? (
        <div className="py-12">
          <p className="text-muted-foreground">
            {categorySlug
              ? `No hay posts en la categoría "${currentCategory?.name || categorySlug}"`
              : 'No hay posts disponibles'}
          </p>
        </div>
      ) : (
        <ul className="space-y-5">
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
