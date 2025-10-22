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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Create success animation
      const button = e.target.querySelector('.submit-button');
      button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      setTimeout(() => {
        button.style.background = 'linear-gradient(135deg, #6366f1, #a855f7)';
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 2000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ishan.dilhara@example.com",
      link: "mailto:ishan.dilhara@example.com",
      color: "#6366f1",
      gradient: "linear-gradient(135deg, #6366f1, #4f46e5)"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 77 123 4567",
      link: "tel:+94771234567",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #059669)"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Colombo, Sri Lanka",
      link: "https://maps.google.com/?q=Colombo,Sri+Lanka",
      color: "#ec4899",
      gradient: "linear-gradient(135deg, #ec4899, #db2777)"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ishandilhara",
      link: "https://linkedin.com/in/ishandilhara",
      color: "#0a66c2",
      gradient: "linear-gradient(135deg, #0a66c2, #004182)"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ishandilhara",
      link: "https://github.com/ishandilhara",
      color: "#333333",
      gradient: "linear-gradient(135deg, #333333, #000000)"
    }
  ];

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 20,
    duration: 15 + Math.random() * 15
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
            transform: translateX(-80px) rotate(-10deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(0deg);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(80px) rotate(10deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(0deg);
          }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-15px) rotate(3deg); 
          }
          66% { 
            transform: translateY(-8px) rotate(-2deg); 
          }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7);
          }
          50% { 
            transform: scale(1.05);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(99, 102, 241, 0);
          }
        }

        @keyframes glow {
          0%, 100% { 
            box-shadow: 
              0 0 20px rgba(99, 102, 241, 0.3),
              0 0 40px rgba(168, 85, 247, 0.2);
          }
          50% { 
            box-shadow: 
              0 0 30px rgba(99, 102, 241, 0.6),
              0 0 60px rgba(168, 85, 247, 0.4);
          }
        }

        @keyframes typewriter {
          from { 
            width: 0;
            opacity: 0;
          }
          to { 
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(100px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) translateY(-10px);
          }
          70% {
            transform: scale(0.9) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }

        @keyframes particleFloat {
          0%, 100% { 
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% { 
            opacity: 1;
          }
          90% { 
            opacity: 1;
          }
          100% { 
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes starTwinkle {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes wave {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          25% { 
            transform: translateX(-5px) translateY(-2px);
          }
          50% { 
            transform: translateX(0) translateY(-5px);
          }
          75% { 
            transform: translateX(5px) translateY(-2px);
          }
        }

        @keyframes magneticHover {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(var(--tx, 0), var(--ty, 0));
          }
        }

        @keyframes textGlow {
          0%, 100% { 
            text-shadow: 0 0 5px currentColor;
          }
          50% { 
            text-shadow: 0 0 20px currentColor, 0 0 30px currentColor;
          }
        }

        .contact-section {
          position: relative;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
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
          opacity: 0.15;
          animation: float 12s ease-in-out infinite;
        }

        .element-1 {
          width: 400px;
          height: 400px;
          background: #6366f1;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .element-2 {
          width: 500px;
          height: 500px;
          background: #a855f7;
          bottom: 10%;
          right: 5%;
          animation-delay: 4s;
        }

        .element-3 {
          width: 300px;
          height: 300px;
          background: #ec4899;
          top: 50%;
          left: 70%;
          animation-delay: 8s;
        }

        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          background: rgba(168, 85, 247, 0.6);
          border-radius: 50%;
          animation: particleFloat linear infinite;
        }

        .particle:nth-child(2n) {
          background: rgba(99, 102, 241, 0.6);
        }

        .particle:nth-child(3n) {
          background: rgba(236, 72, 153, 0.6);
        }

        .stars-container {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .star {
          position: absolute;
          background: #ffffff;
          border-radius: 50%;
          animation: starTwinkle 3s ease-in-out infinite;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 2rem;
          position: relative;
          z-index: 10;
        }

        .section-title {
          font-size: 4rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #a855f7, #6366f1, #ec4899);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 8s ease infinite, fadeInUp 1s ease-out;
          opacity: 0;
          position: relative;
          text-shadow: 0 0 30px rgba(168, 85, 247, 0.3);
        }

        .section-title.visible {
          animation: fadeInUp 0.8s ease-out forwards, gradientShift 8s ease infinite;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 4px;
          background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899);
          border-radius: 2px;
          animation: typewriter 2s ease-out 0.5s forwards;
        }

        .section-subtitle {
          text-align: center;
          color: #9ca3af;
          font-size: 1.3rem;
          margin-bottom: 4rem;
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          animation: textGlow 3s ease-in-out infinite;
        }

        .section-subtitle.visible {
          animation: fadeInUp 0.8s ease-out 0.3s forwards, textGlow 3s ease-in-out infinite;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        .contact-info {
          opacity: 0;
          transform: translateX(-50px);
        }

        .contact-info.visible {
          animation: slideInLeft 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 25px;
          padding: 3rem;
          margin-bottom: 2.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.1), 
            transparent);
          transition: left 0.6s ease;
        }

        .info-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(168, 85, 247, 0.4);
          box-shadow: 
            0 25px 80px rgba(0, 0, 0, 0.5),
            0 0 50px rgba(168, 85, 247, 0.4);
        }

        .info-card:hover::before {
          left: 100%;
        }

        .info-title {
          font-size: 1.7rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          animation: wave 3s ease-in-out infinite;
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          padding: 1.2rem;
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          position: relative;
          overflow: hidden;
        }

        .contact-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.1), 
            transparent);
          transition: left 0.6s ease;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(15px) scale(1.02);
          animation: magneticHover 0.3s ease-out;
        }

        .contact-item:hover::before {
          left: 100%;
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .contact-icon::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: rotate(45deg);
          transition: all 0.6s ease;
        }

        .contact-item:hover .contact-icon {
          transform: scale(1.15) rotate(8deg);
          animation: glow 2s ease-in-out infinite;
        }

        .contact-item:hover .contact-icon::before {
          transform: rotate(45deg) translate(50%, 50%);
        }

        .contact-details {
          flex: 1;
        }

        .contact-label {
          font-size: 0.95rem;
          color: #9ca3af;
          margin-bottom: 0.4rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .contact-item:hover .contact-label {
          color: #ffffff;
          transform: translateX(5px);
        }

        .contact-value {
          font-size: 1.1rem;
          color: #ffffff;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .contact-item:hover .contact-value {
          transform: translateX(5px);
          animation: textGlow 2s ease-in-out infinite;
        }

        .social-links {
          display: flex;
          gap: 1.2rem;
          margin-top: 2.5rem;
          justify-content: center;
        }

        .social-link {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          color: #e0e0e0;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.2), 
            transparent);
          transition: left 0.6s ease;
        }

        .social-link:hover {
          transform: translateY(-8px) scale(1.1);
          color: #ffffff;
          animation: pulse 1s ease-in-out;
        }

        .social-link:hover::before {
          left: 100%;
        }

        .contact-form {
          opacity: 0;
          transform: translateX(50px);
        }

        .contact-form.visible {
          animation: slideInRight 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards;
        }

        .form-card {
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 25px;
          padding: 3rem;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .form-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.1), 
            transparent);
          transition: left 0.6s ease;
        }

        .form-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(168, 85, 247, 0.4);
          box-shadow: 
            0 25px 80px rgba(0, 0, 0, 0.5),
            0 0 50px rgba(168, 85, 247, 0.4);
        }

        .form-card:hover::before {
          left: 100%;
        }

        .form-title {
          font-size: 1.7rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2.5rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          animation: wave 3s ease-in-out infinite 1s;
        }

        .form-group {
          margin-bottom: 2rem;
          position: relative;
        }

        .form-label {
          display: block;
          color: #e0e0e0;
          font-weight: 600;
          margin-bottom: 0.8rem;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group:focus-within .form-label {
          color: #6366f1;
          transform: translateX(5px);
        }

        .form-input {
          width: 100%;
          padding: 1.2rem 1.8rem;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 14px;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
        }

        .form-input:focus {
          outline: none;
          border-color: #6366f1;
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 
            0 0 0 4px rgba(99, 102, 241, 0.1),
            0 10px 30px rgba(0, 0, 0, 0.3);
          transform: translateY(-2px);
        }

        .form-input::placeholder {
          color: #9ca3af;
          transition: all 0.3s ease;
        }

        .form-input:focus::placeholder {
          color: #6366f1;
          transform: translateX(5px);
        }

        textarea.form-input {
          resize: vertical;
          min-height: 140px;
          font-family: inherit;
        }

        .submit-button {
          width: 100%;
          padding: 1.4rem 2rem;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          background-size: 200% 200%;
          color: white;
          border: none;
          border-radius: 14px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          position: relative;
          overflow: hidden;
          animation: gradientShift 4s ease infinite;
        }

        .submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.3), 
            transparent);
          transition: left 0.6s ease;
        }

        .submit-button:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 
            0 15px 40px rgba(168, 85, 247, 0.5),
            0 0 30px rgba(99, 102, 241, 0.4);
          animation: pulse 1s ease-in-out;
        }

        .submit-button:hover::before {
          left: 100%;
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .submit-button.loading {
          pointer-events: none;
        }

        .loading-spinner {
          width: 22px;
          height: 22px;
          border: 3px solid transparent;
          border-top: 3px solid #ffffff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .footer-note {
          text-align: center;
          color: #9ca3af;
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          opacity: 0;
          font-size: 1.1rem;
        }

        .footer-note.visible {
          animation: fadeInUp 0.8s ease-out 0.8s forwards;
        }

        .footer-note p {
          animation: textGlow 4s ease-in-out infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        @media (max-width: 968px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .contact-info, .contact-form {
            animation: fadeInUp 0.8s ease-out 0.4s forwards !important;
            transform: none !important;
          }
        }

        @media (max-width: 768px) {
          .contact-container {
            padding: 80px 1rem;
          }

          .section-title {
            font-size: 2.8rem;
          }

          .info-card, .form-card {
            padding: 2rem;
          }

          .contact-items {
            gap: 1.2rem;
          }

          .contact-item {
            padding: 1rem;
          }

          .contact-icon {
            width: 50px;
            height: 50px;
          }

          .social-links {
            gap: 1rem;
          }

          .social-link {
            width: 50px;
            height: 50px;
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

        <div className="stars-container">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="star"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="contact-container">
          <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
            Let's Connect
          </h2>
          <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
            <Zap size={24} />
            Ready to bring your ideas to life? Let's start a conversation!
          </p>

          <div className="contact-content">
            <div className={`contact-info ${isVisible ? 'visible' : ''}`}>
              <div className="info-card">
                <h3 className="info-title">
                  <Sparkles size={28} />
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
                      <div 
                        className="contact-icon"
                        style={{ background: item.gradient }}
                      >
                        <item.icon size={26} color="#ffffff" />
                      </div>
                      <div className="contact-details">
                        <div className="contact-label">{item.label}</div>
                        <div className="contact-value">{item.value}</div>
                      </div>
                      <ExternalLink size={18} color="#9ca3af" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="social-links">
                <a
                  href="https://linkedin.com/in/ishandilhara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ background: '#0a66c2' }}
                >
                  <Linkedin size={26} />
                </a>
                <a
                  href="https://github.com/ishandilhara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ background: '#333333' }}
                >
                  <Github size={26} />
                </a>
              </div>
            </div>

            <div className={`contact-form ${isVisible ? 'visible' : ''}`}>
              <div className="form-card">
                <h3 className="form-title">
                  <MessageCircle size={28} />
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
                        <Send size={22} />
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
              <Star size={18} />
              I typically respond within 24 hours. Let's create something amazing together! 
              <Sparkles size={18} />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;