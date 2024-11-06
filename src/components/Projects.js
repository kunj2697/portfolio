import React from "react";

function ProjectsSection() {
  const projects = [
    {
      name: "Focus Timer",
      image: "/images/projects/focus-timer.png",
      live: "https://gurupatel007.github.io/Focus-Study-Timer/",
      github: "https://github.com/Gurupatel007/Focus-Study-Timer"
    },
    {
      name: "Hosterr",
      image: "/images/projects/hosterr2.png",
      live: "https://gurupatel007.github.io/Hosterr-Website-Landing-Page/",
      github: "https://github.com/Gurupatel007/Hosterr-Website-Landing-Page"
    },
    {
      name: "Music Player",
      image: "/images/projects/music-player2.png",
      live: "https://gurupatel007.github.io/Music-Player-App/",
      github: "https://github.com/Gurupatel007/Music-Player-App"
    },
    {
      name: "Student Corner",
      image: "/images/projects/landing.png",
      live: "#",
      github: "https://github.com/Gurupatel007/Student-Corner"
    },
  ];

  return (
    <div className="projectSection-wrapper">
      <div className="project-section">
        <div className="projectSection-textContainer">
          <div className="projectText-container">
            <div className="projectText">MY PROJECTS</div>
            <div className="project-line"></div>
          </div>
          <div className="projectContent-container">
            <div className="project-title">
              <div className="title">My Projects</div>
              <div className="title-desc">
                Here are some of the projects I've worked on. Hover over the project to see details.
              </div>
            </div>
          </div>
        </div>
        <div className="project-content">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.name} className="project-image" />
              <div className="project-overlay">
                <div className="project-overlay-content">
                  <div className="project-name">{project.name}</div>
                  <div className="project-buttons">
                    <a href={project.live} target="_blank" rel="noreferrer" className="project-link">Live Link</a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link">View Code</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;