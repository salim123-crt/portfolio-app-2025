import { motion } from "framer-motion";
import "./style.scss";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaWhatsapp, FaKaggle, FaEnvelope } from "react-icons/fa";

const Home = () => (
  <section id="home" className="home">
    <div className="home-text-wrapper">
      <motion.h1
        className="home-text-wrapper-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello, I&apos;m Salim Ayoub.
        <br />
        AI Engineer &amp; MLOps Engineer
      </motion.h1>

      <motion.p
        className="home-text-wrapper-subtitle"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        I design machine learning pipelines, deploy intelligent models, and build reliable AI systems from experimentation to production.
      </motion.p>

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
          <motion.a whileHover={{ scale: 1.12, color: "#EEE8AA" }} href="https://www.linkedin.com/in/ayoub-salim-9a80a5313/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.12, color: "#EEE8AA" }} href="https://github.com/salim123-crt" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub size={24} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.12, color: "#EEE8AA" }} href="https://wa.me/33658039386" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FaWhatsapp size={24} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.12, color: "#EEE8AA" }} href="mailto:salimayoub822@gmail.com" aria-label="Email">
            <FaEnvelope size={24} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.12, color: "#EEE8AA" }} href="https://www.kaggle.com/ayoubsalim" target="_blank" rel="noreferrer" aria-label="Kaggle">
            <FaKaggle size={24} />
          </motion.a>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
