import React from "react";
import "./SkillCard.scss"
const SkillCard = ({title, icon, isActive, onClick}) => {


    return(

         <div
         className={`skill-card ${isActive ? "active" : ""}`}
         onClick={() => onClick()}
         >
            <div className="skill-icon">
               {icon}
            </div>
            <span>{title}</span>
         </div>
    );


}
export default SkillCard


