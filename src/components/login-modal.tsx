import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { MessageSquare } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  isRedirecting: boolean;
  onOpenChange: (open: boolean) => void;
  onLogin: () => void;
}

export function LoginModal({
  isOpen,
  isRedirecting,
  onOpenChange,
  onLogin,
}: Omit<LoginModalProps, 't'>) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border shadow-2xl rounded-2xl">
        <DialogHeader className="pt-4 text-center items-center">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>
          <DialogTitle className="text-2xl font-bold">Iniciar sesión</DialogTitle>
          <DialogDescription className="mt-2 text-center text-muted-foreground">
            Inicia sesión para dejar un comentario
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 py-6">
          <button
            onClick={onLogin}
            disabled={isRedirecting}
            className="flex gap-2 btn btn-primary items-center justify-center"
          >
            {!isRedirecting && <GoogleIcon />}
            {isRedirecting ? (
              <>
                <span>Bancá un segundo...</span>
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
              </>
            ) : (
              'Continuar con Google'
            )}
          </button>
          <p className="text-[11px] text-center text-muted-foreground uppercase tracking-tighter">
            Al continuar, no se guardará ningún dato personal. Solo se utilizará tu nombre para
            mostrar tus comentarios.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function GoogleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 262"
      id="google"
    >
      <path
        fill="#4285F4"
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      ></path>
      <path
        fill="#34A853"
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      ></path>
      <path
        fill="#FBBC05"
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      ></path>
      <path
        fill="#EB4335"
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      ></path>
    </svg>
  );
}
