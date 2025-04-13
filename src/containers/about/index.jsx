import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill }  from "react-icons/bs";
import { motion } from "framer-motion";
import './style.scss';
import { div } from "framer-motion/client";
function About(){
   return( 
<div className="about-container">
   <section id="about" className="about">
      <PageHeaderContent headerText="ABOUT ME" 
      icon = {<BsInfoCircleFill size={40}/>}
      />
   </section>
   <section className="about-titles">
   <motion.h2 initial={{ opacity: 0, y: -20 }} 
               animate={{ opacity: 1, y: 0 }} 
               transition={{ duration: 0.8 }}
   >
   IA Engineer & Developer</motion.h2>
   <motion.p className="about-text"
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
   >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi error, perferendis tempora consectetur corrupti maiores expedita corporis, neque iusto ducimus eaque beatae vero quam et non nam! Vel, rerum animi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, aperiam error voluptatibus quos minus ab tenetur unde dolorum, debitis, placeat nulla laboriosam minima ipsa deserunt repellat officiis in. Nisi, pariatur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quidem nobis possimus aspernatur ducimus, doloremque, deserunt fugiat maxime assumenda dolor quis voluptates esse aut. Optio dolorum harum quia obcaecati facere!</motion.p>
   <motion.h2 initial={{ opacity: 0, y: -20 }} 
               animate={{ opacity: 1, y: 0 }} 
               transition={{ duration: 0.8 }}
   >
                  personal information</motion.h2>
   <motion.ul initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1 }}
   >
      <motion.div initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
      >
      <motion.li>Name : SALIM Ayoub</motion.li>
      <motion.li>Age :22 Years Old</motion.li>
      <motion.li>Adress :5 Rue Colibri AVIGNON</motion.li>
      <motion.li>Email :salimayoub822@gmail.com</motion.li>
      <motion.li>Contact :+33658039386</motion.li>
      </motion.div>
   </motion.ul>
   </section>
</div>
    );
}
export default About