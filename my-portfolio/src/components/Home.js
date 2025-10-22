import React, { useState, useEffect } from "react";
import profileImage from "../assets/profile.JPG";
import cvFile from "../assets/IshanDilharaCV.pdf";

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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
          min-height: 100vh;
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

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          min-height: 100vh;
          position: relative;
          z-index: 10;
        }

        .text-content {
          animation: fadeInLeft 1s ease-out;
          animation-delay: 0.4s;
          animation-fill-mode: backwards;
        }

        .image-content {
          display: flex;
          justify-content: center;
          align-items: center;
          animation: fadeInRight 1s ease-out;
          animation-delay: 0.2s;
          animation-fill-mode: backwards;
        }

        .profile-image-container {
          position: relative;
          animation: fadeInScale 1s ease-out;
          animation-delay: 0.2s;
          animation-fill-mode: backwards;
        }

        .profile-image {
          width: 400px;
          height: 400px;
          border-radius: 50%;
          border: 6px solid rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 0 50px rgba(168, 85, 247, 0.6),
            0 0 100px rgba(99, 102, 241, 0.4),
            0 25px 50px rgba(0, 0, 0, 0.4);
          object-fit: cover;
          transition: all 0.4s ease;
          animation: pulse 4s ease-in-out infinite;
        }

        .profile-image:hover {
          transform: scale(1.05);
          border-color: rgba(168, 85, 247, 0.8);
          box-shadow: 
            0 0 60px rgba(168, 85, 247, 0.8),
            0 0 120px rgba(99, 102, 241, 0.6),
            0 30px 60px rgba(0, 0, 0, 0.5);
        }

        .image-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 440px;
          height: 440px;
          border: 3px solid transparent;
          border-radius: 50%;
          border-top-color: #6366f1;
          border-right-color: #a855f7;
          border-bottom-color: #ec4899;
          border-left-color: #10b981;
          animation: spin 6s linear infinite;
        }

        .image-ring-2 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 480px;
          height: 480px;
          border: 2px solid transparent;
          border-radius: 50%;
          border-top-color: #10b981;
          border-right-color: #6366f1;
          border-bottom-color: #a855f7;
          border-left-color: #ec4899;
          animation: spinReverse 8s linear infinite;
        }

        @keyframes spin {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes spinReverse {
          to { transform: translate(-50%, -50%) rotate(-360deg); }
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
          line-height: 1.2;
        }

        .subtitle {
          font-size: 1.8rem;
          color: #e0e0e0;
          font-weight: 300;
          margin-bottom: 1.5rem;
          animation: fadeInUp 1s ease-out;
          animation-delay: 0.6s;
          animation-fill-mode: backwards;
        }

        .description {
          max-width: 500px;
          color: #b0b0b0;
          font-size: 1.2rem;
          line-height: 1.8;
          animation: fadeInUp 1s ease-out;
          animation-delay: 0.8s;
          animation-fill-mode: backwards;
          margin-bottom: 2rem;
        }

        .cv-button {
          display: inline-block;
          margin-top: 1rem;
          padding: 1.2rem 3rem;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.2rem;
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

        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          
          .text-content {
            order: 2;
          }
          
          .image-content {
            order: 1;
          }
          
          .profile-image {
            width: 300px;
            height: 300px;
          }
          
          .image-ring {
            width: 340px;
            height: 340px;
          }
          
          .image-ring-2 {
            width: 380px;
            height: 380px;
          }
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2.8rem;
          }
          
          .subtitle {
            font-size: 1.4rem;
          }
          
          .description {
            font-size: 1.1rem;
          }
          
          .profile-image {
            width: 250px;
            height: 250px;
          }
          
          .image-ring {
            width: 290px;
            height: 290px;
          }
          
          .image-ring-2 {
            width: 330px;
            height: 330px;
          }
          
          .cv-button {
            padding: 1rem 2.5rem;
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 2.2rem;
          }
          
          .profile-image {
            width: 200px;
            height: 200px;
          }
          
          .image-ring {
            width: 240px;
            height: 240px;
          }
          
          .image-ring-2 {
            width: 280px;
            height: 280px;
          }
        }
      `}</style>

            <section id="home" className="home-container">
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

                <div className="content-grid">
                    {/* Text Content - Left Side */}
                    <div className="text-content">
                        <h1 className="title">Ishan Dilhara Wijesinghe</h1>
                        <h3 className="subtitle">Information Technology Undergraduate</h3>
                        <p className="description">
                            Professional and motivated IT student ready for opportunities in software
                            development, AI projects, and innovative solutions. Passionate about creating
                            cutting-edge technology and solving complex problems.
                        </p>
                        <a
                            href={cvFile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cv-button"
                            download="IshanDilhara_CV.pdf"  // This forces download
                        >
                            Download CV
                        </a>
                    </div>

                    {/* Image Content - Right Side */}
                    <div className="image-content">
                        <div className="profile-image-container">
                            <div className="image-ring-2"></div>
                            <div className="image-ring"></div>
                            <img
                                src={profileImage}
                                alt="Ishan Dilhara"
                                className="profile-image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;