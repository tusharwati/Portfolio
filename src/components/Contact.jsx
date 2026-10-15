import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/profile';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        
        {/* Section Title */}
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-mono">
          07. Contact
        </h2>

        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-xl">
          I am currently open to software engineering opportunities, campus placements, and internships.
        </p>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-xl">
          Whether you want to discuss a software role, collaboration, or have a question about one of my projects, feel free to reach out.
        </p>

        {/* Contact Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 text-sm font-medium transition-colors shadow-xs"
          >
            <Mail className="w-4 h-4" />
            <span>Say Hello</span>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 text-sm font-mono transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{profile.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Social channels */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-center sm:justify-start gap-6 text-sm">
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

          <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
            {profile.location}
          </span>
        </div>

      </div>
    </section>
  );
}
