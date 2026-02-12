import React, { useState, useEffect, useRef } from "react";
// Removed 'useTransform' as it was unused
import { motion, useSpring, useMotionValue } from "framer-motion";
import { 
  GraduationCap, Calendar, MapPin, Cpu, 
  ShieldCheck, Award, TrendingUp, Terminal, Zap
} from "lucide-react"; // Removed 'Activity' as it was unused

const educationHistory = [
  {
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    degree: "BSc (Hons) in Information Technology",
    duration: "2023 – 2026 (Expected)",
    location: "Malabe, Sri Lanka",
    details: "Focusing on Full-Stack Development and Software Engineering. Developing a strong command over modern web architectures and professional coding standards.",
    icon: GraduationCap,
    status: "UNDERGRADUATE_UNIT"
  },
  {
    institution: "SLIIT Faculty of Computing",
    degree: "AI/ML Engineer - Stage 1",
    duration: "Issued: Nov 22, 2025",
    location: "Center for Open and Distance Education",
    details: "Completed specialized training in Artificial Intelligence and Machine Learning foundations through the Industry Engagement Unit.",
    icon: ShieldCheck,
    status: "PROFESSIONAL_CERT"
  },
  {
    institution: "LinkedIn Learning",
    degree: "Career Skills in Software Development",
    duration: "Completed: Dec 18, 2024",
    location: "Online Professional Development",
    details: "Mastered core career management and tech career skills essential for modern software engineering roles.",
    icon: Award,
    status: "CERTIFICATION"
  },
  {
    institution: "LinkedIn Learning / PMI",
    degree: "Introduction to Analytics Engineering",
    duration: "Completed: Dec 13, 2024",
    location: "Online Professional Development",
    details: "Gained proficiency in Data Engineering and Data Analytics concepts, authorized by the Project Management Institute (PMI).",
    icon: TrendingUp,
    status: "CERTIFICATION"
  }
];

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Mouse Tracking for 3D interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 45);
      mouseY.set((e.clientY / innerHeight - 0.5) * 45);
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
    <section id="education" ref={sectionRef} className="cyber-container">
      {/* 1. ANIMATED BACKGROUND LAYERS */}
      <div className="spatial-void">
        <div className="moving-scanline" />
        <div className="noise-overlay" />
        <motion.div 
          className="perspective-grid"
          style={{ rotateX: springY, rotateY: springX, translateZ: 100 }}
        />
        {/* Scrolling Background Data Text */}
        <div className="data-rain">
          {Array(10).fill("0101_SYSTEM_OVERRIDE_ISHAN_KNOWLEDGE_MATRIX_").map((t, i) => (
            <div key={i} className="rain-row">{t}</div>
          ))}
        </div>
      </div>

      {/* 2. HUD FRAME ELEMENTS */}
      <div className="cyber-frame">
        <div className="frame-corner tl"><div className="blink-dot" /> KNOWLEDGE_LOG</div>
        <div className="frame-corner tr">CPU_LOAD: 42%</div>
        <div className="frame-corner bl">SRI_LANKA // 2026</div>
        <div className="frame-corner br">ENCRYPTION: AES-256</div>
      </div>

      <div className="content-shell">
        <motion.header 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={isVisible ? { opacity: 1, filter: "blur(0px)" } : {}}
          className="hud-header"
        >
          <div className="hud-badge glitch-hover" data-text="SYSTEM_ACCESS_GRANTED">
            <Zap size={14} className="pulse-green" />
            <span>SYSTEM_ACCESS_GRANTED</span>
          </div>
          <h1 className="expansive-title glitch" data-text="KNOWLEDGE_MATRIX">
            KNOWLEDGE<br/><span className="outline-text">_MATRIX</span>
          </h1>
          <div className="terminal-prompt">
            <Terminal size={14} />
            <span className="typewriter">Loading academic_history.exe... [SUCCESS]</span>
          </div>
        </motion.header>

        {/* 3. VERTICAL DATA STREAM */}
        <div className="data-stream">
          <div className={`stream-line ${isVisible ? 'active' : ''}`} />
          
          {educationHistory.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring" }}
                className="stream-node"
              >
                <div className="node-anchor">
                  <div className="anchor-ring" />
                  <div className="anchor-core">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="edu-data-card">
                  <div className="card-hud-top">
                    <span className="status-tag"> {edu.status}</span>
                    <span className="node-index">SERIAL: 00{index + 1}</span>
                  </div>

                  <h3 className="inst-name">{edu.institution}</h3>
                  <div className="degree-row">
                    <div className="cpu-pulse"><Cpu size={16} /></div>
                    <span className="degree-txt">{edu.degree}</span>
                  </div>

                  <div className="meta-grid">
                    <div className="meta-item"><Calendar size={14} /> {edu.duration}</div>
                    <div className="meta-item"><MapPin size={14} /> {edu.location}</div>
                  </div>

                  <p className="edu-desc">{edu.details}</p>

                  {/* DECORATIVE CARD OVERLAYS */}
                  <div className="card-glitch-bar" />
                  <div className="corner tr" />
                  <div className="corner bl" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;900&family=JetBrains+Mono:wght@400;700&display=swap');

        .cyber-container {
          background: #000;
          min-height: 100vh;
          width: 100vw;
          overflow-x: hidden;
          position: relative;
          color: #fff;
          font-family: 'JetBrains Mono', monospace;
          padding: 140px 40px;
        }

        .spatial-void { position: absolute; inset: 0; perspective: 1500px; z-index: 1; pointer-events: none; overflow: hidden; }
        
        .perspective-grid {
          position: absolute; width: 250%; height: 250%; top: -75%; left: -75%;
          background-image: 
            linear-gradient(rgba(0, 255, 136, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.15) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: rotateX(65deg);
        }

        .moving-scanline {
          position: absolute; width: 100%; height: 100%;
          background: linear-gradient(0deg, transparent 0%, rgba(0, 255, 136, 0.05) 50%, transparent 100%);
          background-size: 100% 4px;
          animation: scan 8s infinite linear;
          z-index: 2;
        }

        .data-rain {
          position: absolute; top: 0; right: 20px; width: 200px; opacity: 0.1;
          font-size: 10px; color: #00ff88; line-height: 1.5; pointer-events: none;
        }
        .rain-row { white-space: nowrap; animation: rain 20s infinite linear; }

        .frame-corner { position: fixed; color: #00ff88; font-size: 10px; padding: 25px; letter-spacing: 2px; z-index: 100; font-weight: bold; }
        .tl { top: 0; left: 0; border-left: 3px solid #00ff88; border-top: 3px solid #00ff88; }
        .tr { top: 0; right: 0; border-right: 3px solid #00ff88; border-top: 3px solid #00ff88; }
        .bl { bottom: 0; left: 0; border-left: 3px solid #00ff88; border-bottom: 3px solid #00ff88; }
        .br { bottom: 0; right: 0; border-right: 3px solid #00ff88; border-bottom: 3px solid #00ff88; }

        .content-shell { position: relative; z-index: 5; max-width: 1000px; margin: 0 auto; }
        
        .expansive-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 5.5rem; font-weight: 900; line-height: 0.85; margin: 20px 0;
        }
        .outline-text { -webkit-text-stroke: 1px #00ff88; color: transparent; }

        .terminal-prompt { display: flex; align-items: center; gap: 10px; color: #00ff88; font-size: 12px; margin-top: 10px; }
        .typewriter { overflow: hidden; white-space: nowrap; border-right: 2px solid #00ff88; animation: typing 3s steps(40), blink 0.5s infinite; }

        .data-stream { position: relative; padding-left: 100px; margin-top: 100px; }
        .stream-line {
          position: absolute; left: 35px; top: 0; width: 2px;
          height: 0; background: linear-gradient(to bottom, #00ff88 0%, #00ff88 50%, transparent 100%);
          transition: height 3s ease;
          box-shadow: 0 0 15px #00ff88;
        }
        .stream-line.active { height: 100%; }

        .stream-node { position: relative; margin-bottom: 80px; }
        
        .node-anchor {
          position: absolute; left: -100px; top: 20px;
          width: 70px; height: 70px; display: flex; align-items: center; justify-content: center;
        }
        .anchor-ring {
          position: absolute; width: 100%; height: 100%;
          border: 1px dashed #00ff88; border-radius: 50%;
          animation: spin 6s linear infinite;
        }
        .anchor-core {
          width: 45px; height: 45px; background: #00ff88; color: #000;
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 30px #00ff88; z-index: 2;
        }

        .edu-data-card {
          background: rgba(0, 20, 10, 0.4);
          border: 1px solid rgba(0, 255, 136, 0.2);
          padding: 40px; position: relative;
          backdrop-filter: blur(15px);
          transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .edu-data-card:hover {
          border-color: #00ff88;
          transform: scale(1.03) translateX(20px);
          background: rgba(0, 255, 136, 0.08);
          box-shadow: -15px 0 40px rgba(0, 255, 136, 0.2);
        }

        .glitch { position: relative; }
        .glitch::before, .glitch::after {
          content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.8;
        }
        .glitch:hover::before { color: #0ff; z-index: -1; animation: glitch-anim 0.3s infinite; }
        .glitch:hover::after { color: #f0f; z-index: -2; animation: glitch-anim 0.3s reverse infinite; }

        .card-glitch-bar {
          position: absolute; bottom: 0; left: 0; height: 2px; width: 0; 
          background: #00ff88; transition: 0.5s; 
        }
        .edu-data-card:hover .card-glitch-bar { width: 100%; }

        @keyframes scan { from { background-position: 0 0; } to { background-position: 0 100%; } }
        @keyframes rain { from { transform: translateY(-100%); } to { transform: translateY(100%); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes blink { 50% { border-color: transparent } }
        @keyframes glitch-anim {
          0% { transform: translate(0) }
          20% { transform: translate(-3px, 3px) }
          40% { transform: translate(-3px, -3px) }
          60% { transform: translate(3px, 3px) }
          80% { transform: translate(3px, -3px) }
          100% { transform: translate(0) }
        }

        @media (max-width: 900px) {
          .data-stream { padding-left: 0; }
          .stream-line, .node-anchor { display: none; }
          .expansive-title { font-size: 2.8rem; }
          .cyber-container { padding: 100px 20px; }
          .frame-corner { font-size: 8px; padding: 10px; }
        }
      `}</style>
    </section>
  );
};

export default Education;