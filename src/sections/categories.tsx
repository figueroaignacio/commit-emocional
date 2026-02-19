import { cn } from '@/lib/cn';
import type { Category } from '@/payload-types';
import { motion } from 'framer-motion';

interface CategoriesProps {
  categories: Category[];
  currentCategory: string | null;
  onCategoryChange: (categorySlug: string | null) => void;
}

export function Categories({ categories, currentCategory, onCategoryChange }: CategoriesProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => onCategoryChange(null)}
        className={cn(
          'relative px-4 py-2 text-sm font-medium transition-colors rounded-full z-10',
          !currentCategory
            ? 'text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        {!currentCategory && (
          <motion.div
            layoutId="activeCategory"
            className="absolute inset-0 bg-primary rounded-full -z-10"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
        Todas
      </button>

      {categories.map((category) => {
        const isSelected = currentCategory === category.slug;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.slug)}
            className={cn(
              'relative px-4 py-2 text-sm font-medium transition-colors rounded-full z-10',
              isSelected
                ? 'text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {isSelected && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-primary rounded-full -z-10"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
