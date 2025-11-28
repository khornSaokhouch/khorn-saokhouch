'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function ProjectCard({ project, index, transitionDelay = 0 }) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(true); // Default true avoids hydration mismatch

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transforms
  const rotateX = useTransform(y, [-80, 80], [10, -10]);
  const rotateY = useTransform(x, [-80, 80], [-10, 10]);
  const gradientX = useTransform(x, [-80, 80], ['0%', '100%']);
  const gradientY = useTransform(y, [-80, 80], ['0%', '100%']);

  // FIX: Move this Hook OUT of the JSX and into the top level
  // This ensures it runs on every render, regardless of isMobile state
  const backgroundGradient = useTransform(
    [gradientX, gradientY],
    ([gx, gy]) =>
      `radial-gradient(320px at ${gx} ${gy}, rgba(0,184,255,0.1) 0%, transparent 80%)`
  );

  const handleMouseMove = (e) => {
    if (isMobile || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) / 10);
    y.set((e.clientY - centerY) / 10);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        isMobile
          ? {}
          : { rotateX, rotateY, transformStyle: "preserve-3d" }
      }
      whileHover={isMobile ? { scale: 1.01 } : { scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: transitionDelay,
        type: "spring",
        stiffness: 120,
        damping: 18
      }}
      className="relative flex flex-col h-full rounded-3xl overflow-hidden bg-card/90 border border-accent/20 shadow-xl backdrop-blur-md"
    >
      {/* Light gradient (desktop only) */}
      {!isMobile && (
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none opacity-50 z-10"
          style={{ background: backgroundGradient }} // Use the pre-calculated value
        />
      )}

      <div className="relative z-20 flex flex-col h-full p-4 sm:p-5 lg:p-6">
        {/* Responsive image */}
        {project.Img && (
          <div className="relative w-full aspect-video sm:aspect-[4/3] md:aspect-video mb-4 sm:mb-6 rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={project.Img}
              alt={project.Title}
              fill
              className="object-cover duration-300 hover:scale-110 transition-transform"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <h3 className="text-xl sm:text-2xl font-bold text-accent mb-2 sm:mb-3">
          {project.Title}
        </h3>

        <p className="text-sm sm:text-base text-secondary/90 mb-4 sm:mb-6 line-clamp-4 leading-relaxed">
          {project.Description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.TechStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-auto pt-2 border-t border-accent/10">
          {project.ProjectLink && (
            <a
              href={project.ProjectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-sm font-semibold text-background bg-accent py-2 rounded-xl hover:bg-accent/80 transition-colors shadow-lg shadow-accent/20"
            >
              Live Demo
            </a>
          )}

          {project.Github && (
            <a
              href={project.Github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-sm font-semibold text-accent border border-accent bg-transparent py-2 rounded-xl hover:bg-accent/10 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}