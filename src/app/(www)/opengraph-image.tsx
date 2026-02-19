import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt =
  'Commit Emocional | Te invito a leer mis boludeces. No hay reembolso por tiempo perdido.';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
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
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <h1
          style={{
            fontSize: '72px',
            fontWeight: 700,
            letterSpacing: '-0.05em',
            color: '#fafafa',
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Commit Emocional
        </h1>
        <p
          style={{
            fontSize: '32px',
            fontWeight: 400,
            color: '#a1a1aa',
            margin: 0,
            maxWidth: '800px',
            lineHeight: 1.5,
            letterSpacing: '-0.02em',
          }}
        >
          Te invito a leer mis boludeces. No hay reembolso por tiempo perdido.
        </p>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '80px',
          left: '80px',
          width: '60px',
          height: '1px',
          backgroundColor: '#fafafa',
        }}
      />
    </div>,
    {
      ...size,
    },
  );
}
