import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Folder, Code, GraduationCap, Mail, Menu, X, Terminal } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section for high-precision HUD tracking
      const sections = ["home", "about", "projects", "skills", "education", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Active if the section is near the top of the viewport
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "HOME", icon: Home },
    { id: "about", label: "ABOUT", icon: User },
    { id: "projects", label: "PROJECTS", icon: Folder },
    { id: "skills", label: "SKILLS", icon: Code },
    { id: "education", label: "EDUCATION", icon: GraduationCap },
    { id: "contact", label: "CONTACT", icon: Mail }
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className={`hyper-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          
          {/* LOGO: COMMAND IDENTIFIER */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick("home"); }} className="nav-logo">
            <Terminal size={20} className="logo-icon" />
            <span className="logo-text">ISHAN_WIJESINGHE</span>
            <div className="status-dot" />
          </a>

          {/* DESKTOP HUD NAVIGATION */}
          <div className="nav-links">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  <Icon size={16} className="link-icon" />
                  <span className="link-label">{item.label}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeHUD" 
                      className="hud-indicator"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* MOBILE TOGGLE */}
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE OVERLAY */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="mobile-overlay"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                  className={`mobile-link ${activeSection === item.id ? "active" : ""}`}
                >
                  <item.icon size={24} />
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@900&family=JetBrains+Mono:wght@400;700&display=swap');

        .hyper-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          padding: 30px 40px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: 'JetBrains Mono', monospace;
        }

        .hyper-nav.scrolled {
          padding: 15px 40px;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 255, 136, 0.2);
        }

        .nav-container {
          max-width: 1600px; margin: 0 auto;
          display: flex; justify-content: space-between; align-items: center;
        }

        /* LOGO STYLING */
        .nav-logo {
          display: flex; align-items: center; gap: 12px;
          text-decoration: none; color: #fff;
          font-family: 'Orbitron', sans-serif; font-weight: 900;
          font-size: 1.2rem; letter-spacing: -1px;
        }
        .logo-icon { color: #00ff88; }
        .status-dot {
          width: 8px; height: 8px; background: #00ff88; border-radius: 50%;
          box-shadow: 0 0 15px #00ff88; animation: blink 2s infinite;
        }

        /* HUD LINK STYLING */
        .nav-links { display: flex; gap: 5px; }
        .nav-link {
          position: relative;
          display: flex; align-items: center; gap: 10px;
          padding: 10px 20px; text-decoration: none;
          color: #666; font-size: 0.8rem; font-weight: bold;
          transition: 0.3s;
        }
        .nav-link:hover, .nav-link.active { color: #00ff88; }
        
        .hud-indicator {
          position: absolute; inset: 0;
          border: 1px solid #00ff88;
          background: rgba(0, 255, 136, 0.05);
          clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
          z-index: -1;
        }

        /* MOBILE SYSTEM */
        .mobile-toggle {
          display: none; background: transparent; border: 1px solid #00ff88;
          color: #00ff88; padding: 8px; cursor: pointer;
          border-radius: 4px;
        }

        .mobile-overlay {
          position: fixed; top: 0; right: 0; width: 100%; height: 100vh;
          background: #000; display: flex; flex-direction: column;
          justify-content: center; align-items: center; gap: 30px;
          z-index: 999;
        }

        .mobile-link {
          font-size: 1.8rem; color: #333; text-decoration: none;
          font-family: 'Orbitron', sans-serif; display: flex; align-items: center; gap: 20px;
          transition: 0.3s;
        }
        .mobile-link.active { color: #00ff88; text-shadow: 0 0 20px #00ff88; }

        @keyframes blink { 50% { opacity: 0.3; } }

        @media (max-width: 1100px) {
          .nav-links { display: none; }
          .mobile-toggle { display: block; }
        }
      `}</style>
    </>
  );
};

export default Navbar;