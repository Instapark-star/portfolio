import React from 'react';
import type { ResearchItem } from '../types';

interface ResearchProps {
  data: ResearchItem[];
}

const ResearchCard: React.FC<{ item: ResearchItem }> = ({ item }) => (
    <div className="bento-item">
      <h3 className="font-bold text-lg text-white">{item.title}</h3>
      <p className="mt-2 text-gray-300">{item.description}</p>
    </div>
);

export const Research: React.FC<ResearchProps> = ({ data }) => {
  return (
    <section id="research" className="py-24 fade-in-section" aria-label="Research and Publications">
      <h2 className="section-header mb-8">Research</h2>
      <div className="space-y-4">
        {data.map((item, index) => <ResearchCard key={index} item={item} />)}
      </div>
    </section>
  );
};