import React from 'react';
import { PROJECTS_DATA, SECTION_CONFIG } from '../constants';
import type { Project } from '../types';
import { Github } from './Icons';

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="text-3xl font-bold text-white mb-12 tracking-tight text-center">{title}</h2>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <SectionTitle title={SECTION_CONFIG.projects.title} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project: Project, index: number) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden flex flex-col border border-gray-700 hover:border-cyan-500 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
            <img src={project.imageUrl} alt={`Screenshot of ${project.title}`} className="w-full object-contain" />
            <div className="p-6 flex flex-col flex-grow">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                   <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Github className="w-6 h-6"/>
                  </a>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech: string) => (
                  <span key={tech} className="bg-gray-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;