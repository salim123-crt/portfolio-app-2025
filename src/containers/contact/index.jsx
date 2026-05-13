import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./style.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_4ux06gx";
    const templateID = "template_q5qwenz";
    const userID = "ton_user_id";

    emailjs
      .sendForm(serviceID, templateID, e.target, userID)
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Thank you for your message!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Email send error:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="contact-title"
      >
        Contact Me
      </motion.h2>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Tell me about your project"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="contact-button"
          >
            Send message
          </motion.button>
        </form>

        <div className="contact-info">
          <p>You can also email me directly:</p>
          <a href="mailto:salimayoub822@gmail.com">
            salimayoub822@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
