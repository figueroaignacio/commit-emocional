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

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${API_URL}/api/posts/?where[slug][equals]=${slug}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Error getting post by slug');

  const data = await res.json();
  return data.docs?.[0] ?? null;
}

export async function getCategories() {
  const res = await fetch(`${API_URL}/api/categories`);
  if (!res.ok) throw new Error('Error getting categories');

  const data = await res.json();

  return data.docs;
}
