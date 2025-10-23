import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Sparkles, Home, User, Folder, Code, GraduationCap, Award, Mail } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'education', 'certificates', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Folder },
    { id: "skills", label: "Skills", icon: Code },
    { id: "education", label: "Education", icon: GraduationCap },
    // { id: "certificates", label: "Certificates", icon: Award },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  const handleNavClick = (itemId) => {
    setActiveSection(itemId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
          }
          50% { 
            transform: scale(1.05);
          }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideDown 0.6s ease-out;
        }

        .navbar-default {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
        }

        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(30px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.12);
        }

        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 800;
          color: #1a1a2e;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .logo:hover {
          transform: translateY(-2px);
        }

        .logo-accent {
          color: #6366f1;
          position: relative;
        }

        .logo-accent::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #a855f7);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .logo:hover .logo-accent::after {
          transform: scaleX(1);
        }

        .logo-sparkle {
          color: #a855f7;
          animation: pulse 2s ease-in-out infinite;
        }

        .nav-items {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .nav-link {
          position: relative;
          color: #4b5563;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.8rem 1.2rem;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .nav-link:hover::before {
          left: 100%;
        }

        .nav-link:hover {
          color: #6366f1;
          background: rgba(99, 102, 241, 0.05);
          transform: translateY(-2px);
        }

        .nav-link-active {
          color: #6366f1;
          background: rgba(99, 102, 241, 0.08);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
        }

        .nav-link-active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          background: #6366f1;
          border-radius: 50%;
          animation: pulse 1.5s ease-in-out infinite;
        }

        .nav-icon {
          width: 18px;
          height: 18px;
          transition: all 0.3s ease;
        }

        .nav-link:hover .nav-icon {
          transform: scale(1.2);
          color: #6366f1;
        }

        .nav-link-active .nav-icon {
          color: #6366f1;
          animation: pulse 2s ease-in-out infinite;
        }

        .mobile-menu-button {
          display: none;
          background: transparent;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 0.5rem;
          color: #4b5563;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-menu-button:hover {
          background: rgba(0, 0, 0, 0.05);
          transform: scale(1.05);
        }

        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(30px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          padding: 1rem 2rem;
          display: none;
          flex-direction: column;
          gap: 0.5rem;
          z-index: 999;
          animation: slideDown 0.3s ease-out;
        }

        .mobile-menu.open {
          display: flex;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          color: #4b5563;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.3s ease;
          font-weight: 600;
          border: 1px solid transparent;
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          background: rgba(99, 102, 241, 0.08);
          color: #6366f1;
          border-color: rgba(99, 102, 241, 0.2);
          transform: translateX(5px);
        }

        .mobile-nav-link.active {
          background: rgba(99, 102, 241, 0.12);
        }

        @media (max-width: 1024px) {
          .nav-items {
            gap: 0.3rem;
          }
          
          .nav-link {
            padding: 0.7rem 1rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 768px) {
          .nav-content {
            padding: 1rem 1.5rem;
          }

          .nav-items {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }

          .logo {
            font-size: 1.5rem;
          }

          .mobile-menu {
            display: none;
          }

          .mobile-menu.open {
            display: flex;
          }
        }

        @media (max-width: 480px) {
          .nav-content {
            padding: 0.8rem 1rem;
          }

          .logo {
            font-size: 1.3rem;
          }

          .mobile-menu {
            padding: 1rem;
          }

          .mobile-nav-link {
            padding: 0.8rem 1.2rem;
            font-size: 0.9rem;
          }
        }
      `}</style>

      <nav className={`navbar-container ${scrolled ? 'navbar-scrolled' : 'navbar-default'}`} ref={navbarRef}>
        <div className="nav-content">
          <a href="#home" className="logo" onClick={() => handleNavClick('home')}>
            {/* <Sparkles size={24} className="logo-sparkle" /> */}
            <span>Ishan</span>
            {/* <span className="logo-accent">.</span> */}
            <span>Wijesinghe</span>
          </a>

          <div className="nav-items">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
                onClick={() => handleNavClick(item.id)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out backwards'
                }}
              >
                <item.icon size={18} className="nav-icon" />
                {item.label}
              </a>
            ))}
          </div>

          <button 
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'slideInLeft 0.4s ease-out backwards'
              }}
            >
              <item.icon size={20} />
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div style={{ height: "80px" }}></div>
    </>
  );
};

export default Navbar;