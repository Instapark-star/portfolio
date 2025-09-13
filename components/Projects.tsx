import React, { useState } from 'react';
import type { ProjectItem } from '../types';
import {
    IconReact,
    IconNode,
    IconExpress,
    IconSocketIO,
    IconGithub,
    IconJavaScript,
    IconFirebase,
    IconPenTool,
    IconLightbulb,
    IconStrategy,
} from './SkillIcons';

const techIconMap: { [key: string]: React.ReactNode } = {
  'React': <IconReact />,
  'Node.js': <IconNode />,
  'Express': <IconExpress />,
  'WebSocket': <IconSocketIO />,
  'GitHub Pages': <IconGithub />,
  'JavaScript': <IconJavaScript />,
  'Firebase': <IconFirebase />,
  'UI/UX Design': <IconPenTool />,
  'Concept': <IconLightbulb />,
  'Product Strategy': <IconStrategy />,
};


const LinkIcon: React.FC<{ href: string, ariaLabel: string, children: React.ReactNode }> = ({ href, ariaLabel, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors group/link">
        {children}
    </a>
);

const ProjectCard: React.FC<{ item: ProjectItem; selectedTech: string | null; handleTechClick: (tech: string) => void; }> = ({ item, selectedTech, handleTechClick }) => (
  <div className="bento-item group p-4 md:p-6">
    <div className="grid grid-cols-1 md:grid-cols-8 gap-x-8 gap-y-4 items-start">
      {item.imageUrl && (
          <div className="md:col-span-3 w-full aspect-video rounded-lg overflow-hidden border" style={{borderColor: 'var(--border-color)'}}>
              <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
          </div>
      )}
      
      <div className={item.imageUrl ? "md:col-span-5" : "md:col-span-8"}>
        <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
        <ul className="text-gray-300 list-disc pl-5 space-y-1 text-base leading-relaxed">
            {item.description.map((desc, index) => <li key={index}>{desc}</li>)}
        </ul>
        <div className="mt-4">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2">Technologies</h4>
            <ul className="flex flex-wrap" aria-label="Technologies used">
                {item.tech.map((tech, index) => (
                    <li key={tech} className="mr-1.5 mt-2 animate-pill" style={{ animationDelay: `${index * 100}ms` }}>
                        <button
                            type="button"
                            onClick={() => handleTechClick(tech)}
                            className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 transition-colors duration-200 ${
                                selectedTech === tech
                                ? 'bg-green-400/20 text-green-200 ring-1 ring-inset ring-green-400'
                                : 'bg-green-400/10 text-green-300 hover:bg-green-400/20'
                            }`}
                        >
                           {techIconMap[tech] && (
                             <span className="w-3.5 h-3.5 mr-1.5">
                               {techIconMap[tech]}
                             </span>
                           )}
                           {tech}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
      
        {(item.liveUrl || item.sourceUrl) &&
          <div className="mt-6 flex items-center space-x-6">
              {item.liveUrl && (
                  <LinkIcon href={item.liveUrl} ariaLabel={`Live demo for ${item.title}`}>
                      <svg className="w-4 h-4 mr-1.5 transition-transform duration-300 ease-in-out group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      <span>Live Demo</span>
                  </LinkIcon>
              )}
              {item.sourceUrl && (
                  <LinkIcon href={item.sourceUrl} ariaLabel={`Source code for ${item.title}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 mr-1.5 transition-transform duration-300 ease-in-out group-hover/link:rotate-6" aria-hidden="true">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                      </svg>
                      <span>Source</span>
                  </LinkIcon>
              )}
          </div>
        }
      </div>
    </div>
  </div>
);


export const Projects: React.FC<{ data: ProjectItem[] }> = ({ data }) => {
    const [selectedTech, setSelectedTech] = useState<string | null>(null);

    const handleTechClick = (tech: string) => {
        setSelectedTech(currentTech => (currentTech === tech ? null : tech));
    };

    const filteredProjects = selectedTech
        ? data.filter(project => project.tech.includes(selectedTech))
        : data;

    return (
        <section id="projects" className="py-24 fade-in-section" aria-label="Selected projects">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                <h2 className="section-header">Projects</h2>
                {selectedTech && (
                    <button 
                        onClick={() => handleTechClick(selectedTech)}
                        className="flex items-center text-sm text-green-400 hover:text-green-300 bg-green-500/10 hover:bg-green-500/20 px-3 py-1 rounded-full transition-colors"
                    >
                        <span>Filtering by: <strong>{selectedTech}</strong></span>
                        <svg className="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </button>
                )}
            </div>
            <div className="space-y-8">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((item, index) => (
                        <ProjectCard 
                            key={index} 
                            item={item} 
                            selectedTech={selectedTech} 
                            handleTechClick={handleTechClick}
                        />
                    ))
                ) : (
                    <div className="bento-item text-center py-12">
                         <p className="text-lg text-gray-300">No projects found for "{selectedTech}".</p>
                         <p className="mt-2 text-sm text-gray-500">
                             Click the filter tag again to see all projects.
                         </p>
                    </div>
                )}
            </div>
        </section>
    );
};