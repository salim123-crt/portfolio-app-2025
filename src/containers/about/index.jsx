import React from "react";
import { motion } from "framer-motion";
import "./style.scss";

// On définit tes projets ici pour que ce soit facile à mettre à jour
const currentProjects = [
  { title: "Système intelligent de planification des plannings pour entreprises", percentage: 15 },
];

function About() {
  return (
    <section id="about" className="about">
      {/* Titre principal centré */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="about-title"
      >
        About Me
      </motion.h2>

      <div className="about-container">
        {/* COLONNE GAUCHE : Bio & Infos Personnelles */}
        <div className="about-left-column">
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
              Je suis étudiant en intelligence artificielle, data et MLOps à École d’Ingénieurs du Littoral Côte d’Opale. Passionné par les technologies de l’IA, je développe des compétences en machine learning, deep learning et traitement de données à travers des projets concrets, notamment en vision par ordinateur. Je m’intéresse également au MLOps et au déploiement de modèles afin de concevoir des solutions intelligentes, robustes et prêtes pour la production. Mon objectif est de devenir un ingénieur spécialisé en intelligence artificielle et en systèmes data à forte valeur ajoutée.
            </motion.p>

            {/* <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ marginTop: "2rem" }}
            >
              Personal Information
            </motion.h2> */}

            {/* <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="personal-info-list"
              >
                <motion.li><strong>Name :</strong> SALIM Ayoub</motion.li>
                <motion.li><strong>Age :</strong> 22 Years Old</motion.li>
                <motion.li><strong>Address :</strong> 5 Rue Colibri AVIGNON</motion.li>
                <motion.li><strong>Email :</strong> salimayoub822@gmail.com</motion.li>
                <motion.li><strong>Contact :</strong> +33658039386</motion.li>
              </motion.div>
            </motion.ul> */}
          </section>
        </div>

        {/* COLONNE DROITE : Projets Actuels & Avancement */}
        <div className="about-right-column">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Current Projects
          </motion.h2>

          <div className="projects-progress-container">
            {currentProjects.map((item, index) => (
              <div key={index} className="project-progress-item">
                <div className="project-info">
                  <p className="project-name">{item.title}</p>
                  <p className="project-percentage">{item.percentage}%</p>
                </div>
                
                {/* Barre horizontale d'avancement */}
                <div className="progress-bar-base">
                  <motion.div
                    className="progress-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }} // L'animation se lance une seule fois quand on scrolle
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;