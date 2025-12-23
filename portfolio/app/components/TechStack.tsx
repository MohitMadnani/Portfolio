interface TechStackProps {
  techStack: string[];
}

export default function TechStack({ techStack }: TechStackProps) {
  return (
    <section id="tech" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="text-center p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <span className="font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

