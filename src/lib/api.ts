const API_URL =
  process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL : 'http://localhost:3000'

export async function getFeaturedPosts() {
  const res = await fetch(`${API_URL}/api/posts?featured=true`)
  const data = await res.json()

  return data.docs
}

export async function getPosts() {
  const res = await fetch(`${API_URL}/api/posts`)
  const data = await res.json()

  return data.docs
}
