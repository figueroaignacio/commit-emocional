'use client';

import { useMemo } from 'react';
import type { PostComment } from '../types';
import { CommentItem } from './comment-item';

interface CommentsListProps {
  comments: PostComment[];
  isLoading: boolean;

  currentUserId?: string;
  onDeleteComment: (id: number) => void;
  onEditComment: (id: number, content: string) => Promise<void>;
  onReplyComment: (parentId: number, content: string) => Promise<void>;
  deletingId: number | null;
}

export function CommentsList({
  comments,
  isLoading,
  currentUserId,
  onDeleteComment,
  onEditComment,
  onReplyComment,
  deletingId,
}: Omit<CommentsListProps, 't' | 'locale'>) {
  const rootComments = useMemo(() => {
    const commentMap = new Map<number, PostComment & { replies: PostComment[] }>();

    comments.forEach((comment) => {
      commentMap.set(comment.id, { ...comment, replies: [] });
    });

    const roots: (PostComment & { replies: PostComment[] })[] = [];

    comments.forEach((comment) => {
      const node = commentMap.get(comment.id)!;
      if (comment.parent_id) {
        const parent = commentMap.get(comment.parent_id);
        if (parent) {
          parent.replies.push(node);
        } else {
          roots.push(node);
        }
      } else {
        roots.push(node);
      }
    });

    return roots.sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );
  }, [comments]);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2].map((n) => (
          <div key={n} className="flex gap-4 animate-pulse">
            <div className="w-10 h-10 rounded-full bg-muted" />
            <div className="flex-1 space-y-2 mt-1">
              <div className="h-3 w-24 bg-muted rounded" />
              <div className="h-10 bg-muted/50 rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (comments.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-sm font-light">
          No hay comentarios aún. Sea el primero en iniciar la conversación.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {rootComments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          currentUserId={currentUserId}
          onDelete={onDeleteComment}
          onEdit={onEditComment}
          onReply={onReplyComment}
          isDeleting={deletingId === comment.id}
          replies={comment.replies}
        />
      ))}
    </div>
  );
}
