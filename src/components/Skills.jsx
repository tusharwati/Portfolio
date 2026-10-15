import React from 'react';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-mono">
          02. Technical Skills
        </h2>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Technologies and tools I have used across production internships, academic projects, and systems research.
        </p>

        {/* Categories Grid */}
        <div className="mt-10 space-y-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="border-b border-slate-100 dark:border-slate-800/60 pb-6 last:border-b-0">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider font-mono text-xs text-slate-500 dark:text-slate-400">
                {category.title}
              </h3>
              
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
