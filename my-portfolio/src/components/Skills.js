import React, { useState, useEffect, useRef } from "react";
import { Zap, Code, Users, Cpu, Brain, Rocket, Sparkles, Database, GitBranch, Clock, Aperture } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  // --- UPDATED SKILLS BASED ON ISHAN WIJESINGHE'S CV ---
  const technical = [
    // Frontend
    { name: "React", level: 90, color: "#61dafb", category: "Frontend" }, 
    { name: "JavaScript / HTML / CSS", level: 85, color: "#f7df1e", category: "Frontend" },
    // Backend
    { name: "Node.js / Express.js", level: 88, color: "#68a063", category: "Backend" },
    { name: "REST APIs / Spring Boot", level: 78, color: "#4f7a3f", category: "Backend" }, 
    // Database
    { name: "MongoDB / MySQL", level: 82, color: "#47a248", category: "Database" },
    // Tools
    { name: "Git / GitHub / VS Code", level: 95, color: "#f05032", category: "Tools" },
  ];
  
  const soft = [
    { name: "Teamwork & Collaboration", icon: Users, color: "#6366f1" },
    { name: "Problem-Solving", icon: Brain, color: "#a855f7" },
    { name: "Time Management", icon: Clock, color: "#10b981" },
    { name: "Team Leadership", icon: Zap, color: "#ec4899" },
  ];
  // -----------------------------------------------------

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 12 + Math.random() * 15
  }));

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fillBar {
          from { width: 0%; }
          to { width: var(--skill-level); }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-20px) rotate(5deg); 
          }
          66% { 
            transform: translateY(-10px) rotate(-3deg); 
          }
        }

        @keyframes particleFloat {
          0%, 100% { 
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% { 
            opacity: 1;
          }
          90% { 
            opacity: 1;
          }
          100% { 
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.7);
          }
          50% { 
            transform: scale(1.05);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(168, 85, 247, 0);
          }
        }

        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.5);
          }
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(200px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(200px) rotate(-360deg);
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .skills-section {
          position: relative;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
          overflow: hidden;
          min-height: 100vh;
        }

        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          opacity: 0.08;
          animation: float 20s ease-in-out infinite;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          background: #6366f1;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 400px;
          height: 400px;
          background: #a855f7;
          bottom: 10%;
          right: 5%;
          animation-delay: 7s;
        }

        .shape-3 {
          width: 250px;
          height: 250px;
          background: #ec4899;
          top: 50%;
          left: 70%;
          animation-delay: 14s;
        }

        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .particle {
          position: absolute;
          background: rgba(168, 85, 247, 0.6);
          border-radius: 50%;
          animation: particleFloat linear infinite;
        }

        .particle:nth-child(2n) {
          background: rgba(99, 102, 241, 0.6);
        }

        .particle:nth-child(3n) {
          background: rgba(236, 72, 153, 0.6);
        }

        .orbiting-elements {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .orbit {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          animation: orbit 30s linear infinite;
        }

        .orbit-1 {
          width: 400px;
          height: 400px;
          animation-duration: 35s;
        }

        .orbit-2 {
          width: 600px;
          height: 600px;
          animation-duration: 45s;
          animation-direction: reverse;
        }

        .orbiting-dot {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #a855f7;
          border-radius: 50%;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          animation: pulse 3s ease-in-out infinite;
        }

        .stars-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .star {
          position: absolute;
          background: #ffffff;
          border-radius: 50%;
          animation: twinkle 4s ease-in-out infinite;
        }

        .mouse-follower {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          transition: all 0.15s ease-out;
          filter: blur(30px);
        }

        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 2rem;
          position: relative;
          z-index: 10;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #a855f7, #6366f1);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 5s ease infinite;
          opacity: 0;
          text-shadow: 0 0 30px rgba(168, 85, 247, 0.3);
        }

        .section-title.visible {
          animation: fadeInUp 0.8s ease-out forwards, gradientShift 5s ease infinite;
        }

        .section-subtitle {
          text-align: center;
          color: #9ca3af;
          font-size: 1.2rem;
          margin-bottom: 4rem;
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .section-subtitle.visible {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 3rem;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          padding: 2.5rem;
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .skill-card:hover::before {
          left: 100%;
        }

        .skill-card.visible {
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
        }

        .skill-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(168, 85, 247, 0.4);
          box-shadow: 
            0 25px 60px rgba(0, 0, 0, 0.4),
            0 0 40px rgba(168, 85, 247, 0.3);
        }

        .card-header {
          font-size: 1.75rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 1rem;
        }

        .icon-container {
          background: linear-gradient(135deg, #a855f7, #6366f1);
          border-radius: 12px;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .skill-card:hover .icon-container {
          transform: scale(1.1) rotate(5deg);
          animation: glow 2s ease-in-out infinite;
        }

        .technical-list {
          list-style: none;
          padding: 0;
        }

        .technical-item {
          margin-bottom: 1.8rem;
          color: #e0e0e0;
          opacity: 0;
        }

        .technical-item.visible {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.8rem;
          font-weight: 600;
        }

        .skill-name {
          color: #ffffff;
        }

        .skill-percentage {
          color: var(--skill-color, #a855f7);
          font-weight: 700;
        }

        .progress-bar {
          height: 12px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          overflow: hidden;
          position: relative;
        }

        .progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .technical-item:hover .progress-bar::after {
          left: 100%;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--skill-color), var(--skill-color));
          border-radius: 8px;
          width: 0%;
          position: relative;
          transition: all 0.4s ease;
        }

        .progress-fill.animated {
          animation: fillBar 1.5s ease-out forwards;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 20px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3));
          border-radius: 0 8px 8px 0;
        }

        .soft-list {
          list-style: none;
          padding: 0;
        }

        .soft-item {
          color: #b0b0b0;
          font-size: 1.1rem;
          padding: 1.2rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          gap: 1.2rem;
          opacity: 0;
          transition: all 0.3s ease;
          border-radius: 8px;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }

        .soft-item:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(10px);
          color: #ffffff;
        }

        .soft-item.visible {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .soft-item:last-child {
          border-bottom: none;
        }

        .soft-icon {
          flex-shrink: 0;
          transition: all 0.3s ease;
          padding: 8px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.1);
        }

        .soft-item:hover .soft-icon {
          transform: scale(1.2) rotate(-8deg);
          background: var(--skill-color);
          color: white;
        }

        .floating-tech-icons {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .tech-icon {
          position: absolute;
          opacity: 0.03;
          animation: float 15s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .skills-container {
            padding: 80px 1rem;
          }
          .section-title {
            font-size: 2.5rem;
          }
          .skill-card {
            padding: 2rem;
          }
          .orbit {
            display: none;
          }
        }
      `}</style>

      <section id="skills" className="skills-section" ref={sectionRef}>
        <div className="animated-background">
          <div className="floating-shapes">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
          </div>

          <div className="particles-container">
            {particles.map(particle => (
              <div
                key={particle.id}
                className="particle"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  left: `${particle.left}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`
                }}
              ></div>
            ))}
          </div>

          <div className="orbiting-elements">
            <div className="orbit orbit-1">
              <div className="orbiting-dot"></div>
            </div>
            <div className="orbit orbit-2">
              <div className="orbiting-dot"></div>
            </div>
          </div>

          <div className="stars-container">
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="star"
                style={{
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              ></div>
            ))}
          </div>

          <div 
            className="mouse-follower"
            style={{
              left: `${mousePosition.x - 150}px`,
              top: `${mousePosition.y - 150}px`,
            }}
          ></div>

          <div className="floating-tech-icons">
            <Code className="tech-icon" size={60} style={{ top: '15%', left: '10%', animationDelay: '0s' }} />
            <Cpu className="tech-icon" size={50} style={{ top: '25%', right: '15%', animationDelay: '3s' }} />
            <Database className="tech-icon" size={70} style={{ bottom: '20%', left: '20%', animationDelay: '6s' }} />
            <GitBranch className="tech-icon" size={45} style={{ bottom: '30%', right: '10%', animationDelay: '9s' }} />
          </div>
        </div>
        
        <div className="skills-container">
          <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
            My Core Skills
          </h2>
          <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
            <Sparkles size={20} />
            The technical depth and personal qualities that drive my work
          </p>

          <div className="skills-grid">
            {/* Technical Skills Card */}
            <div className={`skill-card ${isVisible ? 'visible' : ''}`}>
              <div className="card-header">
                <span className="icon-container"><Code color="#ffffff" size={28} /></span>
                Technical Proficiency (Full-Stack Focus)
              </div>
              
              <ul className="technical-list">
                {technical.map((skill, index) => (
                  <li 
                    key={skill.name} 
                    className={`technical-item ${isVisible ? 'visible' : ''}`}
                    style={{ animationDelay: `${isVisible ? 0.6 + index * 0.1 : 0}s` }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage" style={{ '--skill-color': skill.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className={`progress-fill ${isVisible ? 'animated' : ''}`}
                        style={{ 
                          '--skill-level': `${skill.level}%`,
                          '--skill-color': skill.color,
                          animationDelay: `${isVisible ? 0.8 + index * 0.1 : 0}s`
                        }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Skills Card */}
            <div className={`skill-card ${isVisible ? 'visible' : ''}`} style={{ animationDelay: `${isVisible ? 0.5 : 0}s` }}>
              <div className="card-header">
                <span className="icon-container"><Users color="#ffffff" size={28} /></span>
                Soft Skills & Mindset
              </div>
              
              <ul className="soft-list">
                {soft.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <li 
                      key={skill.name} 
                      className={`soft-item ${isVisible ? 'visible' : ''}`}
                      style={{ 
                        animationDelay: `${isVisible ? 0.7 + index * 0.1 : 0}s`,
                        '--skill-color': skill.color
                      }}
                    >
                      <Icon size={24} className="soft-icon" style={{ color: skill.color }} />
                      {skill.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;