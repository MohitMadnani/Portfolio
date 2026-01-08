'use client';

import Link from 'next/link';
import Navigation from './components/Navigation';
import { portfolioData } from './data/portfolio-data';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Home() {
  const { name, description } = portfolioData.personal;
  const { contact } = portfolioData;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      {/* Hero Section - Centered */}
      <main className="flex-1 flex items-center justify-center px-6 sm:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 text-muted mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">London, United Kingdom</span>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Hi, I&apos;m{' '}
              <span className="text-primary">{name}</span>
            </h1>
            
            <p className="text-base sm:text-lg text-muted mb-8 max-w-lg mx-auto leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Link
                href="/projects"
                className="px-6 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity text-sm"
              >
                View Projects
              </Link>
              <a
                href={`mailto:${contact.email}`}
                className="px-6 py-3 bg-transparent border border-border text-foreground rounded-full font-medium hover:bg-card transition-colors text-sm"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              {contact.github && (
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-colors"
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
                  className="text-muted hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
