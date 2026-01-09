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
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto text-center w-full">
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 text-muted mb-3 sm:mb-4">
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="text-xs sm:text-sm">London, United Kingdom</span>
            </div>
            
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Hi, I&apos;m{' '}
              <span className="text-primary">{name}</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-muted mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed px-2">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 sm:mb-8 px-4 sm:px-0">
              <Link
                href="/projects"
                className="w-full sm:w-auto px-6 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity text-sm text-center"
              >
                View Projects
              </Link>
              <a
                href={`mailto:${contact.email}`}
                className="w-full sm:w-auto px-6 py-3 bg-transparent border border-border text-foreground rounded-full font-medium hover:bg-card transition-colors text-sm text-center"
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
