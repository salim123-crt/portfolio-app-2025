import react, { useState } from "react";
import {FaBars, FaReact} from 'react-icons/fa';
import { motion } from "framer-motion";
import {HiX} from 'react-icons/hi';
import { Link } from "react-router-dom";
import './style.scss';


const data = [
    {label : 'HOME',
     to : '/'
    },
    {label : 'ABOUT ME',
        to : '/about'
    },
    {label : 'SKILLS',
        to : '/skills'
    },
    {label : 'PORTFOLIO',
        to : '/portfolio'
    },
    {label : 'CONTACT',
        to : '/contact'
    },
]


const NavBar = ()=>{

    const[toggleIcon, setToggeleIcon] = useState(false);
    const handeleToggleIcon = ()=>{
        setToggeleIcon(!toggleIcon);
    }
    return(
        <div>
            <nav className="navbar">
                <div className="navbar_container">
                    <Link to={'/'} className='navbar_container_logo'>
                    <motion.p initial={{ opacity: 0, y: -20 }} 
                                         animate={{ opacity: 1, y: 0 }} 
                                         transition={{ duration: 0.4 }}
                className="navbar_container_logo_clickable">
                        SALIM.
                    </motion.p>
                    </Link>
                </div>
                <motion.ul initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ staggerChildren: 0.2, duration: 0.5 }}
               className={`navbar_container_menu ${toggleIcon ? 'active' : ''}`}>
                    {
                        data.map((item, key)=>(
                            <motion.li 
                            className="navbar_container_menu_item"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: key * 0.2 }}
                            key={key}>
                            <Link className="navbar_container_menu_item_links" to={item.to}>
                            {item.label}
                            </Link>
                            </motion.li>
                        ))
                    }
                </motion.ul>
                <div className="nav-icon" onClick={handeleToggleIcon}>
                     {toggleIcon ? <HiX size={30}/> : <FaBars size={30} />}
                </div>
            </nav>
        </div>
    );
}
export default NavBar