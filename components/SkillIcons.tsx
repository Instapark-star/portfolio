import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="w-full h-full"
    >
        {children}
    </svg>
);

export const IconCpp: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 5h-2v5.41l4.29 4.29 1.42-1.42L12 11.59V7z" />
    </svg>
);

export const IconPython: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M13.5 4v4h-4V4h4zm-6 0v4h-4v4h4v4h4v-4h4v-4h-4V8h-4v4H3.5V8h4zm-4 12h4v4h-4v-4zm10 0h4v4h-4v-4z" />
    </svg>
);

export const IconVerilog: React.FC = () => (
     <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 7l-5 5h10l-5-5zm-5 7h10v2H7v-2z" />
    </svg>
);

export const IconReact: React.FC = () => (
    <IconWrapper>
        <circle cx="12" cy="12" r="2"></circle>
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
    </IconWrapper>
);

export const IconNode: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12.38 2.25c-3.99-.02-7.6 2.43-8.88 6.13a8.3 8.3 0 0 0 .54 8.04l-1.5 2.1a.75.75 0 0 0 .9 1.05l2.25-1.5c.9.54 1.9.96 2.97 1.21a8.38 8.38 0 0 0 8.4-1.38 8.28 8.28 0 0 0 2.2-12.28 8.36 8.36 0 0 0-6.88-3.37zm-2.8 12.02h-1.4v-4.5h1.4v4.5zm4.8-2.2c0 .86-.54 1.48-1.42 1.48h-1.3v-4.5h1.36c.86 0 1.36.56 1.36 1.4v1.62z"></path>
    </svg>
);

export const IconExpress: React.FC = () => (
    <IconWrapper>
        <path d="M4 8h10M4 12h10M4 16h10"></path>
        <path d="M17 8l4 4-4 4"></path>
    </IconWrapper>
);

export const IconZustand: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v2h-4v3l-4-4 4-4v3z"></path>
    </svg>
);

export const IconSocketIO: React.FC = () => (
    <IconWrapper>
        <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
    </IconWrapper>
);


export const IconChip: React.FC = () => (
    <IconWrapper>
        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="1" x2="9" y2="4"></line>
        <line x1="15" y1="1" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="23"></line>
        <line x1="15" y1="20" x2="15" y2="23"></line>
        <line x1="20" y1="9" x2="23" y2="9"></line>
        <line x1="20" y1="14" x2="23" y2="14"></line>
        <line x1="1" y1="9" x2="4" y2="9"></line>
        <line x1="1" y1="14" x2="4" y2="14"></line>
    </IconWrapper>
);

export const IconGit: React.FC = () => (
    <IconWrapper>
        <circle cx="18" cy="18" r="3"></circle>
        <circle cx="6" cy="6" r="3"></circle>
        <path d="M18 6L6 18"></path>
        <path d="M6 6h12"></path>
    </IconWrapper>
);

export const IconDocker: React.FC = () => (
     <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M22.1 9.91c-.3-1.44-1-2.82-2-4.04-1.2-1.45-2.82-2.58-4.63-3.23-1.2-.44-2.5-.66-3.8-.66-2.3 0-4.5.8-6.3 2.2-1.7 1.3-2.9 3.1-3.4 5.1-.3 1.2-.3 2.4-.1 3.6.3 2.1 1.1 4.1 2.4 5.8 1.3 1.7 3.1 3 5.1 3.7 1.1.4 2.2.6 3.3.6 2.3 0 4.5-.8 6.3-2.2 1.7-1.3 2.9-3.1 3.4-5.1.3-1.1.3-2.3.1-3.4zm-6.2 2.69h-1.5v1.5h-1.5v-1.5h-1.5v-1.5h1.5v-1.5h1.5v1.5h1.5v1.5zm-3.8-6.1h-1.5v1.5h-1.5v-1.5h-1.5v-1.5h1.5v-1.5h1.5v1.5h1.5v1.5z"></path>
    </svg>
);


export const IconGithub: React.FC = () => (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
);

export const IconJavaScript: React.FC = () => (
    <IconWrapper>
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </IconWrapper>
);


export const IconFirebase: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M4.33 20.3l11.33-16.6L4.33 20.3zm1.88-1.12L16.27 3.7l-4.72 13.03-5.34 2.45zM18.84 14.1l-6.1-3.1 3.52-9.72 2.58 12.82z" />
    </svg>
);

export const IconPenTool: React.FC = () => (
    <IconWrapper>
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
    </IconWrapper>
);

export const IconLightbulb: React.FC = () => (
    <IconWrapper>
        <path d="M9 18h6v2H9z"></path>
        <path d="M12 2a7 7 0 0 0-7 7c0 3.03 1.54 5.6 4 6.7V18h6v-2.3c2.46-1.1 4-3.67 4-6.7a7 7 0 0 0-7-7z"></path>
    </IconWrapper>
);

export const IconStrategy: React.FC = () => (
    <IconWrapper>
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="3"></circle>
        <line x1="12" y1="1" x2="12" y2="5"></line>
        <line x1="12" y1="19" x2="12" y2="23"></line>
        <line x1="23" y1="12" x2="19" y2="12"></line>
        <line x1="5" y1="12" x2="1" y2="12"></line>
    </IconWrapper>
);
