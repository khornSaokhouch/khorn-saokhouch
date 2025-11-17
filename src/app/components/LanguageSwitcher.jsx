// src/app/components/LanguageSwitcher.js
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import kmFlag from '../../../public/flag/km.png';
import enFlag from '../../../public/flag/en.png';

export default function LanguageSwitcher() {
  const { lang, toggleLanguage } = useLanguage();
  const currentFlag = lang === 'en' ? enFlag : kmFlag;

  return (
    <motion.button
      onClick={toggleLanguage}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center 
                 bg-card/50 border border-white/10 backdrop-blur-xl 
                 text-gray-200 px-3 py-2 rounded-[24px] 
                 shadow-lg transition-all duration-300 transform 
                 hover:scale-[1.05] hover:border-accent/50 group"
    >
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full overflow-hidden border border-gray-500/50">
          <Image src={currentFlag} width={20} height={20} alt="language-flag" />
        </div>

        <span className="font-semibold text-sm tracking-widest group-hover:text-accent">
          {lang.toUpperCase()}
        </span>
      </div>
    </motion.button>
  );
}
