// src/app/components/sections/Skills.js
'use client';
import { motion } from 'framer-motion';
import Hover3DCard from './Hover3DCard'; // Correct path assumed

import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiThreedotjs, // Note: Assuming this works for Three.js/WebGL context
  SiTailwindcss, 
  SiFigma, 
  SiGit,
  SiVercel,
  SiNodedotjs, // Added Node.js icon for context
} from 'react-icons/si';


// Categorized skills with inline list style
const categorizedSkills = [
  {
    category: 'Languages',
    icon: '💻',
    list: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'HTML5 / CSS3', icon: null },
      { name: 'GLSL Shaders', icon: SiThreedotjs }
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '✨',
    list: [
      { name: 'React.js', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Three.js / R3F', icon: SiThreedotjs },
      { name: 'Framer Motion', icon: null } // No dedicated icon needed
    ],
  },
  {
    category: 'Styling & Design',
    icon: '🎨',
    list: [
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'SCSS / SASS', icon: null },
      { name: 'Styled Components', icon: null },
      { name: 'Figma', icon: SiFigma }
    ],
  },
  {
    category: 'Tools & Deployment',
    icon: '🛠️',
    list: [
      { name: 'Git / GitHub', icon: SiGit },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Node.js / Express', icon: SiNodedotjs },
      { name: 'Docker / AWS', icon: null }
    ],
  },
];

// Animation variants (Kept the same)
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const categoryVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } } };
const headingVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 150 } } };

export default function Skills() {
  let skillIndexCounter = 0;

  return (
    <motion.section
      id="skills"
      className="min-h-screen px-8 md:px-20 lg:px-40 py-24 bg-card/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h2 variants={headingVariants} className="text-3xl md:text-4xl font-bold mb-12 text-accent font-mono">
        <span className="text-accent/50"></span> Skills
      </motion.h2>

      <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {categorizedSkills.map((section) => (
          <motion.div 
            key={section.category} 
            variants={categoryVariants} 
            className="bg-card/90 border border-accent/20 rounded-3xl p-6 shadow-2xl shadow-black/50 backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-accent/20 pb-2">
              <span className="text-accent text-3xl">{section.icon}</span> {section.category}
            </h3>

            {/* Inline List (Two Columns for better density) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {section.list.map((skill) => (
                <Hover3DCard
                  key={skill.name}
                  IconComponent={skill.icon}
                  name={skill.name} // Name passed as prop
                  transitionDelay={0.03 * skillIndexCounter++}
                  className="w-full" // Ensure card takes full column width
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}