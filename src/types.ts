export interface User {
  id: string;
  name: string;
  email: string;
  image?: string | null;
}

export interface PostComment {
  id: number;
  content: string;
  created_at: string;
  parent_id?: number | null;
  user: User;
}

export interface CommentsSectionProps {
  postId: number;
  session: { user: User } | null;
  onLogin: () => void;
}
