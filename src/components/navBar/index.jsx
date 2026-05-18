import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";

const data = [
  { label: "HOME",      to: "/" },
  { label: "ABOUT ME",  to: "/about" },
  { label: "SKILLS",    to: "/skills" },
  { label: "PORTFOLIO", to: "/portfolio" },
  { label: "CONTACT",   to: "/contact" },
];

const NavBar = () => {
  const [open, setOpen]   = useState(false);
  const { pathname }      = useLocation();

  const isActive = (to) =>
    to === "/"
      ? pathname === "/" || pathname === "/portfolio-app-2025"
      : pathname === to;

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <Link to="/" className="navbar_container_logo" onClick={() => setOpen(false)}>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="navbar_container_logo_clickable"
          >
            SALIM.
          </motion.p>
        </Link>
      </div>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`navbar_container_menu ${open ? "active" : ""}`}
      >
        {data.map((item, key) => (
          <motion.li
            key={key}
            className="navbar_container_menu_item"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: key * 0.08 }}
          >
            <Link
              className={`navbar_container_menu_item_links${isActive(item.to) ? " active" : ""}`}
              to={item.to}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <div className="nav-icon" onClick={() => setOpen((v) => !v)}>
        {open ? <HiX size={30} /> : <FaBars size={30} />}
      </div>
    </nav>
  );
};

export default NavBar;
