const API_URL =
  process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL : 'http://localhost:3000';

export async function getFeaturedPosts() {
  const res = await fetch(`${API_URL}/api/posts?featured=true`);
  const data = await res.json();

  return data.docs;
}

export async function getPosts(categorySlug?: string) {
  let url = `${API_URL}/api/posts`;

  if (categorySlug) {
    url += `?where[category.slug][equals]=${categorySlug}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  return data.docs;
}
export async function getPostBySlug(slug: string) {
  const res = await fetch(`${API_URL}/api/posts/?where[slug][equals]=${slug}`);

  if (!res.ok) throw new Error('ERROR');

  const data = await res.json();
  return data.docs?.[0] ?? null;
}

export async function getCategories() {
  const res = await fetch(`${API_URL}/api/categories`);
  const data = await res.json();

  return data.docs;
}
