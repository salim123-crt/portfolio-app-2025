import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill }  from "react-icons/bs";
import "./style.scss"
import {SKILLS} from './data.js'
import SkillCard from "./SkillCard/SkillCard";
import { motion } from "framer-motion";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard.jsx";
const Skills = () =>{


   const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
   const handleSelectedSkill = (data)=>{
      setSelectedSkill(data); 
   }


   return( 
   <div>
      <section id="skills" className="skills">
         <PageHeaderContent headerText="SKILLS"
         icon={<BsInfoCircleFill size={40}/>}/>
      </section>
      <section className="skills-container">
         <motion.h5 initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}>
            Compétences Techniques</motion.h5>
         <div className="skills-content">
            <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.5}}

             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
            className="skillss">
               {SKILLS.map((item)=> (
                  <SkillCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  isActive={selectedSkill.title===item.title}
                  onClick={()=>{
                     handleSelectedSkill(item); 
                  }}
                  />
               ))}
            </motion.div>



            <motion.div className="skills-info"
             initial={{ opacity: 0, x: 30 }} 
             animate={{ opacity: 1, x: 0 }} 
             transition={{ duration: 1.5}}
            >
            <SkillsInfoCard 
               heading={selectedSkill.title}
               skills={selectedSkill.skills}
            />

            </motion.div>

            
         </div>
      </section>
   </div>
    );
}
export default Skills




