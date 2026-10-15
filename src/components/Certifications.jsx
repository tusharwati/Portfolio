import React from 'react';
import { ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications';

export default function Certifications() {
  // If no certifications or only empty placeholders, hide or render clean list
  const validCertifications = certifications.filter(c => c && c.name);

  if (validCertifications.length === 0) return null;

  return (
    <section id="certifications" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-mono">
          06. Certifications
        </h2>

        {/* Certifications List */}
        <div className="mt-8 divide-y divide-slate-100 dark:divide-slate-800">
          {validCertifications.map((cert) => (
            <div key={cert.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                  {cert.name}
                </h3>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {cert.issuer} {cert.issueDate ? `• ${cert.issueDate}` : ''}
                </div>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
