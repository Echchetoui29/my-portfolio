
import React from 'react';
import { PERSONAL_INFO, SECTION_CONFIG } from '../constants';
import { Mail, Phone, Linkedin, Github  } from './Icons';
import { FaGitlab } from "react-icons/fa";
const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="text-3xl font-bold text-white mb-8 tracking-tight text-center">{title}</h2>
);

const Contact: React.FC = () => {
  const contactItems = [
    { icon: Mail, text: PERSONAL_INFO.contacts.email, href: `mailto:${PERSONAL_INFO.contacts.email}` },
    { icon: Phone, text: PERSONAL_INFO.contacts.phone, href: `tel:${PERSONAL_INFO.contacts.phone}` },
    { icon: Linkedin, text: 'LinkedIn', href: PERSONAL_INFO.contacts.linkedin },
    { icon: Github, text: 'GitHub', href: PERSONAL_INFO.contacts.github },
    { icon: FaGitlab, text: 'GitLab', href: PERSONAL_INFO.contacts.FaGitlab },
  ];

  return (
    <section id="contact" className="py-20 text-center">
      <SectionTitle title={SECTION_CONFIG.contact.title} />
      <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12">
        I'm open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <a 
              key={index} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
            >
              <Icon className="w-6 h-6" />
              <span className="font-medium">{item.text}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
