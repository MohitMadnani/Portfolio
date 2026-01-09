'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { portfolioData } from '../data/portfolio-data';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import Image from 'next/image';

export default function ProjectsPage() {
  const projects = portfolioData.projects;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      <main className="flex-1 px-4 sm:px-6 md:px-8 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center animate-fade-in-up"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Cool things <span className="text-primary">I&apos;ve built</span>
          </h1>

          {/* Projects Grid - 2 columns on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-border bg-card hover:border-primary/50 transition-all animate-fade-in-up overflow-hidden flex flex-col"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Project Image */}
                {project.image && (
                  <div className="relative w-full h-32 sm:h-36 md:h-40 bg-accent overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                {/* Project Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  {/* Project Title */}
                  <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                    {!project.image && (
                      <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-accent flex items-center justify-center">
                        <FolderGit2 className="w-4 h-4 text-primary" />
                      </div>
                    )}
                    <h2 className="text-sm sm:text-base font-bold group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h2>
                  </div>
                  
                  {/* Description as bullet points */}
                  <ul className="space-y-1 mb-3 sm:mb-4 flex-1">
                    {project.description.split('. ').filter(s => s.trim()).slice(0, 2).map((point, pointIdx) => (
                      <li key={pointIdx} className="flex gap-2 text-[11px] sm:text-xs text-muted leading-relaxed">
                        <span className="text-primary mt-0.5 shrink-0">•</span>
                        <span>{point.trim().endsWith('.') ? point.trim() : `${point.trim()}.`}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                    {project.tech.slice(0, 4).map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-medium bg-accent text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-muted">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto">
                    {project.link && project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-foreground hover:text-primary transition-colors py-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        View Deployed
                      </a>
                    )}
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-foreground hover:text-primary transition-colors py-1"
                      >
                        <Github className="w-3 h-3" />
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {projects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted">No projects yet.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
