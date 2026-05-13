import React from "react";
import "./SkillCard.scss";

const SkillCard = ({ title, icon, isActive, onClick }) => {
  const handlePress = () => {
    onClick();

    if (window.innerWidth <= 768) {
      const detailSection = document.getElementById("skills-detail-container");
      if (detailSection) {
        detailSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className={`skill-card ${isActive ? "active" : ""}`}
      onClick={handlePress}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          handlePress();
        }
      }}
    >
      <div className="skill-icon">
        {icon}
      </div>
      <span>{title}</span>
    </div>
  );
};

export default SkillCard;
