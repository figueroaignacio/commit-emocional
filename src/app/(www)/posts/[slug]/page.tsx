export const dynamic = 'force-dynamic';
export const revalidate = 3600;

import { AnimateIn } from '@/components/animate-in';
import { PostHeader } from '@/components/post-header';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { getPostBySlug, getPosts } from '@/lib/services';
import type { Post } from '@/payload-types';
import type { Metadata } from 'next';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
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

export async function generateStaticParams() {
  const posts: Post[] = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
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
      <AnimateIn variant="fadeUp" delay={0.2}>
        <RichText data={post.content} className="prose prose-container" />
      </AnimateIn>
    </article>
  );
}
