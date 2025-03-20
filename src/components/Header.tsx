
import React, { useState, useEffect } from 'react';
import { Menu, X, Map, Calendar, Info, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Explorer', icon: <Map className="h-4 w-4 mr-2" />, href: '#map' },
    { name: 'Planifier', icon: <Calendar className="h-4 w-4 mr-2" />, href: '#planning' },
    { name: 'À propos', icon: <Info className="h-4 w-4 mr-2" />, href: '#about' },
    { name: 'Compte', icon: <User className="h-4 w-4 mr-2" />, href: '#account' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-primary font-display text-xl font-medium animate-fade-in">
            Smart Tourism Guardian
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all-ease flex items-center"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-full hover:bg-muted/80 transition-all-ease"
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/98 z-40 pt-20 px-6 md:hidden backdrop-blur-sm transition-all duration-300 ease-in-out",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-2">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-3 rounded-lg text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all-ease flex items-center",
                menuOpen ? 'animate-fade-up' : ''
              )}
              style={{ animationDelay: `${i * 75}ms` }}
              onClick={() => setMenuOpen(false)}
            >
              {link.icon}
              <span className="ml-2">{link.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
