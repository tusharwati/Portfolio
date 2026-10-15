import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { GithubIcon } from '../Icons';

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const isDeveloping = project.status === 'Currently Developing' || project.status === 'In Progress';

  return (
    <article className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
      <div>
        
        {/* Header: Title, Status & Direct Links */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              {isDeveloping && (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
                  In Development
                </span>
              )}
            </div>
            
            <div className="mt-1 flex items-center gap-3 text-xs font-mono text-slate-400 dark:text-slate-500">
              <span>{project.category}</span>
              {project.date && (
                <>
                  <span>•</span>
                  <span>{project.date}</span>
                </>
              )}
            </div>
          </div>

          {/* Links (Only if present) */}
          <div className="flex items-center gap-2 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                aria-label={`Source code for ${project.title}`}
                title="Source Code"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                aria-label={`Live demo for ${project.title}`}
                title="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Short Summary */}
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {project.description}
        </p>

        {/* Features / Details */}
        {project.features && project.features.length > 0 && (
          <ul className="mt-3 space-y-1.5 text-xs text-slate-600 dark:text-slate-400 border-l-2 border-slate-200 dark:border-slate-800 pl-3">
            {project.features.slice(0, expanded ? project.features.length : 3).map((feature, fIdx) => (
              <li key={fIdx} className="leading-snug">
                • {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Expanded Description */}
        {expanded && project.detailedDescription && (
          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.detailedDescription}
          </div>
        )}

      </div>

      {/* Footer: Tech tags + Optional Expand toggle */}
      <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.detailedDescription || (project.features && project.features.length > 3)) && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <span>{expanded ? 'Less' : 'Details'}</span>
            {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        )}
      </div>
    </article>
  );
}
