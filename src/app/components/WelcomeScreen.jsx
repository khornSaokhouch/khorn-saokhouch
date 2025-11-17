// src/app/components/WelcomeScreen.js
'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Abstract Loading Indicator Component ---
function AbstractLoader() {
  return (
    <motion.div
      className="relative w-20 h-20 mx-auto mb-6"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ 
        repeat: Infinity, 
        duration: 1.5, 
        repeatType: "reverse" 
      }}
    >
      {/* Outer Ring (Subtle Glow) */}
      <motion.div
        className="w-full h-full rounded-full border-4 border-accent/50 border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
      {/* Inner Dot (Pulsing Core) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -mt-2 -ml-2 w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_#00b8ff]"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

// --- Main Welcome Component ---
export default function WelcomeScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide after 2.5s (your original timing)
    const timer = setTimeout(() => setShow(false), 2500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-background text-accent"
          // Smooth, strong exit animation
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, delay: 0.1 } }} 
        >
          {/* Main Content Container with iOS Glassy Backdrop */}
          <motion.div
            className="text-center p-10 rounded-3xl bg-card/70 backdrop-blur-lg border border-accent/20 shadow-2xl shadow-black/50"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.1, opacity: 0, transition: { duration: 0.7 } }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            
            <AbstractLoader />

            {/* Original Text */}
            <h1 className="text-5xl md:text-6xl font-bold mb-3">
              Welcome to <span className="text-white">My Portfolio</span>
            </h1>
            <p className="text-lg text-gray-400 font-mono">Loading experience...</p>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}