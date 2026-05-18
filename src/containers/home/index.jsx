import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.scss";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaWhatsapp, FaKaggle, FaEnvelope } from "react-icons/fa";

const ROLES = [
  "AI Engineer & MLOps Engineer",
  "Data Scientist",
  "Deep Learning Developer",
  "MLOps Specialist",
];

const Home = () => {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="home">
      <div className="home-text-wrapper">
        <motion.div
          className="home-available-badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="home-available-dot" />
          Available for opportunities
        </motion.div>

        <motion.h1
          className="home-text-wrapper-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Hello, I&apos;m Salim Ayoub.
        </motion.h1>

        <div className="home-role-wrapper">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIdx}
              className="home-role-text"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              {ROLES[roleIdx]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          className="home-text-wrapper-subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I design machine learning pipelines, deploy intelligent models, and build reliable AI systems from experimentation to production.
        </motion.p>

        <motion.div
          className="home-stats"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[["7+", "Projects"], ["10+", "Tech Skills"], ["3", "Languages"], ["France", "Based in"]].map(([val, label]) => (
            <div className="home-stat" key={label}>
              <span className="home-stat-value">{val}</span>
              <span className="home-stat-label">{label}</span>
            </div>
          ))}
        </motion.div>

        <div className="home-socials-button-wrapper">
          <Link to="/contact">
            <motion.button
              className="home-text-wrapper-button"
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire me
            </motion.button>
          </Link>

          <motion.a
            href={`${process.env.PUBLIC_URL}/cv.pdf`}
            download="SALIM_Ayoub_CV.pdf"
            className="home-text-wrapper-button home-text-wrapper-button-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>

          <div className="home-social-icons">
            <motion.a whileHover={{ scale: 1.15 }} href="https://www.linkedin.com/in/ayoub-salim-9a80a5313/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={22} /></motion.a>
            <motion.a whileHover={{ scale: 1.15 }} href="https://github.com/salim123-crt" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={22} /></motion.a>
            <motion.a whileHover={{ scale: 1.15 }} href="https://wa.me/33658039386" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp size={22} /></motion.a>
            <motion.a whileHover={{ scale: 1.15 }} href="mailto:salimayoub822@gmail.com" aria-label="Email"><FaEnvelope size={22} /></motion.a>
            <motion.a whileHover={{ scale: 1.15 }} href="https://www.kaggle.com/ayoubsalim" target="_blank" rel="noreferrer" aria-label="Kaggle"><FaKaggle size={22} /></motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
