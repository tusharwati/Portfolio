import React from 'react';
import { profile } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-mono">
          01. About Me
        </h2>

        {/* Narrative */}
        <div className="mt-8 space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {profile.about.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Quick Highlights Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-slate-200 dark:border-slate-800/80">
          {profile.about.highlights.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                {item.label}
              </span>
              <span className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
                {item.value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
