import React from 'react';
import { PERSONAL_INFO, SECTION_CONFIG } from '../constants';

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">{title}</h2>
);


const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
       <SectionTitle title={SECTION_CONFIG.about.title} />
      <div className="max-w-4xl space-y-4">
        {PERSONAL_INFO.objective.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-400 leading-relaxed">
                {paragraph}
            </p>
        ))}
      </div>
    </section>
  );
};

export default About;