// Components
import { RichText } from '@payloadcms/richtext-lexical/react'

// Utils
import { getPostBySlug } from '@/lib/api'

// Types
import { Post } from '@/payload-types'

type PostPageProps = {
  params: {
    slug: string
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = (await getPostBySlug(params.slug)) as unknown as Post

  if (!post) {
    return <p className="text-red-600/30">Error</p>
  }

  return (
    <article className="space-y-5 my-5">
      <div className="container space-y-3 ">
        <h1 className="text-xl font-bold">{post.title}</h1>
        <p className="text-muted-foreground border-b border-border pb-5">{post.excerpt}</p>
      </div>
      <RichText data={post.content} className="container" />
    </article>
  )
}
