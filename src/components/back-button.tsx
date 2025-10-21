'use client';

import { useRouter } from 'next/navigation';

// Components
import { ArrowLeft } from 'lucide-react';

export function BackButton() {
  const router = useRouter();

  function onBack() {
    router.back();
  }

  return (
    <button
      onClick={onBack}
      className="hover:scale-110 active:scale-[0.98] transition-transform duration-100"
    >
      <ArrowLeft />
    </button>
  );
}
