import React, { useState } from "react";
import "./style.scss";
import { SKILLS } from "./data.js";
import SkillCard from "./SkillCard/SkillCard";
import { motion } from "framer-motion";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard.jsx";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  };

  const fadeInSlightly = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <section id="skills" className="skills">
      <motion.h2 {...fadeInSlightly} className="skills-title">
        Skills
      </motion.h2>

      <section className="skills-container">
        <motion.h5
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Compétences Techniques
        </motion.h5>

        <div className="skills-content">
          <div className="skillss">
            {SKILLS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }} // Petit effet de cascade simple
              >
                <SkillCard
                  icon={item.icon}
                  title={item.title}
                  isActive={selectedSkill.title === item.title}
                  onClick={() => handleSelectedSkill(item)}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            key={selectedSkill.title} 
            className="skills-info"
            initial={{ opacity: 0, y: 5 }} // Mouvement très réduit
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SkillsInfoCard
              heading={selectedSkill.title}
              skills={selectedSkill.skills}
            />
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Skills;