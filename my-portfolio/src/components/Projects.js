import React, { useState } from "react";
import { Github, ExternalLink, Code2, Sparkles, Star, ArrowUpRight, Layers, Zap } from "lucide-react";

// Real Project Images from your assets
import project1Image from "../assets/salonDiamond.png";
import project2Image from "../assets/Homestock.png";
import project3Image from "../assets/Dishcraft.png";
import project4Image from "../assets/TrendtrackerAI.png";
import project5Image from "../assets/LakTravelers.png";

const projects = [
  {
  category: "AI & Full-Stack"
    name: "Lak Travelers",
    description: "An AI-driven Tourism ecosystem utilizing GraphRAG for spatial itinerary planning. Features the CCTNS reputation model, secure Email OTP, and a professional PDF itinerary engine. Fully optimized as a PWA.",
    image: project5Image,
    tech: ["React", "Node.js", "MongoDB", "Groq AI", "GraphRAG", "PWA", "Tailwind"],
    link: "https://github.com/Dilhara2002/lak-travelers.git",
    color: "#3b82f6", 
    gradient: "linear-gradient(135deg, #1e40af, #3b82f6)",
    hasLiveDemo: false,
    featured: true,
    category: "AI & Full-Stack"
  },
  {
    name: "Salon Diamond System",
    description: "A comprehensive full-stack salon management platform. Streamlines appointments, client tracking, and service management with a custom SQL backend and dynamic EJS rendering.",
    image: project1Image,
    tech: ["Node.js", "Express.js", "EJS", "SQL"],
    link: "https://github.com/Dilhara2002/Salon_Diamond_Management-.git",
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    hasLiveDemo: false,
    featured: true,
    category: "Full-Stack"
  },
  {
    name: "MyHomeStock",
    description: "An intelligent inventory tracker for households. Uses React and MongoDB to monitor consumption patterns, manage stock levels, and reduce domestic waste through data-driven insights.",
    image: project2Image,
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/Dilhara2002/MyHomeStock.git",
    live: "https://www.linkedin.com/in/ishan-wijesinghe-5200a1318",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    hasLiveDemo: true,
    featured: true,
    category: "MERN"
  },
  {
    name: "Dish Craft",
    description: "A social culinary platform where users share and discover global recipes. Built with a focus on seamless UI transitions and high-performance MongoDB data retrieval.",
    image: project3Image,
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/Dilhara2002/TrendTracker-AI.git",
    live: "https://www.linkedin.com/in/ishan-wijesinghe-5200a1318",
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899, #db2777)",
    hasLiveDemo: true,
    featured: false,
    category: "Full-Stack"
  },
  {
    name: "TrendTracker AI",
    description: "Advanced financial sentiment analyzer. Leverages FinBERT NLP models to process Yahoo Finance data and news, providing actionable real-time market sentiment summaries.",
    image: project4Image,
    tech: ["Python", "Streamlit", "NLP", "Pandas"],
    link: "https://github.com/Dilhara2002/Dish-Craft.git",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    hasLiveDemo: false,
    featured: true,
    category: "AI/Data"
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.featured);

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.glowBg} />
      <div style={styles.gridBg} />

      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.badge}>
            <Layers size={18} color="#6366f1" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>

          <h1 style={styles.title}>Featured Projects</h1>
          
          <div style={styles.titleSeparator}>
            <div style={styles.line} />
            <Sparkles size={24} color="#6366f1" />
            <div style={styles.line} />
          </div>

          <p style={styles.subtitle}>
            A showcase of my technical journey—from complex enterprise management systems to AI-powered market analysis.
          </p>

          <div style={styles.filterGroup}>
            {["all", "featured"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  ...styles.filterBtn,
                  border: activeFilter === filter ? "2px solid #6366f1" : "2px solid rgba(255, 255, 255, 0.1)",
                  background: activeFilter === filter ? "rgba(99, 102, 241, 0.15)" : "rgba(255, 255, 255, 0.03)",
                  color: activeFilter === filter ? "#6366f1" : "#9ca3af",
                }}
              >
                {filter === "all" ? "All Collections" : "Featured Work"}
              </button>
            ))}
          </div>
        </div>

        {/* Updated Grid for 3x3 Balance */}
        <div className="projects-grid" style={styles.grid}>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                ...styles.card,
                border: `1px solid ${hoveredIndex === index ? project.color : "rgba(255, 255, 255, 0.05)"}`,
                transform: hoveredIndex === index ? "translateY(-12px) scale(1.02)" : "translateY(0)",
                boxShadow: hoveredIndex === index ? `0 30px 60px ${project.color}30` : "0 10px 30px rgba(0,0,0,0.3)"
              }}
            >
              <div style={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={project.name}
                  style={{
                    ...styles.image,
                    transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                  }}
                />
                <div style={styles.imgOverlay} />
                <div style={{ ...styles.techIcon, border: `1px solid ${project.color}40` }}>
                  <Code2 size={20} color={project.color} />
                </div>
                <div style={{ ...styles.categoryBadge, color: project.color }}>{project.category}</div>
                <div style={{
                  ...styles.quickLinks,
                  opacity: hoveredIndex === index ? 1 : 0,
                  transform: hoveredIndex === index ? "translateY(0)" : "translateY(10px)",
                }}>
                  <a href={project.link} target="_blank" rel="noreferrer" style={styles.iconLink}><Github size={18} /></a>
                  {project.hasLiveDemo && <a href={project.live} target="_blank" rel="noreferrer" style={styles.iconLink}><ExternalLink size={18} /></a>}
                </div>
              </div>

              <div style={styles.cardBody}>
                <div style={styles.cardHeaderRow}>
                  <h3 style={styles.cardTitle}>{project.name}</h3>
                  {project.featured && <Star size={16} color={project.color} fill={project.color} />}
                </div>

                {/* flex-grow ensures this takes up space to keep buttons aligned */}
                <p style={styles.cardDesc}>{project.description}</p>

                <div style={styles.techStack}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{ ...styles.techTag, color: project.color, borderColor: `${project.color}40` }}>
                      <Zap size={10} /> {t}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{
                    ...styles.viewBtn,
                    background: hoveredIndex === index ? project.gradient : "rgba(255, 255, 255, 0.03)",
                    borderColor: hoveredIndex === index ? "transparent" : `${project.color}60`
                  }}
                >
                  View Details <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Forces 3 columns on desktops, 2 on tablets, 1 on mobile */
        .projects-grid {
          display: grid;
          gap: 30px;
          grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 1100px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
        }

        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
      `}</style>
    </section>
  );
};

const styles = {
  section: { minHeight: "100vh", background: "#050505", padding: "100px 20px", position: "relative", overflow: "hidden" },
  glowBg: { position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.05) 0%, transparent 50%)", pointerEvents: 'none' },
  gridBg: { position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: 'none' },
  container: { position: "relative", zIndex: 10, maxWidth: "1400px", margin: "0 auto" },
  header: { textAlign: "center", marginBottom: "80px" },
  badge: { display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(99, 102, 241, 0.1)", padding: "10px 25px", borderRadius: "50px", color: "#6366f1", fontSize: "0.8rem", fontWeight: "700", letterSpacing: "2px" },
  title: { fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: "900", color: "#fff", margin: "20px 0" },
  titleSeparator: { display: "flex", alignItems: "center", justifyContent: "center", gap: "15px" },
  line: { width: "50px", height: "2px", background: "#6366f1", borderRadius: "2px" },
  subtitle: { color: "#9ca3af", fontSize: "1.1rem", maxWidth: "700px", margin: "25px auto" },
  filterGroup: { display: "flex", gap: "15px", justifyContent: "center", marginTop: "40px" },
  filterBtn: { padding: "12px 25px", borderRadius: "50px", cursor: "pointer", transition: "0.3s", fontWeight: "600", fontSize: "0.9rem", color: "#9ca3af" },
  
  // Grid layout
  grid: { 
    display: "grid", 
    gap: "30px",
    width: "100%"
  },

  card: { 
    background: "rgba(255,255,255,0.02)", 
    backdropFilter: "blur(20px)", 
    borderRadius: "24px", 
    overflow: "hidden", 
    transition: "all 0.4s ease",
    display: "flex",
    flexDirection: "column",
    height: "100%" // Force cards to fill vertical space
  },
  imageContainer: { height: "230px", position: "relative", overflow: "hidden", flexShrink: 0 },
  image: { width: "100%", height: "100%", objectFit: "cover", transition: "0.6s" },
  imgOverlay: { position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))" },
  techIcon: { position: "absolute", top: "15px", right: "15px", background: "rgba(0,0,0,0.6)", padding: "10px", borderRadius: "12px" },
  categoryBadge: { position: "absolute", top: "15px", left: "15px", background: "rgba(0,0,0,0.6)", padding: "5px 12px", borderRadius: "10px", fontSize: "0.75rem", fontWeight: "700" },
  quickLinks: { position: "absolute", bottom: "15px", right: "15px", display: "flex", gap: "10px", transition: "0.3s" },
  iconLink: { background: "rgba(0,0,0,0.8)", border: "1px solid #fff", color: "#fff", padding: "8px", borderRadius: "10px", display: "flex" },
  
  cardBody: { 
    padding: "30px", 
    display: "flex", 
    flexDirection: "column", 
    flexGrow: 1, // Makes the body expand to fill the card
    gap: "15px" 
  },
  cardHeaderRow: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  cardTitle: { color: "#fff", fontSize: "1.5rem", fontWeight: "800", margin: 0 },
  cardDesc: { 
    color: "#9ca3af", 
    fontSize: "0.95rem", 
    lineHeight: "1.7",
    flexGrow: 1 // Important: pushes the tech stack and button to the bottom
  },
  techStack: { display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "10px" },
  techTag: { border: "1px solid", padding: "5px 12px", borderRadius: "10px", fontSize: "0.75rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "5px" },
  viewBtn: { marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "12px", borderRadius: "50px", color: "#fff", textDecoration: "none", fontWeight: "700", transition: "0.3s", border: "2px solid" }
};

export default Projects;