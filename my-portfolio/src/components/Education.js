import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, Calendar, MapPin, Sparkles, BookOpen, 
  Award, Target, TrendingUp, Star, ShieldCheck, Activity, Cpu 
} from "lucide-react";

const educationHistory = [
  {
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    degree: "BSc (Hons) in Information Technology",
    duration: "2023 – 2026 (Expected)",
    location: "Malabe, Sri Lanka",
    details: "Focusing on Full-Stack Development and Software Engineering. Developing a strong command over modern web architectures, database management, and professional coding standards.",
    icon: GraduationCap,
    status: "UNDERGRADUATE_UNIT"
  },
  {
    institution: "SLIIT Faculty of Computing",
    degree: "AI/ML Engineer - Stage 1",
    duration: "Issued: Nov 22, 2025",
    location: "Center for Open and Distance Education",
    details: "Completed specialized training in Artificial Intelligence and Machine Learning foundations through the Industry Engagement Unit. [ID: gzzsbnqbp1]",
    icon: ShieldCheck,
    status: "PROFESSIONAL_CERT"
  },
  {
    institution: "LinkedIn Learning",
    degree: "Career Skills in Software Development",
    duration: "Completed: Dec 18, 2024",
    location: "Online Professional Development",
    details: "Mastered core career management and tech career skills essential for modern software engineering roles. [ID: 1728bcda5711...]",
    icon: Award,
    status: "CERTIFICATION"
  },
  {
    institution: "LinkedIn Learning / PMI",
    degree: "Introduction to Analytics Engineering",
    duration: "Completed: Dec 13, 2024",
    location: "Online Professional Development",
    details: "Gained proficiency in Data Engineering and Data Analytics concepts, authorized by the Project Management Institute (PMI). [ID: 7bla1055...]",
    icon: TrendingUp,
    status: "CERTIFICATION"
  }
];

const Education = () => {
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
    <section id="education" ref={sectionRef} className="hyper-edu-container">
      {/* 3D BACKGROUND DEPTH */}
      <div className="spatial-void" />
      <div className="vignette" />

      <div className="content-shell">
        {/* HUD HEADER */}
        <motion.header 
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          className="hud-header"
        >
          <div className="hud-badge">
            <Activity size={14} className="pulse-green" />
            <span>ACADEMIC_LOG_ACTIVE</span>
          </div>
          <h1 className="expansive-title">KNOWLEDGE<br/><span className="outline-text">_MATRIX</span></h1>
          <p className="hud-meta">Chronological transmission of academic and professional credentials.</p>
        </motion.header>

        {/* VERTICAL DATA STREAM */}
        <div className="data-stream">
          <div className={`stream-line ${isVisible ? 'active' : ''}`} />
          
          {educationHistory.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="stream-node"
              >
                {/* NODE DOT */}
                <div className="node-anchor">
                  <div className="anchor-ring" />
                  <div className="anchor-core">
                    <Icon size={20} />
                  </div>
                </div>

                {/* DATA CARD */}
                <div className="edu-data-card">
                  <div className="card-hud-top">
                    <span className="status-tag">{edu.status}</span>
                    <span className="node-index">NODE_0{index + 1}</span>
                  </div>

                  <h3 className="inst-name">{edu.institution}</h3>
                  <div className="degree-row">
                    <Cpu size={16} className="green-txt" />
                    <span className="degree-txt">{edu.degree}</span>
                  </div>

                  <div className="meta-grid">
                    <div className="meta-item"><Calendar size={14} /> {edu.duration}</div>
                    <div className="meta-item"><MapPin size={14} /> {edu.location}</div>
                  </div>

                  <p className="edu-desc">{edu.details}</p>

                  {/* DECORATIVE HUD CORNERS */}
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

        .hyper-edu-container {
          background: #000;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding: 120px 40px;
          color: #fff;
          font-family: 'JetBrains Mono', monospace;
        }

        .spatial-void {
          position: absolute; inset: 0;
          background-image: 
            linear-gradient(rgba(0, 255, 136, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.05) 1px, transparent 1px);
          background-size: 80px 80px;
          transform: perspective(1000px) rotateX(60deg) translateY(200px);
          z-index: 1;
        }

        .vignette {
          position: absolute; inset: 0;
          background: radial-gradient(circle, transparent 20%, #000 100%);
          z-index: 2; pointer-events: none;
        }

        .content-shell { position: relative; z-index: 10; max-width: 1200px; margin: 0 auto; }

        .hud-header { margin-bottom: 80px; }
        .hud-badge {
          display: inline-flex; align-items: center; gap: 10px;
          border: 1px solid #00ff88; color: #00ff88;
          padding: 8px 25px; border-radius: 50px; font-size: 11px;
          background: rgba(0, 255, 136, 0.1); margin-bottom: 20px;
        }

        .expansive-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 5rem; font-weight: 900; line-height: 0.9;
        }
        .outline-text { -webkit-text-stroke: 1px #00ff88; color: transparent; }
        .hud-meta { color: #888; font-size: 14px; margin-top: 15px; letter-spacing: 1px; }

        /* DATA STREAM LINE */
        .data-stream { position: relative; padding-left: 100px; }
        .stream-line {
          position: absolute; left: 35px; top: 0; width: 1px;
          height: 0; background: linear-gradient(to bottom, #00ff88, transparent);
          transition: height 2s ease;
        }
        .stream-line.active { height: 100%; }

        /* STREAM NODES */
        .stream-node { position: relative; margin-bottom: 60px; }
        
        .node-anchor {
          position: absolute; left: -100px; top: 20px;
          width: 70px; height: 70px; display: flex; align-items: center; justify-content: center;
        }
        .anchor-ring {
          position: absolute; width: 100%; height: 100%;
          border: 1px solid rgba(0, 255, 136, 0.3); border-radius: 50%;
          animation: spin 10s linear infinite;
        }
        .anchor-core {
          width: 45px; height: 45px; background: #00ff88; color: #000;
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 20px #00ff88;
        }

        /* DATA CARDS */
        .edu-data-card {
          background: rgba(10, 10, 10, 0.8);
          border: 1px solid rgba(0, 255, 136, 0.1);
          padding: 40px; position: relative;
          backdrop-filter: blur(10px);
          transition: 0.4s;
        }
        .edu-data-card:hover {
          border-color: #00ff88;
          transform: translateX(15px);
          background: rgba(0, 255, 136, 0.05);
        }

        .card-hud-top { display: flex; justify-content: space-between; margin-bottom: 20px; }
        .status-tag { color: #00ff88; font-size: 10px; font-weight: 900; letter-spacing: 2px; }
        .node-index { color: #444; font-size: 10px; }

        .inst-name { font-family: 'Orbitron', sans-serif; font-size: 1.8rem; margin: 0; }
        .degree-row { display: flex; align-items: center; gap: 12px; margin: 15px 0; }
        .degree-txt { color: #00ff88; font-weight: bold; font-size: 1.1rem; }
        .green-txt { color: #00ff88; }

        .meta-grid { display: flex; gap: 30px; margin: 20px 0; font-size: 13px; color: #666; }
        .meta-item { display: flex; align-items: center; gap: 8px; }

        .edu-desc { color: #aaa; line-height: 1.8; font-size: 15px; max-width: 800px; }

        /* HUD DECOR */
        .corner { position: absolute; width: 20px; height: 20px; border: 2px solid #00ff88; }
        .tr { top: -2px; right: -2px; border-left: none; border-bottom: none; }
        .bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }

        .pulse-green { animation: pulse 2s infinite; }
        @keyframes pulse { 50% { opacity: 0.3; } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        @media (max-width: 900px) {
          .data-stream { padding-left: 0; }
          .stream-line, .node-anchor { display: none; }
          .expansive-title { font-size: 3rem; }
          .inst-name { font-size: 1.4rem; }
        }
      `}</style>
    </section>
  );
};

export default Education;