import React from "react";
import { motion } from "framer-motion";
import "./style.scss";

const currentProjects = [
  { title: "AI-powered workforce scheduling system with Python optimization", percentage: 35 },
];

function About() {
  return (
    <section id="about" className="about">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="about-title"
      >
        About Me
      </motion.h2>

      <div className="about-container">
        <div className="about-left-column">
          <section className="about-titles">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              AI Engineer & Developer
            </motion.h2>

            <motion.p
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              I am an artificial intelligence, data, and MLOps engineering student at EILCO. I design practical machine learning and computer vision projects, then connect them to clean interfaces and deployment workflows. My goal is to build useful AI systems that are reliable, readable, and ready to create value in real production environments.
            </motion.p>
          </section>
        </div>

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

                <div className="progress-bar-base">
                  <motion.div
                    className="progress-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
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
