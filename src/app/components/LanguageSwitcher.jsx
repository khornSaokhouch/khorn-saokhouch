// src/app/components/LanguageSwitcher.js
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// --- IMPORTANT NOTE ON IMAGE PATHS ---
// Since this is a standalone component, ensure your paths are correct:
// Assuming 'km.png' exists in /public/flag/
import kmFlag from '../../../public/flag/km.png'; 
// Assuming you will provide an 'en.png' flag image. 
// For this example, I'll use the Khmer flag for both states as a placeholder, 
// but you should replace it with your English flag image. 
// const enFlag = '/flag/en.png'; // Example path for the English flag

export default function LanguageSwitcher() {
  // NOTE: If the user's base language is Khmer, start with 'km'. 
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang((prev) => {
      const nextLang = prev === 'en' ? 'km' : 'en';
      console.log('Selected language:', nextLang);
      // NOTE: In a real app, you would dispatch a language change action here (e.g., using context or Redux)
      return nextLang;
    });
  };

  const currentFlag = kmFlag; // Use kmFlag for both placeholders until you provide enFlag

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center justify-center 
                 bg-card/50 border border-white/10 backdrop-blur-xl 
                 text-gray-200 px-3 py-2 rounded-[24px] 
                 shadow-lg transition-all duration-300 transform 
                 hover:scale-[1.05] hover:border-accent/50 group"
      // Framer Motion for subtle press down animation
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center gap-2 relative">
        {/* Flag Image */}
        <div className="w-5 h-5 rounded-full overflow-hidden border border-gray-500/50">
          <Image
            src={currentFlag} 
            alt={lang === 'en' ? 'Switch to Khmer' : 'Switch to English'}
            width={20}
            height={20}
            className="object-cover"
          />
        </div>
        
        {/* Language Code Text */}
        <span className="font-semibold text-sm tracking-widest transition-colors duration-300 group-hover:text-accent">
          {lang.toUpperCase()}
        </span>
      </div>
    </motion.button>
  );
}