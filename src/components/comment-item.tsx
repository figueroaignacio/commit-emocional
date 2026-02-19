'use client';

import { Loader2, Pencil, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  image?: string | null;
}

interface Comment {
  id: number;
  content: string;
  created_at: string;
  user: User;
}

interface CommentItemProps {
  comment: Comment;
  currentUserId?: string;
  onDelete: (id: number) => void;
  onEdit: (id: number, content: string) => Promise<void>;
  isDeleting: boolean;
}

export function CommentItem({
  comment,
  onDelete,
  onEdit,
  currentUserId,
  isDeleting,
}: Omit<CommentItemProps, 'locale'>) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const [isSaving, setIsSaving] = useState(false);

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

  const isOwner = currentUserId === comment.user.id;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`group ${isDeleting ? 'opacity-50' : ''}`}
    >
      <div className="flex items-start gap-3">
        {/* <div className="shrink-0 mt-1">
          <img
            src={comment.user.image || `https://ui-avatars.com/api/?name=${comment.user.name}`}
            className="w-6 h-6 rounded-full grayscale opacity-70"
            alt={comment.user.name}
          />
        </div> */}
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

          {isOwner && !isEditing && (
            <div className="mt-2 flex items-center gap-3">
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
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
