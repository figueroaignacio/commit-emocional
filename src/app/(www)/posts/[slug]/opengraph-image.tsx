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
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
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
        </div>
      ),
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
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
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
              color: '#737373',
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
              color: '#000000',
              lineHeight: 1.1,
              maxWidth: '900px',
            }}
          >
            {post.title}
          </div>
          {post.description && (
            <div
              style={{
                fontSize: 32,
                fontWeight: 300,
                color: '#737373',
                lineHeight: 1.4,
                maxWidth: '800px',
              }}
            >
              {post.description}
            </div>
          )}
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
              backgroundColor: '#000000',
            }}
          />
          <div
            style={{
              fontSize: 20,
              fontWeight: 300,
              color: '#737373',
              letterSpacing: '0.02em',
            }}
          >
            {formattedDate}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
