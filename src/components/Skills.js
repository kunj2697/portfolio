import React from "react";
import { motion } from "framer-motion";

function SkillsSection({ isDarkTheme }) {
  const skills = [
    { name: "HTML", src: "/images/skills/HTML.png", category: "Frontend" },
    { name: "CSS", src: "/images/skills/css-3.png", category: "Frontend" },
    { name: "JavaScript", src: "/images/skills/js.svg", category: "Frontend" },
    { name: "React", src: "/images/skills/React.png", category: "Frontend" },
    { name: "Tailwind CSS", src: "/images/skills/Tailwind.png", category: "Frontend" },
    { name: "Bootstrap", src: "/images/skills/Bootstrap.svg", category: "Frontend" },
    { name: "Node.js", src: "/images/skills/Nodejs.svg", category: "Backend" },
    { name: "Express", src: "/images/skills/Express.png", category: "Backend" },
    { name: "Redux", src: "/images/skills/Redux.svg", category: "State Management" },
    { name: "Git", src: "/images/skills/git.svg", category: "Tools" },
    { name: "GitHub", src: isDarkTheme ? "/images/skills/Github.svg" : "/images/skills/github-light.svg", category: "Tools" },
    { name: "Figma", src: "/images/skills/Figma.svg", category: "Design" },
    { name: "SQL", src: "/images/skills/SQL.svg", category: "Database" },
    { name: "Sass", src: "/images/skills/Saas.svg", category: "Frontend" },
    { name: "Vite", src: "/images/skills/vite.svg", category: "Tools" },
    { name: "Bash", src: "/images/skills/Bash.svg", category: "Tools" },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section className="section-padding bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-primary-500"></div>
            <span className="text-primary-500 font-medium tracking-wider uppercase text-sm">
              My Skills
            </span>
            <div className="w-12 h-px bg-primary-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-space text-gray-900 dark:text-white mb-4">
            My Programming Skills
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These are the technologies I am currently familiar with and use to build amazing projects.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="group relative"
            >
              <div className="card p-6 text-center h-full flex flex-col items-center justify-center space-y-3 bg-gradient-to-br from-gray-50 to-white dark:from-dark-800 dark:to-dark-700 border border-gray-200 dark:border-dark-600">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src={skill.src} 
                    alt={skill.name} 
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {skill.name}
                </h3>
                <span className="text-xs text-primary-500 font-medium">
                  {skill.category}
                </span>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}

export default SkillsSection;