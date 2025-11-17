'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Icons placeholder
const LocationIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M12 18s-6-5.5-6-10a6 6 0 0 1 12 0c0 4.5-6 10-6 10z"/><circle cx="12" cy="10" r="3"/></svg>
);
const MailIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 15 } },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 150 } },
};

export default function Contact() {
  const { t } = useLanguage();
  const primaryEmail = "khornsaokhouch4456@gmail.com";
  const location = "Phnom Penh, Cambodia";

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-20 lg:px-40 py-16 sm:py-24 bg-card/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* HEADER BLOCK */}
      <div className="text-center mb-12 max-w-xl">
        <motion.h2 variants={headingVariants} className="text-3xl sm:text-4xl font-bold mb-4 text-accent font-mono">
          {t.contactHeading}
        </motion.h2>
        <motion.p variants={itemVariants} className="text-secondary text-base sm:text-lg">
          {t.contactSubtitle}
        </motion.p>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-6xl">
        
        {/* LEFT COLUMN: CONTACT FORM */}
        <motion.div className="md:col-span-7 w-full order-2 md:order-1" variants={itemVariants}>
          <motion.form variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="w-full flex flex-col gap-4 sm:gap-5 bg-card/70 p-6 sm:p-8 rounded-3xl backdrop-blur-md border border-accent/10 shadow-2xl">
            <motion.input variants={itemVariants} type="text" placeholder={t.contactFormName} className="p-3 sm:p-4 rounded-xl bg-background border border-gray-700 focus:border-accent text-white outline-none transition-colors shadow-inner shadow-black/20 text-sm sm:text-base" />
            <motion.input variants={itemVariants} type="email" placeholder={t.contactFormEmail} className="p-3 sm:p-4 rounded-xl bg-background border border-gray-700 focus:border-accent text-white outline-none transition-colors shadow-inner shadow-black/20 text-sm sm:text-base" />
            <motion.textarea variants={itemVariants} rows="6" placeholder={t.contactFormMessage} className="p-3 sm:p-4 rounded-xl bg-background border border-gray-700 focus:border-accent text-white outline-none transition-colors shadow-inner shadow-black/20 text-sm sm:text-base"></motion.textarea>
            <motion.button variants={itemVariants} type="submit" className="bg-accent text-background font-bold py-3 sm:py-4 rounded-xl transition duration-300 shadow-lg hover:bg-white hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base">
              {t.contactFormSubmit}
            </motion.button>
          </motion.form>
        </motion.div>

        {/* RIGHT COLUMN: LOCATION & DETAILS */}
        <motion.div className="md:col-span-5 w-full order-1 md:order-2" variants={itemVariants}>
          <div className="bg-card/70 p-6 sm:p-8 rounded-3xl backdrop-blur-md border border-accent/10 shadow-2xl flex flex-col gap-6 sm:gap-8 h-full">
            
            {/* Email */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2 text-accent">
                <MailIcon size={24} /> {t.contactEmailHeading}
              </h3>
              <a href={`mailto:${primaryEmail}`} className="text-base sm:text-lg text-white hover:underline transition">{primaryEmail}</a>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2 text-accent">
                <LocationIcon size={24} /> {t.contactLocationHeading}
              </h3>
              <p className="text-base sm:text-lg text-white">{location}</p>
            </div>

            {/* Map */}
            <div className="w-full aspect-video rounded-xl overflow-hidden mt-2 sm:mt-4 shadow-inner shadow-black/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d657.1343897532546!2d104.88450076298777!3d11.566040474212606!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2skh!4v1763376613417!5m2!1sen!2skh"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Phnom Penh Location"
              ></iframe>
            </div>

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}