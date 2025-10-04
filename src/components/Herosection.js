import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

function HeroSection({ isDarkTheme }) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-300/30 to-blue-400/30 dark:from-cyan-500/20 dark:to-blue-600/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-300/30 to-purple-400/30 dark:from-violet-500/20 dark:to-purple-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-400/20 dark:to-blue-400/20 rounded-full border border-cyan-200/50 dark:border-cyan-400/30 text-cyan-600 dark:text-cyan-300 font-medium text-sm tracking-wide">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black font-inter mb-4 tracking-tight"
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text text-transparent">
              Kunj{" "}
            </span>
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
              Patel
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-space text-slate-700 dark:text-slate-300 mb-2">
              Full Stack Developer
            </h2>
            <div className="flex items-center justify-center space-x-2 text-slate-600 dark:text-slate-400">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl font-poppins text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Crafting exceptional digital experiences with{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>,{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">Node.js</span>, and{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">modern technologies</span>.
            <br className="hidden md:block" />
            Passionate about creating scalable solutions that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link to="projects" smooth={true} duration={500}>
              <motion.button 
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <motion.button 
                className="group border-2 border-slate-300 dark:border-slate-600 hover:border-cyan-500 dark:hover:border-cyan-400 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Connect
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col items-center mt-4"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">Discover more</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center relative"
            >
              <motion.div 
                animate={{ y: [2, 6, 2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full mt-2"
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;