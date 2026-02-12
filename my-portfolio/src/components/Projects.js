import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { Github, Code2, Zap, ArrowUpRight, Terminal, Activity, ShieldCheck } from "lucide-react";

// Assets (Using your existing imports)
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
  
  // Mouse Tracking for 3D Perspective (Syncs with your Global Theme)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 30);
      mouseY.set((e.clientY / innerHeight - 0.5) * 30);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="cinematic-projects">
      {/* 1. BACKGROUND DATA LAYERS */}
      <div className="spatial-void">
        <div className="moving-scanline" />
        <div className="noise-overlay" />
        <motion.div 
          className="perspective-grid"
          style={{ rotateX: springY, rotateY: springX }}
        />
        <div className="vignette" />
      </div>

      {/* 2. HUD INTERFACE ELEMENTS */}
      <div className="cyber-frame">
        <div className="frame-corner tl"><div className="blink-dot" /> ARCHIVE_SCAN</div>
        <div className="frame-corner tr">UPLINK_STABLE: 100%</div>
        <div className="frame-corner bl">SRI_LANKA // 2026</div>
        <div className="frame-corner br">ENCRYPTION: AES_256</div>
      </div>

      <div className="content-container">
        {/* Cinematic Header */}
        <motion.header 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="section-header"
        >
          <div className="status-indicator">
            <Activity size={14} className="pulse-green" />
            <span>ACCESSING_VAULT_DATABASE</span>
          </div>
          <h1 className="main-title glitch" data-text="PROJECTS">
            PROJECTS<span className="green-glow"></span>
          </h1>
          
          <div className="terminal-prompt">
            <Terminal size={14} />
            <span className="typewriter">Loading engineering_logs... [SUCCESS]</span>
          </div>

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

        {/* 3. VAULT DATA GRID */}
        <motion.div layout className="vault-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, filter: "blur(10px)", scale: 0.8 }}
                transition={{ delay: idx * 0.1 }}
                className="vault-card"
              >
                <div className="card-top">
                  <span className="project-id">{project.id}</span>
                  <div className="tag-pill">
                    <ShieldCheck size={10} />
                    {project.category}
                  </div>
                </div>

                <div className="preview-window">
                  <img src={project.image} alt={project.name} className="project-img" />
                  <div className="glitch-overlay" />
                  <div className="scan-line-v" />
                  <div className="hover-actions">
                    <motion.a 
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      href={project.link} target="_blank" rel="noreferrer" className="action-circle"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                <div className="card-footer">
                  <h3>{project.name}</h3>
                  <p className="decrypt-text">{project.description}</p>
                  
                  <div className="tech-nodes">
                    {project.tech.map(t => (
                      <span key={t} className="node-item">
                        <Zap size={10} className="pulse-green" /> {t}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" rel="noreferrer" className="open-btn">
                    <span>EXECUTE_DEPLOYMENT</span> <ArrowUpRight size={16} />
                    <div className="btn-glimmer" />
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
        }

        /* 1. ANIMATED BACKGROUNDS */
        .spatial-void { position: absolute; inset: 0; perspective: 1200px; z-index: 1; pointer-events: none; overflow: hidden; }
        .perspective-grid {
          position: absolute; width: 250%; height: 250%; top: -75%; left: -75%;
          background-image: linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px);
          background-size: 80px 80px; transform: rotateX(60deg);
        }
        .moving-scanline {
          position: absolute; inset: 0;
          background: linear-gradient(0deg, transparent 0%, rgba(0, 255, 136, 0.05) 50%, transparent 100%);
          background-size: 100% 4px; animation: scan 8s infinite linear; z-index: 2;
        }
        .noise-overlay { position: absolute; inset: 0; opacity: 0.05; background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E"); z-index: 2; }
        .vignette { position: absolute; inset: 0; background: radial-gradient(circle, transparent 20%, #000 100%); z-index: 3; }

        /* 2. HUD FRAME */
        .frame-corner { position: fixed; color: #00ff88; font-size: 10px; padding: 25px; letter-spacing: 2px; z-index: 100; font-weight: bold; }
        .tl { top: 0; left: 0; border-left: 3px solid #00ff88; border-top: 3px solid #00ff88; }
        .tr { top: 0; right: 0; border-right: 3px solid #00ff88; border-top: 3px solid #00ff88; }
        .bl { bottom: 0; left: 0; border-left: 3px solid #00ff88; border-bottom: 3px solid #00ff88; }
        .br { bottom: 0; right: 0; border-right: 3px solid #00ff88; border-bottom: 3px solid #00ff88; }
        .blink-dot { width: 8px; height: 8px; background: #00ff88; border-radius: 50%; display: inline-block; margin-right: 10px; animation: blink 1s infinite; }

        .content-container { position: relative; z-index: 10; max-width: 1600px; margin: 0 auto; }

        /* HEADER */
        .section-header { text-align: left; margin-bottom: 80px; }
        .main-title { font-family: 'Syncopate', sans-serif; font-size: 6rem; font-weight: 700; margin: 20px 0; }
        .green-glow { color: #00ff88; text-shadow: 0 0 30px #00ff88; }
        .glitch:hover::before { content: attr(data-text); position: absolute; left: 2px; text-shadow: -2px 0 #ff00c1; clip: rect(44px, 450px, 56px, 0); animation: glitch-anim 0.2s infinite linear alternate-reverse; }

        .status-indicator { display: flex; align-items: center; gap: 10px; color: #00ff88; font-size: 12px; letter-spacing: 5px; }
        .terminal-prompt { display: flex; align-items: center; gap: 10px; color: #00ff88; font-size: 12px; margin-top: 10px; }
        .typewriter { overflow: hidden; white-space: nowrap; border-right: 2px solid #00ff88; animation: typing 3s steps(40), blink 0.5s infinite; }

        .filter-system { display: flex; gap: 30px; margin-top: 40px; }
        .nav-btn { background: transparent; border: none; color: #444; font-weight: 900; cursor: pointer; transition: 0.4s; border-bottom: 2px solid transparent; }
        .nav-btn.active { color: #00ff88; border-color: #00ff88; }

        /* GRID & CARDS */
        .vault-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .vault-card {
          background: rgba(0, 20, 10, 0.4); border: 1px solid rgba(0, 255, 136, 0.15);
          padding: 30px; position: relative; backdrop-filter: blur(15px);
          transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .vault-card:hover { transform: scale(1.02) translateY(-10px); border-color: #00ff88; box-shadow: 0 0 50px rgba(0, 255, 136, 0.1); z-index: 15; }

        .card-top { display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 10px; align-items: center; }
        .project-id { color: #555; }
        .tag-pill { border: 1px solid #00ff88; padding: 4px 12px; color: #00ff88; border-radius: 2px; font-size: 9px; display: flex; align-items: center; gap: 5px; }

        .preview-window {
          height: 250px; position: relative; overflow: hidden;
          clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%);
        }
        .scan-line-v { position: absolute; width: 100%; height: 2px; background: rgba(0, 255, 136, 0.3); top: 0; animation: scan 4s infinite linear; z-index: 5; }
        .project-img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(1.2); transition: 0.5s; }
        .vault-card:hover .project-img { filter: grayscale(0%); transform: scale(1.1); }

        .card-footer h3 { font-family: 'Syncopate', sans-serif; color: #00ff88; font-size: 16px; margin: 25px 0 10px; }
        .card-footer p { font-size: 13px; color: #ccc; line-height: 1.6; min-height: 60px; }

        .tech-nodes { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0; }
        .node-item { font-size: 9px; color: #00ff88; background: rgba(0, 255, 136, 0.05); padding: 5px 12px; border: 1px solid rgba(0, 255, 136, 0.1); }

        .open-btn {
          display: flex; align-items: center; justify-content: center; gap: 15px; color: #000; background: #00ff88;
          text-decoration: none; font-weight: 900; font-size: 11px; padding: 15px; 
          clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%); transition: 0.3s;
        }
        .open-btn:hover { background: #fff; transform: scale(1.02); box-shadow: 0 0 30px #00ff88; }

        .action-circle { width: 45px; height: 45px; background: #00ff88; color: #000; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

        /* KEYFRAMES */
        @keyframes scan { from { top: 0% } to { top: 100% } }
        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes glitch-anim { 0% { clip: rect(31px, 9999px, 94px, 0); } 100% { clip: rect(70px, 9999px, 80px, 0); } }

        @media (max-width: 1200px) { .vault-grid { grid-template-columns: repeat(2, 1fr); } .main-title { font-size: 3.5rem; } }
        @media (max-width: 768px) { .vault-grid { grid-template-columns: 1fr; .main-title { font-size: 2.5rem; } }
      `}</style>
    </section>
  );
};

export default Projects;