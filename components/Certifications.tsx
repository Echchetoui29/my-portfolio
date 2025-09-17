
import React from 'react';
import { CERTIFICATIONS_DATA, SECTION_CONFIG } from '../constants';
import type { Certification } from '../types';
import { Link } from './Icons';

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="text-3xl font-bold text-white mb-12 tracking-tight text-center">{title}</h2>
);

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20">
      <SectionTitle title={SECTION_CONFIG.certifications.title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CERTIFICATIONS_DATA.map((cert: Certification, index: number) => (
          <a 
            href={cert.url} 
            key={index}
            target="_blank" 
            rel="noopener noreferrer" 
            className="block bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 shadow-lg"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-white">{cert.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
              </div>
              <Link className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
