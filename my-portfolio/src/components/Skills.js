import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Terminal, Database, Wrench, Sparkles, Cpu, Zap, TrendingUp, Award, Activity } from "lucide-react";

const skillCategories = [
  { 
    title: "FRONTEND", 
    icon: Code2,
    skills: [
      { name: "Next.js / React", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "Tailwind / CSS", level: 95 }
    ] 
  },
  { 
    title: "BACKEND", 
    icon: Terminal,
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "Frappe Framework", level: 75 },
      { name: "REST / GraphQL", level: 80 }
    ] 
  },
  { 
    title: "DATA_CORE", 
    icon: Database,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL / SQL", level: 80 },
      { name: "Vector DBs", level: 65 }
    ] 
  },
  { 
    title: "DEV_OPS", 
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Postman / Testing", level: 85 },
      { name: "Docker", level: 60 }
    ] 
  }
];

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="hyper-skills-container">
      {/* 3D BACKGROUND GRID */}
      <div className="spatial-floor" />
      <div className="vignette-overlay" />

      <div className="content-shell">
        {/* HUD HEADER */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="hud-header"
        >
          <div className="hud-badge">
            <Activity size={14} className="pulse-green" />
            <span>NEURAL_CAPACITY_LOADED</span>
          </div>
          <h1 className="expansive-title">TECH<span className="outline-text">_MATRIX</span></h1>
          <p className="hud-meta">Decoding multi-stack proficiency across modern digital architectures.</p>
        </motion.header>

        {/* SKILLS HEX GRID */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredCategory === index;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                className="skill-hex-card"
              >
                <div className="card-glitch-border" />
                
                {/* CATEGORY ICON & TITLE */}
                <div className="category-header">
                  <div className={`icon-shield ${isHovered ? 'active' : ''}`}>
                    <Icon size={24} />
                  </div>
                  <h3>{category.title}</h3>
                </div>

                {/* PROGRESS BARS */}
                <div className="skills-stack">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="skill-line">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <div className="progress-track">
                        <motion.div 
                          className="progress-fill"
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* DECORATIVE HUD ELEMENTS */}
                <div className="corner tl" />
                <div className="corner br" />
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM GLOBAL STATS */}
        <div className="global-stats-bar">
          <StatNode label="STACK_DEPTH" value="4 CATEGORIES" />
          <div className="divider" />
          <StatNode label="TOTAL_NODES" value="12 MODULES" />
          <div className="divider" />
          <StatNode label="SYNC_LEVEL" value="HIGH" />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;900&family=JetBrains+Mono:wght@400;700&display=swap');

        .hyper-skills-container {
          background: #000;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding: 120px 20px;
          color: #fff;
          font-family: 'JetBrains Mono', monospace;
        }

        /* 3D SPATIAL FLOOR */
        .spatial-floor {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0, 255, 136, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: perspective(1000px) rotateX(60deg) translateY(200px);
          z-index: 1;
        }

        .vignette-overlay {
          position: absolute; inset: 0;
          background: radial-gradient(circle, transparent 30%, #000 100%);
          z-index: 2; pointer-events: none;
        }

        .content-shell { position: relative; z-index: 10; max-width: 1400px; margin: 0 auto; }

        /* HUD HEADER */
        .hud-header { text-align: center; margin-bottom: 80px; }
        .hud-badge {
          display: inline-flex; align-items: center; gap: 10px;
          border: 1px solid #00ff88; color: #00ff88;
          padding: 8px 25px; border-radius: 50px; font-size: 11px;
          background: rgba(0, 255, 136, 0.1); margin-bottom: 20px;
        }

        .expansive-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 5rem; font-weight: 900; line-height: 1;
        }
        .outline-text { -webkit-text-stroke: 1px #00ff88; color: transparent; }
        .hud-meta { color: #888; font-size: 14px; margin-top: 15px; }

        /* SKILL CARDS */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        .skill-hex-card {
          background: rgba(10, 10, 10, 0.8);
          border: 1px solid rgba(0, 255, 136, 0.1);
          padding: 40px;
          position: relative;
          backdrop-filter: blur(10px);
          transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .skill-hex-card:hover {
          border-color: #00ff88;
          transform: translateY(-10px) scale(1.02);
          background: rgba(0, 255, 136, 0.03);
          box-shadow: 0 0 40px rgba(0, 255, 136, 0.1);
        }

        .category-header { display: flex; alignItems: center; gap: 20px; margin-bottom: 35px; }
        .icon-shield {
          width: 50px; height: 50px; border: 1px solid #00ff88;
          display: flex; align-items: center; justify-content: center;
          color: #00ff88; background: rgba(0, 255, 136, 0.05);
          transition: 0.3s;
        }
        .icon-shield.active { background: #00ff88; color: #000; box-shadow: 0 0 20px #00ff88; }
        .category-header h3 { font-family: 'Orbitron', sans-serif; font-size: 1.2rem; margin: 0; letter-spacing: 2px; }

        /* PROGRESS SYSTEM */
        .skill-line { margin-bottom: 20px; }
        .skill-info { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 12px; }
        .skill-name { color: #888; font-weight: bold; }
        .skill-percent { color: #00ff88; }

        .progress-track { height: 4px; background: rgba(255,255,255,0.05); overflow: hidden; }
        .progress-fill { height: 100%; background: #00ff88; box-shadow: 0 0 10px #00ff88; }

        /* HUD CORNERS */
        .corner { position: absolute; width: 15px; height: 15px; border: 2px solid #00ff88; }
        .tl { top: -2px; left: -2px; border-right: none; border-bottom: none; }
        .br { bottom: -2px; right: -2px; border-left: none; border-top: none; }

        /* BOTTOM STATS */
        .global-stats-bar {
          display: flex; justify-content: center; align-items: center; gap: 50px;
          margin-top: 80px; padding: 30px;
          border-top: 1px solid rgba(0, 255, 136, 0.2);
          background: linear-gradient(90deg, transparent, rgba(0,255,136,0.05), transparent);
        }
        .stat-node { text-align: center; }
        .stat-node h4 { font-family: 'Orbitron', sans-serif; font-size: 18px; color: #00ff88; margin: 0; }
        .stat-node p { font-size: 10px; color: #555; letter-spacing: 2px; }
        .divider { width: 1px; height: 40px; background: rgba(0, 255, 136, 0.2); }

        .pulse-green { animation: pulse 2s infinite; }
        @keyframes pulse { 50% { opacity: 0.3; } }

        @media (max-width: 900px) {
          .expansive-title { font-size: 2.8rem; }
          .global-stats-bar { flex-direction: column; gap: 20px; }
          .divider { display: none; }
        }
      `}</style>
    </section>
  );
};

const StatNode = ({ label, value }) => (
  <div className="stat-node">
    <h4>{value}</h4>
    <p>{label}</p>
  </div>
);

export default Skills;