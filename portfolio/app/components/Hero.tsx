'use client';

import { ArrowRight } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
  onSectionClick: (section: string) => void;
}

export default function Hero({ name, title, onSectionClick }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hello, I&apos;m {name}.
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-zinc-600 dark:text-zinc-400">
          {title}
        </p>
        <button
          onClick={() => onSectionClick('projects')}
          className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity group"
        >
          View my work
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

