'use client';

import { Loader2, MessageSquare, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import type { PostComment } from '../types';

interface CommentItemProps {
  comment: PostComment;
  currentUserId?: string;
  onDelete: (id: number) => void;
  onEdit: (id: number, content: string) => Promise<void>;
  onReply: (parentId: number, content: string) => Promise<void>;
  isDeleting: boolean;
  replies?: PostComment[];
}

export function CommentItem({
  comment,
  onDelete,
  onEdit,
  onReply,
  currentUserId,
  isDeleting,
  replies = [],
}: CommentItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const [replyContent, setReplyContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isSendingReply, setIsSendingReply] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const handleSaveEdit = async () => {
    if (editContent.trim() === '' || editContent === comment.content) {
      setIsEditing(false);
      return;
    }

    setIsSaving(true);
    await onEdit(comment.id, editContent);
    setIsSaving(false);
    setIsEditing(false);
  };

  const handleSendReply = async () => {
    if (replyContent.trim().length < 3) return;

    setIsSendingReply(true);
    await onReply(comment.id, replyContent);
    setIsSendingReply(false);
    setIsReplying(false);
    setReplyContent('');
  };

  const isOwner = currentUserId === comment.user.id;

  return (
    <div className={`group ${isDeleting ? 'opacity-50' : ''}`}>
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-medium text-foreground">{comment.user.name}</span>
            <span className="text-xs text-muted-foreground/50">•</span>
            <span className="text-xs text-muted-foreground">{formatDate(comment.created_at)}</span>
          </div>
          {isEditing ? (
            <div className="space-y-2 mt-2">
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full min-h-[80px] p-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary resize-y"
              />
              <div className="flex items-center gap-2 justify-end">
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setEditContent(comment.content);
                  }}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveEdit}
                  disabled={isSaving}
                  className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-1"
                >
                  {isSaving ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Guardar'}
                </button>
              </div>
            </div>
          ) : (
            <p className="text-base text-foreground/90 leading-relaxed whitespace-pre-wrap wrap-break-word">
              {comment.content}
            </p>
          )}

          <div className="mt-2 flex items-center gap-3">
            {currentUserId && !isEditing && (
              <button
                onClick={() => setIsReplying(!isReplying)}
                className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                <MessageSquare className="w-3 h-3" />
                <span>Responder</span>
              </button>
            )}

            {isOwner && !isEditing && (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  disabled={isDeleting}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <Pencil className="w-3 h-3" />
                  <span>Editar</span>
                </button>
                <button
                  onClick={() => onDelete(comment.id)}
                  disabled={isDeleting}
                  className="text-xs text-muted-foreground hover:text-destructive transition-colors flex items-center gap-1"
                >
                  {isDeleting ? (
                    <Loader2 className="w-3 h-3 animate-spin" />
                  ) : (
                    <>
                      <Trash2 className="w-3 h-3" />
                      <span>Eliminar</span>
                    </>
                  )}
                </button>
              </>
            )}
          </div>

          {isReplying && (
            <div className="mt-3 pl-4 border-l-2 border-border/50">
              <div className="space-y-2">
                <textarea
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="Escribe tu respuesta..."
                  className="w-full min-h-[60px] p-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary resize-y"
                  autoFocus
                />
                <div className="flex items-center gap-2 justify-end">
                  <button
                    onClick={() => setIsReplying(false)}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSendReply}
                    disabled={isSendingReply || replyContent.trim().length < 3}
                    className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-1"
                  >
                    {isSendingReply ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Responder'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {replies.length > 0 && (
            <div className="mt-4 pl-4 border-l-2 border-border/50 space-y-4">
              {replies.map((reply) => (
                <CommentItem
                  key={reply.id}
                  comment={reply}
                  currentUserId={currentUserId}
                  onDelete={onDelete}
                  onEdit={onEdit}
                  onReply={onReply}
                  isDeleting={isDeleting}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
