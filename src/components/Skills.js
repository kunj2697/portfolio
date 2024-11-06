import React, { useState } from "react";
import '../App.css';

function SkillsSection({ isDarkTheme }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const source = isDarkTheme ? "/images/skills/Github.svg" : "/images/skills/github-light.svg";

  const imagesLinkData = [
    { src: "/images/skills/HTML.png", alt: "HTML" },
    { src: "/images/skills/css-3.png", alt: "CSS" },
    { src: "/images/skills/js.svg", alt: "JavaScript" },
    { src: source, alt: "Github" },
    { src: "/images/skills/Bash.svg", alt: "Bash" },
    { src: "/images/skills/vite.svg", alt: "Vite" },
    { src: "/images/skills/React.png", alt: "React" },
    { src: "/images/skills/Nodejs.svg", alt: "Node" },
    { src: "/images/skills/Redux.svg", alt: "Redux" },
    { src: "/images/skills/Saas.svg", alt: "Saas" },
    { src: "/images/skills/git.svg", alt: "Git" },
    { src: "/images/skills/Express.png", alt: "Express" },
    { src: "/images/skills/Tailwind.png", alt: "Tailwind CSS" },
    { src: "/images/skills/Bootstrap.svg", alt: "Bootstrap" },
    { src: "/images/skills/Figma.svg", alt: "Figma" },
    { src: "/images/skills/SQL.svg", alt: "SQL" },
  ];

  const themeClass = isDarkTheme ? '' : 'light-theme';

  return (
    

    <div className={`skillSection-wrapper ${themeClass}`}>
      <div className="skills-section">
        <div className="skillSection-textContainer">
          <div className="skillText-container">
            <div className="skillText">
              <div>MY SKILLS</div>
            </div>
            <div className="skills-line"></div>
          </div>
          <div className="skills-title">
            <div className="title">
              <p>My Programming Skills</p>
            </div>
            <div className="title-desc">
              <p>These are the technologies I am currently familiar with.</p>
            </div>
          </div>
        </div>
        <div className="skills-content">
          {imagesLinkData.map((image, index) => (
            <div 
              className="skill-card" 
              key={index}
              onMouseEnter={() => setHoveredSkill(image.alt)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <img src={image.src} alt={image.alt} className="skill-image" />
              {hoveredSkill === image.alt && (
                <div className="skill-popup">{image.alt}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;