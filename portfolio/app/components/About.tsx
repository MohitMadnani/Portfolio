'use client';

import type { Experience, Education } from '../data/portfolio-data';

interface AboutProps {
  experiences: Experience[];
  education: Education[];
  techStack: string[];
}

export default function About({ experiences, education, techStack }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">About</h2>
        
        <div className="mb-12">
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
            Fully committed to the philosophy of life-long learning, I'm a software developer with a deep passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development.
          </p>
          
          {experiences.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div key={idx}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-medium">{exp.title}</h4>
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">{exp.period}</span>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-2">{exp.company}</p>
                    <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {education.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-medium">{edu.degree}</h4>
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">{edu.period}</span>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-2">{edu.institution}</p>
                    <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 text-sm font-medium bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700"
              >
                {tech.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

