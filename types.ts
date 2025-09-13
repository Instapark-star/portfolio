import type { ReactNode } from 'react';

export interface ProfileData {
  main: {
    name: string;
    titles: string[];
    shortIntro: string;
  };
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    whatsapp?: string;
  };
  about: {
    summary: string;
    languages: {
      fluent: string[];
      limited: string[];
    };
    leadership: string[];
  };
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  skills: {
    programming: SkillItem[];
    web: SkillItem[];
    tools: SkillItem[];
  };
  research: ResearchItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  github?: string;
}

export interface ProjectItem {
  title: string;
  description: string[];
  tech: string[];
  liveUrl?: string;
  sourceUrl?: string;
  imageUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
}

export interface ResearchItem {
  title: string;
  description: string;
}

export interface SkillItem {
    name: string;
    icon: ReactNode;
}

export type SectionId = 'home' | 'about' | 'experience' | 'projects' | 'skills' | 'education' | 'research' | 'contact';