import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./style.scss";

const projects = [
  {
    title: "Brain Tumor Detection",
    description: "Classification model that detects brain tumors from medical images with a clear training and evaluation workflow.",
    link: "https://github.com/salim123-crt/brain-tumor-detection",
    tags: ["Python", "TensorFlow", "CNN", "OpenCV"],
  },
  {
    title: "Brain Tumor Segmentation",
    description: "U-Net based segmentation for brain tumor masks, including visual interpretation of model layers.",
    link: "https://github.com/salim123-crt/Brain-tumor-segmentation",
    tags: ["Python", "U-Net", "Keras", "OpenCV"],
  },
  {
    title: "House Price Prediction",
    description: "Regression project for estimating house prices from structured real estate features.",
    link: "https://github.com/salim123-crt/house-price-predictions",
    tags: ["Python", "Scikit-learn", "Pandas", "ML"],
  },
  {
    title: "My Portfolio",
    description: "Personal portfolio built with React to present AI, data, and web projects in a polished responsive interface.",
    link: "https://github.com/salim123-crt/portfolio-app-2025",
    tags: ["React", "SCSS", "Framer Motion", "Groq AI"],
  },
];

const Portfolio = () => (
  <section id="portfolio" className="portfolio">
    <div className="portfolio-wrapper">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="portfolio-title"
      >
        My Projects
      </motion.h2>

      <motion.p
        className="portfolio-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        A selection of AI, ML, and web projects
      </motion.p>

      <div className="portfolio-projects">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            whileHover={{ y: -6 }}
          >
            <div className="project-card-header">
              <span className="project-number">0{index + 1}</span>
              <FaGithub size={20} className="project-github-icon" />
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              <FaGithub size={14} />
              View on GitHub
              <FaExternalLinkAlt size={11} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
