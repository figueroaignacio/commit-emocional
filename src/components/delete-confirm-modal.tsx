'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { AlertTriangle, Loader2 } from 'lucide-react';

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  isDeleting: boolean;
}

export function DeleteConfirmModal({
  isOpen,
  onOpenChange,
  onConfirm,
  isDeleting,
}: Omit<DeleteConfirmModalProps, 't'>) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="border-border border ">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-full bg-destructive/10 text-destructive">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <DialogTitle>¿Eliminar comentario?</DialogTitle>
          </div>
          <DialogDescription>
            ¿Estás seguro que quieres eliminar este comentario? Esta acción no se puede deshacer.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4 gap-2 sm:gap-0">
          <button
            onClick={() => onOpenChange(false)}
            disabled={isDeleting}
            className="btn btn-primary"
          >
            Cancelar
          </button>
          <button onClick={onConfirm} disabled={isDeleting} className="btn btn-destructive gap-2">
            {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Eliminar'}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
