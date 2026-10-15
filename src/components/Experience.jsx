import React from 'react';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-mono">
          04. Experience
        </h2>

        {/* Experience List */}
        <div className="mt-10 space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="border-b border-slate-100 dark:border-slate-800/80 pb-8 last:border-b-0"
            >
              {/* Header: Role & Company / Date & Location */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {exp.company}
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>{exp.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Responsibilities Bullets */}
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <span className="text-slate-400 select-none">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  >
                    {tech}
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
