'use client';

import { Loader2, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';

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
  isDeleting: boolean;
}

export function CommentItem({
  comment,
  onDelete,
  currentUserId,
  isDeleting,
}: Omit<CommentItemProps, 'locale'>) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
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
          <p className="text-base text-foreground/90 leading-relaxed whitespace-pre-wrap wrap-break-word">
            {comment.content}
          </p>
          {isOwner && (
            <div className="mt-2">
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
