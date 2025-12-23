import type { Education as EducationType } from '../data/portfolio-data';

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-6 pb-8 last:pb-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">{edu.period}</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-2">{edu.institution}</p>
              <p className="text-zinc-700 dark:text-zinc-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

