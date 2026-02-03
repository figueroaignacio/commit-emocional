import { PostCard } from '@/components/post-card';
import { getFeaturedPosts } from '@/lib/services';
import { type Post } from '@/payload-types';

export async function FeaturedPosts() {
  const featuredPosts: Post[] = await getFeaturedPosts();

  return (
    <section className="container min-h-[20lvh]">
      <h2 className="my-4">Publicaciones destacadas</h2>
      <ul className="space-y-5">
        {featuredPosts.map((post) => (
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
    </section>
  );
}
