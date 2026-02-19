const API_URL =
  process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL : 'http://localhost:3000';

export async function getFeaturedPosts() {
  const res = await fetch(`${API_URL}/api/posts?where[featured][equals]=true`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Error getting post by slug');

  const data = await res.json();

  return data.docs || [];
}

export async function getPosts(categorySlug?: string) {
  let url = `${API_URL}/api/posts`;

  if (categorySlug) {
    url += `?where[category.slug][equals]=${categorySlug}`;
  }

  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error('Error getting posts');

  const data = await res.json();

  return data.docs;
}

export async function getPaginatedPosts({
  page = 1,
  limit = 6,
  categorySlug,
}: {
  page?: number;
  limit?: number;
  categorySlug?: string;
}) {
  let url = `${API_URL}/api/posts?page=${page}&limit=${limit}`;

  if (categorySlug) {
    url += `&where[category.slug][equals]=${categorySlug}`;
  }

  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error('Error getting posts');

  const data = await res.json();

  return data;
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${API_URL}/api/posts/?where[slug][equals]=${slug}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Error getting post by slug');

  const data = await res.json();
  return data.docs?.[0] ?? null;
}

export async function getRecentPosts() {
  const posts: any[] = await getPosts();
  if (!posts || posts.length === 0) return [];

  const getTimestamp = (p: any) => {
    const dateValue =
      p.publishedAt ?? p.published_at ?? p.createdAt ?? p.created_at ?? p.date ?? null;
    const t = dateValue ? Date.parse(dateValue) : 0;
    return Number.isNaN(t) ? 0 : t;
  };

  return posts
    .slice()
    .sort((a, b) => getTimestamp(b) - getTimestamp(a))
    .slice(0, 3);
}

export async function getCategories() {
  const res = await fetch(`${API_URL}/api/categories`);
  if (!res.ok) throw new Error('Error getting categories');

  const data = await res.json();

  return data.docs;
}
