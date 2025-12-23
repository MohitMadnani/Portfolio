'use client';

import { createContext, useContext, useEffect, useRef, useState, startTransition } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

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
  // Always start with 'light' to ensure SSR/client match, then update after mount
  const [theme, setThemeState] = useState<Theme>('light');
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light');
  const mountedRef = useRef(false);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }

    let resolved: ResolvedTheme;
    if (newTheme === 'system') {
      resolved = getSystemTheme();
    } else {
      resolved = newTheme;
    }

    setResolvedTheme(resolved);
    applyTheme(resolved);
  };

  useEffect(() => {
    // Mark as mounted
    mountedRef.current = true;
    
    // Check for saved theme preference or default to system
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'system';
    const initialResolved = savedTheme === 'system' ? getSystemTheme() : savedTheme;
    
    // Update DOM immediately
    applyTheme(initialResolved);
    
    // Update theme state in a transition to avoid blocking
    startTransition(() => {
      setThemeState(savedTheme);
      setResolvedTheme(initialResolved);
    });
  }, []);

  // Listen for system theme changes when theme is 'system'
  useEffect(() => {
    if (theme !== 'system' || !mountedRef.current) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const newResolved = e.matches ? 'dark' : 'light';
      setResolvedTheme(newResolved);
      applyTheme(newResolved);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Always provide the context, even before mounting
  // This prevents the "must be used within ThemeProvider" error
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

