import React from 'react';
import type { ProfileData } from '../types';

interface FooterProps {
    data: ProfileData['contact'];
}

const SocialIcon: React.FC<{ href: string, ariaLabel: string, children: React.ReactNode }> = ({ href, ariaLabel, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className="magnetic-button text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:scale-110 hover:-rotate-6">
        {children}
    </a>
);


export const Footer: React.FC<FooterProps> = ({ data }) => {
    return (
        <footer className="mt-24 py-8 border-t" style={{borderColor: 'var(--border-color)'}}>
            <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-0 flex justify-between items-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} Amandeep Tripathy. All Rights Reserved.</p>
                <div className="flex items-center space-x-4">
                     <SocialIcon href={data.github} ariaLabel="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM8.93 18.42c.07.14-.04.31-.22.36-.18.05-.35-.04-.42-.18-.07-.14.04-.31.22-.36.18-.05.35.04.42.18zm.89-1.28c.11.11.02.31-.19.39-.2.08-.41.02-.51-.1-.1-.12-.02-.32.19-.4.21-.07.41-.01.51.11zm1.18-1.12c.14.09.11.31-.07.46-.18.15-.39.18-.53.09-.14-.09-.11-.31.07-.46.18-.15.39-.18.53-.09zm1.31-.95c.14.11.11.34-.06.51-.17.17-.42.22-.56.11-.14-.11-.11-.34.06-.51.17-.17.42-.22.56-.11zM14.6 13.5c-.14-.04-.28.09-.32.23-.04.14.09.28.23.32.14.04.28-.09.32-.23.04-.14-.09-.28-.23-.32zm2.14-2.82c0 .8-.65 1.45-1.45 1.45s-1.45-.65-1.45-1.45.65-1.45 1.45-1.45 1.45.65 1.45 1.45zm-4.99 4.39c.04.14-.07.29-.22.33-.15.04-.3-.07-.33-.22-.04-.14.07-.29.22-.33.15-.04.3.07.33.22zm2.18-1.11c-.13-.08-.29-.03-.37.1-.08.13-.03.29.1.37.13.08.29.03.37-.1.08-.13.03-.29-.1-.37zm-6.12 3.69c-2.06-1.16-3.41-3.4-3.41-5.93C4.5 8.01 7.92 4.6 12.01 4.6c4.1 0 7.5 3.42 7.5 7.51 0 2.54-1.35 4.77-3.41 5.93-1.66.93-3.6 1.46-5.59 1.46-1.99 0-3.93-.53-5.59-1.46z"/>
                        </svg>
                    </SocialIcon>
                    {data.whatsapp && (
                        <SocialIcon href={data.whatsapp} ariaLabel="WhatsApp">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.47 14.38c-.2-.11-1.23-.6-1.42-.68-.19-.07-.33-.11-.47.11-.14.22-.54.68-.66.82-.12.14-.24.16-.44.05-.2-.11-.88-.32-1.68-1.03-.62-.56-1.04-1.25-1.19-1.47-.15-.22-.02-.34.1-.45.11-.1.24-.25.36-.38.12-.13.16-.21.24-.36.08-.15.04-.28-.02-.39-.06-.11-.47-1.13-.64-1.55-.17-.42-.35-.36-.48-.36h-.4c-.14 0-.37.05-.56.26-.19.21-.73.72-.73 1.76s.75 2.04.85 2.18c.1.14 1.48 2.24 3.6 3.14.5.21.89.34 1.19.43.46.14.88.12 1.2-.05.37-.15 1.23-.5 1.4-1 .17-.5.17-.92.12-1s-.18-.14-.38-.25z" />
                            </svg>
                        </SocialIcon>
                    )}
                    <SocialIcon href={data.linkedin} ariaLabel="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                            <path d="M2.5 0A2.5 2.5 0 000 2.5v19A2.5 2.5 0 002.5 24h19a2.5 2.5 0 002.5-2.5v-19A2.5 2.5 0 0021.5 0h-19zm5 8h3v11H7.5V8zm1.5-4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.5 4h3v1.4c.5-.8 1.6-1.4 3-1.4 3.2 0 4 2.1 4 5v6h-3v-5.5c0-1.3-.5-2.2-1.5-2.2-1.6 0-2 1-2 2.2V19h-3.5V8z" />
                        </svg>
                    </SocialIcon>
                </div>
            </div>
        </footer>
    )
}