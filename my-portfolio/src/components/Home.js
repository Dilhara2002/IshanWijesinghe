import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
        
        {/* LEFT SIDE: Large Profile Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="image-side"
        >
          <div className="img-container">
            <div className="ring-fast" />
            <div className="ring-slow" />
            
            <div className="image-wrapper">
              <img src={profileImage} alt="Ishan Wijesinghe" className="profile-img" />
            </div>

            {/* Floating Tech Icons */}
            <div className="tech-badge badge-1"><Code2 size={28} /></div>
            <div className="tech-badge badge-2"><Cpu size={28} /></div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="content-side"
        >
          <div className="status-badge">
            <Sparkles size={16} /> <span>Available for Work</span>
          </div>
          
          <h1 className="main-title">
            Hi, I'm <br />
            <span className="gradient-text">Ishan Wijesinghe</span>
          </h1>

          <div className="typewriter-box">
            <Terminal size={24} color="#6366f1" />
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
              <Download size={20} /> Download CV
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
        .home-section {
          min-height: 100vh;
          background-color: #050505;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          /* Navbar Gap (approx 2cm) */
          padding: 10px 10px 60px; 
        }

        .home-container {
          display: flex;
          flex-direction: row; /* Desktop: Image Left, Text Right */
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1250px;
          gap: 60px;
          z-index: 10;
        }

        .image-side { 
          flex: 1; 
          display: flex; 
          justify-content: center; 
          position: relative;
        }

        .content-side { 
          flex: 1.2; 
          text-align: left; 
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        /* Large Image Styling */
        .img-container {
          position: relative;
          width: clamp(300px, 45vw, 420px);
          height: clamp(300px, 45vw, 420px);
        }

        .image-wrapper {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          padding: 10px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          overflow: hidden;
          z-index: 2;
          position: relative;
          box-shadow: 0 30px 60px rgba(0,0,0,0.6);
        }

        .profile-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: top;
          border: 6px solid #050505;
        }

        /* Rings */
        .ring-fast { position: absolute; inset: -15px; border-radius: 50%; border: 4px solid transparent; border-top-color: #6366f1; border-bottom-color: #a855f7; animation: rotate 5s linear infinite; }
        .ring-slow { position: absolute; inset: -30px; border-radius: 50%; border: 2px dashed rgba(255, 255, 255, 0.15); animation: rotateReverse 15s linear infinite; }
        
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes rotateReverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }

        /* Text */
        .main-title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 800; color: #fff; line-height: 1.1; margin: 20px 0; }
        .gradient-text { background: linear-gradient(90deg, #6366f1, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .description { color: #9ca3af; font-size: 1.2rem; line-height: 1.8; max-width: 550px; margin-bottom: 35px; }

        .button-group { display: flex; align-items: center; gap: 30px; flex-wrap: wrap; }
        .primary-btn { display: flex; align-items: center; gap: 10px; padding: 16px 36px; background: linear-gradient(135deg, #6366f1, #a855f7); color: #fff; border-radius: 50px; text-decoration: none; font-weight: 700; box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4); }
        
        /* Badges */
        .tech-badge { position: absolute; background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); padding: 14px; border-radius: 16px; color: #fff; z-index: 5; border: 1px solid rgba(255,255,255,0.1); }
        .badge-1 { top: 10%; left: -5%; animation: float 4s ease-in-out infinite; }
        .badge-2 { bottom: 10%; right: -5%; animation: float 4s ease-in-out infinite 2s; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }

        .status-badge { display: flex; align-items: center; gap: 8px; background: rgba(99, 102, 241, 0.1); padding: 8px 20px; border-radius: 50px; color: #818cf8; font-size: 0.9rem; font-weight: 600; }
        .typewriter-box { display: flex; align-items: center; gap: 12px; font-size: 1.5rem; color: #9ca3af; margin: 15px 0; font-weight: 600; }
        .cursor { color: #6366f1; animation: blink 1s infinite; }
        @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }

        .bg-orb { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.12; }
        .orb-1 { top: 10%; left: 10%; width: 400px; height: 400px; background: #6366f1; }
        .orb-2 { bottom: 10%; right: 10%; width: 500px; height: 500px; background: #a855f7; }

        .social-group { display: flex; gap: 25px; }

        /* Mobile Adjustments */
        @media (max-width: 950px) {
          .home-container { 
            flex-direction: column; /* Stacks image on top for mobile */
            text-align: center; 
            gap: 50px;
          }
          .content-side { 
            align-items: center; 
            text-align: center; 
          }
          .button-group { justify-content: center; }
          .img-container { width: 280px; height: 280px; }
          .home-section { padding-top: 100px; }
        }
      `}</style>
    </section>
  );
};

const SocialIcon = ({ icon, url }) => (
  <motion.a 
    href={url} target="_blank" rel="noreferrer"
    whileHover={{ y: -5, color: "#6366f1" }} 
    style={{ color: "#4b5563", fontSize: "1.8rem", transition: "0.3s" }}
  >
    {icon}
  </motion.a>
);

export default Home;