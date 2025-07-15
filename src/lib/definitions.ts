export interface Post {
  title: string;
  description: string;
  publishedAt: string;
  pinned?: boolean;
  body: any[];
  author: {
    name: string;
  };
  slug: {
    current: string;
  };
}
