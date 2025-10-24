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

  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 12 + Math.random() * 8
  }));

  return (
    <>
      <style>{`
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.1;
          }
          50% { 
            transform: scale(1.05);
            opacity: 0.2;
          }
        }

        @keyframes particleFloat {
          0% { 
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% { 
            opacity: 0.6;
          }
          90% { 
            opacity: 0.6;
          }
          100% { 
            transform: translateY(-100px) translateX(30px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
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
          opacity: 0.04;
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
          filter: blur(60px);
          animation: pulse 8s ease-in-out infinite;
        }

        .element-1 {
          width: 300px;
          height: 300px;
          background: rgba(99, 102, 241, 0.1);
          top: 10%;
          left: 5%;
        }

        .element-2 {
          width: 350px;
          height: 350px;
          background: rgba(168, 85, 247, 0.1);
          bottom: 10%;
          right: 5%;
          animation-delay: 2s;
        }

        .element-3 {
          width: 250px;
          height: 250px;
          background: rgba(236, 72, 153, 0.1);
          top: 50%;
          left: 70%;
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
          background: rgba(168, 85, 247, 0.2);
          border-radius: 50%;
          animation: particleFloat linear infinite;
        }

        .particle:nth-child(2n) {
          background: rgba(99, 102, 241, 0.2);
        }

        .particle:nth-child(3n) {
          background: rgba(236, 72, 153, 0.2);
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 1rem;
          position: relative;
          z-index: 10;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 1rem;
          color: #ffffff;
          opacity: 0;
          line-height: 1.2;
        }

        .section-title.visible {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .section-subtitle {
          text-align: center;
          color: #a0a0a0;
          font-size: 0.95rem;
          margin-bottom: 2.5rem;
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
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: start;
        }

        .contact-info {
          opacity: 0;
          transform: translateX(-20px);
        }

        .contact-info.visible {
          animation: slideInLeft 0.8s ease-out 0.3s forwards;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          border-color: rgba(168, 85, 247, 0.3);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }

        .info-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem;
          border-radius: 10px;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid transparent;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.06);
          transform: translateX(5px);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .contact-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .contact-item:hover .contact-icon {
          transform: scale(1.05);
          box-shadow: 0 6px 15px rgba(99, 102, 241, 0.3);
        }

        .contact-details {
          flex: 1;
          min-width: 0;
        }

        .contact-label {
          font-size: 0.8rem;
          color: #a0a0a0;
          margin-bottom: 0.25rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .contact-value {
          font-size: 0.9rem;
          color: #ffffff;
          font-weight: 600;
          word-break: break-word;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .social-link {
          width: 46px;
          height: 46px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          color: #e0e0e0;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-link:hover {
          transform: translateY(-3px);
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .contact-form {
          opacity: 0;
          transform: translateX(20px);
        }

        .contact-form.visible {
          animation: slideInRight 0.8s ease-out 0.3s forwards;
        }

        .form-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .form-card:hover {
          transform: translateY(-5px);
          border-color: rgba(168, 85, 247, 0.3);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          background: rgba(255, 255, 255, 0.05);
        }

        .form-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-label {
          display: block;
          color: #e0e0e0;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-input {
          width: 100%;
          padding: 0.875rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #ffffff;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          font-family: inherit;
          box-sizing: border-box;
        }

        .form-input:focus {
          outline: none;
          border-color: #6366f1;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.1);
        }

        .form-input::placeholder {
          color: #707070;
        }

        textarea.form-input {
          resize: vertical;
          min-height: 100px;
          font-family: inherit;
        }

        .submit-button {
          width: 100%;
          padding: 1rem 1.5rem;
          background: #6366f1;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
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
          width: 18px;
          height: 18px;
          border: 2px solid transparent;
          border-top: 2px solid #ffffff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .footer-note {
          text-align: center;
          color: #a0a0a0;
          margin-top: 2.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          opacity: 0;
          font-size: 0.9rem;
        }

        .footer-note.visible {
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
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
            padding: 80px 2rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .section-subtitle {
            font-size: 1.1rem;
            margin-bottom: 3rem;
          }

          .contact-content {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }

          .info-card, .form-card {
            padding: 2rem;
          }

          .info-title, .form-title {
            font-size: 1.5rem;
          }

          .contact-items {
            gap: 1rem;
          }

          .contact-item {
            padding: 1rem;
          }

          .contact-icon {
            width: 48px;
            height: 48px;
          }

          .social-link {
            width: 50px;
            height: 50px;
          }
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          .contact-container {
            padding: 100px 2rem;
          }

          .section-title {
            font-size: 3rem;
          }

          .section-subtitle {
            font-size: 1.15rem;
          }

          .contact-content {
            gap: 4rem;
          }

          .info-card, .form-card {
            padding: 2.5rem;
            border-radius: 20px;
          }

          .contact-items {
            gap: 1.25rem;
          }

          .contact-item {
            padding: 1.125rem;
          }

          .contact-icon {
            width: 50px;
            height: 50px;
          }

          .social-link {
            width: 52px;
            height: 52px;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 480px) {
          .contact-container {
            padding: 50px 0.75rem;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .section-subtitle {
            font-size: 0.9rem;
            margin-bottom: 2rem;
            flex-direction: column;
            gap: 0.25rem;
          }

          .info-card, .form-card {
            padding: 1.25rem;
            border-radius: 14px;
          }

          .info-title, .form-title {
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }

          .contact-items {
            gap: 0.5rem;
          }

          .contact-item {
            padding: 0.75rem;
            gap: 0.75rem;
          }

          .contact-icon {
            width: 40px;
            height: 40px;
          }

          .contact-icon svg {
            width: 18px;
            height: 18px;
          }

          .contact-label {
            font-size: 0.75rem;
          }

          .contact-value {
            font-size: 0.85rem;
          }

          .social-links {
            gap: 0.5rem;
          }

          .social-link {
            width: 42px;
            height: 42px;
          }

          .social-link svg {
            width: 18px;
            height: 18px;
          }

          .form-group {
            margin-bottom: 1rem;
          }

          .form-input {
            padding: 0.75rem;
            font-size: 0.9rem;
          }

          .submit-button {
            padding: 0.875rem 1.25rem;
            font-size: 0.9rem;
          }

          .footer-note {
            margin-top: 2rem;
            font-size: 0.85rem;
          }

          .footer-note p {
            flex-direction: column;
            gap: 0.25rem;
          }

          .floating-element {
            filter: blur(40px);
          }

          .element-1 {
            width: 200px;
            height: 200px;
          }

          .element-2 {
            width: 250px;
            height: 250px;
          }

          .element-3 {
            width: 180px;
            height: 180px;
          }
        }

        @media (max-width: 360px) {
          .contact-container {
            padding: 40px 0.5rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .info-card, .form-card {
            padding: 1rem;
          }

          .contact-item {
            padding: 0.625rem;
            gap: 0.625rem;
          }

          .contact-icon {
            width: 36px;
            height: 36px;
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
            <Zap size={18} />
            Ready to bring your ideas to life? Let's start a conversation!
          </p>

          <div className="contact-content">
            <div className={`contact-info ${isVisible ? 'visible' : ''}`}>
              <div className="info-card">
                <h3 className="info-title">
                  <Sparkles size={20} />
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
                        <item.icon size={18} color="#ffffff" />
                      </div>
                      <div className="contact-details">
                        <div className="contact-label">{item.label}</div>
                        <div className="contact-value">{item.value}</div>
                      </div>
                      <ExternalLink size={14} color="#707070" />
                    </a>
                  ))}
                </div>
              </div>

             
            </div>

            <div className={`contact-form ${isVisible ? 'visible' : ''}`}>
              <div className="form-card">
                <h3 className="form-title">
                  <MessageCircle size={20} />
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
                        <Send size={16} />
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
              <Star size={14} />
              I typically respond within 24 hours. Let's create something amazing together! 
              <Sparkles size={14} />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;