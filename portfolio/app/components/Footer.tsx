'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

export default function Footer() {
  const { contact, personal } = portfolioData;

  return (
    <footer className="bg-background py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Social Links */}
        <div className="flex items-center gap-4">
          {contact.github && (
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="text-muted hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Built by */}
        <p className="text-sm text-muted">
          Built by {personal.name}
        </p>
      </div>
    </footer>
  );
}
