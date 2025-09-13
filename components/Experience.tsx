import React from 'react';
import type { ExperienceItem } from '../types';

interface ExperienceProps {
  data: ExperienceItem[];
}

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <div className="timeline-item group">
    <div className="dot"></div>
    <div className="transition-transform duration-300 group-hover:translate-x-1">
      <p className="text-sm font-medium text-gray-400">{item.period}</p>
      <h3 className="mt-1 font-bold text-lg text-white">{item.role} · {item.company}</h3>
      <ul className="mt-2 text-gray-300 list-disc pl-5 space-y-1">
        {item.description.map((desc, index) => <li key={index}>{desc}</li>)}
      </ul>
       {item.github && (
          <a href={item.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-sm font-medium text-white hover:text-green-500 transition-colors">
              <span>View on GitHub</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
       )}
    </div>
  </div>
);

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section id="experience" className="py-24 fade-in-section" aria-label="Work experience">
      <h2 className="section-header mb-8">Experience</h2>
      <div>
        {data.map((item, index) => <ExperienceCard key={index} item={item} />)}
      </div>
    </section>
  );
};