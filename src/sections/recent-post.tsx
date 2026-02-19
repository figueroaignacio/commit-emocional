import { PostCard } from '@/components/post-card';
import { getRecentPosts } from '@/lib/services';
import { type Post } from '@/payload-types';

export async function RecentPosts() {
  const recentPosts: Post[] = await getRecentPosts();

  return (
    <section className="min-h-[20lvh]">
      <h2 className="my-12">Publicaciones recientes</h2>
      <ul className="space-y-12">
        {recentPosts.map((post) => (
          <li key={post.id}>
            <PostCard
              title={post.title}
              slug={post.slug}
              description={post.description}
              createdAt={post.createdAt}
              content={post.content}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
