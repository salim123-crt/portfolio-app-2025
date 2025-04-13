import React from "react";
import { motion } from "framer-motion";
import "./style.scss";

const projects = [
  {
    title: "Brain Tumor Detection (Classification)",
    link: "https://github.com/salim123-crt/brain-tumor-detection",
    description: "Modèle de classification pour détecter la présence de tumeurs cérébrales à partir d'images médicales.",
  },
  {
    title: "Brain Tumor Segmentation (U-Net)",
    link: "https://github.com/salim123-crt/Brain-tumor-segmentation",
    description: "Modèle U-Net pour la segmentation des tumeurs cérébrales. Visualisation couche par couche.",
  },
  {
    title: "House Price Prediction",
    link: "https://github.com/salim123-crt/house-price-predictions",
    description: "Modèle de régression pour prédire les prix des maisons selon plusieurs caractéristiques.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-wrapper">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="portfolio-title"
        >
          My Projects
        </motion.h2>

        <div className="portfolio-projects">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Voir sur GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
