import React from 'react';
import type { ProfileData } from '../types';

interface AboutProps {
  data: ProfileData['about'];
}

export const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section id="about" className="py-24 fade-in-section" aria-label="About me">
      <h2 className="section-header mb-8">About</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <p className="text-lg text-gray-300 leading-relaxed">{data.summary}</p>
        </div>
        <div className="md:col-span-2 space-y-8">
            <div>
                <h3 className="text-base font-bold text-white mb-3">Leadership & Activities</h3>
                <ul className="text-gray-300 space-y-2">
                    {data.leadership.map((item, index) => 
                      <li key={index} className="flex items-start">
                        <svg className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span>{item}</span>
                      </li>
                    )}
                </ul>
            </div>
            <div>
                <h3 className="text-base font-bold text-white mb-3">Languages</h3>
                <p className="text-gray-300"><span className="font-medium text-white">Fluent:</span> {data.languages.fluent.join(', ')}</p>
                <p className="text-gray-300"><span className="font-medium text-white">Limited:</span> {data.languages.limited.join(', ')}</p>
            </div>
        </div>
      </div>
    </section>
  );
};