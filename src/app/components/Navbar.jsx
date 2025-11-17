'use client';
import { useState, useEffect } from 'react';
import { motion, LayoutGroup } from 'framer-motion';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [activeId, setActiveId] = useState('home'); 

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px', threshold: 0.5 }
    );

    links.forEach(link => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <LayoutGroup>
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-2 md:px-0">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          className="
            bg-card/50 border border-accent/20 backdrop-blur-xl 
            rounded-full p-2 flex gap-2 shadow-2xl 
            font-mono tracking-wider max-w-full overflow-x-auto
          "
        >
          {links.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              onMouseEnter={() => setHovered(link.id)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative 
                px-4 py-2 min-w-[70px] min-h-[40px] text-base sm:text-sm md:text-sm 
                md:px-4 md:py-2 rounded-full font-medium transition-colors duration-300 flex-shrink-0
                ${activeId === link.id ? 'text-white' : 'text-gray-400 hover:text-accent'}
              `}
            >
              {(hovered === link.id || activeId === link.id) && (
                <motion.span
                  layoutId="activePill"
                  className={`
                    absolute inset-0 rounded-full z-0 
                    ${activeId === link.id ? 'bg-accent/80' : 'bg-accent/30'}
                  `}
                  style={{ 
                    mixBlendMode: 'soft-light',
                    boxShadow: activeId === link.id ? '0 0 8px #00b8ff, 0 0 15px #00b8ff' : 'none'
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              
              <span className="relative z-10 capitalize">{link.label}</span>
            </motion.button>
          ))}
        </motion.nav>
      </div>
    </LayoutGroup>
  );
}
