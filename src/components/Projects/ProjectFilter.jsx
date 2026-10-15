import React from 'react';

export default function ProjectFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
              isActive
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-medium'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
