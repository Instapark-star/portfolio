import React from 'react';
import type { SkillItem } from '../types';

interface SkillsProps {
  data: {
    programming: SkillItem[];
    web: SkillItem[];
    tools: SkillItem[];
  };
}

const SkillCategory: React.FC<{ title: string, skills: SkillItem[], className?: string }> = ({ title, skills, className = '' }) => (
  <div className={`bento-item ${className}`}>
    <h3 className="font-bold text-lg mb-4 text-white">{title}</h3>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
      {skills.map((skill, index) => (
        <li 
          key={skill.name} 
          className="flex items-center text-gray-300 skill-item animate-pill"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="w-5 h-5 mr-3 flex-shrink-0 flex items-center justify-center">
            {skill.icon}
          </div>
          <span>{skill.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <section id="skills" className="py-24 fade-in-section" aria-label="Technical Skills">
       <h2 className="section-header mb-8">Skills</h2>
      <div className="bento-grid grid-cols-1 md:grid-cols-5 gap-4">
        <SkillCategory title="Programming" skills={data.programming} className="md:col-span-3"/>
        <SkillCategory title="Web Technologies" skills={data.web} className="md:col-span-2"/>
        <SkillCategory title="Tools & Platforms" skills={data.tools} className="md:col-span-5"/>
      </div>
    </section>
  );
};