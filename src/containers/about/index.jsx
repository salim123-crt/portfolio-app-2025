import { motion } from "framer-motion";
import "./style.scss";

const stats = [
  { value: "7+",    label: "Projects"    },
  { value: "10+",   label: "Tech Skills" },
  { value: "3",     label: "Languages"   },
  { value: "2+",    label: "Years in AI" },
];

const currentProjects = [
  { title: "AI-powered workforce scheduling system with Python optimisation", percentage: 35 },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

function About() {
  return (
    <section id="about" className="about">
      <motion.h2 {...fadeUp()} className="about-title">About Me</motion.h2>

      {/* Stats row */}
      <motion.div
        className="about-stats"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="about-stat-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <span className="about-stat-value">{s.value}</span>
            <span className="about-stat-label">{s.label}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="about-container">
        {/* Left — bio */}
        <motion.div className="about-left-column" {...fadeUp(0.2)}>
          <section className="about-titles">
            <h2>AI Engineer &amp; Developer</h2>
            <p className="about-text">
              I am an artificial intelligence, data, and MLOps engineering student at EILCO. I design practical machine learning and computer vision projects, then connect them to clean interfaces and deployment workflows. My goal is to build useful AI systems that are reliable, readable, and ready to create value in real production environments.
            </p>
            <div className="about-tags">
              {["Python", "TensorFlow", "Docker", "FastAPI", "React", "MATLAB"].map((tag) => (
                <span key={tag} className="about-tag">{tag}</span>
              ))}
            </div>
          </section>
        </motion.div>

        {/* Right — current project + education */}
        <motion.div className="about-right-column" {...fadeUp(0.3)}>
          <h2>Current Projects</h2>
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

          <div className="about-education">
            <h3>Education</h3>
            <div className="about-edu-item">
              <span className="about-edu-dot" />
              <div>
                <p className="about-edu-degree">Master's — Complex Systems Engineering</p>
                <p className="about-edu-school">EILCO, France &nbsp;·&nbsp; AI &amp; MLOps</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
