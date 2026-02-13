import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, Activity, Cpu, 
  Terminal, Target, ShieldCheck, Briefcase 
} from "lucide-react";

const HyperAbout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hyper-about-container">
      {/* 1. ANIMATED BACKGROUND LAYERS */}
      <div className="void-background">
        <div className="moving-scanline" />
        <div className="noise-overlay" />
        <div className="depth-grid" />
        {/* Scrolling Background Data */}
        <div className="data-rain">
          {Array(8).fill("0101_BIO_DATA_EXTRACT_ISHAN_").map((t, i) => (
            <div key={i} className="rain-row">{t}</div>
          ))}
        </div>
      </div>

      {/* 2. HUD FRAME ELEMENTS */}
      <div className="cyber-frame">
        <div className="frame-corner tl"><div className="blink-dot" /> IDENTITY_LOG</div>
        <div className="frame-corner tr">MEMORY_USAGE: 64%</div>
        <div className="frame-corner bl">USER_ID: 2002_ISHAN</div>
        <div className="frame-corner br">SYS_VER: 2.0.6</div>
      </div>

      <div className="content-wrapper">
        {/* TOP HUD SECTION */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          className="hud-header"
        >
          <div className="sys-status">
            <Activity size={14} className="pulse-green" />
            <span>BIO_SYNTHESIS_ACTIVE</span>
          </div>
          <h1 className="expansive-title glitch" data-text="DECODING MY_STORY">
            DECODING<br/>
            <span className="outline-text">MY_STORY</span>
          </h1>
          <div className="terminal-prompt">
            <Terminal size={14} />
            <span className="typewriter">Initializing bio_retrieval.sh... [OK]</span>
          </div>
        </motion.div>

        <div className="main-layout">
          {/* LEFT: DATA TERMINAL */}
          <motion.div 
            className="floating-terminal"
            whileHover={{ scale: 1.02 }}
          >
            <div className="terminal-top">
              <div className="dots"><span /><span /><span /></div>
              <span className="file-path">~ /users/ishan/identity.json</span>
              <ShieldCheck size={14} className="green-txt" />
            </div>
            <div className="terminal-body">
              <div className="code-line">
                <span className="keyword">const</span> <span className="variable">developer</span> = {"{"}
              </div>
              <div className="code-line indent">
                <span className="property">name</span>: <span className="string">"Ishan Wijesinghe"</span>,
              </div>
              <div className="code-line indent">
                <span className="property">current_role</span>: <span className="string">"Software Developer Intern @ OCTICK"</span>,
              </div>
              <div className="code-line indent">
                <span className="property">status</span>: <span className="string">"Final Year IT Undergrad @ SLIIT"</span>,
              </div>
              <div className="code-line indent">
                <span className="property">mission</span>: <span className="string">"Innovating Tourism through AI"</span>
              </div>
              <div className="code-line">{"};"}</div>
              
              <div className="bio-block">
                <p>
                  I am a passionate Full-Stack developer currently honing my skills as an intern at 
                  <span className="text-glow"> OCTICK</span> while completing my degree at 
                  <span className="text-glow"> SLIIT</span>. My focus lies in building scalable web architectures using 
                  <span className="text-glow"> Next.js</span> and <span className="text-glow">MERN</span>, with a strong interest in integrating 
                  AI to solve real-world industry challenges.
                </p>
              </div>
              <div className="terminal-scan-line" />
            </div>
          </motion.div>

          {/* RIGHT: HOLOGRAPHIC NODES */}
          <div className="nodes-stack">
            <AboutNode 
              icon={<Briefcase />} 
              title="EXPERIENCE" 
              desc="Software Developer Intern / OCTICK" 
              delay={0.1}
            />
            <AboutNode 
              icon={<GraduationCap />} 
              title="EDUCATION" 
              desc="SLIIT / B.Sc. (Hons) in Information Technology" 
              delay={0.2}
            />
            <AboutNode 
              icon={<Cpu />} 
              title="CORE_TECH" 
              desc="Next.js / MERN / Spring Boot / PostgreSQL" 
              delay={0.4}
            />
            <AboutNode 
              icon={<Target />} 
              title="OBJECTIVE" 
              desc="Engineering High-Frequency Digital Solutions" 
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
          <div className="hologram-flicker" />
          <StatItem value="Level 4" label="UNIVERSITY_YEAR" />
          <div className="stat-divider" />
          <StatItem value="5+" label="PROJECTS_DEPLOYED" />
          <div className="stat-divider" />
          <StatItem value="12+" label="TOOLS_MASTERED" />
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;900&family=JetBrains+Mono:wght@400;700&display=swap');

        .hyper-about-container {
          min-height: 100vh;
          background: #000;
          position: relative;
          overflow: hidden;
          padding: 120px 40px;
          color: #fff;
          font-family: 'JetBrains Mono', monospace;
        }

        .void-background { position: absolute; inset: 0; perspective: 1200px; z-index: 1; pointer-events: none; }
        
        .depth-grid {
          position: absolute; width: 200%; height: 200%; top: -50%; left: -50%;
          background-image: 
            linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px);
          background-size: 80px 80px;
          transform: rotateX(55deg);
        }

        .moving-scanline {
          position: absolute; width: 100%; height: 100%;
          background: linear-gradient(0deg, transparent 0%, rgba(0, 255, 136, 0.05) 50%, transparent 100%);
          background-size: 100% 4px; animation: scan 8s infinite linear; z-index: 2;
        }

        .data-rain {
          position: absolute; top: 0; right: 20px; width: 200px; opacity: 0.1;
          font-size: 10px; color: #00ff88; line-height: 1.5;
        }
        .rain-row { white-space: nowrap; animation: rain 20s infinite linear; }

        .frame-corner { position: fixed; color: #00ff88; font-size: 10px; padding: 25px; letter-spacing: 2px; z-index: 100; font-weight: bold; }
        .tl { top: 0; left: 0; border-left: 3px solid #00ff88; border-top: 3px solid #00ff88; }
        .tr { top: 0; right: 0; border-right: 3px solid #00ff88; border-top: 3px solid #00ff88; }
        .bl { bottom: 0; left: 0; border-left: 3px solid #00ff88; border-bottom: 3px solid #00ff88; }
        .br { bottom: 0; right: 0; border-right: 3px solid #00ff88; border-bottom: 3px solid #00ff88; }
        .blink-dot { width: 8px; height: 8px; background: #00ff88; border-radius: 50%; display: inline-block; margin-right: 10px; animation: blink 1s infinite; }

        .content-wrapper { position: relative; z-index: 10; max-width: 1400px; margin: 0 auto; }
        .hud-header { margin-bottom: 60px; }
        .sys-status { display: flex; align-items: center; gap: 10px; color: #00ff88; font-size: 12px; letter-spacing: 4px; margin-bottom: 10px; }
        .expansive-title { font-family: 'Orbitron', sans-serif; font-size: 5rem; line-height: 0.9; font-weight: 900; }
        .outline-text { -webkit-text-stroke: 1px #00ff88; color: transparent; }
        .glitch { position: relative; }
        .glitch:hover::before { content: attr(data-text); position: absolute; left: 2px; text-shadow: -2px 0 #ff00c1; clip: rect(44px, 450px, 56px, 0); animation: glitch-anim 0.2s infinite linear alternate-reverse; }
        .terminal-prompt { display: flex; align-items: center; gap: 10px; color: #00ff88; font-size: 12px; margin-top: 10px; }
        .typewriter { overflow: hidden; white-space: nowrap; border-right: 2px solid #00ff88; animation: typing 3s steps(30), blink 0.5s infinite; }
        .main-layout { display: flex; gap: 80px; align-items: flex-start; margin-bottom: 80px; }

        .floating-terminal {
          flex: 1.5; background: rgba(0, 10, 5, 0.85);
          border: 1px solid rgba(0, 255, 136, 0.2);
          position: relative; overflow: hidden; backdrop-filter: blur(20px);
        }
        .terminal-scan-line { position: absolute; width: 100%; height: 2px; background: rgba(0, 255, 136, 0.2); top: 0; animation: scan 4s infinite linear; }
        .terminal-top { padding: 12px 20px; background: rgba(0, 255, 136, 0.1); border-bottom: 1px solid rgba(0, 255, 136, 0.2); display: flex; justify-content: space-between; align-items: center; }
        .dots span { width: 10px; height: 10px; border-radius: 50%; background: #00ff88; opacity: 0.5; margin-right: 5px; display: inline-block; }
        .terminal-body { padding: 30px; }
        .code-line { margin-bottom: 5px; font-size: 16px; }
        .indent { padding-left: 30px; }
        .keyword { color: #ff5f56; }
        .variable { color: #00ff88; }
        .property { color: #ffbd2e; }
        .string { color: #00ff88; }
        .bio-block { margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(0, 255, 136, 0.1); line-height: 1.8; color: #aaa; }
        .text-glow { color: #00ff88; text-shadow: 0 0 10px #00ff88; }

        .nodes-stack { flex: 1; display: flex; flex-direction: column; gap: 25px; }
        .node-item {
          background: rgba(0, 20, 10, 0.4); border: 1px solid rgba(0, 255, 136, 0.1);
          padding: 25px; display: flex; align-items: center; gap: 20px;
          transition: 0.3s; position: relative; clip-path: polygon(0 0, 95% 0, 100% 20%, 100% 100%, 5% 100%, 0 80%);
        }
        .node-item:hover { background: rgba(0, 255, 136, 0.1); border-color: #00ff88; transform: translateX(15px); }

        .stats-hologram {
          display: flex; justify-content: space-around; padding: 40px;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.05), transparent);
          border-top: 1px solid rgba(0, 255, 136, 0.2); border-bottom: 1px solid rgba(0, 255, 136, 0.2);
          position: relative; overflow: hidden;
        }
        .hologram-flicker { position: absolute; inset: 0; background: rgba(0, 255, 136, 0.02); animation: flicker 0.1s infinite; pointer-events: none; }
        .stat-divider { width: 1px; height: 50px; background: rgba(0, 255, 136, 0.2); }
        .stat-item h3 { font-family: 'Orbitron', sans-serif; font-size: 2.5rem; color: #00ff88; margin: 0; text-shadow: 0 0 20px rgba(0, 255, 136, 0.5); }
        .stat-item p { font-size: 10px; color: #888; letter-spacing: 2px; }

        @keyframes scan { from { top: 0; } to { top: 100%; } }
        @keyframes rain { from { transform: translateY(-100%); } to { transform: translateY(100%); } }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes flicker { 0% { opacity: 0.1; } 50% { opacity: 0.2; } 100% { opacity: 0.1; } }
        @keyframes glitch-anim { 
          0% { clip: rect(30px, 9999px, 10px, 0); }
          100% { clip: rect(70px, 9999px, 80px, 0); } 
        }

        @media (max-width: 1100px) {
          .main-layout { flex-direction: column; }
          .expansive-title { font-size: 2.8rem; }
          .cyber-frame { display: none; }
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
    <div className="node-icon" style={{ color: '#00ff88' }}>{icon}</div>
    <div className="node-content">
      <h4 style={{ margin: 0, fontSize: '14px', letterSpacing: '2px' }}>{title}</h4>
      <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#aaa' }}>{desc}</p>
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