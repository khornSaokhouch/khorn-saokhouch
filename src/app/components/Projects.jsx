'use client';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

// JSON-like project data
const projects = [
  {
    "id": "8",
    "Img": "/projects/project8.png",
    "Title": "E-commerce Website",
    "Description": "This website built using Next js for frontend and backend using laravel , Database using Mysql.",
    "ProjectLink": "https://frontend-e.onrender.com",
    "TechStack": ["Next js", "Laravel", "Mysql", "tailwindcss"],
    "Github": "https://github.com/khornSaokhouch/frontend_e",
    "Team": ["Khorn saokhouch, Sen vibol", "Sam Nisa"]
  },
  {
    "id": "9",
    "Img": "/projects/project9.png",
    "Title": "Order Coffee System Web Application",
    "Description": "This web application built using Next js for frontend and backend using laravel , Database using Mysql.",
    "ProjectLink": "https://coffee-web-app-gamma.vercel.app",
    "TechStack": ["Next js", "Laravel", "Mysql", "tailwindcss"],
    "Github": "https://github.com/khornSaokhouch/Coffee-web-app",
    "Team": ["Khorn saokhouch"]
  },
  {
    "id": "1",
    "Img": "/projects/project7.png",
    "Title": "Service Me Website",
    "Description": "This website built using Next js for frontend and backend usinf laravel , Database using Mysql.",
    "ProjectLink": "https://www.servicemeite.io",
    "TechStack": ["Next js", "Laravel", "Mysql", "tailwindcss"],
    "Github": "https://github.com/kheangsenghorng/WCT-II-Service",
    "Team": ["Khorn saokhouch, Sen vibol", "Sam Nisa", "Kheng senhorng", "Chen SreyNeat "]
  },
  {
    "id": "2",
    "Img": "/projects/project2.png",
    "Title": "Booking Tour Website",
    "Description": "This website built using Nextjs frontend and  nodejs backend .",
    "ProjectLink": "",
    "TechStack": ["Nodejs", "nextjs", "react", "tailwindcss"],
    "Github": "https://github.com/khornSaokhouch/BookingTourWebsite-Frontend",
    "Team": ["Khorn saokhouch ", "Sam Nisa", "Sen vibol", "Kheng senhorng"]
  },
  {
    "id": "3",
    "Img": "/projects/project3.png",
    "Title": "CookBook Website",
    "Description": "This website built using Nextjs and tailwindcss with supabse.",
    "ProjectLink": "https://bookcook.servicemeite.io",
    "TechStack": ["Nextjs", "tailwindcss", "supabase"],
    "Github": "https://github.com/khornSaokhouch/Bookbook_supabase",
    "Team": ["Khorn saokhouch ", "Sam Nisa", "Sen vibol"]
  },
  {
    "id": "4",
    "Img": "/projects/project4.png",
    "Title": "Movie Website",
    "Description": "This website built using Laravel with api.",
    "ProjectLink": "",
    "TechStack": ["Laravel", "api", "Html", "CSS"],
    "Github": "https://github.com/khornSaokhouch/Movie-",
    "Team": ["Khorn saokhouch "]
  },
  {
    "id": "5",
    "Img": "/projects/project5.png",
    "Title": "Movie Website UI",
    "Description": "This website built using Html and Css.",
    "ProjectLink": "",
    "TechStack": ["Html", "CSS"],
    "Team": ["Khorn saokhouch"]
  },
  {
    "id": "6",
    "Img": "/projects/project6.png",
    "Title": "Movie Website Design",
    "Description": "This website built using Html and Css.",
    "ProjectLink": "",
    "TechStack": ["Html", "CSS"],
    "Team": ["Khorn saokhouch "]
  },
  {
    "id": "7",
    "Img": "/projects/project1.png",
    "Title": "Flower-Shop-website",
    "Description": " website built using Html and CSS.",
    "ProjectLink": "https://flower-shop-website-three.vercel.app",
    "TechStack": ["Html", "CSS"],
    "Github": "https://github.com/khornSaokhouch/Flower-Shop-website",
    "Team": ["Khorn saokhouch "]
  }
  // Add more projects here if needed
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 150 } },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="min-h-screen px-8 md:px-20 lg:px-40 py-24 flex flex-col justify-center bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        variants={headingVariants}
        className="text-3xl md:text-4xl font-bold mb-10 text-accent font-mono"
      >
        <span className="text-accent/50"></span> Featured Projects
      </motion.h2>

      {/* Grid: 3 cards per row */}
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            transitionDelay={index * 0.1}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
