"use client";
import { motion } from "framer-motion";
import Hover3DCard from "./Hover3DCard";
import Image from "next/image";

// Skills data (can use either icon or image)
const categorizedSkills = [
  {
    category: "Languages",
    icon: "💻",
    list: [
      { name: "JavaScript", icon: null, image: "/skills/javascript.svg" },
      { name: "HTML5", icon: null, image: "/skills/html.svg" },
      { name: "PHP", icon: null, image: "/skills/php.svg" },
      { name: "Python", icon: null, image: "/skills/python.svg" },
      { name: "Typescript", icon: null, image: "/skills/typescript.svg" },
      {
        name: "Tailwind CSS",
        icon: null,
        image: "/skills/tailwind.svg",
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "✨",
    list: [
      { name: "React.js", icon: null, image: "/skills/reactjs.svg" },
      { name: "Next.js", icon: null, image: "/skills/nextjs.svg" },
      { name: "Vue.js", icon: null, image: "/skills/vue.js.svg" },
      { name: "Laravel", icon: null, image: "/skills/laravel.svg" },
      { name: "Vite", icon: null, image: "/skills/vite.svg" },
      { name: "node.js", icon: null, image: "/skills/nodejs.svg" },
    ],
  },
  {
    category: "Databases",
    icon: "🎨",
    list: [
      {
        name: "MysQL",
        icon: null,
        image: "/skills/mysql.svg",
      },
      { name: "MongooseDB", icon: null, image: "/skills/mongodb.svg" },
      { name: "Supabase", icon: null, image: "/skills/supabase.svg" },
      { name: "Firebase", icon: null, image: "/skills/firebase.svg" },
      
    ],
  },
  {
    category: "Tools & Deployment",
    icon: "🛠️",
    list: [
      { name: "Git / GitHub", icon: null, image: "/skills/github.svg" },
      { name: "Vercel", icon: null, image: "/skills/vercel.svg" },
      { name: "Insomnia", icon: null, image: "/skills/insomnia.svg" },
      { name: "Figma", icon: null, image: "/skills/figma.svg" },
    ],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};
const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150 } },
};

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
      <motion.h2
        variants={headingVariants}
        className="text-3xl md:text-4xl font-bold mb-12 text-accent font-mono"
      >
        My Skills
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8"
      >
        {categorizedSkills.map((section) => (
          <motion.div
            key={section.category}
            variants={categoryVariants}
            className="bg-card/90 border border-accent/20 rounded-3xl p-6 shadow-2xl shadow-black/50 backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-accent/20 pb-2">
              <span className="text-accent text-3xl">{section.icon}</span>{" "}
              {section.category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {section.list.map((skill) => (
                <Hover3DCard
                  key={skill.name}
                  IconComponent={skill.icon} // null if using image
                  imageSrc={skill.image} // pass your svg/png path
                  name={skill.name}
                  transitionDelay={0.03 * skillIndexCounter++}
                  className="w-full"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
