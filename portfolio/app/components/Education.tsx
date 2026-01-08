'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

export default function Education() {
  const { education } = portfolioData;

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
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: 'var(--font-playfair)' }}>
            Education
          </h1>
          <p className="text-foreground/60 text-lg" style={{ fontFamily: 'var(--font-merriweather)' }}>
            My academic background and qualifications
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto space-y-12">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          {education.map((edu, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative pl-12 md:pl-20">
              {/* Timeline Dot */}
              <div className="absolute left-[11px] md:left-[27px] top-6 w-3 h-3 rounded-full bg-primary border-2 border-background ring-4 ring-primary/20 z-10"></div>

              <div className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors shadow-sm group">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>
                        {edu.institution}
                      </h3>
                      <p className="text-foreground/70 text-sm">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1 bg-secondary/50 text-foreground/80 rounded-full whitespace-nowrap">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed font-light" style={{ fontFamily: 'var(--font-merriweather)' }}>
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
