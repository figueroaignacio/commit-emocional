'use client';

// Hooks
import { useRouter, useSearchParams } from 'next/navigation';

// Components
import { Categories } from './categories';

// Types
import type { Category } from '@/payload-types';

interface CategoryFilterProps {
  categories: Category[];
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  const handleCategoryChange = (categorySlug: string | null) => {
    const params = new URLSearchParams(searchParams);

    if (categorySlug) {
      params.set('category', categorySlug);
    } else {
      params.delete('category');
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="mb-12">
      <h3 className="text-sm font-light tracking-wide text-gray-500 mb-6">Filtrar por categoría</h3>
      <div className="flex flex-wrap gap-6">
        <Categories
          categories={categories}
          currentCategory={currentCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
    </div>
  );
}
