import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import Header from "./components/Header";
import HeroSection from "./components/Herosection";
import AboutSection from "./components/About";
import SkillsSection from "./components/Skills";
import ProjectsSection from "./components/Projects";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

function AnimatedSection({ children, className = "", delay = 0 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      transition: { duration: 0.6 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }
    },
  };

  return (
    <motion.div 
      ref={ref} 
      initial="hidden" 
      animate={controls} 
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 transition-all duration-500">
      <Header onToggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      
      <AnimatedSection>
        <HeroSection isDarkTheme={isDarkTheme} />
      </AnimatedSection>
      
      <Element name="about">
        <AnimatedSection delay={0.2}>
          <AboutSection />
        </AnimatedSection>
      </Element>
      
      <Element name="skills">
        <AnimatedSection delay={0.3}>
          <SkillsSection isDarkTheme={isDarkTheme} />
        </AnimatedSection>
      </Element>
      
      <Element name="projects">
        <AnimatedSection delay={0.4}>
          <ProjectsSection />
        </AnimatedSection>
      </Element>
      
      <Element name="contact">
        <AnimatedSection delay={0.5}>
          <ContactSection />
        </AnimatedSection>
      </Element>
      
      <Footer />
    </div>
  );
}

export default App;
