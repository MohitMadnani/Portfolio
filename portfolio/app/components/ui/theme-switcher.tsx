'use client';

import { useState, useEffect, startTransition } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/app/contexts/ThemeContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { cn } from '@/app/lib/utils';

export function ThemeSwitcher() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  if (!mounted) {
    // Render placeholder to prevent hydration mismatch
    return (
      <button
        className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        aria-label="Theme switcher"
        disabled
      >
        <Sun className="h-5 w-5 text-black dark:text-white" />
      </button>
    );
  }

  const getIcon = () => {
    if (theme === 'system') {
      return <Monitor className="h-5 w-5" />;
    }
    return resolvedTheme === 'light' ? (
      <Sun className="h-5 w-5" />
    ) : (
      <Moon className="h-5 w-5" />
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-black dark:text-white"
          aria-label="Theme switcher"
        >
          {getIcon()}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className={cn(
            "flex items-center gap-2",
            theme === 'light' && "bg-zinc-100 dark:bg-zinc-800"
          )}
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
          {theme === 'light' && (
            <span className="ml-auto text-xs">✓</span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className={cn(
            "flex items-center gap-2",
            theme === 'dark' && "bg-zinc-100 dark:bg-zinc-800"
          )}
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
          {theme === 'dark' && (
            <span className="ml-auto text-xs">✓</span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className={cn(
            "flex items-center gap-2",
            theme === 'system' && "bg-zinc-100 dark:bg-zinc-800"
          )}
        >
          <Monitor className="h-4 w-4" />
          <span>System</span>
          {theme === 'system' && (
            <span className="ml-auto text-xs">✓</span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

