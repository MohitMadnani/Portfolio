'use client';

import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  name: string;
  title: string;
  description: string;
}

export default function Hero({ name, title, description }: HeroProps) {
  return (
    <div className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight text-[var(--foreground)]"
          style={{ fontFamily: 'var(--font-playfair)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I&apos;m {name.split(' ')[0]}
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--foreground)]/80 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-2"
          style={{ fontFamily: 'var(--font-merriweather)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://github.com/MohitMadnani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors text-[var(--foreground)] p-2"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohit-madnani-1a1a19322/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors text-[var(--foreground)] p-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
