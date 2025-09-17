import type { NavLink, ExperienceItem, Project, SkillCategory, Certification } from './types';
import { Briefcase, GraduationCap, Github, Linkedin, Mail, Phone, Code, Database, Cloud, Server, BrainCircuit, Wrench, Languages, Star, Link } from './components/Icons';
import { FaGitlab } from "react-icons/fa";

export const PERSONAL_INFO = {
  name: "ECHCHETOUI Tariq",
  title: "Full-Stack Developer & DevOps Enthusiast",
  profileImageUrl: "https://i.ibb.co/L95xG2M/image.png",
  objective: "Master's student in Information Systems Engineering, seeking a 6-month internship for 2026 to contribute to large-scale projects in Cloud, DevOps, or software development. I bring dual expertise in Full-Stack development and CI/CD practices, with a strong desire to create innovative and scalable digital solutions.\n\nBeyond my academic and professional pursuits, I am actively involved in the tech community. I organize technical workshops with the IT Club at FS Semlalia, provide computer literacy training with the 'Nouvelle Époque' association, and sharpen my strategic thinking skills as a member of the chess club.",
  contacts: {
    email: "tarikch456@example.com",
    phone: "+212 629159211",
    linkedin: "https://www.linkedin.com/in/echchetoui-tariq/",
    github: "https://github.com/Echchetoui29",
    FaGitlab: "https://gitlab.com/tarikch456",
  },
};

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const WORK_EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: 'Web Development Intern',
    entity: 'WebPick',
    date: 'July - Aug 2025',
    description: 'Developed an e-commerce platform with affiliate features using Laravel, Inertia.js, and Vue.js. Managed Docker containers, GitLab CI/CD pipelines, and databases (MySQL, PHPMyAdmin).',
  },
  {
    title: 'End-of-Study Project - Odoo Predictive Module',
    entity: 'Faculty of Sciences Semlalia',
    date: 'Apr - June 2024',
    description: 'Created a predictive analytics module for Odoo ERP using PHP, JavaScript, and PostgreSQL. Conducted requirements analysis and designed the system architecture.',
  },
  {
    title: 'Mathematics Teacher',
    entity: 'Gandhi Public College',
    date: 'Dec 2023 – Apr 2024',
    description: 'Taught mathematics courses as part of a government program, developing strong communication and pedagogical skills.',
  },
  {
    title: 'Call Center Agent',
    entity: 'Graham, Marrakech',
    date: 'Summer 2022',
    description: 'Worked in a call center for two months, making outbound calls and proposing sales to clients.',
  },
];

export const EDUCATION_DATA: ExperienceItem[] = [
    {
    title: 'Master in Information Systems Engineering',
    entity: 'Faculty of Sciences Semlalia, Marrakech',
    date: '2024 - 2026',
    description: 'Specializing in advanced software engineering, system architecture, and information management.',
  },
    {
    title: 'Bachelor in Mathematics and Computer Science',
    entity: 'Faculty of Sciences Semlalia, Marrakech',
    date: '2020 - 2024',
    description: 'Graduated with honors, gaining a strong foundation in algorithms, data structures, and software development principles.',
  },
  {
    title: 'Baccalauréat in Mathematical Sciences B',
    entity: 'Lycée Mohamed VI, Marrakech',
    date: '2020',
    description: 'Graduated with honors (Mention Assez Bien).',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Professional Services Platform',
    description: 'Plateforme full-stack connectant des professionnels (Spring Boot 3, Next.js, MongoDB, Kubernetes, Docker, GitLab CI/CD). Architecture microservices avec pipelines automatisés.',
    technologies: ['Spring Boot 3', 'Next.js', 'MongoDB', 'Kubernetes', 'Docker', 'GitLab CI/CD'],
    githubUrl: 'https://github.com/Echchetoui29',
    imageUrl: '/assets/profesional.png',
  },
  {
    title: 'Internship Management System',
    description: 'A web application for intern management with Spring Boot (backend) and Angular (frontend). It features profile management, evaluations, skills tracking, JWT authentication, and an interactive dashboard.',
    technologies: ['Spring Boot', 'Angular', 'JWT', 'MySQL'],
    githubUrl: 'https://github.com/Echchetoui29',
    imageUrl: '/assets/Internship.png',
  },
  {
    title: 'Intelligent Student Chatbot',
    description: 'Developed an NLP model using LSTM to answer student queries. Integrated with a web interface via Flask.',
    technologies: ['Python', 'NLP', 'TensorFlow', 'LSTM', 'Flask'],
    githubUrl: 'https://github.com/Echchetoui29',
    imageUrl: '/assets/Chatbot.png',
  },
  {
    title: 'Stock Management System',
    description: 'A stock management application built with native PHP for an academic project. Features include product tracking, stock management, sales processing, and order handling through a simple interface.',
    technologies: ['PHP', 'HTML', 'CSS', 'MySQL'],
    githubUrl: 'https://github.com/Echchetoui29',
    imageUrl: '/assets/Stock.png',
  },
    {
    title: 'Image Classification - Fashion MNIST',
    description: 'Developed a CNN model with PyTorch to classify clothing images from the Fashion-MNIST dataset. The project included data preparation, model training, and evaluation with a confusion matrix.',
    technologies: ['Python', 'PyTorch', 'CNN'],
    githubUrl: 'https://github.com/Echchetoui29',
    imageUrl: '/assets/Classification.png',
  },
];

export const SKILLS_DATA: SkillCategory[] = [
    { name: 'Programming Languages', skills: ['Java', 'Python', 'PHP', 'JavaScript'] },
    { name: 'Frameworks', skills: ['Spring Boot', 'Laravel', 'Vue.js', 'React', 'Flask'] },
    { name: 'Databases', skills: ['MySQL', 'PostgreSQL', 'MongoDB'] },
    { name: 'DevOps & Cloud', skills: ['Docker', 'Kubernetes', 'GitLab CI/CD', 'GitHub Actions', 'Jenkins', 'Terraform', 'OCI'] },
    { name: 'Systems', skills: ['Linux Admin', 'Bash Scripting'] },
    { name: 'AI / ML', skills: ['TensorFlow', 'PyTorch', 'Machine Learning', 'R'] },
    { name: 'Tools & Methodologies', skills: ['Scrum', 'Agile', 'Jira', 'Trello', 'Git'] },
    { name: 'Spoken Languages', skills: ['Arabic (Native)', 'French (Fluent)', 'English (Technical)'] },
];

export const CERTIFICATIONS_DATA: Certification[] = [
    { title: 'Engineering Practices for Building Quality Software', issuer: 'Coursera', url: 'https://coursera.org/verify/1FU2MNON4M78' },
    { title: 'AWS Cloud Technical Essentials', issuer: 'Amazon Web Services', url: '#' },
    { title: 'Career Essentials in Generative AI', issuer: 'Microsoft and LinkedIn', url: '#' },
    { title: 'Getting Started with Front-End and Web Development', issuer: 'IBM', url: 'https://coursera.org/verify/HYWHZ4BF9B0U' },
    { title: 'Front-End Development', issuer: 'IBM', url: 'https://coursera.org/verify/4HX8EF8HK2UJ' },
    { title: 'Artificial Intelligence Foundations Machine Learning', issuer: 'LinkedIn', url: '#' },
    { title: 'Git and GitHub', issuer: 'Coursera', url: '#' },
];

export const SECTION_CONFIG = {
  about: { title: "About Me" },
  experience: { title: "Work Experience" },
  education: { title: "Education" },
  projects: { title: "Key Projects" },
  skills: { title: "Technical Skills" },
  certifications: { title: "Certifications" },
  contact: { title: "Get In Touch" },
}

export const ICON_MAP = {
    work: Briefcase,
    education: GraduationCap,
    github: Github,
    linkedin: Linkedin,
    email: Mail,
    phone: Phone,
    code: Code,
    database: Database,
    cloud: Cloud,
    server: Server,
    ai_ml: BrainCircuit,
    tools: Wrench,
    languages: Languages,
    star: Star,
    link: Link,
};
