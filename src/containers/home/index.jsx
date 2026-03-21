import React, { useState } from "react";
import { motion } from "framer-motion";
import './style.scss';
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaWhatsapp, FaKaggle, FaEnvelope } from "react-icons/fa";

const Home = () => {
   const [button, setButton] = useState(false);
   const goToContact = () => {
      setButton(!button);
   }

   return (
      <section id="home" className="home">
         <div className="home-text-wrapper">
            <motion.h1
               className="home-text-wrapper-text"
               initial={{ opacity: 0, y: 20 }} // Réduit de 50 à 20 pour moins de saut visuel
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }} // Un peu plus rapide
            >
               Hello, I'm SALIM.
               <br />
               IA Engineer & Developer
            </motion.h1>

            <div className="home-socials-button-wrapper">
               {/* Bouton HIRE ME - Motion adoucie */}
               <Link to="/contact">
                  <motion.button
                     className="home-text-wrapper-button"
                     type="submit"
                     whileHover={{ scale: 1.05 }} // 1.05 au lieu de 1.1
                     whileTap={{ scale: 0.95 }}   // 0.95 au lieu de 0.9
                     onClick={goToContact}
                  >
                     HIRE ME
                  </motion.button>
               </Link>

               {/* Bouton DOWNLOAD CV - Corrigé (le 0.5 a été supprimé) */}
               <motion.a
                  href="/CV.pdf"
                  download="SALIM_Ayoub_CV.pdf"
                  className="home-text-wrapper-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }} // Effet de pression naturel
               >
                  DOWNLOAD CV
               </motion.a>

               <div className="home-social-icons">
                  {/* Optionnel : tu peux aussi ajouter un petit scale sur les icônes */}
                  <motion.a whileHover={{ scale: 1.2, color: '#EEE8AA' }} href="https://www.linkedin.com/in/ayoub-salim-9a80a5313/" target="_blank" rel="noreferrer">
                     <FaLinkedin size={30} />
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.2, color: '#EEE8AA' }} href="https://github.com/salim123-crt" target="_blank" rel="noreferrer">
                     <FaGithub size={30} />
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.2, color: '#EEE8AA' }} href="https://wa.me/33658039386" target="_blank" rel="noreferrer">
                     <FaWhatsapp size={30} />
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.2, color: '#EEE8AA' }} href="mailto:salimayoub822@gmail.com">
                     <FaEnvelope size={30} />
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.2, color: '#EEE8AA' }} href="https://www.kaggle.com/ayoubsalim" target="_blank" rel="noreferrer">
                     <FaKaggle size={30} />
                  </motion.a>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Home;