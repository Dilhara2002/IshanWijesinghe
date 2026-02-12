import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Cpu, Globe, Zap, Layers, ChevronRight, Github, Linkedin, Mail, Download } from "lucide-react";

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
        <motion.div 
          className="perspective-grid"
          style={{ rotateX: springY, rotateY: springX }}
        />
      </div>

      {/* FLOATING HUD DECORATIONS */}
      <div className="frame-corner tl"><span>CORE_v4.0</span></div>
      <div className="frame-corner tr"><span>ISHAN_WIJESINGHE</span></div>
      <div className="frame-corner bl"><span>SRI_LANKA // 2026</span></div>
      <div className="frame-corner br"><span>LAT: 6.9271° N</span></div>

      <main className="viewport">
        
        {/* LEFT: HOLOGRAPHIC AVATAR */}
        <motion.div 
          className="hologram-section"
          style={{ x: springX, y: springY }}
        >
          <div className="glitch-container">
            <div className="holo-ring r1" />
            <div className="holo-ring r2" />
            <div className="image-shield">
              <img src={profileImage} alt="Ishan" className="holo-img" />
              <div className="scan-line" />
            </div>
          </div>
          <div className="data-tag">UNIT_IDENTIFIED: ISHAN_W</div>
        </motion.div>

        {/* RIGHT: FLOATING INTERFACE */}
        <div className="interface-section">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="header-block"
          >
            <h2 className="top-title">INFORMATION TECHNOLOGY / SLIIT</h2>
            <h1 className="main-logo">
              ISHAN<br/>
              <span className="outline-text">WIJESINGHE</span>
            </h1>
          </motion.div>

          {/* EXPANSIVE NODE GRID */}
          <div className="node-grid">
            <Node icon={<Cpu />} title="FULL-STACK" detail="NEXT.JS / MERN" delay={0.2} />
            <Node icon={<Globe />} title="TOURISM AI" detail="RESEARCH 2026" delay={0.3} />
            <Node icon={<Layers />} title="UI/UX" detail="ADVANCED HUD" delay={0.4} />
          </div>

          <p className="bio-paragraph">
            Engineering high-frequency digital architectures. Specialized in 
            <span className="neon-text"> Neural Interfaces</span> and <span className="neon-text">Full-Stack Scalability</span>. 
            Currently architecting the future of tourism at <span className="neon-text">SLIIT</span>.
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

        /* 3D SPATIAL BACKGROUND */
        .spatial-void {
          position: absolute;
          inset: 0;
          perspective: 1500px;
          z-index: 1;
        }

        .perspective-grid {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background-image: 
            linear-gradient(rgba(0, 255, 136, 0.1) 2px, transparent 2px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.1) 2px, transparent 2px);
          background-size: 80px 80px;
          transform: rotateX(60deg);
          transform-style: preserve-3d;
        }

        .star-field {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(white 1px, transparent 1px);
          background-size: 100px 100px;
          opacity: 0.1;
        }

        /* FRAME HUD */
        .frame-corner {
          position: absolute;
          color: #00ff88;
          font-size: 10px;
          padding: 20px;
          letter-spacing: 3px;
          z-index: 10;
          text-shadow: 0 0 10px #00ff88;
        }
        .tl { top: 0; left: 0; border-left: 2px solid #00ff88; border-top: 2px solid #00ff88; }
        .tr { top: 0; right: 0; border-right: 2px solid #00ff88; border-top: 2px solid #00ff88; }
        .bl { bottom: 0; left: 0; border-left: 2px solid #00ff88; border-bottom: 2px solid #00ff88; }
        .br { bottom: 0; right: 0; border-right: 2px solid #00ff88; border-bottom: 2px solid #00ff88; }

        .viewport {
          position: relative;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 120px;
          max-width: 1600px;
          margin: 0 auto;
        }

        /* HOLOGRAM SYSTEM */
        .glitch-container {
          position: relative;
          width: 380px;
          height: 500px;
        }

        .image-shield {
          width: 100%;
          height: 100%;
          background: #000;
          border: 1px solid #00ff88;
          overflow: hidden;
          position: relative;
          clip-path: polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%);
        }

        .holo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: sepia(100%) hue-rotate(90deg) brightness(0.8) contrast(1.2);
          opacity: 0.8;
        }

        .scan-line {
          position: absolute;
          width: 100%;
          height: 4px;
          background: #00ff88;
          top: 0;
          box-shadow: 0 0 20px #00ff88;
          animation: slide 4s infinite linear;
        }

        .holo-ring {
          position: absolute;
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: 50%;
          inset: -30px;
          animation: pulse 4s infinite;
        }
        .r2 { inset: -60px; animation-delay: 2s; }

        /* TYPOGRAPHY */
        .main-logo {
          font-family: 'Orbitron', sans-serif;
          font-size: 6rem;
          font-weight: 900;
          line-height: 0.85;
          margin: 20px 0;
          letter-spacing: -4px;
        }

        .outline-text {
          -webkit-text-stroke: 1px #00ff88;
          color: transparent;
        }

        .top-title { color: #00ff88; font-size: 14px; letter-spacing: 5px; }

        .node-grid {
          display: flex;
          gap: 20px;
          margin: 40px 0;
        }

        .node-box {
          background: rgba(0, 255, 136, 0.03);
          border: 1px solid rgba(0, 255, 136, 0.2);
          padding: 20px;
          width: 180px;
          transition: 0.4s;
        }
        .node-box:hover { border-color: #00ff88; background: rgba(0, 255, 136, 0.1); transform: translateY(-10px); }
        .node-box h3 { font-size: 12px; margin: 10px 0 5px; color: #00ff88; }
        .node-box p { font-size: 10px; color: #888; margin: 0; }

        .bio-paragraph { max-width: 550px; line-height: 1.8; color: #ccc; font-size: 15px; }
        .neon-text { color: #00ff88; font-weight: bold; }

        /* BUTTONS */
        .cta-dock { display: flex; align-items: center; gap: 40px; margin-top: 50px; }

        .expansive-btn {
          background: #00ff88;
          color: #000;
          padding: 20px 45px;
          text-decoration: none;
          font-weight: 900;
          font-family: 'Orbitron', sans-serif;
          display: flex;
          align-items: center;
          gap: 15px;
          clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
          transition: 0.3s;
          position: relative;
        }
        .expansive-btn:hover { background: #fff; box-shadow: 0 0 50px #00ff88; transform: scale(1.05); }

        .social-nodes { display: flex; gap: 20px; }
        .social-node {
          width: 50px;
          height: 50px;
          border: 1px solid rgba(0, 255, 136, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #888;
          transition: 0.3s;
        }
        .social-node:hover { color: #00ff88; border-color: #00ff88; background: rgba(0, 255, 136, 0.1); }

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
    transition={{ delay }}
    className="node-box"
  >
    {icon}
    <h3>{title}</h3>
    <p>{detail}</p>
  </motion.div>
);

const SocialNode = ({ icon, link }) => (
  <a href={link} className="social-node">{icon}</a>
);

export default HyperHome;