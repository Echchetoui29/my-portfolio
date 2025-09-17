
import React from 'react';
import { SKILLS_DATA, SECTION_CONFIG } from '../constants';
import type { SkillCategory } from '../types';

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="text-3xl font-bold text-white mb-12 tracking-tight text-center">{title}</h2>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <SectionTitle title={SECTION_CONFIG.skills.title} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {SKILLS_DATA.map((category: SkillCategory) => (
          <div key={category.name} className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">{category.name}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill: string) => (
                <li key={skill} className="text-gray-300">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
