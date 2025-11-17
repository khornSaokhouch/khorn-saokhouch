// src/app/components/sections/Hero.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image'; 
import myImage from '../../../public/assets/me.jpg';
import { useLanguage } from '../context/LanguageContext'; 

// --- Animation Variants (Kept the same) ---
const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 10 } 
  },
};

const lineVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.03 } 
  },
};

const renderAnimatedText = (text, lang, key) => {
  if (lang === 'en') {
    return text.split(' ').map((word, wordIndex) => (
      <span key={`${key}-word-${wordIndex}`} className="inline-block whitespace-nowrap mr-2 sm:mr-3">
        {word.split('').map((char, charIndex) => (
          <motion.span 
            key={`${key}-char-${charIndex}`} 
            variants={charVariants} 
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </span>
    ));
  } else {
    // Khmer: use the text as part of the key to force re-render
    return (
      <motion.span 
        key={`${key}-${text}`} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }} 
        className="inline-block leading-normal"
      >
        {text}
      </motion.span>
    );
  }
};


export default function Hero() {
  const { t, lang } = useLanguage(); 
  const animationKey = lang;

  const handleScrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-[90vh] px-4 sm:px-8 md:px-20 lg:px-40 flex items-center py-16 sm:py-20 md:py-0"
    >
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 w-full items-center">

        {/* RIGHT COLUMN: Image (Order 1 on Mobile) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1.2, type: 'spring', stiffness: 50 }}
          className="md:col-span-5 flex justify-center items-center relative order-1 md:order-none mb-8 md:mb-0"
        >
          <div className="relative w-full max-w-xs sm:max-w-sm aspect-[4/5] rounded-3xl overflow-hidden 
                          bg-card/70 border-4 border-accent/30 shadow-2xl shadow-accent/20 
                          transform hover:scale-[1.03] transition-transform duration-500"
          >
            {/* Decorative Grid Overlay (3D effect) */}
            <div className="absolute inset-0 z-10 p-4 opacity-50">
              <div className="w-full h-full border border-dashed border-gray-600/50 rounded-2xl"></div>
            </div>

            {/* Profile Image */}
            <div className="relative w-full h-full z-20">
              <Image
                src={myImage} 
                alt={t.heroName}
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

        {/* LEFT COLUMN: Text & CTA (Order 2 on Mobile) */}
        <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-none">

        <motion.p
  key={`sub-${animationKey}`}
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-lg md:text-xl font-extrabold text-accent mb-4 leading-snug"
>
  {t.heroSubtitle}
</motion.p>


          {/* Animated Headline */}
          <motion.h1
  key={`headline-${animationKey}-${t.heroName}`} 
  initial="hidden"
  animate="visible"
  variants={lineVariants}
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 max-w-full overflow-hidden"
>
  {renderAnimatedText(t.heroGreeting, lang, 'greet')}
  <span className={`text-accent ${lang === 'km' ? 'block mt-2 text-5xl md:text-6xl lg:text-7xl' : 'inline-block whitespace-nowrap'}`}>
    {renderAnimatedText(t.heroName, lang, 'name')}
    {lang === 'en' && <motion.span variants={charVariants} className="inline-block">.</motion.span>}
  </span>
</motion.h1>


          {/* Description */}
          <motion.p
            key={`desc-${animationKey}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-base sm:text-lg md:text-xl text-secondary max-w-xl mt-4"
          >
            {t.heroDescription}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            key={`cta-${animationKey}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 184, 255, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollToProjects}
            className="mt-12 inline-block bg-accent text-background font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg transition duration-300 shadow-xl shadow-accent/50 w-fit"
          >
            {t.heroCTA}
          </motion.button>
        </div>
      </div>
    </section>
  );
}