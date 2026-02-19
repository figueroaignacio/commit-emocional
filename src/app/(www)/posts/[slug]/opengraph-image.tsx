import { getPostBySlug } from '@/lib/services';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Commit Emocional';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return new ImageResponse(
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#09090b',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 300,
            letterSpacing: '-0.05em',
            color: '#000000',
            lineHeight: 1.1,
          }}
        >
          Post no encontrado
        </div>
      </div>,
      {
        ...size,
      },
    );
  }

  const formattedDate = new Date(post.createdAt).toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: '#09090b',
        padding: '80px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 300,
            letterSpacing: '0.05em',
            color: '#fafafa',
            textTransform: 'uppercase',
          }}
        >
          Commit Emocional
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 300,
            letterSpacing: '-0.05em',
            color: '#a1a1aa',
            lineHeight: 1.1,
            maxWidth: '900px',
          }}
        >
          {post.title}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '1px',
            backgroundColor: '#fafafa',
          }}
        />
        <div
          style={{
            fontSize: 20,
            fontWeight: 300,
            color: '#fafafa',
            letterSpacing: '0.02em',
          }}
        >
          {formattedDate}
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
