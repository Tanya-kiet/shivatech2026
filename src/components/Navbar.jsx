import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/constants';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'EVENTS', path: '/events' },
    { name: 'SCHEDULE', path: '/schedule' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'TEAM', path: '/team' },
    { name: 'CONTACT US', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#050914]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Logos */}
          <div className="flex items-center gap-3 md:gap-5">
            <a 
              href={SOCIAL_LINKS.university} 
              target="_blank" 
              rel="noopener noreferrer"
              title="Shivalik University"
              className="transition-transform hover:scale-105"
            >
              <img 
                src="/images/university_logo.png" 
                alt="Shivalik University Logo" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>
            <div className="h-6 w-[1px] bg-white/20"></div>
            <a 
              href={SOCIAL_LINKS.acm} 
              target="_blank" 
              rel="noopener noreferrer"
              title="ACM Student Chapter"
              className="transition-transform hover:scale-105"
            >
              <img 
                src="/images/acm_logo_cropped.png" 
                alt="ACM Logo" 
                className="h-9 md:h-11 w-auto object-contain"
              />
            </a>
            <div className="h-6 w-[1px] bg-white/20"></div>
            <a 
              href={SOCIAL_LINKS.cbii} 
              target="_blank" 
              rel="noopener noreferrer"
              title="CBII / iHub"
              className="transition-transform hover:scale-105"
            >
              <img 
                src="/images/cbii_logo.png" 
                alt="CBII Logo" 
                className="h-9 md:h-11 w-auto object-contain"
              />
            </a>
          </div>

          {/* Center Brand Text for Desktop */}
          <div className="hidden xl:flex flex-col items-center">
            <span className="text-[10px] tracking-[0.25em] text-red-500 font-semibold uppercase">
              TECHNOLOGY FESTIVAL
            </span>
            <span className="font-orbitron font-bold text-lg tracking-wider text-white">
              SHIVA INNOVEX
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-xs xl:text-sm font-semibold tracking-wider transition-all duration-200 rounded-md ${
                    active
                      ? 'text-red-400 bg-red-500/10 border border-red-500/30 shadow-[0_0_12px_rgba(239,68,68,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-red-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#050914]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-semibold tracking-wider rounded-lg transition-all ${
                  active
                    ? 'text-red-400 bg-red-500/10 border border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.2)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
