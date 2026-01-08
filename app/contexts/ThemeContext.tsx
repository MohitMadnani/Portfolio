'use client';

import { createContext, useContext, useEffect, useRef, useState, startTransition } from 'react';

type Theme = 'light' | 'dark';
type ResolvedTheme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyTheme(resolvedTheme: ResolvedTheme) {
  if (typeof window === 'undefined') return;
  const root = document.documentElement;
  if (resolvedTheme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Default to light mode
  const [theme, setThemeState] = useState<Theme>('light');
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light');
  const mountedRef = useRef(false);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    setResolvedTheme(newTheme);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }

    applyTheme(newTheme);
  };

  useEffect(() => {
    mountedRef.current = true;
    
    // Check for saved theme preference, default to light
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'light';
    
    // Update DOM immediately
    applyTheme(savedTheme);
    
    // Update theme state
    startTransition(() => {
      setThemeState(savedTheme);
      setResolvedTheme(savedTheme);
    });
  }, []);

  const value = {
    theme,
    resolvedTheme,
    setTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
