'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio-data';

export default function Experience() {
  const { experience } = portfolioData;

  const currentRoles = experience.filter(role => role.period.toLowerCase().includes('present'));
  const previousRoles = experience.filter(role => !role.period.toLowerCase().includes('present'));

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
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: 'var(--font-playfair)' }}>
            Experience
          </h1>
          <p className="text-foreground/60 text-lg" style={{ fontFamily: 'var(--font-merriweather)' }}>
            My professional journey and work experience
          </p>
        </motion.div>

        {currentRoles.length > 0 && (
          <motion.section variants={itemVariants} className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-foreground border-l-4 border-primary pl-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Current Roles
            </h2>
            <div className="space-y-12 border-l border-border ml-2 pl-8 md:pl-12 relative">
              {currentRoles.map((role, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[39px] md:-left-[55px] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background ring-4 ring-primary/20"></div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {role.company}
                    </h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {role.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-medium text-foreground/80 mb-4">{role.title}</h4>

                  <p className="text-foreground/70 leading-relaxed font-light whitespace-pre-line" style={{ fontFamily: 'var(--font-merriweather)' }}>
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {previousRoles.length > 0 && (
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-8 text-foreground border-l-4 border-border pl-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Previous Employment
            </h2>
            <div className="space-y-12 border-l border-border ml-2 pl-8 md:pl-12">
              {previousRoles.map((role, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[37px] md:-left-[53px] top-2 w-2 h-2 rounded-full bg-border group-hover:bg-primary transition-colors"></div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {role.company}
                    </h3>
                    <span className="text-sm font-mono text-foreground/50">
                      {role.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-medium text-foreground/80 mb-4">{role.title}</h4>

                  <p className="text-foreground/70 leading-relaxed font-light whitespace-pre-line" style={{ fontFamily: 'var(--font-merriweather)' }}>
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </motion.div>
    </div>
  );
}
