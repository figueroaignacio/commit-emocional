import type { Category } from '@/payload-types';

interface CategoriesProps {
  categories: Category[];
  currentCategory: string | null;
  onCategoryChange: (categorySlug: string | null) => void;
}

export function Categories({ categories, currentCategory, onCategoryChange }: CategoriesProps) {
  return (
    <>
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-3 py-1 text-sm font-light tracking-wide transition-colors
          ${!currentCategory ? 'text-white border-b border-black' : 'text-gray-400 hover:text-gray-600'}
          `}
      >
        Todas
      </button>
      {categories.map((category) => {
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.slug)}
            className={`px-3 py-1 text-sm font-light tracking-wide transition-colors
            ${
              currentCategory === category.slug
                ? 'text-white border-b border-black'
                : 'text-gray-400 hover:text-gray-600'
            }
          `}
          >
            {category.name}
          </button>
        );
      })}
    </>
  );
}
