import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { 
  Code2, Terminal, Database, Wrench, 
  Activity, Zap, Cpu, ShieldCheck 
} from "lucide-react";

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Mouse Tracking for 3D Perspective (Syncs with Global Theme)
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
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  return (
    <section id="skills" ref={sectionRef} className="cyber-skills-container">
      {/* 1. BACKGROUND INFRASTRUCTURE */}
      <div className="spatial-void">
        <div className="moving-scanline" />
        <motion.div 
          className="perspective-grid"
          style={{ rotateX: springY, rotateY: springX }}
        />
        <div className="vignette-overlay" />
      </div>

      <div className="content-shell">
        {/* 2. COMPACT HUD HEADER */}
        <motion.header 
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="hud-header"
        >
          <div className="hud-badge">
            <Activity size={14} className="pulse-green" />
            <span>NEURAL_CAPACITY_LOADED</span>
          </div>
          <h1 className="expansive-title glitch" data-text="TECH_MATRIX">
            TECH<span className="outline-text">_MATRIX</span>
          </h1>
          <div className="terminal-prompt">
            <Terminal size={14} />
            <span className="typewriter">system@ishan:~/skills --scan --full</span>
          </div>
        </motion.header>

        {/* 3. MULTI-COLUMN GRID (REDUCES PAGE LENGTH) */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="skill-card"
              >
                <div className="card-top">
                  <div className="icon-shield">
                    <Icon size={20} />
                  </div>
                  <h3>{category.title}</h3>
                  <div className="node-id">0{index + 1}</div>
                </div>

                <div className="skill-rows">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="skill-entry">
                      <div className="skill-info">
                        <span className="name">{skill.name}</span>
                        <span className="val">{skill.level}%</span>
                      </div>
                      <div className="track">
                        <motion.div 
                          className="fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                        <div className="shimmer-light" />
                      </div>
                    </div>
                  ))}
                </div>
                {/* HUD Corners */}
                <div className="corner-tr" />
                <div className="corner-bl" />
              </motion.div>
            );
          })}
        </div>

        {/* 4. SYNC FOOTER BAR */}
        <motion.div 
          className="sync-bar"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="sync-node">
            <span className="label">SYNC_RATE</span>
            <span className="value glow-txt">STABLE // 98.4%</span>
          </div>
          <div className="divider" />
          <div className="sync-node">
            <span className="label">STACK_LOAD</span>
            <span className="value">FULL_MERN_NEXT</span>
          </div>
          <div className="divider" />
          <div className="sync-node">
             <ShieldCheck size={18} className="green-txt pulse" />
             <span className="value">VERIFIED_LOGS</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;900&family=JetBrains+Mono:wght@400;700&display=swap');

        .cyber-skills-container {
          background: #000;
          min-height: 100vh;
          width: 100vw;
          position: relative;
          overflow: hidden;
          padding: 100px 40px;
          color: #fff;
          font-family: 'JetBrains Mono', monospace;
        }

        /* 3D BACKGROUND */
        .spatial-void { position: absolute; inset: 0; perspective: 1500px; z-index: 1; pointer-events: none; }
        .perspective-grid {
          position: absolute; width: 250%; height: 250%; top: -75%; left: -75%;
          background-image: linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px);
          background-size: 80px 80px; transform: rotateX(60deg);
        }
        .moving-scanline {
          position: absolute; width: 100%; height: 100%;
          background: linear-gradient(0deg, transparent 0%, rgba(0, 255, 136, 0.05) 50%, transparent 100%);
          background-size: 100% 4px; animation: scan 8s infinite linear;
        }
        .vignette-overlay { position: absolute; inset: 0; background: radial-gradient(circle, transparent 20%, #000 100%); }

        .content-shell { position: relative; z-index: 10; max-width: 1400px; margin: 0 auto; }

        /* HEADER */
        .hud-header { margin-bottom: 60px; }
        .hud-badge {
          display: inline-flex; align-items: center; gap: 10px;
          border: 1px solid #00ff88; color: #00ff88;
          padding: 8px 25px; border-radius: 2px; font-size: 10px;
          background: rgba(0, 255, 136, 0.05); margin-bottom: 20px;
          letter-spacing: 2px;
        }
        .expansive-title { font-family: 'Orbitron', sans-serif; font-size: 5rem; font-weight: 900; line-height: 0.9; }
        .outline-text { -webkit-text-stroke: 1px #00ff88; color: transparent; }
        .terminal-prompt { display: flex; align-items: center; gap: 10px; color: #00ff88; font-size: 12px; margin-top: 15px; }
        .typewriter { overflow: hidden; white-space: nowrap; border-right: 2px solid #00ff88; animation: typing 3s steps(30), blink 0.5s infinite; }

        /* MULTI-COLUMN GRID (Key for length optimization) */
        .skills-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); 
          gap: 25px; 
          margin-bottom: 60px;
        }

        .skill-card {
          background: rgba(0, 15, 8, 0.7);
          border: 1px solid rgba(0, 255, 136, 0.15);
          padding: 35px;
          position: relative;
          backdrop-filter: blur(15px);
          transition: 0.3s cubic-bezier(0.2, 1, 0.3, 1);
        }
        .skill-card:hover {
          border-color: #00ff88;
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 10px 40px rgba(0, 255, 136, 0.1);
        }

        .card-top { display: flex; align-items: center; gap: 15px; margin-bottom: 25px; position: relative; }
        .icon-shield {
          width: 40px; height: 40px; border: 1px solid #00ff88;
          display: flex; align-items: center; justify-content: center;
          color: #00ff88; background: rgba(0, 255, 136, 0.1);
        }
        .card-top h3 { font-family: 'Orbitron', sans-serif; font-size: 1.1rem; margin: 0; letter-spacing: 1px; }
        .node-id { position: absolute; right: 0; font-size: 10px; color: #333; font-weight: bold; }

        /* SKILL BARS */
        .skill-entry { margin-bottom: 20px; }
        .skill-info { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 12px; }
        .name { color: #888; }
        .val { color: #00ff88; font-weight: bold; }
        .track { height: 4px; background: rgba(255,255,255,0.05); position: relative; overflow: hidden; }
        .fill { height: 100%; background: #00ff88; box-shadow: 0 0 15px #00ff88; }
        .shimmer-light {
          position: absolute; top: 0; left: 0; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: shim-move 3s infinite linear;
        }

        /* STATUS BAR */
        .sync-bar {
          display: flex; align-items: center; justify-content: center; gap: 50px;
          padding: 25px; border-top: 1px solid rgba(0, 255, 136, 0.2);
          background: linear-gradient(90deg, transparent, rgba(0,255,136,0.03), transparent);
        }
        .sync-node { display: flex; flex-direction: column; align-items: center; gap: 4px; }
        .label { font-size: 9px; color: #444; letter-spacing: 2px; }
        .value { font-size: 12px; color: #00ff88; font-weight: bold; }
        .glow-txt { text-shadow: 0 0 8px #00ff88; }
        .divider { width: 1px; height: 35px; background: rgba(0, 255, 136, 0.2); }

        /* KEYFRAMES */
        @keyframes scan { from { background-position: 0 0; } to { background-position: 0 100%; } }
        @keyframes shim-move { from { left: -100%; } to { left: 200%; } }
        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes blink { 50% { opacity: 0; } }
        
        .corner-tr { position: absolute; top: -1px; right: -1px; width: 12px; height: 12px; border-top: 2px solid #00ff88; border-right: 2px solid #00ff88; }
        .corner-bl { position: absolute; bottom: -1px; left: -1px; width: 12px; height: 12px; border-bottom: 2px solid #00ff88; border-left: 2px solid #00ff88; }

        .pulse-green { animation: pulse 2s infinite; }
        @keyframes pulse { 50% { opacity: 0.3; } }

        @media (max-width: 1000px) {
          .expansive-title { font-size: 3rem; }
          .skills-grid { grid-template-columns: 1fr; }
          .sync-bar { flex-direction: column; gap: 20px; }
          .divider { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Skills;