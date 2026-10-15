import React from 'react';
import { ArrowDown, FileDown, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/profile';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Location & Status Line */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-6">
          <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
          <span>{profile.location}</span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="text-slate-600 dark:text-slate-300">Open to Opportunities</span>
        </div>

        {/* Name & Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
          {profile.name}
        </h1>

        <p className="mt-4 text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-200 tracking-tight">
          Software Developer <span className="text-slate-300 dark:text-slate-600 font-light">|</span> Full-Stack & Systems
        </p>

        {/* Narrative Description */}
        <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
          I build practical, performant software—ranging from database-driven web platforms and computer vision systems to low-level hardware emulation.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, 'projects')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 transition-colors shadow-xs"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={profile.resumeUrl}
            download="Tushar_Wati_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </a>
        </div>

        {/* Clean Direct Social Links */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-5 text-sm">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span className="font-mono text-xs">GitHub</span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span className="font-mono text-xs">LinkedIn</span>
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="font-mono text-xs">{profile.email}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
