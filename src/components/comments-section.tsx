'use client';

import { useComments } from '../hooks/use-comments';
import type { CommentsSectionProps } from '../types';
import { CommentForm } from './comment-form';
import { CommentsHeader } from './comments-header';
import { CommentsList } from './comments-list';
import { DeleteConfirmModal } from './delete-confirm-modal';
import { LoginModal } from './login-modal';

export function CommentsSection({ postId, session, onLogin }: CommentsSectionProps) {
  const {
    comments,
    newComment,
    setNewComment,
    isLoading,
    isSubmitting,
    showLoginModal,
    setShowLoginModal,
    isLoggingOut,
    isRedirecting,
    handleLogout,
    handleSocialLogin,
    handleSubmit,
    handleDelete,
    openDeleteModal,
    commentToDelete,
    deletingComment,
    setCommentToDelete,
    handleEdit,
  } = useComments({ postId, session, onLogin });

  return (
    <div className="relative">
      <div className="my-20 mx-auto">
        <CommentsHeader
          session={session}
          commentsCount={comments.length}
          isLoggingOut={isLoggingOut}
          onLogout={handleLogout}
        />
        <CommentForm
          session={session}
          newComment={newComment}
          isSubmitting={isSubmitting}
          onCommentChange={setNewComment}
          onSubmit={handleSubmit}
          onLoginClick={() => setShowLoginModal(true)}
        />
        <CommentsList
          comments={comments}
          isLoading={isLoading}
          currentUserId={session?.user.id}
          onDeleteComment={openDeleteModal}
          onEditComment={handleEdit}
          deletingId={deletingComment}
        />
        <DeleteConfirmModal
          isOpen={!!commentToDelete}
          onOpenChange={(open) => !open && setCommentToDelete(null)}
          onConfirm={handleDelete}
          isDeleting={!!deletingComment}
        />
        <LoginModal
          isOpen={showLoginModal}
          isRedirecting={isRedirecting}
          onOpenChange={setShowLoginModal}
          onLogin={handleSocialLogin}
        />
      </div>
    </div>
  );
}
