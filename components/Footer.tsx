
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="container mx-auto py-6 px-4 text-center text-gray-500">
        <p>&copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
        <p className="text-sm mt-1">Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
