'use client';

import { ThemeSwitcher } from './ui/theme-switcher';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

export default function Navigation({ activeSection, onSectionClick }: NavigationProps) {
  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onSectionClick('home')}
            className="text-xl font-semibold hover:opacity-70 transition-opacity"
          >
            Mohit Madnani
          </button>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => onSectionClick(item === 'Home' ? 'home' : item.toLowerCase())}
                  className={`text-sm font-medium hover:opacity-70 transition-opacity ${
                    activeSection === (item === 'Home' ? 'home' : item.toLowerCase()) ? 'opacity-100' : 'opacity-60'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

