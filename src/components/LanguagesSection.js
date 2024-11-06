import React from "react";

function LanguagesSection() {
  const languages = [
    { name: "JavaScript", image: "/images/js.svg" },
    { name: "Python", image: "/images/python.svg" },
    { name: "Java", image: "/images/java.svg" },
    { name: "C", image: "/images/c.png" },
    { name: "PHP", image: "/images/php.svg" },
    // Add more languages as needed
  ];

  return (
    <div className="languagesSection-wrapper">
      <div className="languages-section">
        <div className="languageSection-textContainer">
          <div className="languagesText-container">
            <div className="languagesText">LANGUAGES</div>
            <div className="language-line"></div>
          </div>
          <div className="languages-title">
            <div className="title">
              <p>Programming Languages</p>
            </div>
            <div className="title-desc">
              <p>These are the languages I am currently familiar with.</p>
            </div>
          </div>
        </div>
        <div className="languages-content">
          {languages.map((language, index) => (
            <div className="language-card" key={index}>
              <img src={language.image} alt={language.name} className="language-image" />
              <div className="language-name">{language.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LanguagesSection;