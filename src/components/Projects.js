import React from "react";
import { motion } from "framer-motion";

function ProjectsSection() {
  const projects = [
    {
      name: "Focus Timer",
      description: "A productivity app to help you focus and manage your study time effectively.",
      image: "/images/projects/focus-timer.png",
      live: "https://gurupatel007.github.io/Focus-Study-Timer/",
      github: "https://github.com/Gurupatel007/Focus-Study-Timer",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "Hosterr",
      description: "Modern hosting service landing page with responsive design and smooth animations.",
      image: "/images/projects/hosterr2.png",
      live: "https://gurupatel007.github.io/Hosterr-Website-Landing-Page/",
      github: "https://github.com/Gurupatel007/Hosterr-Website-Landing-Page",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "Music Player",
      description: "Interactive music player with playlist management and audio controls.",
      image: "/images/projects/music-player2.png",
      live: "https://gurupatel007.github.io/Music-Player-App/",
      github: "https://github.com/Gurupatel007/Music-Player-App",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "Student Corner",
      description: "Educational platform for students with resources and study materials.",
      image: "/images/projects/landing.png",
      live: "#",
      github: "https://github.com/Gurupatel007/Student-Corner",
      tech: ["React", "Node.js", "MongoDB"]
    },
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-800">
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
              My Projects
            </span>
            <div className="w-12 h-px bg-primary-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-space text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases different skills and technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-dark-900 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-4">
                    {project.live !== "#" && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;