import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle, Sparkles, ExternalLink, Star, Zap } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      const button = e.target.querySelector('.submit-button');
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 2000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "wijesinghelageishan@gmail.com",
      link: "mailto:wijesinghelageishan@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 76 289 8945",
      link: "tel:+94762898945",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Malabe, Sri Lanka",
      link: "https://maps.google.com/?q=Malabe,Sri+Lanka",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ishandilhara",
      link: "https://www.linkedin.com/in/ishan-wijesinghe-5200a1318/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ishandilhara",
      link: "https://github.com/Dilhara2002",
    }
  ];

  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    duration: 15 + Math.random() * 10
  }));

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
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(5deg); 
          }
        }

        @keyframes particleFloat {
          0% { 
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% { 
            opacity: 0.8;
          }
          90% { 
            opacity: 0.8;
          }
          100% { 
            transform: translateY(-100px) translateX(50px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.15;
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.25;
          }
        }

        .contact-section {
          position: relative;
          background: #0a0a0f;
          overflow: hidden;
          min-height: 100vh;
        }

        .contact-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.05;
          background-image: 
            radial-gradient(circle at 20% 80%, #6366f1 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, #ec4899 0%, transparent 50%);
        }

        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .floating-element {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: pulse 6s ease-in-out infinite;
        }

        .element-1 {
          width: 400px;
          height: 400px;
          background: rgba(99, 102, 241, 0.15);
          top: 5%;
          left: 0%;
          animation-delay: 0s;
        }

        .element-2 {
          width: 500px;
          height: 500px;
          background: rgba(168, 85, 247, 0.15);
          bottom: 5%;
          right: 0%;
          animation-delay: 2s;
        }

        .element-3 {
          width: 350px;
          height: 350px;
          background: rgba(236, 72, 153, 0.15);
          top: 45%;
          left: 65%;
          animation-delay: 4s;
        }

        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          background: rgba(168, 85, 247, 0.3);
          border-radius: 50%;
          animation: particleFloat linear infinite;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
        }

        .particle:nth-child(2n) {
          background: rgba(99, 102, 241, 0.3);
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
        }

        .particle:nth-child(3n) {
          background: rgba(236, 72, 153, 0.3);
          box-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
        }

        .contact-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 1rem;
          position: relative;
          z-index: 10;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 1rem;
          color: #ffffff;
          opacity: 0;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .section-title.visible {
          animation: fadeInUp 1s ease-out forwards;
        }

        .section-subtitle {
          text-align: center;
          color: #a0a0a0;
          font-size: 1rem;
          margin-bottom: 3rem;
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-weight: 400;
          line-height: 1.5;
          padding: 0 1rem;
        }

        .section-subtitle.visible {
          animation: fadeInUp 1s ease-out 0.2s forwards;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: start;
        }

        .contact-info {
          opacity: 0;
          transform: translateX(-30px);
        }

        .contact-info.visible {
          animation: slideInLeft 1s ease-out 0.4s forwards;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2rem 1.5rem;
          margin-bottom: 2rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .info-card:hover {
          transform: translateY(-8px);
          border-color: rgba(168, 85, 247, 0.3);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          background: rgba(255, 255, 255, 0.05);
        }

        .info-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid transparent;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.06);
          transform: translateX(8px);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .contact-item:hover .contact-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
        }

        .contact-details {
          flex: 1;
          min-width: 0;
        }

        .contact-label {
          font-size: 0.85rem;
          color: #a0a0a0;
          margin-bottom: 0.3rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .contact-value {
          font-size: 0.95rem;
          color: #ffffff;
          font-weight: 600;
          word-break: break-word;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .social-link {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          color: #e0e0e0;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-link:hover {
          transform: translateY(-5px) rotate(5deg);
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .contact-form {
          opacity: 0;
          transform: translateX(30px);
        }

        .contact-form.visible {
          animation: slideInRight 1s ease-out 0.4s forwards;
        }

        .form-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2rem 1.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .form-card:hover {
          transform: translateY(-8px);
          border-color: rgba(168, 85, 247, 0.3);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          background: rgba(255, 255, 255, 0.05);
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          color: #e0e0e0;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-input {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
          box-sizing: border-box;
        }

        .form-input:focus {
          outline: none;
          border-color: #6366f1;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
          transform: translateY(-2px);
        }

        .form-input::placeholder {
          color: #707070;
        }

        textarea.form-input {
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
        }

        .submit-button {
          width: 100%;
          padding: 1.2rem 2rem;
          background: #6366f1;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .submit-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5);
          background: #5558e3;
        }

        .submit-button:active {
          transform: translateY(-1px);
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .submit-button.loading {
          pointer-events: none;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid #ffffff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .footer-note {
          text-align: center;
          color: #a0a0a0;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          opacity: 0;
          font-size: 0.95rem;
        }

        .footer-note.visible {
          animation: fadeInUp 1s ease-out 0.6s forwards;
        }

        .footer-note p {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          line-height: 1.5;
        }

        /* Tablet Styles */
        @media (min-width: 768px) {
          .contact-container {
            padding: 100px 2rem;
          }

          .section-title {
            font-size: 3.5rem;
          }

          .section-subtitle {
            font-size: 1.2rem;
            margin-bottom: 4rem;
          }

          .contact-content {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }

          .info-card, .form-card {
            padding: 2.5rem;
          }

          .info-title, .form-title {
            font-size: 1.75rem;
          }

          .contact-items {
            gap: 1.2rem;
          }

          .contact-item {
            padding: 1.2rem;
          }

          .contact-icon {
            width: 52px;
            height: 52px;
          }

          .social-link {
            width: 54px;
            height: 54px;
          }
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          .contact-container {
            padding: 100px 3rem;
          }

          .section-title {
            font-size: 4rem;
          }

          .section-subtitle {
            font-size: 1.3rem;
          }

          .contact-content {
            gap: 5rem;
          }

          .info-card, .form-card {
            padding: 3rem;
            border-radius: 24px;
          }

          .contact-items {
            gap: 1.5rem;
          }

          .contact-item {
            padding: 1.3rem;
          }

          .contact-icon {
            width: 56px;
            height: 56px;
          }

          .social-link {
            width: 56px;
            height: 56px;
          }
        }

        /* Small mobile adjustments */
        @media (max-width: 360px) {
          .contact-container {
            padding: 60px 0.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 0.9rem;
            padding: 0 0.5rem;
          }

          .info-card, .form-card {
            padding: 1.5rem 1rem;
          }

          .contact-item {
            padding: 0.8rem;
            gap: 0.8rem;
          }

          .contact-icon {
            width: 42px;
            height: 42px;
          }

          .contact-icon svg {
            width: 20px;
            height: 20px;
          }

          .social-link {
            width: 44px;
            height: 44px;
          }

          .social-link svg {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>

      <section id="contact" className="contact-section" ref={sectionRef}>
        <div className="contact-background"></div>
        
        <div className="floating-elements">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
        </div>

        <div className="particles-container">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="particle"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.left}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            ></div>
          ))}
        </div>

        <div className="contact-container">
          <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
            Let's Connect
          </h2>
          <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
            <Zap size={20} />
            Ready to bring your ideas to life? Let's start a conversation!
          </p>

          <div className="contact-content">
            <div className={`contact-info ${isVisible ? 'visible' : ''}`}>
              <div className="info-card">
                <h3 className="info-title">
                  <Sparkles size={22} />
                  Get In Touch
                </h3>
                <div className="contact-items">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target={item.label === "Location" || item.label === "Email" || item.label === "Phone" ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="contact-item"
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className="contact-icon">
                        <item.icon size={20} color="#ffffff" />
                      </div>
                      <div className="contact-details">
                        <div className="contact-label">{item.label}</div>
                        <div className="contact-value">{item.value}</div>
                      </div>
                      <ExternalLink size={16} color="#707070" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/ishan-wijesinghe-5200a1318/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Dilhara2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className={`contact-form ${isVisible ? 'visible' : ''}`}>
              <div className="form-card">
                <h3 className="form-title">
                  <MessageCircle size={22} />
                  Send Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Tell me about your project or inquiry..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={`submit-button ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className={`footer-note ${isVisible ? 'visible' : ''}`}>
            <p>
              <Star size={16} />
              I typically respond within 24 hours. Let's create something amazing together! 
              <Sparkles size={16} />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;