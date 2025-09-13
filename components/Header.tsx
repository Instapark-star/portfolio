import React from 'react';
import type { SectionId } from '../types';

interface HeaderProps {
    activeSection: SectionId;
    isPinned: boolean;
}

const navItems: { id: SectionId, name: string }[] = [
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
];

const NavLink: React.FC<{ href: string; active: boolean; children: React.ReactNode; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void; }> = ({ href, active, children, onClick }) => (
    <a href={href} onClick={onClick} className="group relative px-3 py-2 transition-colors duration-300">
        <span className={active ? 'text-white' : 'text-gray-400 group-hover:text-white'}>
            {children}
        </span>
        <span
            className={`absolute inset-x-1 -bottom-px h-px bg-green-500 origin-center transition-transform duration-300 ease-in-out ${
                active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            }`}
        ></span>
    </a>
);

export const Header: React.FC<HeaderProps> = ({ activeSection, isPinned }) => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerOffset = 80; // offset for the sticky header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header 
            className={`header-sticky fixed top-4 left-0 right-0 z-50 transition-transform duration-300 ${isPinned ? 'is-pinned' : ''}`}
        >
            <div className="max-w-4xl mx-auto">
                <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-0 bg-black/30 backdrop-blur-lg border border-white/10 rounded-xl shadow-sm">
                    <nav className="flex items-center justify-between p-2 text-sm font-medium">
                        <a href="#home" onClick={handleNavClick} className="pl-2 font-bold text-base text-white">Amandeep Tripathy</a>
                        <ul className="hidden sm:flex items-center">
                            {navItems.map(item => (
                                <li key={item.id}>
                                    <NavLink href={`#${item.id}`} active={activeSection === item.id} onClick={handleNavClick}>
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <a 
                            href="#contact" 
                            onClick={handleNavClick}
                            className="magnetic-button bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};