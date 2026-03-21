import React, { useEffect, useState } from "react";
import "./SkillsInfoCard.scss";

const SkillsInfoCard = ({ heading, skills }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Petit délai pour laisser le navigateur enregistrer le 0% 
    // avant de lancer l'animation vers le pourcentage réel
    const timer = setTimeout(() => setAnimate(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>
      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skill-info">
              <p>{item.skill}</p>
              <p className="skill-info-percentage">{item.percentage}</p>
            </div>

            <div className="skill-progress-bg">
              <div 
                className="skill-progress" 
                // On passe de 0% à item.percentage grâce à l'état 'animate'
                style={{ width: animate ? item.percentage : "0%" }}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard;