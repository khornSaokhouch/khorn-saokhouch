'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const SignatureInitial = () => (
  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-lg border border-accent/50">K</div>
);

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const handleBackToTop = () => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="bg-card/70 border-t border-accent/20 py-12 px-8 md:px-20 lg:px-40 backdrop-blur-sm"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Main Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left border-b border-accent/30 pb-6 mb-6">

          {/* Left: Branding */}
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4 md:mb-0">
            <SignatureInitial />
            <p className="text-lg text-white font-bold">{t.heroName}</p>
          </div>

          {/* Right: Back to Top */}
          <motion.button
            onClick={handleBackToTop}
            className="text-accent font-bold flex items-center group text-base px-4 py-2 rounded-full border border-accent/50 hover:bg-accent/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2 transition-transform duration-300 group-hover:-translate-y-1">↑</span>
            {t.footerBackToTop}
          </motion.button>
        </div>

        {/* Copyright / Tech Info */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
  <p className="text-sm text-secondary font-mono mb-2 md:mb-0">
    &copy; {year} {t.footerCopyright}
  </p>
  <p className="text-sm text-secondary font-mono">
    {t.footerTechInfo}
  </p>
</div>

      </div>
    </motion.footer>
  );
}
