import React from "react";
import { motion } from "framer-motion";
import { BsInfoCircleFill } from "react-icons/bs";
import "./style.scss";

function About() {
  return (
    <section id="about" className="about">
      {/* Titre centré animé en haut de la page */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="about-title"
      >
        
        About Me
      </motion.h2>

      <div className="about-container">
        <section className="about-titles">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            IA Engineer & Developer
          </motion.h2>

          <motion.p
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Je suis un étudiant passionné en intelligence artificielle et data science, animé par l’envie de comprendre et de résoudre des problématiques complexes à l’aide des données. Au cours de mon parcours, j’ai eu l’opportunité de travailler sur des projets concrets tels que la segmentation d’images médicales avec U-Net, la détection de fraudes et la prédiction de prix à l’aide d’algorithmes de machine learning. Curieux, rigoureux et toujours en quête de nouvelles connaissances, je m’investis pleinement dans chaque projet pour apprendre, innover et contribuer à des solutions à fort impact. Je suis actuellement à la recherche d’opportunités pour développer mes compétences et mettre en pratique mes connaissances dans des environnements réels.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Personal Information
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.li>Name : SALIM Ayoub</motion.li>
              <motion.li>Age : 22 Years Old</motion.li>
              <motion.li>Address : 5 Rue Colibri AVIGNON</motion.li>
              <motion.li>Email : salimayoub822@gmail.com</motion.li>
              <motion.li>Contact : +33658039386</motion.li>
            </motion.div>
          </motion.ul>
        </section>
      </div>
    </section>
  );
}

export default About;
