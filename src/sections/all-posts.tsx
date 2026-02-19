import { Pagination } from '@/components/pagination';
import { PostCard } from '@/components/post-card';
import { getCategories, getPaginatedPosts } from '@/lib/services';
import type { Category, Post } from '@/payload-types';
import { CategoryFilter } from './category-filter';

interface AllPostsProps {
  categorySlug?: string;
  page?: number;
}

export async function AllPosts({ categorySlug, page = 1 }: AllPostsProps) {
  const [postsData, categories]: [any, Category[]] = await Promise.all([
    getPaginatedPosts({ page, limit: 6, categorySlug }),
    getCategories(),
  ]);
  
  const posts = postsData.docs as Post[];
  const totalPages = postsData.totalPages;

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
        <div className="space-y-12">
          <ul className="space-y-12">
            {posts.map((post) => {
              return (
                <div key={post.id} className="space-y-5">
                  <PostCard
                    createdAt={post.createdAt}
                    title={post.title}
                    slug={post.slug}
                    description={post.description}
                  />
                </div>
              );
            })}
          </ul>
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </div>
  );
}
