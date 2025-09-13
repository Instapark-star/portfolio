import React from 'react';
import type { EducationItem } from '../types';

interface EducationProps {
  data: EducationItem[];
}

const EducationCard: React.FC<{ item: EducationItem }> = ({ item }) => (
    <div className="bento-item">
        <p className="text-sm font-medium text-gray-400">{item.period}</p>
        <h3 className="mt-1 font-bold text-lg text-white">{item.degree}</h3>
        <p className="text-gray-300">{item.institution}, {item.location}</p>
        <p className="mt-2 text-sm text-gray-400 font-medium">{item.details}</p>
    </div>
);

export const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <section id="education" className="py-24 fade-in-section" aria-label="Education">
      <h2 className="section-header mb-8">Education</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, index) => <EducationCard key={index} item={item} />)}
      </div>
    </section>
  );
};