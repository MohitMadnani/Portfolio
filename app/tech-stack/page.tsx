'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { portfolioData } from '../data/portfolio-data';

// Tech categories with their items
const techCategories = [
  {
    name: 'Languages',
    items: ['JavaScript', 'Java', 'Python', 'SQL', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    name: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Spring Boot', 'FastAPI', 'Tailwind CSS', 'Pandas', 'Scikit-learn'],
  },
  {
    name: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'Redis'],
  },
  {
    name: 'Tools & Platforms',
    items: ['Docker', 'Git', 'GitHub', 'VS Code', 'Figma', 'Linux', 'Playwright'],
  },
];

export default function TechStackPage() {
  const techStack = portfolioData.techStack;

  // Filter categories to only show techs that exist in portfolioData
  const filteredCategories = techCategories.map(category => ({
    ...category,
    items: category.items.filter(item => 
      techStack.some(tech => tech.toLowerCase() === item.toLowerCase())
    ),
  })).filter(category => category.items.length > 0);

  // Get uncategorized techs
  const categorizedItems = techCategories.flatMap(c => c.items).map(t => t.toLowerCase());
  const uncategorized = techStack.filter(
    tech => !categorizedItems.includes(tech.toLowerCase())
  );

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
            My Tech <span className="text-primary">Stack</span>
          </h1>

          {/* Categories */}
          <div className="space-y-8">
            {filteredCategories.map((category, catIdx) => (
              <div 
                key={category.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(catIdx + 1) * 100}ms` }}
              >
                <h2 className="text-sm font-semibold text-muted mb-4 uppercase tracking-wider">
                  {category.name}
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {category.items.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-border bg-card hover:border-primary hover:bg-accent transition-all cursor-default group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                      <span className="font-medium text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Uncategorized */}
            {uncategorized.length > 0 && (
              <div 
                className="animate-fade-in-up"
                style={{ animationDelay: `${(filteredCategories.length + 1) * 100}ms` }}
              >
                <h2 className="text-sm font-semibold text-muted mb-4 uppercase tracking-wider">
                  Other
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {uncategorized.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-border bg-card hover:border-primary hover:bg-accent transition-all cursor-default group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                      <span className="font-medium text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
