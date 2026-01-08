'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { portfolioData } from '../data/portfolio-data';
import { GraduationCap } from 'lucide-react';
import Image from 'next/image';

export default function EducationPage() {
  const education = portfolioData.education;

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
            My <span className="text-primary">Education</span>
          </h1>

          {/* Education List */}
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-all animate-fade-in-up"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Institution Logo/Image */}
                  <div className="shrink-0">
                    {edu.image ? (
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-background border border-border">
                        <Image
                          src={edu.image}
                          alt={`${edu.institution} logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    {/* Institution */}
                    <h2 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {edu.institution}
                    </h2>
                    
                    {/* Degree and Date */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-3 text-sm text-muted">
                      <span className="text-primary font-medium">{edu.degree}</span>
                      <span className="text-foreground/30">•</span>
                      <span>{edu.period}</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-muted leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {education.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted">No education entries yet.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
