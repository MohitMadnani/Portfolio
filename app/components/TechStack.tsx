'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio-data';

export default function TechStack() {
  const { techStack } = portfolioData;

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
    <div className="min-h-screen bg-background py-24 px-6 md:px-12 flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: 'var(--font-playfair)' }}>
            Tech Stack
          </h1>
          <p className="text-foreground/60 text-lg" style={{ fontFamily: 'var(--font-merriweather)' }}>
            This list highlights my main technologies and tools.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-5 py-3 bg-secondary/30 backdrop-blur-sm border border-border/50 text-foreground font-medium rounded-lg text-sm md:text-base cursor-default hover:border-primary/50 hover:bg-secondary/50 transition-all"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
