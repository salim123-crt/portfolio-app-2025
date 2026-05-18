import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "./style.scss";

const contactLinks = [
  { icon: <FaEnvelope size={20} />, label: "Email",     value: "salimayoub822@gmail.com",                       href: "mailto:salimayoub822@gmail.com" },
  { icon: <FaLinkedin size={20} />, label: "LinkedIn",  value: "ayoub-salim",                                   href: "https://www.linkedin.com/in/ayoub-salim-9a80a5313/" },
  { icon: <FaWhatsapp size={20} />, label: "WhatsApp",  value: "+33 6 58 03 93 86",                             href: "https://wa.me/33658039386" },
  { icon: <FaGithub size={20} />,   label: "GitHub",    value: "salim123-crt",                                  href: "https://github.com/salim123-crt" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus]     = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm("service_4ux06gx", "template_q5qwenz", e.target, "ton_user_id")
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
        },
        () => setStatus("error")
      );
  };

  return (
    <section id="contact" className="contact">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-title"
      >
        Contact Me
      </motion.h2>

      <div className="contact-container">
        {/* Left — form */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <input  type="text"   name="name"    placeholder="Your name"    value={formData.name}    onChange={handleChange} required />
          <input  type="email"  name="email"   placeholder="Your email"   value={formData.email}   onChange={handleChange} required />
          <textarea name="message" placeholder="Tell me about your project" rows="5" value={formData.message} onChange={handleChange} required />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="contact-button"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </motion.button>

          <AnimatePresence>
            {status === "success" && (
              <motion.div
                className="contact-status contact-status--success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <FaCheckCircle /> Message sent! I'll get back to you soon.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                className="contact-status contact-status--error"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <FaTimesCircle /> Something went wrong. Please try again.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        {/* Right — contact info */}
        <motion.div
          className="contact-info-panel"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3>Let's connect</h3>
          <p>Open to job opportunities, collaborations, and interesting projects.</p>

          <div className="contact-links">
            {contactLinks.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="contact-link-card"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.18 }}
              >
                <span className="contact-link-icon">{item.icon}</span>
                <div>
                  <p className="contact-link-label">{item.label}</p>
                  <p className="contact-link-value">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
