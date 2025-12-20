import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Github, Linkedin, Mail, Sparkles, Code2, Terminal, Cpu } from "lucide-react";

// Assets
import profileImage from "../assets/profile.JPG";
import cvFile from "../assets/ISHAN_WIJESINGHE_CV.pdf";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const roles = ["Full-Stack Developer", "IT Undergraduate @ SLIIT", "UI/UX Designer", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, isDeleting ? 40 : 100);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="home-section">
      {/* Background Animated Orbs */}
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />

      <div className="home-container">
        
        {/* Right Side (Image) - Mobile එකේදී මෙය ඉහළට එන සේ සකසා ඇත */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="image-side"
        >
          <div className="img-container">
            <div className="aura" />
            <div className="ring-fast" />
            <div className="ring-slow" />
            <div className="image-wrapper">
              <img src={profileImage} alt="Ishan Wijesinghe" className="profile-img" />
            </div>
            {/* Tech Badges - Mobile එකේදී මේවායේ ප්‍රමාණය මදක් කුඩා වේ */}
            <TechBadge icon={<Code2 size={24} />} className="badge-1" delay={0} />
            <TechBadge icon={<Cpu size={24} />} className="badge-2" delay={1} />
          </div>
        </motion.div>

        {/* Left Side (Text Content) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="content-side"
        >
          <div className="status-badge">
            <Sparkles size={16} /> <span>Available for Projects</span>
          </div>
          
          <h1 className="main-title">
            Hi, I'm <br />
            <span className="gradient-text">Ishan Wijesinghe</span>
          </h1>

          <div className="typewriter-box">
            <Terminal size={22} color="#6366f1" />
            <span className="typed-text">{typedText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="description">
            I am an Information Technology undergraduate at <b>SLIIT</b>, 
            building high-performance full-stack applications with modern technology.
          </p>

          <div className="button-group">
            <motion.a 
              href={cvFile} 
              download 
              whileHover={{ scale: 1.05 }}
              className="primary-btn"
            >
              <Download size={20} /> CV
            </motion.a>
            
            <div className="social-group">
              <SocialIcon icon={<Github />} url="https://github.com/Dilhara2002" />
              <SocialIcon icon={<Linkedin />} url="https://www.linkedin.com/in/ishan-wijesinghe-5200a1318/" />
              <SocialIcon icon={<Mail />} url="mailto:wijesinghelageishan@gmail.com" />
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        /* --- Base Layout --- */
        .home-section {
          minHeight: 100vh;
          background-color: #050505;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          padding: 80px 20px;
        }

        .home-container {
          display: flex;
          flex-direction: row; /* Desktop */
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 1200px;
          gap: 50px;
          z-index: 10;
        }

        /* --- Content Side --- */
        .content-side {
          flex: 1;
          text-align: left;
        }

        .main-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin: 15px 0;
        }

        .gradient-text {
          background: linear-gradient(90deg, #6366f1, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .description {
          color: #9ca3af;
          font-size: 1.1rem;
          max-width: 500px;
          line-height: 1.6;
        }

        /* --- Image Side --- */
        .img-container {
          position: relative;
          width: clamp(250px, 40vw, 350px);
          height: clamp(250px, 40vw, 350px);
        }

        .image-wrapper {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          padding: 8px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          position: relative;
          z-index: 2;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 6px solid #050505;
        }

        /* --- Buttons --- */
        .button-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 20px;
          margin-top: 30px;
        }

        .primary-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 30px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          color: #fff;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
        }

        /* --- Animations --- */
        .ring-fast {
          position: absolute; inset: -10px; border-radius: 50%;
          border: 3px solid transparent; border-top-color: #6366f1; border-bottom-color: #a855f7;
          animation: rotate 4s linear infinite;
        }
        .ring-slow {
          position: absolute; inset: -20px; border-radius: 50%;
          border: 2px dashed rgba(255, 255, 255, 0.1);
          animation: rotateReverse 12s linear infinite;
        }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes rotateReverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        
        /* --- MOBILE RESPONSIVENESS --- */
        @media (max-width: 900px) {
          .home-container {
            flex-direction: column; /* Mobile එකේදී එක යට එක එන සේ */
            text-align: center;
            gap: 40px;
          }

          .content-side {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .description {
            max-width: 100%;
          }

          .button-group {
            justify-content: center;
          }

          .img-container {
            width: 250px;
            height: 250px;
          }
        }

        .status-badge {
          display: flex; align-items: center; gap: 8px; background: rgba(99, 102, 241, 0.1);
          padding: 6px 16px; border-radius: 50px; color: #818cf8; font-size: 0.85rem;
        }

        .typewriter-box {
          display: flex; align-items: center; gap: 10px; font-size: 1.3rem; color: #9ca3af; margin: 10px 0;
        }
        
        .cursor { color: #6366f1; animation: blink 1s infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        .bg-orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.15; z-index: 0; }
        .orb-1 { top: 10%; left: 5%; width: 300px; height: 300px; background: #6366f1; }
        .orb-2 { bottom: 10%; right: 5%; width: 400px; height: 400px; background: #a855f7; }
      `}</style>
    </section>
  );
};

const SocialIcon = ({ icon, url }) => (
  <motion.a 
    href={url} 
    target="_blank" 
    whileHover={{ y: -5, scale: 1.1 }} 
    style={{ color: "#4b5563", fontSize: "1.5rem", transition: "0.3s", display: "inline-block", margin: "0 10px" }}
  >
    {icon}
  </motion.a>
);

const TechBadge = ({ icon, className, delay }) => (
  <motion.div 
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity, delay }}
    className={`tech-badge ${className}`}
    style={{
      position: "absolute",
      background: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(5px)",
      border: "1px solid rgba(255,255,255,0.1)",
      padding: "10px",
      borderRadius: "12px",
      zIndex: 3,
      color: "#fff"
    }}
  >
    {icon}
  </motion.div>
);

export default Home;