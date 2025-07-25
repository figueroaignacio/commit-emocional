export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    title,
    description,
    publishedAt,
    body,
    categories[]->{
      title
    },
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
    slug,
    categories[]->{
      title
    }
  }
`;

export const pinnedPostsQuery = `
  *[_type == "post" && defined(slug) && pinned == true] | order(publishedAt desc){
    title,
    description,
    publishedAt,
    pinned,
    slug,
    categories[]->{
      title
    }
  }
`;
