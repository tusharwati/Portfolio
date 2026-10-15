import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-12 px-4 rounded-lg border border-dashed border-slate-200 dark:border-slate-800 text-sm text-slate-500 font-mono">
        No projects found in this category.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
