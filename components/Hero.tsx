import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Download } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-20">
      <div className="w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-3xl text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-cyan-400 mb-6">
            {PERSONAL_INFO.title}
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            I build scalable and innovative digital solutions, bridging the gap between full-stack development and modern DevOps practices.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-500 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.contacts.cv}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <img 
            src="/assets/pro-photo.png" 
            alt="Tariq Echchetoui" 
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;