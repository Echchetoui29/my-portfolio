
export interface NavLink {
  name: string;
  href: string;
}

export interface ExperienceItem {
  title: string;
  entity: string;
  date: string;
  description:string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  imageUrl: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  url: string;
}