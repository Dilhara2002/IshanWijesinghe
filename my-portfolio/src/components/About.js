import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  User, Code, BookOpen, GraduationCap, Laptop, 
  Sparkles, Award, Target, Zap, Brain, Heart, Rocket 
} from "lucide-react";

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const stats = [
    { number: "3+", label: "Years Learning", icon: <BookOpen size={24} />, color: "#6366f1" },
    { number: "7+", label: "Projects Built", icon: <Rocket size={24} />, color: "#a855f7" },
    { number: "10+", label: "Technologies", icon: <Code size={24} />, color: "#ec4899" },
    { number: "100%", label: "Dedication", icon: <Heart size={24} />, color: "#22c55e" }
  ];

  const highlights = [
    { 
      icon: <GraduationCap size={28} />, 
      title: "Education", 
      desc: "IT Undergraduate @ SLIIT",
      gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      border: "rgba(99, 102, 241, 0.3)"
    },
    { 
      icon: <Code size={28} />, 
      title: "Specialization", 
      desc: "Full-Stack Web Development",
      gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
      border: "rgba(168, 85, 247, 0.3)"
    },
    { 
      icon: <Brain size={28} />, 
      title: "Focus Area", 
      desc: "Backend & AI Innovations",
      gradient: "linear-gradient(135deg, #22c55e, #10b981)",
      border: "rgba(34, 197, 94, 0.3)"
    },
    { 
      icon: <Target size={28} />, 
      title: "Mission", 
      desc: "Building User-Centric Solutions",
      gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
      border: "rgba(245, 158, 11, 0.3)"
    }
  ];

  return (
    <section id="about" style={styles.section}>
      {/* Background Layer */}
      <div style={styles.bgOverlay} />
      
      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <div key={i} className="particle" style={{
          ...styles.particle,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          background: i % 2 === 0 ? "#6366f1" : "#a855f7",
          animationDelay: `${i * 0.5}s`
        }} />
      ))}

      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.header}>
          <div style={styles.badge}>
            <User size={18} color="#6366f1" />
            <span>DISCOVER MY STORY</span>
          </div>
          <h1 style={styles.mainTitle}>About Me</h1>
          <div style={styles.separator}>
            <div style={styles.lineLeft} />
            <Sparkles size={24} color="#6366f1" />
            <div style={styles.lineRight} />
          </div>
        </div>

        {/* Stats Grid */}
        <div style={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(`stat-${i}`)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                ...styles.statCard,
                border: `1px solid ${hoveredCard === `stat-${i}` ? stat.color : "rgba(255, 255, 255, 0.05)"}`,
                transform: hoveredCard === `stat-${i}` ? "translateY(-10px)" : "translateY(0)",
                boxShadow: hoveredCard === `stat-${i}` ? `0 20px 40px ${stat.color}20` : "none"
              }}
            >
              <div style={{...styles.statIcon, background: hoveredCard === `stat-${i}` ? stat.color : "rgba(255,255,255,0.05)"}}>
                {stat.icon}
              </div>
              <h3 style={{...styles.statNumber, color: stat.color}}>{stat.number}</h3>
              <p style={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content Layout */}
        <div style={styles.mainGrid}>
          {/* Story Card */}
          <div className="story-card" style={styles.storyCard}>
            <div style={styles.storyHeader}>
              <div style={styles.storyIconCircle}><Sparkles size={22} color="#fff" /></div>
              <h3 style={styles.storyTitle}>My Journey</h3>
            </div>
            
            <p style={styles.storyText}>
              I am an <span style={styles.highlightText}>Information Technology undergraduate</span> at the <strong>Sri Lanka Institute of Information Technology (SLIIT)</strong>.
            </p>
            <p style={styles.storyText}>
              Driven by a deep passion for technology, I specialized in <strong style={{color: "#a855f7"}}>Full-Stack Development</strong>. My goal is to create <em>efficient and user-centric digital solutions</em> for complex real-world problems.
            </p>

            <div style={styles.focusBox}>
              <Zap size={20} color="#6366f1" />
              <p>I am dedicated to continuous learning, exploring modern architectures to push the boundaries of what's possible on the web.</p>
            </div>
          </div>

          {/* Highlights Sidebar */}
          <div style={styles.sidebar}>
            {highlights.map((item, i) => (
              <div
                key={i}
                style={{
                  ...styles.highlightItem,
                  border: `1px solid ${item.border}`,
                }}
              >
                <div style={{...styles.hIcon, background: item.gradient}}>{item.icon}</div>
                <div>
                  <h4 style={styles.hTitle}>{item.title}</h4>
                  <p style={styles.hDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={styles.ctaContainer}>
          <a href="#contact" style={styles.ctaButton}>
            <Award size={20} /> Let's Build Something Together
          </a>
        </div>
      </div>

      <style>{`
        .particle { position: absolute; width: 4px; height: 4px; border-radius: 50%; opacity: 0.3; animation: float 10s infinite ease-in-out; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes shimmer { to { background-position: 200% center; } }
        @media (max-width: 1024px) { 
            .story-card { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: { minHeight: "100vh", background: "#050505", position: "relative", overflow: "hidden", padding: "100px 20px" },
  bgOverlay: { position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 100%)" },
  container: { position: "relative", zIndex: 10, maxWidth: "1200px", margin: "0 auto" },
  header: { textAlign: "center", marginBottom: "60px" },
  badge: { display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(99, 102, 241, 0.1)", padding: "8px 20px", borderRadius: "50px", border: "1px solid rgba(99, 102, 241, 0.3)", color: "#6366f1", fontSize: "0.75rem", fontWeight: "700", letterSpacing: "2px", marginBottom: "15px" },
  mainTitle: { fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "900", color: "#fff", marginBottom: "10px" },
  separator: { display: "flex", alignItems: "center", justifyContent: "center", gap: "15px" },
  lineLeft: { width: "50px", height: "2px", background: "linear-gradient(90deg, transparent, #6366f1)" },
  lineRight: { width: "50px", height: "2px", background: "linear-gradient(90deg, #6366f1, transparent)" },
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "50px" },
  statCard: { background: "rgba(255,255,255,0.02)", padding: "30px", borderRadius: "24px", textAlign: "center", transition: "all 0.4s ease" },
  statIcon: { width: "50px", height: "50px", margin: "0 auto 15px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" },
  statNumber: { fontSize: "2.5rem", fontWeight: "800", marginBottom: "5px" },
  statLabel: { color: "#9ca3af", fontSize: "0.85rem", fontWeight: "600" },
  mainGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" },
  storyCard: { background: "rgba(255,255,255,0.03)", padding: "40px", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.08)", gridColumn: "span 2" },
  storyHeader: { display: "flex", alignItems: "center", gap: "15px", marginBottom: "25px" },
  storyIconCircle: { width: "45px", height: "45px", background: "linear-gradient(135deg, #6366f1, #a855f7)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" },
  storyTitle: { color: "#fff", fontSize: "1.8rem", fontWeight: "800", margin: 0 },
  storyText: { color: "#d1d5db", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" },
  highlightText: { color: "#fff", fontWeight: "700", borderBottom: "2px solid #6366f1" },
  focusBox: { display: "flex", gap: "15px", background: "rgba(99, 102, 241, 0.1)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(99,102,241,0.2)", color: "#e5e7eb", fontSize: "0.95rem" },
  sidebar: { display: "flex", flexDirection: "column", gap: "20px" },
  highlightItem: { background: "rgba(255,255,255,0.02)", padding: "20px", borderRadius: "20px", display: "flex", alignItems: "center", gap: "15px" },
  hIcon: { minWidth: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" },
  hTitle: { color: "#fff", margin: "0 0 5px 0", fontSize: "1rem", fontWeight: "700" },
  hDesc: { color: "#9ca3af", margin: 0, fontSize: "0.85rem" },
  ctaContainer: { textAlign: "center", marginTop: "50px" },
  ctaButton: { display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 35px", background: "linear-gradient(135deg, #6366f1, #a855f7)", color: "#fff", borderRadius: "50px", textDecoration: "none", fontWeight: "700", boxShadow: "0 10px 20px rgba(99,102,241,0.3)" }
};

export default About;