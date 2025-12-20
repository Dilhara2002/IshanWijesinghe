import React, { useState, useEffect, useRef } from "react";
import { Mail, Linkedin, Github, Send, MessageSquare, Sparkles, MapPin, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(null), 3000);
      return;
    }
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus(null);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Your Original Details Integrated Here
  const contactMethods = [
    { 
      icon: Mail, 
      label: "Email Me", 
      value: "wijesinghelageishan@gmail.com", 
      link: "mailto:wijesinghelageishan@gmail.com", 
      color: "#6366f1",
      gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      value: "ishan-wijesinghe", 
      link: "https://www.linkedin.com/in/ishan-wijesinghe-5200a1318/", 
      color: "#0077b5",
      gradient: "linear-gradient(135deg, #0077b5, #00a0dc)"
    },
    { 
      icon: Github, 
      label: "GitHub", 
      value: "Dilhara2002", 
      link: "https://github.com/Dilhara2002", 
      color: "#fff",
      gradient: "linear-gradient(135deg, #6e5494, #8b6cb7)"
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: "Malabe, Sri Lanka", 
      link: null, 
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #059669)"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} style={styles.section}>
      {/* Background Decor */}
      <div style={styles.glowBg} />
      <div style={styles.gridBg} />

      <div style={{ ...styles.container, animation: isVisible ? "fadeIn 1s ease-out" : "none" }}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.badge}>
            <MessageSquare size={18} color="#6366f1" />
            <span>GET IN TOUCH</span>
          </div>
          <h1 style={styles.title}>Let's Connect</h1>
          <div style={styles.separator}>
            <div style={styles.lineLeft} />
            <Sparkles size={24} color="#6366f1" />
            <div style={styles.lineRight} />
          </div>
          <p style={styles.subtitle}>
            Ready to collaborate or have a question? Feel free to reach out and let's create something amazing together!
          </p>
        </div>

        {/* Main Layout */}
        <div style={styles.mainGrid}>
          {/* Contact Details Side */}
          <div style={styles.methodsColumn}>
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const isHovered = hoveredCard === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => method.link && window.open(method.link, '_blank')}
                  style={{
                    ...styles.methodCard,
                    border: `1px solid ${isHovered ? method.color : "rgba(255, 255, 255, 0.05)"}`,
                    transform: isHovered ? "translateX(10px)" : "translateX(0)",
                    cursor: method.link ? "pointer" : "default",
                  }}
                >
                  <div style={{...styles.methodIconBox, background: isHovered ? method.gradient : `${method.color}15`}}>
                    <Icon size={28} color={isHovered ? "#fff" : method.color} />
                  </div>
                  <div>
                    <h4 style={styles.methodLabel}>{method.label}</h4>
                    <p style={styles.methodValue}>{method.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form Side */}
          <div style={styles.formCard}>
            <h3 style={styles.formTitle}>Send Me a Message</h3>
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" style={styles.input} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" style={styles.input} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Your Message</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="How can I help you?" rows="4" style={styles.textarea} />
              </div>
              <button type="submit" style={styles.submitBtn}>
                <Send size={18} /> Send Message
              </button>

              {formStatus === 'success' && <div style={styles.successBox}><CheckCircle size={18} /> Message sent successfully!</div>}
              {formStatus === 'error' && <div style={styles.errorBox}><AlertCircle size={18} /> Please fill in all fields!</div>}
            </form>
          </div>
        </div>

        {/* Footer Credit */}
        <div style={styles.footer}>
          <p>Designed & Built by <span style={{color: "#fff", fontWeight: "700"}}>Ishan Wijesinghe</span> © 2025</p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes gridMove { 0% { transform: translateY(0); } 100% { transform: translateY(50px); } }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

const styles = {
  section: { minHeight: "100vh", background: "#050505", position: "relative", overflow: "hidden", padding: "100px 20px" },
  glowBg: { position: "absolute", inset: 0, background: "radial-gradient(circle at 70% 60%, rgba(99, 102, 241, 0.05) 0%, transparent 100%)" },
  gridBg: { position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)", backgroundSize: "50px 50px" },
  container: { maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 10 },
  header: { textAlign: "center", marginBottom: "60px" },
  badge: { display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(99, 102, 241, 0.1)", padding: "8px 20px", borderRadius: "50px", border: "1px solid rgba(99, 102, 241, 0.3)", color: "#6366f1", fontSize: "0.75rem", fontWeight: "700", letterSpacing: "2px", marginBottom: "15px" },
  title: { fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "900", color: "#fff", marginBottom: "10px" },
  separator: { display: "flex", alignItems: "center", justifyContent: "center", gap: "15px" },
  lineLeft: { width: "50px", height: "2px", background: "linear-gradient(90deg, transparent, #6366f1)" },
  lineRight: { width: "50px", height: "2px", background: "linear-gradient(90deg, #6366f1, transparent)" },
  subtitle: { color: "#9ca3af", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto", lineHeight: "1.8" },
  mainGrid: { display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "40px", marginTop: "40px" },
  methodsColumn: { display: "flex", flexDirection: "column", gap: "20px" },
  methodCard: { display: "flex", alignItems: "center", gap: "20px", padding: "25px", borderRadius: "24px", background: "rgba(255, 255, 255, 0.02)", backdropFilter: "blur(20px)", transition: "all 0.4s ease" },
  methodIconBox: { width: "60px", height: "60px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", transition: "0.4s" },
  methodLabel: { color: "#9ca3af", margin: "0 0 5px 0", fontSize: "0.8rem", fontWeight: "700", letterSpacing: "1px" },
  methodValue: { color: "#fff", margin: 0, fontWeight: "600", fontSize: "1rem" },
  formCard: { background: "rgba(255, 255, 255, 0.03)", padding: "40px", borderRadius: "32px", border: "1px solid rgba(99, 102, 241, 0.2)", backdropFilter: "blur(20px)" },
  formTitle: { color: "#fff", fontSize: "1.8rem", fontWeight: "800", marginBottom: "30px" },
  form: { display: "flex", flexDirection: "column", gap: "20px" },
  inputGroup: { display: "flex", flexDirection: "column", gap: "8px" },
  label: { color: "#9ca3af", fontSize: "0.9rem", fontWeight: "600" },
  input: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "15px", color: "#fff", outline: "none" },
  textarea: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "15px", color: "#fff", outline: "none", resize: "none" },
  submitBtn: { padding: "16px", background: "linear-gradient(135deg, #6366f1, #a855f7)", color: "#fff", borderRadius: "14px", border: "none", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "10px" },
  successBox: { display: "flex", alignItems: "center", gap: "10px", color: "#10b981", fontSize: "0.9rem", fontWeight: "600" },
  errorBox: { display: "flex", alignItems: "center", gap: "10px", color: "#ef4444", fontSize: "0.9rem", fontWeight: "600" },
  footer: { textAlign: "center", marginTop: "80px", color: "#6b7280", fontSize: "0.9rem" }
};

export default Contact;