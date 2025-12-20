import React, { useState, useEffect } from "react";
import { Home, User, Folder, Code, GraduationCap, Award, Mail, Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["home", "about", "projects", "skills", "education", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Folder },
    { id: "skills", label: "Skills", icon: Code },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail }
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
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled 
          ? "rgba(10, 10, 15, 0.85)" 
          : "linear-gradient(180deg, rgba(10, 10, 15, 0.8) 0%, transparent 100%)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(5px)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        borderBottom: scrolled ? "1px solid rgba(99, 102, 241, 0.2)" : "1px solid transparent",
        boxShadow: scrolled ? "0 10px 40px rgba(0, 0, 0, 0.3)" : "none",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: scrolled ? "1rem 2rem" : "1.5rem 2rem",
          transition: "padding 0.4s ease"
        }}>
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.75rem",
              fontWeight: "900",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              letterSpacing: "-1px",
              transition: "all 0.3s",
              position: "relative"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <span style={{
              background: "linear-gradient(135deg, #fff, #6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              ISHAN WIJESINGHE
            </span>
            <div style={{
              width: "8px",
              height: "8px",
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              borderRadius: "50%",
              boxShadow: "0 0 20px rgba(99, 102, 241, 0.6)",
              animation: "pulse 2s ease-in-out infinite"
            }} />
          </a>

          {/* Desktop Navigation */}
          <div style={{
            display: "flex",
            gap: "8px",
            alignItems: "center"
          }}>
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  style={{
                    color: isActive ? "#fff" : "#9ca3af",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    fontWeight: isActive ? "600" : "500",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 18px",
                    borderRadius: "50px",
                    background: isActive 
                      ? "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))"
                      : "transparent",
                    border: isActive 
                      ? "1px solid rgba(99, 102, 241, 0.4)" 
                      : "1px solid transparent",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: isActive ? "0 4px 15px rgba(99, 102, 241, 0.2)" : "none"
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.2)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#9ca3af";
                      e.currentTarget.style.borderColor = "transparent";
                      e.currentTarget.style.transform = "translateY(0)";
                    }
                  }}
                >
                  <Icon 
                    size={18} 
                    style={{
                      color: isActive ? "#6366f1" : "inherit",
                      transition: "color 0.3s"
                    }}
                  />
                  <span className="nav-text" style={{
                    letterSpacing: "0.5px"
                  }}>
                    {item.label}
                  </span>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <div style={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "60%",
                      height: "2px",
                      background: "linear-gradient(90deg, transparent, #6366f1, transparent)",
                      animation: "shimmer 2s ease-in-out infinite"
                    }} />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "none",
              background: "rgba(99, 102, 241, 0.1)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              borderRadius: "12px",
              padding: "10px",
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.3s"
            }}
            className="mobile-menu-btn"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(99, 102, 241, 0.2)";
              e.currentTarget.style.borderColor = "#6366f1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(99, 102, 241, 0.1)";
              e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.3)";
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div style={{
          display: mobileMenuOpen ? "flex" : "none",
          flexDirection: "column",
          gap: "8px",
          padding: "20px",
          background: "rgba(10, 10, 15, 0.98)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(99, 102, 241, 0.2)",
          animation: mobileMenuOpen ? "slideDown 0.3s ease-out" : "none"
        }}
        className="mobile-menu"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                style={{
                  color: isActive ? "#fff" : "#9ca3af",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: isActive ? "600" : "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "14px 20px",
                  borderRadius: "16px",
                  background: isActive 
                    ? "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))"
                    : "rgba(255, 255, 255, 0.02)",
                  border: isActive 
                    ? "1px solid rgba(99, 102, 241, 0.4)" 
                    : "1px solid rgba(255, 255, 255, 0.05)",
                  transition: "all 0.3s"
                }}
              >
                <Icon size={20} style={{ color: isActive ? "#6366f1" : "inherit" }} />
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(0.9); }
        }
        
        @keyframes shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .nav-text {
            display: none !important;
          }
          nav > div > div:nth-child(2) {
            gap: 4px !important;
          }
          nav > div > div:nth-child(2) > a {
            padding: 10px 12px !important;
          }
        }

        @media (max-width: 768px) {
          nav > div > div:nth-child(2) {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;