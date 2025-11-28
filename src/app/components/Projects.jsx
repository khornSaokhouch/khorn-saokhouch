'use client';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

// ... (Keep your existing 'projects' array data here unchanged) ...
const projects = [
  {
    id: "10",
    Img: "/projects/project10.png",
    Title: "Shopping Store Website",
    Description: "This website built using Vue js for frontend and backend using Python, Database using Mysql.",
    ProjectLink: "https://food-delivery-website.vercel.app",
    TechStack: ["Next js", "Laravel", "Mysql", "tailwindcss"],
    Github: "",
    Team: ["Khorn saokhouch"]
  },
  {
    id: "8",
    Img: "/projects/project8.png",
    Title: "E-commerce Website",
    Description: "This website built using Next js for frontend and backend using Laravel, Database using Mysql.",
    ProjectLink: "https://frontend-e.onrender.com",
    TechStack: ["Next js", "Laravel", "Mysql", "tailwindcss"],
    Github: "https://github.com/khornSaokhouch/frontend_e",
    Team: ["Khorn saokhouch"]
  },
  {
    id: "9",
    Img: "/projects/project9.png",
    Title: "Order Coffee System Web Application",
    Description: "This web application built using Next js for frontend and backend using Laravel, Database using Mysql.",
    ProjectLink: "https://coffee-web-app-gamma.vercel.app",
    TechStack: ["Next js", "Laravel", "Mysql", "tailwindcss"],
    Github: "https://github.com/khornSaokhouch/Coffee-web-app",
    Team: ["Khorn saokhouch"]
  },
  {
    id: "1",
    Img: "/projects/project7.png",
    Title: "Service Me Website",
    Description: "This website built using Next js for frontend and backend using Laravel, Database using Mysql.",
    ProjectLink: "https://www.servicemeite.io",
    TechStack: ["Next js", "Laravel", "Mysql", "tailwindcss"],
    Github: "https://github.com/kheangsenghorng/WCT-II-Service",
    Team: ["Khorn saokhouch", "Sen vibol", "Sam Nisa", "Kheng senhorng", "Chen SreyNeat"]
  },
  {
    id: "2",
    Img: "/projects/project2.png",
    Title: "Booking Tour Website",
    Description: "This website built using Nextjs frontend and Nodejs backend.",
    ProjectLink: "",
    TechStack: ["Nodejs", "Nextjs", "React", "Tailwindcss"],
    Github: "https://github.com/khornSaokhouch/BookingTourWebsite-Frontend",
    Team: ["Khorn saokhouch", "Sam Nisa", "Sen vibol", "Kheng senhorng"]
  },
  {
    id: "3",
    Img: "/projects/project3.png",
    Title: "CookBook Website",
    Description: "This website built using Nextjs and Tailwindcss with Supabase.",
    ProjectLink: "https://bookcook.servicemeite.io",
    TechStack: ["Nextjs", "Tailwindcss", "Supabase"],
    Github: "https://github.com/khornSaokhouch/Bookbook_supabase",
    Team: ["Khorn saokhouch", "Sam Nisa", "Sen vibol"]
  },
  {
    id: "4",
    Img: "/projects/project4.png",
    Title: "Movie Website",
    Description: "This website built using Laravel with API.",
    ProjectLink: "",
    TechStack: ["Laravel", "API", "HTML", "CSS"],
    Github: "https://github.com/khornSaokhouch/Movie-",
    Team: ["Khorn saokhouch"]
  },
  {
    id: "5",
    Img: "/projects/project5.png",
    Title: "Movie Website UI",
    Description: "This website built using HTML and CSS.",
    ProjectLink: "",
    TechStack: ["HTML", "CSS"],
    Team: ["Khorn saokhouch"]
  },
  {
    id: "6",
    Img: "/projects/project6.png",
    Title: "Movie Website Design",
    Description: "This website built using HTML and CSS.",
    ProjectLink: "",
    TechStack: ["HTML", "CSS"],
    Team: ["Khorn saokhouch"]
  },
  {
    id: "7",
    Img: "/projects/project1.png",
    Title: "Flower-Shop-website",
    Description: "Website built using HTML and CSS.",
    ProjectLink: "https://flower-shop-website-three.vercel.app",
    TechStack: ["HTML", "CSS"],
    Github: "https://github.com/khornSaokhouch/Flower-Shop-website",
    Team: ["Khorn saokhouch"]
  }
];

const containerVariants = { 
  hidden: { opacity: 0 }, 
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } 
};

const headingVariants = { 
  hidden: { opacity: 0, y: 30 }, 
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } } 
};

export default function Projects() {
  return (
    <section id="projects" className="bg-background py-16 sm:py-24">
      <motion.div
        className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div variants={headingVariants} className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent font-mono mb-4">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full"/>
        </motion.div>

        {/* 
           Grid Responsive Logic:
           - default (mobile): 1 column
           - md (tablet/small laptop): 2 columns
           - xl (large desktop): 3 columns 
           This prevents squashed cards on 1024px screens
        */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              transitionDelay={index * 0.05}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}