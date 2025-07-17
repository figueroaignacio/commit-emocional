export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    title,
    description,
    publishedAt,
    body,
    author->{
      name
    }
  }
`;

export const allPostsQuery = `
  *[_type == "post" && defined(slug)] | order(publishedAt desc){
    title,
    description,
    publishedAt,
    pinned,
    slug
  }
`;

export const pinnedPostsQuery = `
  *[_type == "post" && defined(slug) && pinned == true] | order(publishedAt desc){
    title,
    description,
    publishedAt,
    pinned,
    slug
  }
`;
