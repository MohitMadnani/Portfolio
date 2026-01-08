'use client';

import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolio-data';
import { Github, Linkedin } from 'lucide-react';

export default function Home() {
  const { contact } = portfolioData;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-20">
        <div className="max-w-3xl">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight animate-fade-in-up"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Hi, I build
            <br />
            <span className="text-primary">cool things</span> on
            <br />
            the web.
          </h1>
          
          <p className="text-base sm:text-lg text-muted mb-8 max-w-lg leading-relaxed animate-fade-in-up delay-100">
            A dedicated Software Engineer passionate about creating scalable solutions and innovative applications that make a meaningful impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-10 animate-fade-in-up delay-200">
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
          <div className="flex items-center gap-4 animate-fade-in-up delay-300">
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
      </main>

      <Footer />
    </div>
  );
}
