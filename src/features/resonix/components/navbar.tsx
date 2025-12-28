'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { BRAND, NAV_LINKS } from '../constants';
import type { NavLink } from '../types';
import { ThemeToggle } from './theme-toggle';

interface ResonixNavbarProps {
  onRequestDemo: () => void;
}

export function ResonixNavbar({ onRequestDemo }: ResonixNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 border-border border-b shadow-sm backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="#hero" className="flex items-center space-x-2">
            <div className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
              {BRAND.name}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 lg:flex">
            {NAV_LINKS.map((link: NavLink) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <ThemeToggle />
            <button
              onClick={onRequestDemo}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-2.5 font-medium transition-all hover:shadow-lg"
            >
              Request a Demo
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-border bg-background/95 border-t py-4 backdrop-blur-lg lg:hidden">
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link: NavLink) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted-foreground hover:text-foreground text-left text-sm font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onRequestDemo();
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-2.5 text-center font-medium transition-all"
              >
                Request a Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
