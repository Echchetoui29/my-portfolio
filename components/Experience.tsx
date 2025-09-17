
import React from 'react';
import { WORK_EXPERIENCE_DATA, SECTION_CONFIG } from '../constants';
import type { ExperienceItem } from '../types';
import { Briefcase } from './Icons';

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="text-3xl font-bold text-white mb-12 tracking-tight text-center">{title}</h2>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <SectionTitle title={SECTION_CONFIG.experience.title} />
      <div className="relative border-l-2 border-gray-700 ml-6">
        {WORK_EXPERIENCE_DATA.map((item: ExperienceItem, index: number) => {
          return (
            <div key={index} className="mb-10 ml-10">
              <span className="absolute flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full -left-6 ring-4 ring-gray-900">
                <Briefcase className="w-6 h-6 text-cyan-400" />
              </span>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <time className="text-sm font-medium text-cyan-400">{item.date}</time>
                </div>
                <p className="text-md font-medium text-gray-400 mb-3">{item.entity}</p>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;