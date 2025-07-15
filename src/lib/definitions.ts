export interface Post {
  title: string;
  description: string;
  publishedAt: string;
  body: any[];
  author: {
    name: string;
  };
  slug: {
    current: string;
  };
}
