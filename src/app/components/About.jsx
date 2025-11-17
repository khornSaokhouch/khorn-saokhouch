// src/app/components/sections/About.js
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import myImage from '../../../public/assets/me.jpg';
import { useLanguage } from '../context/LanguageContext';


// Social Icons
import { FaFacebookF, FaInstagram, FaGithub, FaTelegramPlane, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

// Brand Colors
const iconStyles = {
  facebook: { color: "#1877F2" },
  instagram: { color: "#E4405F" },
  github: { color: "#fff" },
  telegram: { color: "#229ED9" },
  youtube: { color: "#FF0000" },
  linkedin: { color: "#0077B5" },
};

const socialLinks = [
  { name: 'Facebook', url: '#', icon: <FaFacebookF size={22} style={iconStyles.facebook} /> },
  { name: 'Instagram', url: '#', icon: <FaInstagram size={22} style={iconStyles.instagram} /> },
  { name: 'GitHub', url: '#', icon: <FaGithub size={22} style={iconStyles.github} /> },
  { name: 'Telegram', url: '#', icon: <FaTelegramPlane size={22} style={iconStyles.telegram} /> },
  { name: 'YouTube', url: '#', icon: <FaYoutube size={22} style={iconStyles.youtube} /> },
  { name: 'LinkedIn', url: '#', icon: <FaLinkedinIn size={22} style={iconStyles.linkedin} /> },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 150 } },
};

export default function About() {
  const { t, lang } = useLanguage(); // <--- get translation
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yTextParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <motion.section
      id="about"
      ref={ref}
      className="min-h-screen px-8 md:px-20 lg:px-40 py-24 flex flex-col md:flex-row items-center gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* LEFT CONTENT */}
      <motion.div className="flex-1 flex flex-col gap-6 w-full">
        <motion.h2
          variants={headingVariants}
          className="text-3xl md:text-4xl font-bold mb-6 text-accent font-mono"
        >
          {t.aboutHeading}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          style={{ y: yTextParallax }}
          className="text-lg md:text-xl text-secondary bg-card/70 p-6 rounded-3xl 
                     backdrop-blur-lg border border-accent/20 leading-relaxed shadow-lg mb-8"
        >
          {t.aboutDescription}
        </motion.p>

        {/* SOCIAL ICON SECTION */}
        <motion.div
          variants={itemVariants}
          className="p-4 rounded-2xl border border-accent/10 bg-card/50 shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4 text-white">{t.aboutConnect}</h3>

          <div className="flex flex-wrap gap-4 md:gap-5 items-center">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                transition={{ delay: 0.05 * index }}
                whileHover={{ scale: 1.2 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center
                           bg-background/70 border border-accent/30 shadow-md
                           hover:shadow-accent hover:border-accent transition-all"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        variants={itemVariants}
        className="flex-1 flex justify-center items-center relative w-full"
      >
        <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl 
                        overflow-hidden bg-card/40 border border-accent/20 shadow-2xl">
          <Image
            src={myImage}
            alt={t.aboutHeading} // localized alt text
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-90 transition-all duration-700"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
