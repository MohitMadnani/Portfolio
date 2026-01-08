'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/app/contexts/ThemeContext';

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    return (
      <button
        className="relative w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center"
        aria-label="Theme switcher"
        disabled
      >
        <Sun className="h-4 w-4 text-foreground" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors overflow-hidden"
      aria-label={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Sun icon */}
      <Sun 
        className={`h-4 w-4 text-foreground absolute transition-all duration-300 ${
          resolvedTheme === 'light' 
            ? 'rotate-0 scale-100 opacity-100' 
            : 'rotate-90 scale-0 opacity-0'
        }`}
      />
      {/* Moon icon */}
      <Moon 
        className={`h-4 w-4 text-foreground absolute transition-all duration-300 ${
          resolvedTheme === 'dark' 
            ? 'rotate-0 scale-100 opacity-100' 
            : '-rotate-90 scale-0 opacity-0'
        }`}
      />
    </button>
  );
}
