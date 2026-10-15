import React from 'react';
import { educationList } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-mono">
          05. Education
        </h2>

        {/* Education List */}
        <div className="mt-10 space-y-6">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="border-b border-slate-100 dark:border-slate-800/80 pb-6 last:border-b-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {edu.field}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                    {edu.institution}
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>{edu.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{edu.location}</span>
                </div>
              </div>

              {edu.coursework && edu.coursework.length > 0 && (
                <div className="mt-4">
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                    Coursework:
                  </span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
