'use client';

import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function CommentCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 20000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8, transition: { duration: 0.5 } }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-4 right-4 z-50 w-[90vw] max-w-sm"
        >
          <div className="relative bg-card border border-border p-4 rounded-xl shadow-2xl flex flex-col gap-2">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute -top-2 -left-2 bg-muted-foreground/20 hover:bg-muted-foreground/40 rounded-full p-1 text-muted-foreground hover:text-foreground transition-colors backdrop-blur-sm"
              aria-label="Cerrar notificación"
            >
              <X size={14} />
            </button>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                ¿Qué te pareció? <span className="text-lg animate-pulse">👉🏽👈🏽</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Si te reíste, te enojaste o te querés ir a vivir al monte, tirame un centro en los
                comentarios. No seas ortivaaaa.
              </p>
            </div>
            <div className="absolute inset-0 -z-10 bg-linear-to-tr from-primary/5 to-transparent rounded-xl pointer-events-none" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
