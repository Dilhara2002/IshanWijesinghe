import React, { useState, useEffect, useRef } from "react";
import { Zap, GraduationCap, Calendar, MapPin, Sparkles, BookOpen, Award } from "lucide-react";

const educationHistory = [
  {
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    degree: "BSc (Hons) in Information Technology",
    duration: "2023 – 2026 (Expected)",
    location: "Malabe, Sri Lanka",
    details: "Specializing in Software Engineering and Artificial Intelligence principles. Current GPA: 3.8+",
    achievements: ["Dean's List 2023", "Best Project Award", "Research Paper Publication"],
    courses: ["Advanced Algorithms", "Machine Learning", "Web Development", "Database Systems"],
    icon: GraduationCap,
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1, #4f46e5)",
    status: "current"
  },
  {
    institution: "XYZ Higher Secondary School",
    degree: "G.C.E. Advanced Level (A/L)",
    duration: "2019 – 2021",
    location: "Colombo, Sri Lanka",
    details: "Focus on Physical Science stream (Combined Maths, Physics, Chemistry). Achieved 3 'A' passes.",
    achievements: ["Gold Medal in Science", "Best Student Award", "Olympiad Participant"],
    courses: ["Combined Mathematics", "Physics", "Chemistry", "Information Technology"],
    icon: GraduationCap,
    color: "#a855f7",
    gradient: "linear-gradient(135deg, #a855f7, #9333ea)",
    status: "completed"
  }
];

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

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

  return (
    <>
      <style>{`
        /* --- Enhanced Keyframe Animations --- */
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px) rotate(-5deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(0deg);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px) rotate(5deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(0deg);
          }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-10px) rotate(2deg); 
          }
          66% { 
            transform: translateY(-5px) rotate(-1deg); 
          }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7);
          }
          50% { 
            transform: scale(1.05);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(99, 102, 241, 0);
          }
        }

        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.3),
                       0 0 40px rgba(168, 85, 247, 0.2);
          }
          50% { 
            box-shadow: 0 0 30px rgba(99, 102, 241, 0.6),
                       0 0 60px rgba(168, 85, 247, 0.4);
          }
        }

        @keyframes drawLine {
          from { 
            transform: scaleY(0);
            opacity: 0;
          }
          to { 
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(100px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) translateY(-10px);
          }
          70% {
            transform: scale(0.9) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes typewriter {
          from { 
            width: 0;
            opacity: 0;
          }
          to { 
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes particleFloat {
          0%, 100% { 
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10%, 90% { 
            opacity: 1;
          }
          50% { 
            transform: translateY(-100px) rotate(180deg);
          }
        }

        /* --- Section Styling --- */
        .education-section {
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .education-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.03;
          background-image: 
            radial-gradient(circle at 20% 80%, #6366f1 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 50%);
        }

        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(168, 85, 247, 0.6);
          border-radius: 50%;
          animation: particleFloat 20s linear infinite;
        }

        .particle:nth-child(2n) {
          background: rgba(99, 102, 241, 0.6);
          animation-duration: 25s;
        }

        .particle:nth-child(3n) {
          background: rgba(236, 72, 153, 0.6);
          animation-duration: 30s;
        }

        .education-container {
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
          position: relative;
          overflow: hidden;
        }

        .section-title.visible {
          animation: fadeInUp 0.8s ease-out forwards, gradientShift 5s ease infinite;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #a855f7);
          animation: typewriter 1.5s ease-out 0.5s forwards;
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
          animation: bounceIn 1s ease-out 0.8s forwards;
        }

        /* --- Enhanced Timeline Styling --- */
        .timeline-wrapper {
          position: relative;
          padding: 40px 0;
        }

        .timeline-line {
          position: absolute;
          left: 50px;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, 
            rgba(99, 102, 241, 0) 0%,
            rgba(99, 102, 241, 1) 30%,
            rgba(168, 85, 247, 1) 70%,
            rgba(236, 72, 153, 0) 100%);
          border-radius: 10px;
          transform: scaleY(0);
          transform-origin: top;
          opacity: 0;
        }

        .timeline-line.visible {
          animation: drawLine 1.2s ease-out 0.3s forwards;
        }

        .timeline-line::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 20px;
          background: linear-gradient(180deg, #6366f1, transparent);
          border-radius: 10px 10px 0 0;
        }

        .timeline-line::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 20px;
          background: linear-gradient(0deg, #ec4899, transparent);
          border-radius: 0 0 10px 10px;
        }

        .timeline-item {
          display: flex;
          margin-bottom: 4rem;
          position: relative;
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timeline-item.visible {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .timeline-item:nth-child(even) {
          transform: translateX(50px);
        }

        .timeline-item:nth-child(even).visible {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .timeline-dot {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: var(--item-gradient);
          border: 4px solid #1a1a2e;
          position: absolute;
          left: 33px;
          top: 0;
          z-index: 20;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse 3s ease-in-out infinite;
        }

        .timeline-dot::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: inherit;
          animation: ripple 2s linear infinite;
          opacity: 0;
        }

        .timeline-item:hover .timeline-dot {
          transform: scale(1.3) rotate(15deg);
          animation: none;
        }

        .timeline-item:hover .timeline-dot::before {
          animation: ripple 1s linear;
        }

        .timeline-content {
          flex-grow: 1;
          padding-left: 80px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          transform: translateX(0) scale(1);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .timeline-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.1), 
            transparent);
          transition: left 0.6s ease;
        }

        .timeline-item:hover .timeline-content {
          transform: translateX(10px) scale(1.02);
          border-color: rgba(168, 85, 247, 0.5);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 0 30px rgba(168, 85, 247, 0.3);
          animation: glow 2s ease-in-out infinite;
        }

        .timeline-item:hover .timeline-content::before {
          left: 100%;
        }

        .timeline-content:hover {
          transform: translateX(15px) scale(1.03) !important;
        }

        .degree-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff, var(--item-color));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all 0.3s ease;
        }

        .institution-name {
          font-size: 1.1rem;
          color: var(--item-color);
          font-weight: 500;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .metadata {
          display: flex;
          gap: 2rem;
          margin-bottom: 1.5rem;
          color: #b0b0b0;
          font-size: 0.95rem;
        }

        .metadata span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .metadata svg {
          color: #6366f1;
          transition: all 0.3s ease;
        }

        .timeline-item:hover .metadata span {
          transform: translateX(5px);
        }

        .timeline-item:hover .metadata svg {
          color: var(--item-color);
          transform: scale(1.2);
        }

        .details {
          color: #b0b0b0;
          line-height: 1.7;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .timeline-item:hover .details {
          color: #e0e0e0;
          transform: translateX(5px);
        }

        /* Enhanced Status Badge */
        .status-badge {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          padding: 0.5rem 1.2rem;
          border-radius: 25px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          background: var(--item-gradient);
          color: white;
          animation: float 3s ease-in-out infinite;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        /* Additional Info Section */
        .additional-info {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.6s ease;
          margin-top: 1.5rem;
        }

        .timeline-item:hover .additional-info {
          max-height: 200px;
        }

        .info-section {
          margin-bottom: 1rem;
        }

        .info-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .info-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .info-tag {
          background: rgba(255, 255, 255, 0.1);
          color: #e0e0e0;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .info-tag:hover {
          background: rgba(99, 102, 241, 0.3);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .education-container {
            padding: 80px 1rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .timeline-line {
            left: 25px;
          }

          .timeline-dot {
            left: 18px;
          }

          .timeline-content {
            padding-left: 60px;
            padding: 2rem;
          }

          .metadata {
            flex-direction: column;
            gap: 0.8rem;
          }

          .status-badge {
            position: relative;
            top: 0;
            right: 0;
            margin-bottom: 1rem;
            align-self: flex-start;
          }
        }
      `}</style>

      <section id="education" className="education-section" ref={sectionRef}>
        <div className="education-background"></div>
        
        <div className="floating-particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`
              }}
            ></div>
          ))}
        </div>

        <div className="education-container">
          <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
            Education Journey
          </h2>
          <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
            <Sparkles size={20} />
            The foundation of my knowledge and expertise
          </p>

          <div className="timeline-wrapper">
            <div className={`timeline-line ${isVisible ? 'visible' : ''}`}></div>
            
            {educationHistory.map((item, index) => (
              <div 
                key={index} 
                className={`timeline-item ${isVisible ? 'visible' : ''}`}
                style={{ 
                  '--item-color': item.color,
                  '--item-gradient': item.gradient,
                  animationDelay: `${isVisible ? 0.4 + index * 0.2 : 0}s` 
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="timeline-dot">
                  <item.icon size={16} color="#ffffff" />
                </div>
                
                <div className="timeline-content">
                  <div className="status-badge">
                    {item.status}
                  </div>
                  
                  <h3 className="degree-title">{item.degree}</h3>
                  <p className="institution-name">{item.institution}</p>
                  
                  <div className="metadata">
                    <span>
                      <Calendar size={18} />
                      {item.duration}
                    </span>
                    <span>
                      <MapPin size={18} />
                      {item.location}
                    </span>
                  </div>
                  
                  <p className="details">{item.details}</p>

                  <div className="additional-info">
                    <div className="info-section">
                      <div className="info-label">
                        <Award size={16} />
                        Key Achievements
                      </div>
                      <div className="info-tags">
                        {item.achievements.map((achievement, idx) => (
                          <span key={idx} className="info-tag">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="info-section">
                      <div className="info-label">
                        <BookOpen size={16} />
                        Relevant Courses
                      </div>
                      <div className="info-tags">
                        {item.courses.map((course, idx) => (
                          <span key={idx} className="info-tag">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;