import { pool } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const postId = parseInt(id, 10);

    if (isNaN(postId)) {
      return NextResponse.json({ error: 'ID de post inválido' }, { status: 400 });
    }

    const result = await pool.query(
      `
      SELECT 
        c.id, 
        c.content, 
        c.created_at, 
        c.user_id, 
        c.parent_id,
        u.name, 
        u.email, 
        u.image 
      FROM comments c 
      JOIN "user" u ON c.user_id = u.id 
      WHERE c.post_id = $1 
      ORDER BY c.created_at DESC
      `,
      [postId],
    );

    const rows = result as any[];

    const comments = rows.map((row) => ({
      id: row.id,
      content: row.content,
      created_at: row.created_at,
      parent_id: row.parent_id,
      user: {
        id: row.user_id,
        name: row.name,
        email: row.email,
        image: row.image,
      },
    }));

    return NextResponse.json({ comments });
  } catch (error: any) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Error al obtener comentarios: ' + error.message },
      { status: 500 },
    );
  }
}
