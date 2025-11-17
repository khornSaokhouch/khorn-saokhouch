'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ProjectCard({ project, index, transitionDelay = 0 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  const gradientX = useTransform(x, [-100, 100], ['0%', '100%']);
  const gradientY = useTransform(y, [-100, 100], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / 8);
    y.set((e.clientY - centerY) / 8);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: transitionDelay, type: 'spring', stiffness: 100, damping: 20 }}
      className="relative rounded-3xl overflow-hidden bg-card/90 border border-accent/20 shadow-2xl shadow-black/40 backdrop-blur-md cursor-pointer"
    >
      {/* Gradient light effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-50"
        style={{
          background: useTransform(
            [gradientX, gradientY],
            ([gx, gy]) => `radial-gradient(300px at ${gx} ${gy}, rgba(0,184,255,0.1) 0%, transparent 80%)`
          ),
        }}
      />

      <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none z-10" />

      <div className="relative z-20 flex flex-col h-full p-3 sm:p-4">
        {/* Image */}
        {project.Img && (
          <div className="relative w-full h-32 sm:h-40 md:h-48 mb-4 rounded-2xl overflow-hidden">
            <Image
              src={project.Img}
              alt={project.Title}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-all duration-300"
            />
          </div>
        )}

        <h3 className="text-lg md:text-xl font-bold text-accent mb-2">{project.Title}</h3>

        <p className="text-sm md:text-base text-secondary mb-4 flex-1 line-clamp-4">
          {project.Description}
        </p>

        {/* TechStack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.TechStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs md:text-sm px-2 py-1 rounded-md bg-accent/20 text-accent font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.ProjectLink && (
            <a
              href={project.ProjectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-background bg-accent px-3 py-1 rounded-lg hover:bg-accent/80 transition-colors"
            >
              Live
            </a>
          )}
          {project.Github && (
            <a
              href={project.Github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-background bg-accent px-3 py-1 rounded-lg hover:bg-accent/80 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
