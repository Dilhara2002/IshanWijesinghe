import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Cpu, Globe, Zap, Layers, Github, Linkedin, Mail, Download, Code2, Terminal } from "lucide-react";

// Assets
import profileImage from "../assets/profilex.PNG";
import cvFile from "../assets/ISHAN_WIJESINGHE_CV.pdf";

const HyperHome = () => {
  // Smooth mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 50);
      mouseY.set((e.clientY / innerHeight - 0.5) * 50);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="hyper-container">
      {/* BACKGROUND: 3D DEPTH GRID */}
      <div className="spatial-void">
        <div className="star-field" />
        <div className="moving-scanline" /> {/* NEW: SCANLINE ANIMATION */}
        <motion.div 
          className="perspective-grid"
          style={{ rotateX: springY, rotateY: springX }}
        />
        {/* NEW: DATA RAIN */}
        <div className="data-rain">
           {Array(8).fill("0101_SYSTEM_LOG_ISHAN_WIJESINGHE_").map((t, i) => (
            <div key={i} className="rain-row">{t}</div>
          ))}
        </div>
      </div>

      {/* FLOATING HUD DECORATIONS */}
      <div className="frame-corner tl">
        <div className="blink-dot" /> {/* NEW: STATUS BLINKER */}
        <span>SLIIT_UNDERGRAD</span>
      </div>
      <div className="frame-corner tr"><span>ISHAN_WIJESINGHE</span></div>
      <div className="frame-corner bl"><span>SRI_LANKA // 2026</span></div>
      <div className="frame-corner br"><span>LOC: 6.9271° N</span></div>

      <main className="viewport">
        
        {/* LEFT: HOLOGRAPHIC AVATAR */}
        <motion.div 
          className="hologram-section"
          style={{ x: springX, y: springY }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="glitch-container">
            <div className="holo-ring r1" />
            <div className="holo-ring r2" />
            <div className="image-shield">
              <img src={profileImage} alt="Ishan" className="holo-img" />
              <div className="scan-line" />
              <div className="vhs-static" /> {/* NEW: VHS STATIC */}
            </div>
          </div>
          <div className="data-tag">ID: ISHAN_WIJESINGHE</div>
        </motion.div>

        {/* RIGHT: FLOATING INTERFACE */}
        <div className="interface-section">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="header-block"
          >
            {/* NEW: TERMINAL TEXT */}
            <div className="terminal-log">
              <Terminal size={12} className="green-txt" />
              <span className="typewriter">system@sliit:~/home</span>
            </div>
            <h2 className="top-title">INFORMATION TECHNOLOGY / SLIIT</h2>
            <h1 className="main-logo glitch" data-text="ISHAN WIJESINGHE">
              ISHAN<br/>
              <span className="outline-text">WIJESINGHE</span>
            </h1>
          </motion.div>

          {/* EXPANSIVE NODE GRID */}
          <div className="node-grid">
            <Node icon={<Cpu />} title="FULL-STACK" detail="Next.js / MERN" delay={0.2} />
            <Node icon={<Globe />} title="TOURISM AI" detail="Research 2026" delay={0.3} />
            <Node icon={<Code2 />} title="DEVELOPER" detail="TypeScript / JS" delay={0.4} />
          </div>

          <p className="bio-paragraph">
            Final-year IT student at <span className="neon-text">SLIIT</span> specialized in high-performance web architectures. 
            Focused on <span className="neon-text">Full-Stack Development</span> and currently architecting 
            AI-driven solutions for the Sri Lankan tourism industry.
          </p>

          <div className="cta-dock">
            <a href={cvFile} download className="expansive-btn">
              <Download size={20} />
              <span>ACCESS_RESUME.DAT</span>
              <div className="btn-glimmer" />
            </a>
            
            <div className="social-nodes">
              <SocialNode icon={<Github />} link="https://github.com/Dilhara2002" />
              <SocialNode icon={<Linkedin />} link="https://linkedin.com/in/ishan-wijesinghe-5200a1318/" />
              <SocialNode icon={<Mail />} link="mailto:wijesinghelageishan@gmail.com" />
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;900&family=JetBrains+Mono:wght@300;700&display=swap');

        .hyper-container {
          background: radial-gradient(circle at center, #0a150f 0%, #000 100%);
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          position: relative;
          color: #fff;
          font-family: 'JetBrains Mono', monospace;
        }

        .spatial-void { position: absolute; inset: 0; perspective: 1500px; z-index: 1; }
        .perspective-grid {
          position: absolute; width: 200%; height: 200%; top: -50%; left: -50%;
          background-image: linear-gradient(rgba(0, 255, 136, 0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(0, 255, 136, 0.1) 2px, transparent 2px);
          background-size: 80px 80px; transform: rotateX(60deg); transform-style: preserve-3d;
          animation: grid-breath 10s infinite ease-in-out;
        }

        /* NEW ANIMATION LAYERS */
        .moving-scanline {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0, 255, 136, 0.05) 50%, transparent 100%);
          background-size: 100% 10px; animation: scan 8s infinite linear; z-index: 2;
        }
        .data-rain { position: absolute; top: 0; right: 20px; width: 100px; opacity: 0.1; color: #00ff88; font-size: 8px; }
        .rain-row { white-space: nowrap; animation: rain 20s infinite linear; }
        .blink-dot { width: 8px; height: 8px; background: #00ff88; border-radius: 50%; display: inline-block; margin-right: 10px; animation: blink 1s infinite; box-shadow: 0 0 10px #00ff88; }
        .vhs-static { position: absolute; inset: 0; background: url('https://media.giphy.com/media/oEI9uWUicKgRTfA8N7/giphy.gif'); opacity: 0.03; pointer-events: none; }

        .star-field { position: absolute; inset: 0; background-image: radial-gradient(white 1px, transparent 1px); background-size: 100px 100px; opacity: 0.1; }

        .frame-corner { position: absolute; color: #00ff88; font-size: 10px; padding: 20px; letter-spacing: 3px; z-index: 10; text-shadow: 0 0 10px #00ff88; display: flex; align-items: center; }
        .tl { top: 0; left: 0; border-left: 2px solid #00ff88; border-top: 2px solid #00ff88; }
        .tr { top: 0; right: 0; border-right: 2px solid #00ff88; border-top: 2px solid #00ff88; }
        .bl { bottom: 0; left: 0; border-left: 2px solid #00ff88; border-bottom: 2px solid #00ff88; }
        .br { bottom: 0; right: 0; border-right: 2px solid #00ff88; border-bottom: 2px solid #00ff88; }

        .viewport { position: relative; z-index: 5; display: flex; align-items: center; justify-content: center; height: 100%; gap: 120px; max-width: 1600px; margin: 0 auto; }

        .glitch-container { position: relative; width: 380px; height: 500px; }
        .image-shield { width: 100%; height: 100%; background: #000; border: 1px solid #00ff88; overflow: hidden; position: relative; clip-path: polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%); }
        .holo-img { width: 100%; height: 100%; object-fit: cover; filter: sepia(100%) hue-rotate(90deg) brightness(0.8) contrast(1.2); opacity: 0.8; }
        .scan-line { position: absolute; width: 100%; height: 4px; background: #00ff88; top: 0; box-shadow: 0 0 20px #00ff88; animation: slide 4s infinite linear; }
        .holo-ring { position: absolute; border: 1px solid rgba(0, 255, 136, 0.3); border-radius: 50%; inset: -30px; animation: pulse 4s infinite; }
        .r2 { inset: -60px; animation-delay: 2s; }

        /* LOGO GLITCH ANIMATION */
        .main-logo { font-family: 'Orbitron', sans-serif; font-size: 6rem; font-weight: 900; line-height: 0.85; margin: 20px 0; letter-spacing: -4px; position: relative; }
        .glitch:hover::before { content: attr(data-text); position: absolute; left: 2px; text-shadow: -2px 0 #ff00c1; clip: rect(44px, 450px, 56px, 0); animation: glitch-anim 0.2s infinite linear alternate-reverse; }
        .glitch:hover::after { content: attr(data-text); position: absolute; left: -2px; text-shadow: -2px 0 #00fff9; clip: rect(44px, 450px, 56px, 0); animation: glitch-anim 0.2s infinite linear alternate; }
        
        .terminal-log { display: flex; align-items: center; gap: 8px; color: #00ff88; font-size: 12px; margin-bottom: 5px; }
        .typewriter { overflow: hidden; white-space: nowrap; border-right: 2px solid #00ff88; animation: typing 3s steps(30), blink 0.5s infinite; }

        .outline-text { -webkit-text-stroke: 1px #00ff88; color: transparent; }
        .top-title { color: #00ff88; font-size: 14px; letter-spacing: 5px; }

        .node-grid { display: flex; gap: 20px; margin: 40px 0; }
        .node-box { background: rgba(0, 255, 136, 0.03); border: 1px solid rgba(0, 255, 136, 0.2); padding: 20px; width: 180px; transition: 0.4s; backdrop-filter: blur(5px); }
        .node-box:hover { border-color: #00ff88; background: rgba(0, 255, 136, 0.1); transform: translateY(-10px) scale(1.05); }
        .node-box h3 { font-size: 12px; margin: 10px 0 5px; color: #00ff88; }
        .node-box p { font-size: 10px; color: #888; margin: 0; }

        .bio-paragraph { max-width: 550px; line-height: 1.8; color: #ccc; font-size: 15px; }
        .neon-text { color: #00ff88; font-weight: bold; }

        .cta-dock { display: flex; align-items: center; gap: 40px; margin-top: 50px; }
        .expansive-btn { background: #00ff88; color: #000; padding: 20px 45px; text-decoration: none; font-weight: 900; font-family: 'Orbitron', sans-serif; display: flex; align-items: center; gap: 15px; clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%); transition: 0.3s; position: relative; overflow: hidden; }
        .expansive-btn:hover { background: #fff; box-shadow: 0 0 50px #00ff88; transform: scale(1.05); }

        .social-nodes { display: flex; gap: 20px; }
        .social-node { width: 50px; height: 50px; border: 1px solid rgba(0, 255, 136, 0.3); display: flex; align-items: center; justify-content: center; color: #888; transition: 0.3s; }
        .social-node:hover { color: #00ff88; border-color: #00ff88; background: rgba(0, 255, 136, 0.1); transform: translateY(-5px); }

        /* NEW KEYFRAMES */
        @keyframes scan { from { background-position: 0 0; } to { background-position: 0 100%; } }
        @keyframes rain { from { transform: translateY(-100%); } to { transform: translateY(100%); } }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes grid-breath { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        @keyframes glitch-anim { 
          0% { clip: rect(30px, 9999px, 10px, 0); transform: skew(0.5deg); }
          100% { clip: rect(80px, 9999px, 90px, 0); transform: skew(-0.5deg); }
        }

        @keyframes slide { from { top: 0% } to { top: 100% } }
        @keyframes pulse { 0%, 100% { opacity: 0.1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.1); } }

        @media (max-width: 1200px) {
          .viewport { flex-direction: column; text-align: center; gap: 50px; overflow-y: auto; padding: 100px 0; }
          .main-logo { font-size: 3.5rem; }
          .glitch-container { width: 280px; height: 350px; }
          .node-grid { flex-wrap: wrap; justify-content: center; }
          .cta-dock { flex-direction: column; }
        }
      `}</style>
    </div>
  );
};

const Node = ({ icon, title, detail, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, type: "spring" }}
    className="node-box"
  >
    <div style={{color: '#00ff88'}}>{icon}</div>
    <h3>{title}</h3>
    <p>{detail}</p>
  </motion.div>
);

const SocialNode = ({ icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="social-node">{icon}</a>
);

export default HyperHome;