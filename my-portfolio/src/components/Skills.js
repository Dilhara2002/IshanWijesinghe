import React, { useState, useEffect, useRef } from "react";
import { Code2, Terminal, Database, Wrench, Sparkles, Cpu, Zap, TrendingUp, Award } from "lucide-react";

const skillCategories = [
  { 
    title: "Frontend", 
    icon: Code2,
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 80 }
    ] 
  },
  { 
    title: "Backend", 
    icon: Terminal,
    color: "#a855f7",
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Spring Boot", level: 70 }
    ] 
  },
  { 
    title: "Database", 
    icon: Database,
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 65 }
    ] 
  },
  { 
    title: "Tools", 
    icon: Wrench,
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "Docker", level: 60 }
    ] 
  }
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
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
    <section id="skills" ref={sectionRef} style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #0a0a0a 0%, #1a0b2e 50%, #0a0a0a 100%)",
      position: "relative",
      overflow: "hidden",
      padding: "120px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.06) 0%, transparent 50%)
        `,
        animation: "pulse 8s ease-in-out infinite"
      }} />

      {/* Grid Background */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(99, 102, 241, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
        animation: "gridMove 20s linear infinite"
      }} />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            background: i % 2 === 0 ? "#6366f1" : "#a855f7",
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.2,
            animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            boxShadow: `0 0 20px ${i % 2 === 0 ? "rgba(99, 102, 241, 0.4)" : "rgba(168, 85, 247, 0.4)"}`
          }}
        />
      ))}

      <div style={{ 
        maxWidth: "1400px", 
        width: "100%", 
        position: "relative", 
        zIndex: 10,
        animation: isVisible ? "fadeIn 1s ease-out" : "none"
      }}>
        {/* Header */}
        <div style={{ 
          textAlign: "center", 
          marginBottom: "80px",
          animation: "fadeInDown 1s ease-out"
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            background: "rgba(99, 102, 241, 0.1)",
            padding: "12px 30px",
            borderRadius: "50px",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            marginBottom: "24px",
            backdropFilter: "blur(10px)"
          }}>
            <Cpu size={20} color="#6366f1" />
            <span style={{
              color: "#6366f1",
              textTransform: "uppercase",
              letterSpacing: "3px",
              fontSize: "0.85rem",
              fontWeight: "700"
            }}>
              Technical Expertise
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: "900",
            background: "linear-gradient(135deg, #fff 0%, #6366f1 50%, #a855f7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px",
            letterSpacing: "-2px"
          }}>
            My Skills
          </h1>

          <div style={{ 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "24px"
          }}>
            <div style={{ 
              width: "60px", 
              height: "3px", 
              background: "linear-gradient(90deg, transparent, #6366f1)",
              borderRadius: "2px"
            }} />
            <Sparkles size={24} color="#6366f1" />
            <div style={{ 
              width: "60px", 
              height: "3px", 
              background: "linear-gradient(90deg, #6366f1, transparent)",
              borderRadius: "2px"
            }} />
          </div>

          <p style={{
            fontSize: "1.15rem",
            color: "#9ca3af",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.8"
          }}>
            A diverse toolkit of modern technologies and frameworks for building exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          animation: "fadeInUp 1s ease-out 0.3s both"
        }}>
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredCategory === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(20px)",
                  padding: "40px",
                  borderRadius: "30px",
                  border: `1px solid ${isHovered ? category.color : "rgba(255, 255, 255, 0.05)"}`,
                  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
                  boxShadow: isHovered 
                    ? `0 25px 50px ${category.color}40, 0 0 0 1px ${category.color}20`
                    : "0 10px 30px rgba(0, 0, 0, 0.3)",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Gradient Overlay on Hover */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: category.gradient,
                  opacity: isHovered ? 0.05 : 0,
                  transition: "opacity 0.5s",
                  pointerEvents: "none"
                }} />

                {/* Header */}
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "16px", 
                  marginBottom: "30px",
                  position: "relative",
                  zIndex: 1
                }}>
                  <div style={{ 
                    background: isHovered ? category.gradient : `${category.color}15`,
                    padding: "16px", 
                    borderRadius: "16px",
                    border: `1px solid ${category.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.4s",
                    boxShadow: isHovered ? `0 8px 24px ${category.color}40` : "none"
                  }}>
                    <Icon 
                      size={28} 
                      color={isHovered ? "#fff" : category.color}
                      style={{ transition: "color 0.4s" }}
                    />
                  </div>
                  <div>
                    <h3 style={{ 
                      color: "#fff", 
                      fontSize: "1.6rem", 
                      fontWeight: "800", 
                      margin: 0,
                      letterSpacing: "-0.5px"
                    }}>
                      {category.title}
                    </h3>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "4px"
                    }}>
                      <TrendingUp size={14} color={category.color} />
                      <span style={{
                        color: "#6b7280",
                        fontSize: "0.8rem",
                        fontWeight: "600"
                      }}>
                        {category.skills.length} Skills
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "24px",
                  position: "relative",
                  zIndex: 1
                }}>
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div style={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center",
                        marginBottom: "10px"
                      }}>
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px"
                        }}>
                          <Zap 
                            size={14} 
                            color={category.color}
                            style={{
                              opacity: isHovered ? 1 : 0.5,
                              transition: "opacity 0.3s"
                            }}
                          />
                          <span style={{ 
                            color: "#e5e7eb", 
                            fontWeight: "600",
                            fontSize: "0.95rem"
                          }}>
                            {skill.name}
                          </span>
                        </div>
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px"
                        }}>
                          <span style={{ 
                            color: category.color, 
                            fontWeight: "700",
                            fontSize: "0.9rem"
                          }}>
                            {skill.level}%
                          </span>
                          {skill.level >= 85 && (
                            <Award size={14} color={category.color} />
                          )}
                        </div>
                      </div>

                      {/* Progress Bar Container */}
                      <div style={{ 
                        height: "8px", 
                        width: "100%", 
                        background: "rgba(255, 255, 255, 0.05)", 
                        borderRadius: "10px",
                        overflow: "hidden",
                        position: "relative"
                      }}>
                        {/* Animated Fill */}
                        <div
                          style={{
                            height: "100%",
                            width: isVisible ? `${skill.level}%` : "0%",
                            background: category.gradient,
                            borderRadius: "10px",
                            transition: `width 1.5s ease-out ${0.5 + (i * 0.1)}s`,
                            boxShadow: isHovered ? `0 0 15px ${category.color}80` : `0 0 8px ${category.color}40`,
                            position: "relative"
                          }}
                        >
                          {/* Shine Effect */}
                          <div style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                            animation: isVisible ? "shine 2s ease-in-out infinite" : "none",
                            animationDelay: `${i * 0.2}s`
                          }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Proficiency Badge */}
                <div style={{
                  marginTop: "30px",
                  padding: "12px 20px",
                  background: isHovered ? `${category.color}20` : "rgba(255, 255, 255, 0.03)",
                  borderRadius: "16px",
                  border: `1px solid ${isHovered ? category.color : "rgba(255, 255, 255, 0.05)"}`,
                  textAlign: "center",
                  transition: "all 0.4s"
                }}>
                  <span style={{
                    color: isHovered ? category.color : "#6b7280",
                    fontSize: "0.85rem",
                    fontWeight: "700",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    transition: "color 0.4s"
                  }}>
                    {Math.round(category.skills.reduce((sum, s) => sum + s.level, 0) / category.skills.length)}% Average Proficiency
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div style={{
          marginTop: "80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "24px",
          animation: "fadeInUp 1s ease-out 0.6s both"
        }}>
          {[
            { label: "Total Skills", value: skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0), icon: <Code2 size={24} /> },
            { label: "Categories", value: skillCategories.length, icon: <Cpu size={24} /> },
            { label: "Avg Proficiency", value: `${Math.round(skillCategories.reduce((sum, cat) => sum + cat.skills.reduce((s, sk) => s + sk.level, 0) / cat.skills.length, 0) / skillCategories.length)}%`, icon: <TrendingUp size={24} /> }
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                backdropFilter: "blur(20px)",
                padding: "28px",
                borderRadius: "20px",
                border: "1px solid rgba(99, 102, 241, 0.2)",
                textAlign: "center",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "#6366f1";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(99, 102, 241, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.2)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                width: "50px",
                height: "50px",
                margin: "0 auto 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #6366f1, #a855f7)",
                borderRadius: "14px",
                color: "#fff"
              }}>
                {stat.icon}
              </div>
              <h4 style={{
                fontSize: "2rem",
                fontWeight: "900",
                color: "#fff",
                margin: "0 0 8px 0"
              }}>
                {stat.value}
              </h4>
              <p style={{
                color: "#9ca3af",
                fontSize: "0.9rem",
                margin: 0,
                fontWeight: "600"
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @media (max-width: 768px) {
          #skills > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;