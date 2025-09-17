
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, PERSONAL_INFO } from '../constants';
import type { NavLink } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId) return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#home" onClick={handleNavClick} className="flex items-center gap-3 group">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-md transition-transform group-hover:scale-105">
            <span className="text-white font-bold text-lg">{getInitials(PERSONAL_INFO.name)}</span>
          </div>
          <span className="text-xl font-bold text-gray-200 group-hover:text-cyan-400 transition-colors">
            {PERSONAL_INFO.name}
          </span>
        </a>
        <nav className="hidden md:flex space-x-6">
          {NAV_LINKS.map((link: NavLink) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={handleNavClick}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
};

export default Header;
