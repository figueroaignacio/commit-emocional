// Types
import { Category } from '@/payload-types';

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
        className={`px-4 py-1 rounded-full text-xs font-medium transition-colors
          ${
            !currentCategory
              ? 'bg-primary text-white'
              : 'bg-muted text-muted-foreground hover:bg-accent'
          }
        `}
      >
        Todas
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.slug)}
          className={`px-4 py-1 rounded-full text-xs font-medium transition-colors
            ${
              currentCategory === category.slug
                ? 'bg-primary text-white'
                : 'bg-muted text-muted-foreground hover:bg-accent'
            }
          `}
        >
          {category.name}
        </button>
      ))}
    </>
  );
}
