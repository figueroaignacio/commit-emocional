'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

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
