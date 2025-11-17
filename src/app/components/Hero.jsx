// src/app/components/sections/Hero.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image'; 
import myImage from '../../../public/assets/me.jpg';

// Animation variants (kept the same)
const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 10 },
  },
};

const lineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

// Utility function to split the text into motion components (kept the same)
const splitText = (text) => {
  return text.split(' ').map((word, wordIndex) => (
    <span key={wordIndex} className="inline-block whitespace-nowrap mr-3">
      {word.split('').map((char, charIndex) => (
        <motion.span key={charIndex} variants={charVariants} className="inline-block">
          {char}
        </motion.span>
      ))}
    </span>
  ));
};


export default function Hero() {
  
  return (
    <section
      id="home"
      // Changed h-[90vh] to min-h-[90vh] to ensure all content fits on small screens
      className="min-h-[90vh] px-8 md:px-20 lg:px-40 flex items-center py-20 md:py-0"
    >
      <div className="grid md:grid-cols-12 gap-10 w-full">
        
        {/* ========================================================== */}
        {/* RIGHT COLUMN: Image Section (Col 8-12) - MOVED TO ORDER-1 ON MOBILE */}
        {/* ========================================================== */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1.2, type: 'spring', stiffness: 50 }}
          // Order 1 on mobile, reset to standard order on medium screens
          className="md:col-span-5 flex justify-center items-center relative order-1 md:order-none mb-10 md:mb-0"
        >
          <div 
            className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden 
                       bg-card/70 border-4 border-accent/30 shadow-2xl shadow-accent/20 
                       transform hover:scale-[1.03] transition-transform duration-500"
          >
            {/* Decorative Grid Overlay */}
            <div className="absolute inset-0 z-10 p-4 opacity-50">
              <div className="w-full h-full border border-dashed border-gray-600/50 rounded-2xl"></div>
            </div>

            {/* Profile Image */}
            <div className="relative w-full h-full z-20">
              <Image
                src={myImage} 
                alt="Khorn Saokhouch - Developer"
                fill
                style={{ objectFit: 'cover' }}
                className="opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Neon Glow */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none 
                            shadow-[0_0_80px_rgba(0,184,255,0.4)_inset,0_0_20px_rgba(0,184,255,0.2)]" />
          </div>
        </motion.div>


        {/* ========================================================== */}
        {/* LEFT COLUMN: Text and CTA (Col 1-7) - ORDER-2 ON MOBILE */}
        {/* ========================================================== */}
        <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-none">
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-accent font-mono mb-4"
          >
          </motion.p>

          {/* Animated Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 max-w-5xl overflow-hidden"
          >
            {splitText('Hello, I’m ')}
            <span className="text-accent inline-block whitespace-nowrap">
              {splitText('Khorn Saokhouch')}
              <motion.span variants={charVariants} className="inline-block">.</motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-xl text-secondary max-w-xl mt-4"
          >
            A specialist in 3D interactive design and high-performance digital architecture, delivering web experiences with unparalleled depth and feel.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 184, 255, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="mt-12 inline-block bg-accent text-background font-bold px-8 py-4 rounded-full text-lg transition duration-300 shadow-xl shadow-accent/50 w-fit"
          >
            View Interactive Portfolio →
          </motion.button>
        </div>
      </div>
    </section>
  );
}