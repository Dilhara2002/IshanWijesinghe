import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Github, Linkedin, Mail, Sparkles, Code2, Terminal, Cpu } from "lucide-react";

// Correct relative paths
import profileImage from "../assets/profile.JPG";
import cvFile from "../assets/ISHAN_WIJESINGHE_CV.pdf";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const roles = ["Full-Stack Developer", "IT Undergraduate @ SLIIT", "UI/UX Designer", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation logic
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
    <section id="home" style={styles.section}>
      {/* Background Animated Orbs */}
      <div style={styles.orb1} />
      <div style={styles.orb2} />

      <div style={styles.container}>
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.contentSide}
        >
          <div style={styles.badge}>
            <Sparkles size={16} /> <span>Available for Projects</span>
          </div>
          
          <h1 style={styles.title}>
            Hi, I'm <br />
            <span style={styles.gradientText}>Ishan Wijesinghe</span>
          </h1>

          <div style={styles.typewriter}>
            <Terminal size={24} color="#6366f1" />
            <span>{typedText}</span>
            <span style={styles.cursor}>|</span>
          </div>

          <p style={styles.description}>
            I am an Information Technology undergraduate at <b>SLIIT</b>, 
            passionate about building high-performance full-stack applications 
            with modern technology and innovative design.
          </p>

          <div style={styles.buttonGroup}>
            <motion.a 
              href={cvFile} 
              download 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={styles.primaryBtn}
            >
              <Download size={20} /> Download CV
            </motion.a>
            
            <div style={styles.socialGroup}>
              <SocialIcon icon={<Github />} url="https://github.com/Dilhara2002" />
              <SocialIcon icon={<Linkedin />} url="https://www.linkedin.com/in/ishan-wijesinghe-5200a1318/" />
              <SocialIcon icon={<Mail />} url="mailto:wijesinghelageishan@gmail.com" />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Advanced Image Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={styles.imageSide}
        >
          <div style={styles.imgContainer}>
            {/* Pulsing Outer Aura */}
            <div className="aura" style={styles.aura} />
            
            {/* Rapid Rotating Ring */}
            <div className="ring-fast" style={styles.ringFast} />
            
            {/* Slow Rotating Dashed Orbit */}
            <div className="ring-slow" style={styles.ringSlow} />

            {/* Main Profile Image */}
            <div style={styles.imageWrapper}>
              <img src={profileImage} alt="Ishan Wijesinghe" style={styles.profileImg} />
            </div>

            {/* Floating Tech Badges */}
            <TechBadge icon={<Code2 />} top="10%" right="-10%" delay={0} />
            <TechBadge icon={<Cpu />} bottom="20%" left="-15%" delay={1} />
          </div>
        </motion.div>
      </div>

      {/* Global CSS for Animations */}
      <style>{`
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes rotateReverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.3; } 50% { transform: scale(1.1); opacity: 0.6; } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        .ring-fast { animation: rotate 4s linear infinite; }
        .ring-slow { animation: rotateReverse 12s linear infinite; }
        .aura { animation: pulse 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

// Sub-components for cleaner code
const SocialIcon = ({ icon, url }) => (
  <motion.a 
    href={url} 
    target="_blank" 
    whileHover={{ y: -5, color: "#6366f1" }} 
    style={styles.socialIcon}
  >
    {icon}
  </motion.a>
);

const TechBadge = ({ icon, top, right, bottom, left, delay }) => (
  <motion.div 
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity, delay }}
    style={{ ...styles.techBadge, top, right, bottom, left }}
  >
    {icon}
  </motion.div>
);

const styles = {
  section: {
    minHeight: "100vh",
    backgroundColor: "#050505",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    padding: "0 5%"
  },
  orb1: {
    position: "absolute", top: "10%", left: "5%", width: "400px", height: "400px",
    background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
    filter: "blur(80px)", zIndex: 0
  },
  orb2: {
    position: "absolute", bottom: "10%", right: "5%", width: "500px", height: "500px",
    background: "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
    filter: "blur(100px)", zIndex: 0
  },
  container: {
    display: "flex", width: "100%", maxWidth: "1200px", zIndex: 1, 
    flexWrap: "wrap", alignItems: "center", justifyContent: "space-between"
  },
  contentSide: { flex: 1, minWidth: "350px", textAlign: "left" },
  badge: {
    display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(99, 102, 241, 0.1)",
    border: "1px solid rgba(99, 102, 241, 0.3)", color: "#818cf8", padding: "8px 16px",
    borderRadius: "20px", fontSize: "0.85rem", fontWeight: "600", marginBottom: "20px"
  },
  title: { fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: "800", color: "#fff", lineHeight: 1.1 },
  gradientText: { background: "linear-gradient(90deg, #6366f1, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  typewriter: { display: "flex", alignItems: "center", gap: "12px", fontSize: "1.5rem", color: "#9ca3af", margin: "20px 0" },
  cursor: { color: "#6366f1", animation: "blink 1s infinite" },
  description: { maxWidth: "500px", color: "#9ca3af", lineHeight: 1.8, fontSize: "1.1rem" },
  buttonGroup: { display: "flex", alignItems: "center", gap: "30px", marginTop: "40px" },
  primaryBtn: {
    display: "flex", alignItems: "center", gap: "10px", padding: "15px 35px",
    background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)", color: "#fff",
    borderRadius: "50px", textDecoration: "none", fontWeight: "700", boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)"
  },
  socialGroup: { display: "flex", gap: "20px" },
  socialIcon: { color: "#4b5563", transition: "0.3s" },
  imageSide: { flex: 1, display: "flex", justifyContent: "center", minWidth: "400px" },
  imgContainer: { position: "relative", width: "350px", height: "350px" },
  aura: {
    position: "absolute", inset: "-30px", borderRadius: "50%",
    background: "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)"
  },
  ringFast: {
    position: "absolute", inset: "-10px", borderRadius: "50%",
    border: "3px solid transparent", borderTopColor: "#6366f1", borderBottomColor: "#a855f7"
  },
  ringSlow: {
    position: "absolute", inset: "-25px", borderRadius: "50%",
    border: "2px dashed rgba(255, 255, 255, 0.1)"
  },
  imageWrapper: {
    width: "100%", height: "100%", borderRadius: "50%", padding: "10px",
    background: "linear-gradient(135deg, #6366f1, #a855f7)", position: "relative", zIndex: 2
  },
  profileImg: {
    width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover",
    border: "8px solid #050505"
  },
  techBadge: {
    position: "absolute", width: "60px", height: "60px", background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "center",
    color: "#fff", zIndex: 3, boxShadow: "0 10px 20px rgba(0,0,0,0.5)"
  }
};

export default Home;