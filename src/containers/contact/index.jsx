import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; // Importer la bibliothèque EmailJS
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

    // Configuration d'EmailJS avec les informations de ton compte
    const serviceID = "service_4ux06gx"; // Remplace avec l'ID de ton service
    const templateID = "template_q5qwenz"; // Remplace avec l'ID de ton template
    const userID = "ton_user_id"; // Remplace avec ton User ID (disponible dans ton tableau de bord EmailJS)

    // Envoie de l'email avec EmailJS
    emailjs
      .sendForm(serviceID, templateID, e.target, userID)
      .then(
        (result) => {
          console.log("Email envoyé avec succès :", result.text);
          alert("Merci pour votre message !");
          setFormData({ name: "", email: "", message: "" }); // Réinitialiser le formulaire
        },
        (error) => {
          console.log("Erreur lors de l'envoi de l'email :", error.text);
          alert("Oups, il y a eu un problème. Essayez encore.");
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
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
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
            Envoyer
          </motion.button>
        </form>

        <div className="contact-info">
          <p>Ou bien écris-moi directement :</p>
          <a href="mailto:salimayoub822@gmail.com">
            salimayoub822@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
