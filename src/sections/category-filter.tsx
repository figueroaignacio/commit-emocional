'use client';

import { PostListLoader } from '@/components/post-card-loader';
import type { Category } from '@/payload-types';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { Categories } from './categories';

interface CategoryFilterProps {
  categories: Category[];
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');
  const [isPending, startTransition] = useTransition();

  const handleCategoryChange = (categorySlug: string | null) => {
    const params = new URLSearchParams(searchParams);

    if (categorySlug) {
      params.set('category', categorySlug);
    } else {
      params.delete('category');
    }

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-6">
        <Categories
          categories={categories}
          currentCategory={currentCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {isPending && (
        <div className="mt-8">
          <PostListLoader />
        </div>
      )}
    </div>
  );
}
