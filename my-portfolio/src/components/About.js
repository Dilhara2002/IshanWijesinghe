import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { 
  User, Code, BookOpen, GraduationCap, Laptop, 
  Sparkles, Award, Target, Zap, Brain, Heart, Rocket, Terminal, Activity 
} from "lucide-react";

const HyperAbout = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 40);
      mouseY.set((e.clientY / innerHeight - 0.5) * 40);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="hyper-about-container">
      {/* SPATIAL BACKGROUND ELEMENTS */}
      <div className="void-background">
        <motion.div 
          className="depth-grid" 
          style={{ rotateX: springY, rotateY: springX }}
        />
        <div className="ambience-glow" />
      </div>

      <div className="content-wrapper">
        {/* TOP HUD SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="hud-header"
        >
          <div className="sys-status">
            <Activity size={14} className="pulse-green" />
            <span>BIO_SYNTHESIS_ACTIVE</span>
          </div>
          <h1 className="expansive-title">
            DECODING<br/>
            <span className="outline-text">MY_STORY</span>
          </h1>
        </motion.div>

        <div className="main-layout">
          {/* LEFT: FLOATING DATA TERMINAL */}
          <motion.div 
            className="floating-terminal"
            style={{ x: springX, y: springY }}
          >
            <div className="terminal-top">
              <div className="dots"><span /><span /><span /></div>
              <span className="file-path">~ /users/ishan/identity.json</span>
            </div>
            <div className="terminal-body">
              <div className="code-line">
                <span className="keyword">const</span> <span className="variable">developer</span> = {"{"}
              </div>
              <div className="code-line indent">
                <span className="property">name</span>: <span className="string">"Ishan Wijesinghe"</span>,
              </div>
              <div className="code-line indent">
                <span className="property">status</span>: <span className="string">"IT Undergrad @ SLIIT"</span>,
              </div>
              <div className="code-line indent">
                <span className="property">mission</span>: <span className="string">"Solving complex reality via code"</span>
              </div>
              <div className="code-line">{"};"}</div>
              
              <div className="bio-block">
                <p>
                  I am architecting high-performance digital solutions at 
                  <span className="text-glow"> SLIIT</span>. My approach combines 
                  the precision of <span className="text-glow">Full-Stack engineering</span> with 
                  the foresight of AI integration.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: HOLOGRAPHIC NODES */}
          <div className="nodes-stack">
            <AboutNode 
              icon={<GraduationCap />} 
              title="EDUCATION" 
              desc="SLIIT / 4th Year IT Student" 
              delay={0.2}
            />
            <AboutNode 
              icon={<Brain />} 
              title="CORE_TECH" 
              desc="MERN / Next.js / AI Research" 
              delay={0.4}
            />
            <AboutNode 
              icon={<Target />} 
              title="OBJECTIVE" 
              desc="Building User-Centric Architectures" 
              delay={0.6}
            />
          </div>
        </div>

        {/* BOTTOM STATS: EXPANSIVE BAR */}
        <motion.div 
          className="stats-hologram"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
        >
          <StatItem value="3+" label="YEARS_EXP" />
          <div className="stat-divider" />
          <StatItem value="15+" label="PROJECTS_SYNCED" />
          <div className="stat-divider" />
          <StatItem value="100%" label="CPU_DEDICATION" />
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;900&family=JetBrains+Mono:wght@400;700&display=swap');

        .hyper-about-container {
          min-height: 100vh;
          background: #000;
          position: relative;
          overflow: hidden;
          padding: 100px 40px;
          color: #fff;
          font-family: 'JetBrains Mono', monospace;
        }

        .void-background {
          position: absolute;
          inset: 0;
          perspective: 1200px;
          z-index: 1;
        }

        .depth-grid {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background-image: 
            linear-gradient(rgba(0, 255, 136, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.05) 1px, transparent 1px);
          background-size: 100px 100px;
          transform: rotateX(55deg);
        }

        .ambience-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%);
          bottom: -200px;
          right: -100px;
          filter: blur(100px);
        }

        .content-wrapper { position: relative; z-index: 10; max-width: 1400px; margin: 0 auto; }

        .hud-header { margin-bottom: 60px; }
        .sys-status {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #00ff88;
          font-size: 12px;
          letter-spacing: 4px;
          margin-bottom: 10px;
        }

        .expansive-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 5rem;
          line-height: 0.9;
          font-weight: 900;
        }

        .outline-text {
          -webkit-text-stroke: 1px #00ff88;
          color: transparent;
        }

        .main-layout {
          display: flex;
          gap: 80px;
          align-items: flex-start;
          margin-bottom: 80px;
        }

        /* Terminal UI */
        .floating-terminal {
          flex: 1.5;
          background: rgba(0, 20, 10, 0.8);
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: 8px;
          backdrop-filter: blur(20px);
          box-shadow: 0 0 40px rgba(0, 255, 136, 0.1);
        }

        .terminal-top {
          padding: 12px 20px;
          background: rgba(0, 255, 136, 0.1);
          border-bottom: 1px solid rgba(0, 255, 136, 0.2);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dots { display: flex; gap: 6px; }
        .dots span { width: 10px; height: 10px; border-radius: 50%; background: #00ff88; opacity: 0.5; }
        .file-path { font-size: 11px; color: #00ff88; opacity: 0.7; }

        .terminal-body { padding: 30px; }
        .code-line { margin-bottom: 5px; font-size: 16px; }
        .indent { padding-left: 30px; }
        .keyword { color: #ff5f56; }
        .variable { color: #00ff88; }
        .property { color: #ffbd2e; }
        .string { color: #00ff88; }

        .bio-block {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid rgba(0, 255, 136, 0.1);
          line-height: 1.8;
          color: #aaa;
        }

        .text-glow { color: #00ff88; text-shadow: 0 0 10px #00ff88; }

        /* Nodes */
        .nodes-stack { flex: 1; display: flex; flexDirection: column; gap: 25px; }
        
        .node-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(0, 255, 136, 0.1);
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: 0.3s;
          clip-path: polygon(0 0, 95% 0, 100% 20%, 100% 100%, 5% 100%, 0 80%);
        }

        .node-item:hover {
          background: rgba(0, 255, 136, 0.05);
          border-color: #00ff88;
          transform: translateX(15px);
        }

        .node-icon { color: #00ff88; }
        .node-content h4 { font-family: 'Orbitron', sans-serif; font-size: 14px; color: #00ff88; margin: 0; }
        .node-content p { font-size: 12px; color: #888; margin: 5px 0 0; }

        /* Bottom Stats Bar */
        .stats-hologram {
          display: flex;
          justify-content: space-around;
          padding: 40px;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.05), transparent);
          border-top: 1px solid rgba(0, 255, 136, 0.2);
          border-bottom: 1px solid rgba(0, 255, 136, 0.2);
        }

        .stat-divider { width: 1px; height: 50px; background: rgba(0, 255, 136, 0.2); }
        .stat-item { text-align: center; }
        .stat-item h3 { font-family: 'Orbitron', sans-serif; font-size: 2.5rem; color: #00ff88; margin: 0; }
        .stat-item p { font-size: 10px; color: #888; letter-spacing: 2px; }

        .pulse-green { animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

        @media (max-width: 1100px) {
          .main-layout { flex-direction: column; }
          .expansive-title { font-size: 3rem; }
          .stats-hologram { flex-direction: column; gap: 30px; }
          .stat-divider { display: none; }
        }
      `}</style>
    </section>
  );
};

const AboutNode = ({ icon, title, desc, delay }) => (
  <motion.div 
    className="node-item"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay }}
  >
    <div className="node-icon">{icon}</div>
    <div className="node-content">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </motion.div>
);

const StatItem = ({ value, label }) => (
  <div className="stat-item">
    <h3>{value}</h3>
    <p>{label}</p>
  </div>
);

export default HyperAbout;