import React from "react";
import "./SkillCard.scss";

const SkillCard = ({ title, icon, isActive, onClick }) => {
    
    const handlePress = () => {
        onClick();
        
        // Optionnel : Scroll automatique vers le contenu sur mobile 
        // si ton composant de détails est situé en dessous
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
            // On utilise onClick, mais on s'assure qu'il est réactif
            onClick={handlePress}
            // Accessibilité pour les lecteurs d'écran
            role="button"
            tabIndex={0}
        >
            <div className="skill-icon">
                {icon}
            </div>
            <span>{title}</span>
        </div>
    );
};

export default SkillCard;