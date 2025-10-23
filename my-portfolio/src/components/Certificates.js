import React, { useState, useEffect, useRef } from "react";
import { Award, Calendar, Download, ExternalLink, Sparkles, BadgeCheck, Clock } from "lucide-react";

// POPULATED TEMPLATE - Certificates for Ishan Wijesinghe
const certificates = [
  {
    title: "Introduction to Career Skills in Software Development",
    issuer: "LinkedIn Learning",
    date: "Dec 18, 2024",
    description: "Course focusing on essential professional and technical skills needed to launch and manage a successful career in software development.",
    skills: ["Career Management", "Tech Career Skills", "Software Development"],
    credentialId: "1728bcda5711...",
    credentialUrl: "#", // Placeholder: Replace with actual verification URL
    badgeColor: "#0077B5", // LinkedIn blue
    gradient: "linear-gradient(135deg, #0077B5, #004F7A)",
    duration: "1 hour 57 minutes",
    pdu: null,
    image: "" // Add image URL here (optional)
  },
  {
    title: "Introduction to Analytics Engineering",
    issuer: "LinkedIn Learning (PMI® Authorized Training Partner)",
    date: "Dec 13, 2024",
    description: "Fundamental course on Analytics Engineering, covering the intersection of Data Engineering and Data Analytics, and contributing to professional development units (PDUs).",
    skills: ["Data Engineering", "Data Analytics", "Analytics Engineering"],
    credentialId: "7bla1055b9a8...",
    credentialUrl: "#", // Placeholder: Replace with actual verification URL
    badgeColor: "#673AB7", // Deep Purple for a data focus
    gradient: "linear-gradient(135deg, #673AB7, #512DA8)",
    duration: "N/A", // Duration not explicitly listed on the provided page
    pdu: "0.75 PDUs/Contact Hours",
    image: "" // Add image URL here (optional)
  }
];

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.5);
          }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes badgeSpin {
          from { transform: rotate(0deg) scale(0.8); }
          to { transform: rotate(360deg) scale(1); }
        }

        .certificates-section {
          position: relative;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          overflow: hidden;
          min-height: 100vh;
        }

        .certificates-background {
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

        .floating-badges {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .floating-badge {
          position: absolute;
          width: 100px;
          height: 100px;
          opacity: 0.1;
          animation: float 8s ease-in-out infinite;
        }

        .badge-1 {
          top: 10%;
          left: 5%;
          background: #6366f1;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation-delay: 0s;
        }

        .badge-2 {
          bottom: 10%;
          right: 5%;
          background: #a855f7;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation-delay: 2s;
        }

        .certificates-container {
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

        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .certificate-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
        }

        .certificate-card.visible {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .certificate-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--card-gradient);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .certificate-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 0 30px rgba(168, 85, 247, 0.3);
        }

        .certificate-card:hover::before {
          transform: scaleX(1);
        }

        .card-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .certificate-badge {
          width: 70px;
          height: 70px;
          border-radius: 18px;
          background: var(--card-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .certificate-card:hover .certificate-badge {
          transform: scale(1.1) rotate(5deg);
          animation: glow 2s ease-in-out infinite;
        }

        .certificate-badge::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: rotate(45deg);
          transition: all 0.6s ease;
        }

        .certificate-card:hover .certificate-badge::before {
          transform: rotate(45deg) translate(50%, 50%);
        }

        .certificate-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .certificate-info {
          flex: 1;
        }

        .certificate-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .certificate-issuer {
          font-size: 1.1rem;
          color: var(--card-color);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .certificate-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
          color: #b0b0b0;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .certificate-meta span {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .credential-id {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
          font-family: 'Courier New', monospace;
          font-size: 0.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .certificate-description {
          color: #b0b0b0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .skills-section {
          margin-bottom: 2rem;
        }

        .skills-label {
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 0.8rem;
          font-size: 0.9rem;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.1);
          color: #e0e0e0;
          padding: 0.4rem 0.8rem;
          border-radius: 12px;
          font-size: 0.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: rgba(99, 102, 241, 0.3);
          transform: translateY(-2px);
        }

        .certificate-actions {
          display: flex;
          gap: 1rem;
        }

        .action-button {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .button-primary {
          background: linear-gradient(135deg, #6366f1, #a855f7);
          color: white;
        }

        .button-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(168, 85, 247, 0.4);
        }

        .button-secondary {
          background: transparent;
          color: #e0e0e0;
          border-color: rgba(255, 255, 255, 0.2);
        }

        .button-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #6366f1;
          transform: translateY(-2px);
        }

        .verified-badge {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(34, 197, 94, 0.2);
          color: #4ade80;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(34, 197, 94, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .certificates-container {
            padding: 80px 1rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .certificates-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .certificate-card {
            padding: 2rem;
          }

          .card-header {
            flex-direction: column;
            gap: 1rem;
          }

          .certificate-actions {
            flex-direction: column;
          }

          .verified-badge {
            position: relative;
            top: 0;
            right: 0;
            margin-bottom: 1rem;
            align-self: flex-start;
          }
        }
      `}</style>

      <section id="certificates" className="certificates-section" ref={sectionRef}>
        <div className="certificates-background"></div>
        
        <div className="floating-badges">
          <div className="floating-badge badge-1"></div>
          <div className="floating-badge badge-2"></div>
        </div>

        <div className="certificates-container">
          <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
            Certifications & Achievements
          </h2>
          <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
            <Sparkles size={20} />
            Validated skills and professional qualifications
          </p>

          <div className="certificates-grid">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className={`certificate-card ${isVisible ? 'visible' : ''}`}
                style={{
                  '--card-color': certificate.badgeColor,
                  '--card-gradient': certificate.gradient,
                  animationDelay: `${isVisible ? 0.4 + index * 0.1 : 0}s`
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="verified-badge">
                  <BadgeCheck size={16} />
                  Verified
                </div>

                {/* Certificate Image - Add your image here */}
                {certificate.image && (
                  <img 
                    src={certificate.image} 
                    alt={certificate.title}
                    className="certificate-image"
                  />
                )}

                <div className="card-header">
                  <div className="certificate-badge">
                    <Award size={32} color="#ffffff" />
                  </div>
                  <div className="certificate-info">
                    <h3 className="certificate-title">{certificate.title}</h3>
                    <p className="certificate-issuer">{certificate.issuer}</p>
                    <div className="certificate-meta">
                      <span>
                        <Calendar size={16} />
                        {certificate.date}
                      </span>
                      {certificate.duration && (
                        <span>
                            <Clock size={16} />
                            {certificate.duration}
                        </span>
                      )}
                      {certificate.pdu && (
                        <span>
                            <Sparkles size={16} />
                            {certificate.pdu}
                        </span>
                      )}
                      <span className="credential-id">
                        ID: {certificate.credentialId.substring(0, 12)}...
                      </span>
                    </div>
                  </div>
                </div>

                <p className="certificate-description">
                  {certificate.description}
                </p>

                <div className="skills-section">
                  <div className="skills-label">Skills Covered:</div>
                  <div className="skills-list">
                    {certificate.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="certificate-actions">
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-button button-primary"
                  >
                    <ExternalLink size={18} />
                    Verify Credential
                  </a>
                  <button className="action-button button-secondary">
                    <Download size={18} />
                    Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificates;