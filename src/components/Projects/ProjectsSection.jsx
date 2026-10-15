import React, { useState, useMemo } from 'react';
import { projects, projectCategories } from '../../data/projects';
import ProjectFilter from './ProjectFilter';
import ProjectGrid from './ProjectGrid';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects based on active selection
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-mono">
              03. Featured Projects
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Selected systems, web applications, and low-level software projects.
            </p>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="mt-4 mb-8">
          <ProjectFilter
            categories={projectCategories}
            activeCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Projects Grid */}
        <ProjectGrid projects={filteredProjects} />

      </div>
    </section>
  );
}
