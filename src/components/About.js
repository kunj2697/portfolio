import React from "react";
import { motion } from "framer-motion";

function AboutSection() {
  const stats = [
    { number: "2.5+", label: "Years Coding" },
    { number: "15+", label: "Projects Built" },
    { number: "5+", label: "Technologies" }
  ];

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-inter text-slate-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg font-poppins text-slate-600 dark:text-slate-300 leading-relaxed">
              Hey there! I'm <span className="font-semibold text-cyan-600 dark:text-cyan-400">Kunj Patel</span>, 
              a passionate student at Ganpat University - U. V. Patel College of Engineering.
            </p>
            
            <p className="text-lg font-poppins text-slate-600 dark:text-slate-300 leading-relaxed">
              For over 2.5 years, I've been deeply immersed in coding, with a focus on tackling 
              tough problems and bringing ideas to life using the <span className="font-semibold text-blue-600 dark:text-blue-400">MERN stack</span>. I love creating 
              digital experiences that are both functional and beautiful.
            </p>

            <p className="text-lg font-poppins text-slate-600 dark:text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or learning about the latest trends in web development.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-4"
            >
              <a
                href="/pdfs/resume_guru.pdf"
                target="_blank"
                rel="noreferrer"
                download
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid - Single Row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-400/20 dark:to-blue-400/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative p-6 text-center border border-slate-200/50 dark:border-slate-700/50 rounded-2xl backdrop-blur-sm">
                    <div className="text-3xl md:text-4xl font-black font-inter bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 font-semibold font-space text-sm tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold font-space text-slate-700 dark:text-slate-300 mb-4 text-center">
                Tech Stack
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Tailwind'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 bg-white/70 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-200/50 dark:border-slate-600/50 backdrop-blur-sm hover:bg-cyan-50 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;