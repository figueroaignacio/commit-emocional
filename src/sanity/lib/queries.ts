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
  *[_type == "post"]{
    slug
  }
`;
