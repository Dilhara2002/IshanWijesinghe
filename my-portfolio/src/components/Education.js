import React, { useState, useEffect, useRef } from "react";
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen, Award, Target, TrendingUp, Star, ShieldCheck } from "lucide-react";

const educationHistory = [
  {
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    degree: "BSc (Hons) in Information Technology",
    duration: "2023 – 2026 (Expected)",
    location: "Malabe, Sri Lanka",
    details: "Focusing on Full-Stack Development and Software Engineering. Developing a strong command over modern web architectures, database management, and professional coding standards.",
    icon: GraduationCap,
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    status: "Current Undergraduate"
  },
  {
    institution: "SLIIT Faculty of Computing",
    degree: "AI/ML Engineer - Stage 1",
    duration: "Issued: Nov 22, 2025",
    location: "Center for Open and Distance Education",
    details: "Completed specialized training in Artificial Intelligence and Machine Learning foundations through the Industry Engagement Unit. [ID: gzzsbnqbp1]",
    icon: ShieldCheck,
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    status: "Professional Certificate"
  },
  {
    institution: "LinkedIn Learning",
    degree: "Introduction to Career Skills in Software Development",
    duration: "Completed: Dec 18, 2024",
    location: "Online Professional Development",
    details: "Mastered core career management and tech career skills essential for modern software engineering roles. [ID: 1728bcda5711...]",
    icon: Award,
    color: "#0077b5",
    gradient: "linear-gradient(135deg, #0077b5, #00a0dc)",
    status: "Certification"
  },
  {
    institution: "LinkedIn Learning / PMI",
    degree: "Introduction to Analytics Engineering",
    duration: "Completed: Dec 13, 2024",
    location: "Online Professional Development",
    details: "Gained proficiency in Data Engineering and Data Analytics concepts, authorized by the Project Management Institute (PMI). [ID: 7bla1055...]",
    icon: TrendingUp,
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    status: "Certification"
  }
];

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section id="education" ref={sectionRef} style={styles.section}>
      <div style={styles.glowBg} />
      <div style={styles.gridBg} />

      {[...Array(5)].map((_, i) => (
        <div key={i} className="particle" style={{
          ...styles.particle,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          background: i % 2 === 0 ? "#6366f1" : "#a855f7",
          animationDelay: `${i * 2}s`
        }} />
      ))}

      <div style={{ ...styles.container, animation: isVisible ? "fadeIn 1s ease-out" : "none" }}>
        <div style={styles.header}>
          <div style={styles.badge}>
            <BookOpen size={20} color="#6366f1" />
            <span>ACADEMIC & PROFESSIONAL JOURNEY</span>
          </div>
          <h1 style={styles.title}>Education & Certifications</h1>
          <div style={styles.separator}>
            <div style={styles.line} />
            <Sparkles size={24} color="#6366f1" />
            <div style={styles.line} />
          </div>
          <p style={styles.subtitle}>
            Continuous learning journey through formal degree studies and professional specialized certifications.
          </p>
        </div>

        <div style={styles.timelineWrapper}>
          <div style={{
            ...styles.timelineLine,
            height: isVisible ? "100%" : "0%",
            opacity: isVisible ? 1 : 0
          }} />

          {educationHistory.map((edu, index) => {
            const Icon = edu.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={styles.timelineItem}
              >
                <div style={styles.timelineNode}>
                  <div style={{
                    ...styles.nodeRing,
                    animation: isHovered ? "pulse 2s infinite" : "none"
                  }} />
                  <div style={{
                    ...styles.nodeIconBox,
                    background: isHovered ? edu.gradient : "#0a0a0a",
                    borderColor: isHovered ? edu.color : "rgba(99, 102, 241, 0.5)",
                    transform: isHovered ? "scale(1.1)" : "scale(1)"
                  }}>
                    <Icon size={28} color={isHovered ? "#fff" : edu.color} />
                  </div>
                </div>

                <div style={{
                  ...styles.eduCard,
                  borderColor: isHovered ? edu.color : "rgba(255, 255, 255, 0.05)",
                  transform: isHovered ? "translateX(10px)" : "translateX(0)",
                  boxShadow: isHovered ? `0 20px 40px ${edu.color}20` : "none"
                }}>
                  <div style={{
                    ...styles.statusBadge,
                    background: isHovered ? edu.gradient : "rgba(99, 102, 241, 0.1)",
                    borderColor: edu.color
                  }}>
                    <Star size={14} color={isHovered ? "#fff" : edu.color} fill={isHovered ? "#fff" : "none"} />
                    <span style={{ color: isHovered ? "#fff" : edu.color }}>{edu.status}</span>
                  </div>

                  <h3 style={styles.institutionName}>{edu.institution}</h3>
                  <p style={{ ...styles.degreeName, color: edu.color }}>
                    <Target size={18} /> {edu.degree}
                  </p>

                  <div style={styles.metaInfo}>
                    <div style={styles.metaItem}>
                      <Calendar size={18} /> <span>{edu.duration}</span>
                    </div>
                    <div style={styles.metaItem}>
                      <MapPin size={18} /> <span>{edu.location}</span>
                    </div>
                  </div>

                  <p style={styles.eduDetails}>{edu.details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pulse { 0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; } 100% { transform: translate(-50%, -50%) scale(1.4); opacity: 0; } }
        .particle { position: absolute; border-radius: 50%; opacity: 0.2; animation: float 10s infinite ease-in-out; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
      `}</style>
    </section>
  );
};

const styles = {
  section: { minHeight: "100vh", background: "#050505", position: "relative", overflow: "hidden", padding: "100px 20px" },
  glowBg: { position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 100%)" },
  gridBg: { position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)", backgroundSize: "60px 60px" },
  container: { maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 10 },
  header: { textAlign: "center", marginBottom: "80px" },
  badge: { display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(99, 102, 241, 0.1)", padding: "12px 30px", borderRadius: "50px", border: "1px solid rgba(99, 102, 241, 0.3)", color: "#6366f1", fontSize: "0.85rem", fontWeight: "700", letterSpacing: "2px" },
  title: { fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "900", color: "#fff", margin: "20px 0" },
  separator: { display: "flex", alignItems: "center", justifyContent: "center", gap: "15px" },
  line: { width: "60px", height: "3px", background: "#6366f1", borderRadius: "2px" },
  subtitle: { color: "#9ca3af", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto", lineHeight: "1.8" },
  timelineWrapper: { position: "relative", paddingLeft: "80px" },
  timelineLine: { position: "absolute", left: "30px", top: 0, width: "3px", background: "linear-gradient(to bottom, #6366f1, #a855f7, transparent)", transition: "height 1.5s ease" },
  timelineItem: { position: "relative", marginBottom: "50px" },
  timelineNode: { position: "absolute", left: "-80px", top: "20px", width: "60px", height: "60px" },
  nodeRing: { position: "absolute", top: "50%", left: "50%", width: "70px", height: "70px", borderRadius: "50%", border: "2px solid rgba(99, 102, 241, 0.3)" },
  nodeIconBox: { position: "relative", width: "60px", height: "60px", borderRadius: "50%", border: "3px solid", display: "flex", alignItems: "center", justifyContent: "center", transition: "0.4s" },
  eduCard: { background: "rgba(255,255,255,0.02)", backdropFilter: "blur(20px)", padding: "40px", borderRadius: "30px", border: "1px solid", transition: "0.5s" },
  statusBadge: { position: "absolute", top: "25px", right: "25px", display: "flex", alignItems: "center", gap: "8px", padding: "8px 18px", borderRadius: "50px", border: "1px solid", fontSize: "0.75rem", fontWeight: "700" },
  institutionName: { fontSize: "1.8rem", fontWeight: "800", color: "#fff", marginBottom: "10px" },
  degreeName: { fontSize: "1.2rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" },
  metaInfo: { display: "flex", gap: "25px", marginBottom: "25px", flexWrap: "wrap" },
  metaItem: { display: "flex", alignItems: "center", gap: "8px", color: "#9ca3af", fontSize: "0.95rem" },
  eduDetails: { color: "#d1d5db", lineHeight: "1.8", marginBottom: "30px" },
};

export default Education;