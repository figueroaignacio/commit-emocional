import { auth } from '@/lib/auth';
import { pool } from '@/lib/db';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 });

    const { content, postId, parentId } = await request.json();
    const numericPostId = parseInt(postId, 10);
    const numericParentId = parentId ? parseInt(parentId, 10) : null;

    if (!content || !postId) {
      return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
    }

    const result = await pool.query(
      `INSERT INTO comments (content, user_id, post_id, parent_id)
       VALUES ($1, $2, $3, $4)
       RETURNING id, content, created_at, parent_id`,
      [content.trim(), session.user.id, numericPostId, numericParentId],
    );

    const newComment = (result as any[])[0];

    return NextResponse.json({
      comment: {
        ...newComment,
        user: {
          id: session.user.id,
          name: session.user.name,
          image: session.user.image,
        },
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
