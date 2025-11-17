// src/app/components/Navbar.js
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

  // Intersection Observer to track active section while scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveId(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '0px', 
        threshold: 0.5 
      }
    );

    links.forEach(link => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);


  return (
    <LayoutGroup>
      {/* 
        NEW WRAPPER: This fixed div spans the full width (left-0 right-0)
        and uses flex justify-center to guarantee the nav element is centered
        regardless of internal overflow or screen size.
      */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-2 md:px-0">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          className="
            bg-card/50 border border-accent/20 backdrop-blur-xl 
            rounded-full p-1 flex gap-1 shadow-2xl 
            font-mono tracking-wider 
            
            /* Responsive safety on the inner element */
            max-w-full overflow-x-auto 
            
            md:p-2 md:gap-2
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
                px-2 py-1 text-xs  /* Compact Mobile */
                md:px-4 md:py-2 md:text-sm /* Spacious Desktop */
                rounded-full font-medium transition-colors duration-300 flex-shrink-0
                ${activeId === link.id ? 'text-white' : 'text-gray-400 hover:text-accent'}
              `}
            >
              {/* Dynamic Hover/Active Indicator (Layout Animation) */}
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
              
              {/* Text Content (sits on top) */}
              <span className="relative z-10 capitalize">{link.label}</span>
            </motion.button>
          ))}
        </motion.nav>
      </div>
    </LayoutGroup>
  );
}