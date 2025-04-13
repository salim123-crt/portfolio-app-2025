import React, { useState } from "react";
import { motion } from "framer-motion"; // Importer Framer Motion
import './style.scss';
import { Link } from "react-router-dom";
import bgImage from "../../assets/images/home-bg.jpg"; // adapte le chemin si nécessaire

const Home = () => {

   const[button, setButton] = useState(false);
       const goToContact = ()=>{
           setButton(!button);
       }
   return ( 
      <section id="home" className="home">
         <div className="home-text-wrapper">
            <motion.h1
               className="home-text-wrapper-text"
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1 }}
            >
               Hello, I'm SALIM.
               <br/>
               IA Engineer & Developer
               <br/>
              <Link to="/contact" ><motion.button

                  className="home-text-wrapper-button"
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={goToContact}
               >
                  HIRE ME
               </motion.button>
               </Link> 
            </motion.h1>
         </div>
      </section>
   );
}
export default Home;
