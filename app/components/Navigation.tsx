'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ThemeSwitcher } from './ui/theme-switcher';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Experience', path: '/experience' },
  { label: 'Education', path: '/education' },
  { label: 'Projects', path: '/projects' },
  { label: 'Tech Stack', path: '/tech-stack' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo - Far Left */}
            <Link
              href="/"
              className="text-base sm:text-lg font-bold text-foreground hover:text-primary transition-colors truncate max-w-[160px] sm:max-w-none"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Mohit Madnani
            </Link>

            {/* Desktop Navigation - Far Right */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-muted hover:text-foreground hover:bg-card'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="ml-2 pl-2 border-l border-border">
                <ThemeSwitcher />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground hover:bg-card rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-80 border-b border-border' : 'max-h-0'
          }`}
        >
          <div className="px-6 py-4 bg-background/95 backdrop-blur-lg space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-muted hover:text-foreground hover:bg-card'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
