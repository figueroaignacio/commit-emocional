interface User {
  id: string;
  name: string;
  email: string;
  image?: string | null;
}

interface CommentFormProps {
  session: { user: User } | null;
  newComment: string;
  isSubmitting: boolean;
  onCommentChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onLoginClick: () => void;
}

export function CommentForm({
  session,
  newComment,
  isSubmitting,
  onCommentChange,
  onSubmit,
  onLoginClick,
}: Omit<CommentFormProps, 't'>) {
  return (
    <div className="mb-16">
      <div className="relative">
        <textarea
          value={newComment}
          onChange={(e) => onCommentChange(e.target.value)}
          onClick={() => !session && onLoginClick()}
          placeholder={
            session
              ? 'Escribe tu respuesta...'
              : 'Toca para iniciar sesión y participar en la discusión'
          }
          readOnly={!session}
          className="w-full min-h-[100px] p-0 bg-transparent border-0 border-b border-border resize-none focus:outline-none focus:border-foreground transition-colors text-foreground placeholder:text-muted-foreground text-base leading-relaxed"
        />
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
            {session ? (
              <div className="flex items-center gap-2">
                {/* <img
                  src={
                    session.user.image || `https://ui-avatars.com/api/?name=${session.user.name}`
                  }
                  className="w-5 h-5 rounded-full "
                  alt="avatar"
                /> */}
                <span className="text-xs text-muted-foreground">{session.user.name}</span>
              </div>
            ) : (
              <span className="text-xs text-muted-foreground">
                Debes iniciar sesión para comentar
              </span>
            )}
          </div>
          <button
            onClick={onSubmit}
            disabled={!session || isSubmitting || newComment.trim().length < 3}
            className="text-sm font-medium text-foreground hover:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Publicando...' : 'Publicar'}
          </button>
        </div>
      </div>
    </div>
  );
}
