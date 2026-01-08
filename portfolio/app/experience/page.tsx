'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { portfolioData } from '../data/portfolio-data';
import { Briefcase } from 'lucide-react';
import Image from 'next/image';

export default function ExperiencePage() {
  const experiences = portfolioData.experience;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      <main className="flex-1 px-6 sm:px-8 py-28">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <h1 
            className="text-3xl sm:text-4xl font-bold mb-12 text-center animate-fade-in-up"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Where I&apos;ve <span className="text-primary">Worked</span>
          </h1>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-all animate-fade-in-up"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Company Logo/Image */}
                  <div className="shrink-0">
                    {exp.image ? (
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-background border border-border">
                        <Image
                          src={exp.image}
                          alt={`${exp.company} logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    {/* Title */}
                    <h2 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h2>
                    
                    {/* Company and Date */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4 text-sm text-muted">
                      <span className="text-primary font-medium">@ {exp.company}</span>
                      <span className="text-foreground/30">•</span>
                      <span>{exp.period}</span>
                    </div>
                    
                    {/* Description as bullet points */}
                    <ul className="space-y-2">
                      {exp.description.split('. ').filter(s => s.trim()).map((point, pointIdx) => (
                        <li key={pointIdx} className="flex gap-2 text-sm text-muted leading-relaxed">
                          <span className="text-primary mt-0.5 shrink-0">•</span>
                          <span>{point.trim().endsWith('.') ? point.trim() : `${point.trim()}.`}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {experiences.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted">No experience entries yet.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
