import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/Herosection";
import AboutSection from "./components/About";
import SkillsSection from "./components/Skills";
import ProjectsSection from "./components/Projects";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import LanguagesSection from "./components/LanguagesSection";
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CustomCursor from "./components/CustomCursor";

function Section({ children, variants }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  );
}

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const heroVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const aboutVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const skillsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const projectsVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 1 } },
  };

  const contactVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className={isDarkTheme ? "portfolio" : "portfolio light-theme"}>
      <CustomCursor />
      <Header onToggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Section variants={heroVariants}>
        <HeroSection isDarkTheme={isDarkTheme} />
      </Section>
      <Element name="about">
        <Section variants={aboutVariants}>
          <AboutSection />
        </Section>
      </Element>
      <Element name="skills">
        <Section variants={skillsVariants}>
          <LanguagesSection />
        </Section>
        <Section variants={skillsVariants}>
          <SkillsSection isDarkTheme={isDarkTheme} />
        </Section>
      </Element>
      <Element name="projects">
        <Section variants={projectsVariants}>
          <ProjectsSection />
        </Section>
      </Element>
      <Element name="contact">
        <Section variants={contactVariants}>
          <ContactSection />
        </Section>
      </Element>
      <Footer />
    </div>
  );
}

export default App;
