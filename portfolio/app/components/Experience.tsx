import type { Experience as ExperienceType } from '../data/portfolio-data';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-6 pb-8 last:pb-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">{exp.period}</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-2">{exp.company}</p>
              <p className="text-zinc-700 dark:text-zinc-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

