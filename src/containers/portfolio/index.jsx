import React from "react";
import { motion } from "framer-motion";
import "./style.scss";

const projects = [
  {
    title: "Brain Tumor Detection",
    link: "https://github.com/salim123-crt/brain-tumor-detection",
    description: "Classification model that detects brain tumors from medical images with a clear training and evaluation workflow.",
  },
  {
    title: "Brain Tumor Segmentation",
    link: "https://github.com/salim123-crt/Brain-tumor-segmentation",
    description: "U-Net based segmentation project for brain tumor masks, including visual interpretation of model layers.",
  },
  {
    title: "House Price Prediction",
    link: "https://github.com/salim123-crt/house-price-predictions",
    description: "Regression project for estimating house prices from structured real estate features.",
  },
  {
    title: "My Portfolio",
    link: "https://github.com/salim123-crt/portfolio-app-2025",
    description: "Personal portfolio built with React to present AI, data, and web projects in a polished responsive interface.",
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
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
