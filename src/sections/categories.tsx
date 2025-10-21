'use client';

// Components
import { AnimateIn } from '@/components/animate-in';

// Types
import type { Category } from '@/payload-types';

interface CategoriesProps {
  categories: Category[];
  currentCategory: string | null;
  onCategoryChange: (categorySlug: string | null) => void;
}

export function Categories({ categories, currentCategory, onCategoryChange }: CategoriesProps) {
  return (
    <>
      <AnimateIn variant="fadeLeft">
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-3 py-1 text-sm font-light tracking-wide transition-colors
          ${!currentCategory ? 'text-black border-b border-black' : 'text-gray-400 hover:text-gray-600'}
          `}
        >
          Todas
        </button>
      </AnimateIn>
      {categories.map((category, index) => {
        const delay = 0.1 + index * 0.1;
        return (
          <AnimateIn variant="fadeLeft" delay={delay}>
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.slug)}
              className={`px-3 py-1 text-sm font-light tracking-wide transition-colors
            ${
              currentCategory === category.slug
                ? 'text-black border-b border-black'
                : 'text-gray-400 hover:text-gray-600'
            }
          `}
            >
              {category.name}
            </button>
          </AnimateIn>
        );
      })}
    </>
  );
}
