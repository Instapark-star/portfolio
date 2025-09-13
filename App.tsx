import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Research } from './components/Research';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PROFILE_DATA } from './constants';
import type { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isHeaderPinned, setIsHeaderPinned] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });


  useEffect(() => {
    // --- Digital Rain Effect ---
    const canvas = document.getElementById('digital-rain-canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    let animationFrameId: number;

    const setup = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', setup);
    setup();
    
    const characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789';
    const charArray = characters.split('');
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    const draw = () => {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(10, 10, 10, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = `${fontSize}px monospace`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(0, 224, 117, 0.8)';

        for (let i = 0; i < drops.length; i++) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            const dx = x - mousePosition.current.x;
            const dy = y - mousePosition.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const repulsionRadius = 120;
            
            let finalX = x;
            let brightness = 0.7;

            if (distance < repulsionRadius) {
                const force = (repulsionRadius - distance) / repulsionRadius;
                const angle = Math.atan2(dy, dx);
                finalX += Math.cos(angle) * force * 25;
                drops[i]++; 
                brightness = 1;
            }
            
            // Leader character is always white and bright
            if (drops[i] * fontSize < y + fontSize * 5 && drops[i] * fontSize > y - fontSize) {
                ctx.fillStyle = `rgba(230, 255, 240, ${brightness})`;
            } else {
                ctx.fillStyle = `rgba(0, 224, 117, ${brightness})`;
            }

            ctx.fillText(text, finalX, y);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
                drops[i] = 0;
            }
            drops[i]++;
        }
        ctx.shadowBlur = 0;
        animationFrameId = window.requestAnimationFrame(draw);
    };
    draw();
    
    // --- Mouse Move Effects ---
    const updateCursorPosition = (x: number, y: number) => {
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
      mousePosition.current = { x, y };
    };

    const updateGridParallax = (x: number, y: number) => {
      const { innerWidth, innerHeight } = window;
      const xOffset = (x / innerWidth - 0.5) * -30;
      const yOffset = (y / innerHeight - 0.5) * -30;
      document.documentElement.style.setProperty('--grid-x', `${xOffset}px`);
      document.documentElement.style.setProperty('--grid-y', `${yOffset}px`);
    };

    const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        updateCursorPosition(clientX, clientY);
        updateGridParallax(clientX, clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    const cursorDot = document.getElementById('cursor-dot');
    const interactiveElements = document.querySelectorAll('a, button, .bento-item, .timeline-item');
    const handleMouseEnter = () => {
      cursorDot?.classList.add('hover');
    };
    const handleMouseLeave = () => {
      cursorDot?.classList.remove('hover');
    };
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });


    // Nav Observer
    const navSectionIds: SectionId[] = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'research', 'contact'];
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    navSectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) navObserver.observe(element);
    });

    // Fade-in Observer
    const fadeObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.fade-in-section').forEach(section => {
      fadeObserver.observe(section);
    });

    // Sticky Header Observer
    const headerObserver = new IntersectionObserver(
        ([entry]) => {
            setIsHeaderPinned(!entry.isIntersecting);
        },
        { rootMargin: "-1px 0px 0px 0px" }
    );
    if (heroRef.current) {
        headerObserver.observe(heroRef.current);
    }
    
    // Magnetic Buttons Effect
    const magneticButtons = document.querySelectorAll('.magnetic-button');
    const listeners: Array<{
      button: HTMLElement;
      moveHandler: (e: MouseEvent) => void;
      leaveHandler: () => void;
    }> = [];

    magneticButtons.forEach(button => {
        const htmlButton = button as HTMLElement;
        const moveHandler = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = htmlButton.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            const deltaX = clientX - centerX;
            const deltaY = clientY - centerY;
            const moveX = deltaX * 0.2;
            const moveY = deltaY * 0.2;
            htmlButton.style.transform = `translate(${moveX}px, ${moveY}px)`;
        };
        const leaveHandler = () => {
            htmlButton.style.transform = 'translate(0, 0)';
        };
        htmlButton.addEventListener('mousemove', moveHandler);
        htmlButton.addEventListener('mouseleave', leaveHandler);
        listeners.push({ button: htmlButton, moveHandler, leaveHandler });
    });


    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setup);
      window.removeEventListener('mousemove', handleMouseMove);
      navSectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) navObserver.unobserve(element);
      });
      document.querySelectorAll('.fade-in-section').forEach(section => {
        fadeObserver.unobserve(section);
      });
      if (heroRef.current) {
        headerObserver.unobserve(heroRef.current);
      }
      listeners.forEach(({ button, moveHandler, leaveHandler }) => {
        button.removeEventListener('mousemove', moveHandler);
        button.removeEventListener('mouseleave', leaveHandler);
      });
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="antialiased">
      <Header activeSection={activeSection} isPinned={isHeaderPinned} />
      <div ref={heroRef}>
        <Hero data={PROFILE_DATA.main} contact={PROFILE_DATA.contact} />
      </div>
      <main className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-0">
        <About data={PROFILE_DATA.about} />
        <Experience data={PROFILE_DATA.experience} />
        <Projects data={PROFILE_DATA.projects} />
        <Skills data={PROFILE_DATA.skills} />
        <Education data={PROFILE_DATA.education} />
        <Research data={PROFILE_DATA.research} />
        <Contact data={PROFILE_DATA.contact} />
      </main>
      <Footer data={PROFILE_DATA.contact} />
    </div>
  );
};

export default App;