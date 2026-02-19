export const revalidate = 3600;
export const dynamic = 'force-dynamic';

import { CommentCTA } from '@/components/comment-cta';
import { CommentsWithAuth } from '@/components/comments-with-auth';
import { PostHeader } from '@/components/post-header';
import { getPostBySlug, getPosts } from '@/lib/services';
import type { Post } from '@/payload-types';
import { RichText } from '@payloadcms/richtext-lexical/react';
import type { Metadata } from 'next';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const posts: Post[] = await getPosts();
    return posts.map((post) => ({ slug: post.slug }));
  } catch (error) {
    console.warn('Could not fetch posts during build:', error);
    return [];
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post: Post = await getPostBySlug(slug);

  if (!post) {
    return <p className="text-red-600/30">Error</p>;
  }

  return (
    <article className="space-y-5 my-5">
      <PostHeader
        description={post.description ?? ''}
        title={post.title}
        createdAt={post.createdAt}
      />
      <RichText data={post.content} className="prose prose-container" />
      <CommentCTA />
      <CommentsWithAuth postId={post.id} slug={slug} />
    </article>
  );
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post: Post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Publicación no encontrada | Commit Emocional',
      description: 'La publicación que estás buscando no existe o fue eliminada.',
    };
  }

  const title = `${post.title} | Commit Emocional`;
  const description =
    post.description ??
    'Reflexiones que inspiran, sanan y transforman. Un espacio donde las palabras cobran vida.';

  const url = `https://commitemocional.com/post/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Commit Emocional',
      type: 'article',
      locale: 'es_AR',
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: ['Ignacio Figueroa'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@ignaciofigueroa',
    },
  };
}
