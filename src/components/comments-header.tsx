interface User {
  id: string;
  name: string;
  email: string;
  image?: string | null;
}

interface CommentsHeaderProps {
  session: { user: User } | null;
  commentsCount: number;
  isLoggingOut: boolean;
  onLogout: () => void;
}

export function CommentsHeader({
  session,
  commentsCount,
  isLoggingOut,
  onLogout,
}: Omit<CommentsHeaderProps, 't'>) {
  return (
    <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
      <h2 className="text-lg font-medium text-foreground">
        Comentarios <span className="text-muted-foreground ml-1">{commentsCount}</span>
      </h2>
      {session && (
        <button
          onClick={onLogout}
          disabled={isLoggingOut}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {isLoggingOut ? 'Cerrando sesión...' : 'Cerrar sesión'}
        </button>
      )}
    </div>
  );
}
