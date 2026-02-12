import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code2, Sparkles, Star, ArrowUpRight, Shield, Zap, Cpu, Database } from "lucide-react";

// Keeping your existing imports
import project1Image from "../assets/salonDiamond.png";
import project2Image from "../assets/Homestock.png";
import project3Image from "../assets/Dishcraft.png";
import project4Image from "../assets/TrendtrackerAI.png";
import project5Image from "../assets/LakTravelers.png";

const projects = [
  {
    name: "Lak Travelers",
    id: "LT-01",
    description: "Architecting an AI-driven Tourism ecosystem with GraphRAG. Cinematic itinerary engine with neural-style planning.",
    image: project5Image,
    tech: ["React", "Node.js", "Groq AI", "GraphRAG"],
    link: "https://github.com/Dilhara2002/lak-travelers.git",
    category: "AI_CORE",
    featured: true
  },
  {
    name: "Salon Diamond",
    id: "SD-02",
    description: "Enterprise-grade management system. High-performance SQL backend with real-time scheduling optics.",
    image: project1Image,
    tech: ["Node.js", "Express", "SQL", "EJS"],
    link: "https://github.com/Dilhara2002/Salon_Diamond_Management-.git",
    category: "SYSTEMS",
    featured: true
  },
  {
    name: "MyHomeStock",
    id: "HS-03",
    description: "Neural inventory tracking system. Monitoring consumption patterns through deep MERN integration.",
    image: project2Image,
    tech: ["React", "Node", "MongoDB"],
    link: "https://github.com/Dilhara2002/MyHomeStock.git",
    category: "MERN_ARCH",
    featured: true
  },
  {
    name: "TrendTracker AI",
    id: "TT-04",
    description: "Market sentiment analyzer. FinBERT NLP integration for high-frequency financial data processing.",
    image: project4Image,
    tech: ["Python", "NLP", "Streamlit"],
    link: "https://github.com/Dilhara2002/Dish-Craft.git",
    category: "AI_DATA",
    featured: true
  },
  {
    name: "Dish Craft",
    id: "DC-05",
    description: "Global recipe database. Optimized for rapid data retrieval and fluid UI transitions.",
    image: project3Image,
    tech: ["React", "Express", "MongoDB"],
    link: "https://github.com/Dilhara2002/TrendTracker-AI.git",
    category: "FULLSTACK",
    featured: false
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredProjects = activeFilter === "all" ? projects : projects.filter(p => p.featured);

  return (
    <section className="cinematic-projects">
      {/* Dynamic Background Noise & HUD Lines */}
      <div className="noise-overlay" />
      <div className="vignette" />
      <div className="hud-line-top" />
      <div className="hud-line-bottom" />

      <div className="content-container">
        {/* Cinematic Header */}
        <motion.header 
          initial={{ opacity: 0, letterSpacing: "10px" }}
          whileInView={{ opacity: 1, letterSpacing: "2px" }}
          transition={{ duration: 1 }}
          className="section-header"
        >
          <div className="status-indicator">
            <span className="blink-dot" />
            <span>ACCESSING_ARCHIVES</span>
          </div>
          <h1 className="main-title">VAULT<span className="green-glow">_01</span></h1>
          
          <div className="filter-system">
            {["all", "featured"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`nav-btn ${activeFilter === filter ? 'active' : ''}`}
              >
                {filter.toUpperCase()}
              </button>
            ))}
          </div>
        </motion.header>

        {/* 3x3 Expansion Grid */}
        <motion.div layout className="vault-grid">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, filter: "blur(20px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: idx * 0.1 }}
                className="vault-card"
              >
                <div className="card-top">
                  <span className="project-id">{project.id}</span>
                  <div className="tag-pill">{project.category}</div>
                </div>

                <div className="preview-window">
                  <img src={project.image} alt={project.name} className="project-img" />
                  <div className="glitch-overlay" />
                  <div className="hover-actions">
                    <a href={project.link} target="_blank" rel="noreferrer" className="action-circle">
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <div className="card-footer">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  
                  <div className="tech-nodes">
                    {project.tech.map(t => (
                      <span key={t} className="node-item"><Zap size={10} /> {t}</span>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" rel="noreferrer" className="open-btn">
                    DEPLOY_INTERFACE <ArrowUpRight size={16} />
                  </a>
                </div>
                
                {/* 3D Glass Corners */}
                <div className="corner-decor tl" />
                <div className="corner-decor br" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=JetBrains+Mono:wght@300;700&display=swap');

        .cinematic-projects {
          background: #000;
          min-height: 100vh;
          padding: 150px 40px;
          position: relative;
          color: #fff;
          font-family: 'JetBrains Mono', monospace;
          overflow: hidden;
        }

        /* Cinematic Overlays */
        .noise-overlay {
          position: fixed; inset: 0;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 2;
        }
        .vignette {
          position: absolute; inset: 0;
          background: radial-gradient(circle, transparent 20%, #000 100%);
          z-index: 3; pointer-events: none;
        }

        .content-container { position: relative; z-index: 10; max-width: 1600px; margin: 0 auto; }

        /* Header Styling */
        .section-header { text-align: center; margin-bottom: 80px; }
        .main-title { 
          font-family: 'Syncopate', sans-serif; 
          font-size: 6rem; font-weight: 700; margin: 20px 0; 
        }
        .green-glow { color: #00ff88; text-shadow: 0 0 30px #00ff88; }
        
        .status-indicator {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          color: #00ff88; font-size: 12px; letter-spacing: 5px;
        }
        .blink-dot { width: 8px; height: 8px; background: #00ff88; border-radius: 50%; animation: blink 1s infinite; }

        .filter-system { display: flex; justify-content: center; gap: 30px; margin-top: 40px; }
        .nav-btn {
          background: transparent; border: none; color: #444; 
          font-weight: 900; cursor: pointer; transition: 0.4s;
          padding-bottom: 5px; border-bottom: 2px solid transparent;
        }
        .nav-btn.active { color: #00ff88; border-color: #00ff88; }

        /* Expansion 3x3 Grid */
        .vault-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .vault-card {
          background: rgba(10, 10, 10, 0.8);
          border: 1px solid rgba(0, 255, 136, 0.1);
          padding: 25px;
          position: relative;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .vault-card:hover {
          transform: scale(1.05) translateY(-10px);
          border-color: #00ff88;
          box-shadow: 0 0 50px rgba(0, 255, 136, 0.1);
          z-index: 15;
        }

        .card-top { display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 10px; }
        .project-id { color: #444; }
        .tag-pill { border: 1px solid #00ff88; padding: 2px 10px; color: #00ff88; border-radius: 50px; }

        .preview-window {
          height: 250px; position: relative; overflow: hidden;
          clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%);
        }
        .project-img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: 0.5s; }
        .vault-card:hover .project-img { filter: grayscale(0%); transform: scale(1.1); }

        .card-footer h3 { font-family: 'Syncopate', sans-serif; color: #00ff88; font-size: 16px; margin: 20px 0 10px; }
        .card-footer p { font-size: 13px; color: #888; line-height: 1.6; height: 60px; overflow: hidden; }

        .tech-nodes { display: flex; flex-wrap: wrap; gap: 10px; margin: 20px 0; }
        .node-item { font-size: 10px; color: #00ff88; background: rgba(0, 255, 136, 0.05); padding: 5px 10px; }

        .open-btn {
          display: flex; align-items: center; gap: 10px; color: #fff; text-decoration: none;
          font-weight: 700; font-size: 12px; margin-top: 20px; transition: 0.3s;
        }
        .open-btn:hover { color: #00ff88; letter-spacing: 2px; }

        .corner-decor { position: absolute; width: 20px; height: 20px; border: 1px solid #00ff88; }
        .tl { top: -1px; left: -1px; border-right: none; border-bottom: none; }
        .br { bottom: -1px; right: -1px; border-left: none; border-top: none; }

        @keyframes blink { 50% { opacity: 0; } }

        @media (max-width: 1200px) { .vault-grid { grid-template-columns: repeat(2, 1fr); } .main-title { font-size: 3.5rem; } }
        @media (max-width: 768px) { .vault-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
};

export default Projects;