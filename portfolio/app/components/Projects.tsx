'use client';

import { ArrowRight } from 'lucide-react';
import type { Project } from '../data/portfolio-data';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div key={idx} className="group">
              <div className="mb-3">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">{project.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    {tech.toUpperCase()}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                {project.link && project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity group/link"
                  >
                    Live
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
                {project.github && project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity group/link"
                  >
                    learn more
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

