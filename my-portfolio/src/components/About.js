import React, { useState, useEffect, useRef } from "react";
import { User, Phone, MapPin, Code, Sparkles } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .about-section {
          position: relative;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          overflow: hidden;
        }
        .about-background-pattern {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          opacity: 0.05;
          background-image: 
            linear-gradient(30deg, #6366f1 12%, transparent 12.5%, transparent 87%, #6366f1 87.5%, #6366f1),
            linear-gradient(150deg, #6366f1 12%, transparent 12.5%, transparent 87%, #6366f1 87.5%, #6366f1),
            linear-gradient(30deg, #6366f1 12%, transparent 12.5%, transparent 87%, #6366f1 87.5%, #6366f1),
            linear-gradient(150deg, #6366f1 12%, transparent 12.5%, transparent 87%, #6366f1 87.5%, #6366f1);
          background-size: 80px 140px;
          background-position: 0 0, 0 0, 40px 70px, 40px 70px;
        }
        .floating-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.2;
          animation: float 6s ease-in-out infinite;
        }
        .shape-1 {
          width: 200px; height: 200px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          top: 10%; right: 10%;
        }
        .shape-2 {
          width: 300px; height: 300px;
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          bottom: 10%; left: 5%;
          animation-delay: 2s;
        }
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 2rem;
          position: relative;
          z-index: 10;
        }
        .section-title {
          font-size: 3rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #a855f7, #6366f1);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 5s ease infinite;
        }
        .section-title.visible {
          animation: fadeInUp 0.8s ease-out, gradientShift 5s ease infinite;
        }
        .section-subtitle {
          text-align: center;
          color: #9ca3af;
          font-size: 1.1rem;
          margin-bottom: 4rem;
          opacity: 0;
        }
        .section-subtitle.visible {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .about-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          transition: all 0.4s ease;
          opacity: 0;
        }
        .about-card.visible-left {
          animation: slideInLeft 0.8s ease-out 0.4s forwards;
        }
        .about-card.visible-right {
          animation: slideInRight 0.8s ease-out 0.4s forwards;
        }
        .about-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(168, 85, 247, 0.5);
          box-shadow: 0 20px 60px rgba(168, 85, 247, 0.3);
        }
        .card-icon {
          width: 60px; height: 60px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: all 0.4s ease;
        }
        .about-card:hover .card-icon {
          animation: float 2s ease-in-out infinite;
          transform: rotate(5deg);
        }
        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        .card-content {
          color: #b0b0b0;
          line-height: 1.8;
          font-size: 1.05rem;
        }
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          opacity: 0;
        }
        .info-grid.visible {
          animation: fadeInUp 0.8s ease-out 0.6s forwards;
        }
        .info-item {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
        }
        .info-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(99, 102, 241, 0.5);
          transform: translateX(10px);
        }
        .info-icon {
          width: 45px; height: 45px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-text {
          color: #e0e0e0;
          font-size: 1rem;
        }
        .sparkle {
          position: absolute;
          width: 4px; height: 4px;
          background: #fff;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          .content-grid { grid-template-columns: 1fr; gap: 2rem; }
          .section-title { font-size: 2.5rem; }
          .about-card { padding: 2rem; }
          .info-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="about" className="about-section" ref={sectionRef}>
        <div className="about-background-pattern"></div>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}

        <div className="about-container">
          <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>About Me</h2>
          <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
            <Sparkles size={20} style={{ display: 'inline', marginRight: '8px' }} />
            Get to know more about my journey and passion
          </p>

          <div className="content-grid">
            <div className={`about-card ${isVisible ? 'visible-left' : ''}`}>
              <div className="card-icon"><User size={32} color="#ffffff" /></div>
              <h3 className="card-title">Who I Am</h3>
              <p className="card-content">
                I am an Information Technology undergraduate at SLIIT with strong skills
                in React, Python, and modern web technologies. I am passionate about building
                professional projects and contributing to innovative solutions.
              </p>
            </div>

            <div className={`about-card ${isVisible ? 'visible-right' : ''}`}>
              <div className="card-icon"><Code size={32} color="#ffffff" /></div>
              <h3 className="card-title">What I Do</h3>
              <p className="card-content">
                I specialize in full-stack web development, creating responsive and 
                user-friendly applications. My expertise includes building modern web 
                solutions using cutting-edge technologies and frameworks that deliver 
                exceptional user experiences.
              </p>
            </div>
          </div>

          <div className={`info-grid ${isVisible ? 'visible' : ''}`}>
            <div className="info-item">
              <div className="info-icon"><Phone size={20} color="#ffffff" /></div>
              <span className="info-text">+94762898945</span>
            </div>
            <div className="info-item">
              <div className="info-icon"><MapPin size={20} color="#ffffff" /></div>
              <span className="info-text">Malabe, Sri Lanka</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;