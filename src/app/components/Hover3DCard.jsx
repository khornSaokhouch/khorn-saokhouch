'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// --- Default Animation Variant ---
const defaultItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

export default function Hover3DCard({
  IconComponent,
  imageSrc,      // New prop for image
  name,
  className = '',
  transitionDelay = 0,
  variants = defaultItemVariants,
  children,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 3D rotation transforms
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  // Radial light gradient transforms
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
      whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 200, damping: 20 } }}
      initial="hidden"
      whileInView="visible"
      variants={variants}
      transition={{ delay: transitionDelay, type: 'spring', stiffness: 100, damping: 15 }}
      viewport={{ once: true, amount: 0.8 }}
      className={`relative flex items-center gap-3 p-3 md:p-4 rounded-full bg-background/30 border border-accent/20 
                  shadow-md hover:shadow-lg hover:border-accent/50 cursor-pointer transition-all duration-300 ${className}`}
    >
      {/* Dynamic Gradient Light Effect */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none opacity-50"
        style={{
          background: useTransform(
            [gradientX, gradientY],
            ([gx, gy]) => `radial-gradient(300px at ${gx} ${gy}, rgba(0,184,255,0.1) 0%, transparent 80%)`
          ),
        }}
      />

      {/* iOS internal border for glass effect */}
      <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none z-10" />

      <div className="relative z-20 flex items-center gap-3 w-full">
        {/* ICON or IMAGE */}
        {IconComponent && (
          <div className="p-1.5 rounded-full bg-accent text-background shadow-lg" style={{ transform: 'translateZ(15px)' }}>
            <IconComponent size={20} />
          </div>
        )}
        {imageSrc && (
          <div className="p-1 rounded-full bg-accent/10 shadow-lg" style={{ transform: 'translateZ(15px)' }}>
            <Image src={imageSrc} alt={name} width={28} height={28} className="object-contain rounded-full" />
          </div>
        )}

        {/* Skill Name */}
        <span className="text-white font-medium text-sm md:text-base flex-1" style={{ transform: 'translateZ(5px)' }}>
          {name || children}
        </span>
      </div>
    </motion.div>
  );
}
