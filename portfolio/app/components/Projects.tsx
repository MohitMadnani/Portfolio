'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

export default function Projects() {
  const { projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0.8 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0.7, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background py-24 px-6 md:px-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: 'var(--font-playfair)' }}>
            Projects
          </h1>
          <p className="text-foreground/60 text-lg" style={{ fontFamily: 'var(--font-merriweather)' }}>
            See my past and current projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-colors group relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-semibold px-2 py-1 bg-secondary/50 text-foreground/80 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-8 font-light" style={{ fontFamily: 'var(--font-merriweather)' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" /> View Code
                      </a>
                    )}
                    {project.link && project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Visit Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
