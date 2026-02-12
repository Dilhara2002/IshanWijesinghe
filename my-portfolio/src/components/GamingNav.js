import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const GamingNav = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: "ABOUT", path: "/about", pos: "top-hex" },
    { label: "WORK", path: "/projects", pos: "left-hex" },
    { label: "HOME", path: "/", pos: "center-hex", isHome: true },
    { label: "SKILL", path: "/skills", pos: "right-hex" },
    { label: "EDU", path: "/education", pos: "bottom-left-hex" },
    { label: "MAIL", path: "/contact", pos: "bottom-right-hex" },
  ];

  return (
    <nav className="cyber-hud">
      <div className="hex-container">
        {navItems.map((item, i) => (
          <motion.div
            key={item.label}
            className={`hex-wrapper ${item.pos}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <button className="hex-btn" onClick={() => navigate(item.path)}>
              <div className="hex-content">
                <span className="hex-label">{item.label}</span>
                <div className="hex-scanline"></div>
              </div>
              <svg className="hex-svg" viewBox="0 0 100 115">
                <path d="M50 0 L100 28.8 L100 86.2 L50 115 L0 86.2 L0 28.8 Z" />
              </svg>
            </button>
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

export default GamingNav;