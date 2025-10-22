import React, { useState, useEffect } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes particles {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }

        .home-container {
          position: relative;
          overflow: hidden;
          background: linear-gradient(-45deg, #0f0c29, #302b63, #24243e, #1a1a2e);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(168, 85, 247, 0.5);
          border-radius: 50%;
          animation: particles 15s linear infinite;
        }

        .particle:nth-child(2n) {
          background: rgba(99, 102, 241, 0.5);
          animation-duration: 20s;
        }

        .particle:nth-child(3n) {
          background: rgba(236, 72, 153, 0.5);
          animation-duration: 25s;
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: float 8s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: #6366f1;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: #a855f7;
          bottom: 10%;
          right: 10%;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 250px;
          height: 250px;
          background: #ec4899;
          top: 50%;
          left: 50%;
          animation-delay: 4s;
        }

        .profile-image-container {
          position: relative;
          animation: fadeInScale 1s ease-out;
          animation-delay: 0.2s;
          animation-fill-mode: backwards;
        }

        .profile-image {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          border: 5px solid rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 0 30px rgba(168, 85, 247, 0.5),
            0 0 60px rgba(99, 102, 241, 0.3),
            0 20px 40px rgba(0, 0, 0, 0.3);
          object-fit: cover;
          transition: all 0.4s ease;
          animation: pulse 3s ease-in-out infinite;
        }

        .profile-image:hover {
          transform: scale(1.1);
          border-color: rgba(168, 85, 247, 0.8);
          box-shadow: 
            0 0 40px rgba(168, 85, 247, 0.8),
            0 0 80px rgba(99, 102, 241, 0.5),
            0 25px 50px rgba(0, 0, 0, 0.4);
        }

        .image-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          border: 2px solid transparent;
          border-radius: 50%;
          border-top-color: #6366f1;
          border-right-color: #a855f7;
          animation: spin 4s linear infinite;
        }

        @keyframes spin {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
        }

        .title {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff, #a855f7, #6366f1);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientBG 5s ease infinite, fadeInUp 1s ease-out;
          animation-delay: 0s, 0.4s;
          animation-fill-mode: normal, backwards;
          margin-bottom: 0.5rem;
          text-shadow: 0 0 40px rgba(168, 85, 247, 0.3);
        }

        .subtitle {
          font-size: 1.5rem;
          color: #e0e0e0;
          font-weight: 300;
          margin-bottom: 1.5rem;
          animation: fadeInUp 1s ease-out;
          animation-delay: 0.6s;
          animation-fill-mode: backwards;
        }

        .description {
          max-width: 600px;
          margin: 20px auto;
          color: #b0b0b0;
          font-size: 1.1rem;
          line-height: 1.8;
          animation: fadeInUp 1s ease-out;
          animation-delay: 0.8s;
          animation-fill-mode: backwards;
        }

        .cv-button {
          display: inline-block;
          margin-top: 2rem;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.4s ease;
          box-shadow: 
            0 10px 30px rgba(168, 85, 247, 0.4),
            0 0 20px rgba(99, 102, 241, 0.3);
          animation: fadeInUp 1s ease-out;
          animation-delay: 1s;
          animation-fill-mode: backwards;
          position: relative;
          overflow: hidden;
        }

        .cv-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 3s infinite;
        }

        .cv-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 
            0 15px 40px rgba(168, 85, 247, 0.6),
            0 0 30px rgba(99, 102, 241, 0.5);
          background: linear-gradient(135deg, #7c3aed, #c084fc);
        }

        .cv-button:active {
          transform: translateY(-1px) scale(1.02);
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2.5rem;
          }
          
          .subtitle {
            font-size: 1.2rem;
          }
          
          .profile-image {
            width: 150px;
            height: 150px;
          }
          
          .image-ring {
            width: 170px;
            height: 170px;
          }
          
          .description {
            font-size: 1rem;
            padding: 0 1rem;
          }
        }
      `}</style>

      <section
        id="home"
        className="home-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          padding: "2rem"
        }}
      >
        {/* Animated Background Orbs */}
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>

        {/* Floating Particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`
              }}
            ></div>
          ))}
        </div>

        <div className="content-wrapper">
          {/* Profile Image */}
          <div className="profile-image-container" style={{ marginBottom: "2rem" }}>
            <div className="image-ring"></div>
            <img
              src="/profile.JPG"
              alt="Ishan Dilhara"
              className="profile-image"
            />
          </div>

          {/* Title */}
          <h1 className="title">Ishan Dilhara Wijesinghe</h1>

          {/* Subtitle */}
          <h3 className="subtitle">Information Technology Undergraduate</h3>

          {/* Description */}
          <p className="description">
            Professional and motivated IT student ready for opportunities in software
            development, AI projects, and innovative solutions.
          </p>

          {/* CV Button */}
          <a
            href="/IshanDilharaCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-button"
          >
            Download CV
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;